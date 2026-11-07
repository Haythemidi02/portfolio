import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { strict as assert } from 'node:assert';
import { runInNewContext } from 'node:vm';
import { parseHTML } from 'linkedom';
const root = resolve('dist');
const htmlFiles = [];
function walk(dir) { for(const name of readdirSync(dir)){ const p=join(dir,name); if(statSync(p).isDirectory()) walk(p); else if(p.endsWith('.html')) htmlFiles.push(p); } }
walk(root);
assert.equal(htmlFiles.length,13,'Expected 12 localized pages and one 404.');
let links=0;
for(const file of htmlFiles){
  const html=readFileSync(file,'utf8'), {document}=parseHTML(html);
  assert.equal(document.querySelectorAll('h1').length,1,`${file}: one main heading`);
  assert(document.querySelector('main'),`${file}: main landmark`);
  assert(document.querySelector('title')?.textContent.length>10);
  const ids=[...document.querySelectorAll('[id]')].map(x=>x.id);
  assert.equal(new Set(ids).size,ids.length,`${file}: unique IDs`);
  assert(!/Alex Vance|KronoKV|HyperFlow|example\.com|lorem ipsum/i.test(html),'No reference persona or placeholder links');
  for(const img of document.querySelectorAll('img')) assert(img.hasAttribute('alt'),'Images have alt text');
  for(const a of document.querySelectorAll('a[href],link[href],script[src]')){
    const raw=a.getAttribute('href')||a.getAttribute('src');
    if(!raw || /^(https?:|mailto:|data:)/.test(raw)) continue;
    const url=new URL(raw,'https://portfolio.local/'+file.slice(root.length+1).replaceAll('\\','/'));
    let target=join(root,decodeURIComponent(url.pathname));
    if(existsSync(target)&&statSync(target).isDirectory()) target=join(target,'index.html');
    assert(existsSync(target),`${file}: missing local target ${raw}`);
    if(url.hash&&target.endsWith('.html')){
      const dest=parseHTML(readFileSync(target,'utf8')).document;
      assert(dest.getElementById(decodeURIComponent(url.hash.slice(1))),`${file}: missing anchor ${raw}`);
    }
    links++;
  }
  for(const b of document.querySelectorAll('button')) assert(b.textContent.trim()||b.getAttribute('aria-label'),'Buttons have accessible names');
  if(!file.endsWith('404.html')){
    assert.equal(document.documentElement.lang,file.includes(join('dist','fr'))?'fr':'en');
    assert.equal(document.querySelectorAll('link[hreflang]').length,2);
    assert(document.querySelector('meta[name="description"]'));
    for(const a of document.querySelectorAll('a[target="_blank"]')) assert(a.rel.includes('noopener'));
  }
}
assert.equal(readFileSync(join(root,'Haythem_Idi_CV.pdf')).subarray(0,5).toString(),'%PDF-');
assert.equal(readFileSync(join(root,'fonts','jakarta.woff')).subarray(0,4).toString(),'wOFF');
const script = readFileSync('src/app.js','utf8');
const store=new Map();
function app(path){
  const {document,window}=parseHTML(readFileSync(join(root,path),'utf8'));
  const url=new URL('https://portfolio.local/'+path.replace('index.html',''));
  let copied='';let replaced='';
  const localStorage={getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)};
  document.documentElement.dataset.theme=localStorage.getItem('theme')||'dark';
  runInNewContext(script,{document,window,URL,location:url,history:{replaceState:(_,__,u)=>{replaced=u.toString();}},localStorage,navigator:{clipboard:{writeText:async t=>{copied=t;}}},setTimeout:()=>0,clearTimeout:()=>{}});
  const click=selector=>{const node=document.querySelector(selector); assert(node,'Element exists: '+selector);node.dispatchEvent(new window.Event('click',{bubbles:true}));};
  return {document,window,click,get copied(){return copied;},get replaced(){return replaced;}};
}
for(const prefix of ['', 'fr/']){
  const test=app(prefix+'index.html');const d=test.document;
  test.click('[data-filter="research"]');
  assert.equal([...d.querySelectorAll('[data-category]')].filter(x=>!x.hidden).length,2);
  assert(test.replaced.includes('filter=research'));
  test.click('[data-filter="cloud"]');assert.equal([...d.querySelectorAll('[data-category]')].filter(x=>!x.hidden).length,1);
  test.click('[data-filter="all"]');assert.equal([...d.querySelectorAll('[data-category]')].filter(x=>!x.hidden).length,5);
  test.click('#tab-stack');assert(d.querySelector('#pane-whoami').hidden);assert(!d.querySelector('#pane-stack').hidden);
  const event=new test.window.Event('keydown');Object.defineProperty(event,'key',{value:'ArrowRight'});d.querySelector('#tab-stack').dispatchEvent(event);
  assert.equal(d.querySelector('#tab-approach').getAttribute('aria-selected'),'true');
  test.click('[data-step="3"]');assert(!d.querySelector('#pipeline-panel-3').hidden);assert(d.querySelector('#pipeline-panel-0').hidden);
  const before=d.documentElement.dataset.theme;test.click('#theme-toggle');assert.notEqual(d.documentElement.dataset.theme,before);
  assert.equal(store.get('theme'),d.documentElement.dataset.theme);
  test.click('.menu-toggle');assert.equal(d.querySelector('.menu-toggle').getAttribute('aria-expanded'),'true');
  test.click('#navigation a');assert.equal(d.querySelector('.menu-toggle').getAttribute('aria-expanded'),'false');
  test.click('#copy-email');await new Promise(setImmediate);assert.equal(test.copied,'haythem.idi@ensi-uma.tn');assert(d.querySelector('.toast').classList.contains('visible'));
  // Shared controls must work on case-study pages, where homepage widgets are absent.
  const detail=app(prefix+'projects/pastewise/index.html');detail.click('#theme-toggle');detail.click('.menu-toggle');
}
console.log(`Passed: ${htmlFiles.length} pages, ${links} local references, language metadata, accessible names, PDF/font validity, and bilingual DOM interactions (filters, keyboard tabs, pipeline, theme persistence, navigation, email copy).`);
