(function(){
'use strict';
var D=window.DATA,site=D.site,roles=D.roles,expertise=D.expertise,timeline=D.timeline,sections=D.sections,categories=D.categories,videos=D.videos;
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var esc=function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
var main=$('#main'),root=document.documentElement,nav=$('#nav'),timers=[];
var NAV=[['portfolio','Design'],['software','Software & AI'],['maker','Maker Lab'],['youtube','YouTube'],['resources','Resources'],['shop','Shop'],['journal','Journal'],['about','About'],['contact','Contact']];
nav.innerHTML=NAV.map(function(n){return'<a href="#/'+n[0]+'" data-k="'+n[0]+'">'+esc(n[1])+'</a>'}).join('');
$('#yr').textContent=new Date().getFullYear();

/* ---------- shared pieces ---------- */
var get=function(k){return sections.filter(function(s){return s.key===k})[0]};
var rv=function(inner){return'<div class="rv">'+inner+'</div>'};
function blueprint(){
  var p='';for(var i=0;i<48;i++){var a=i*Math.PI/24;p+='M'+(Math.cos(a)*90).toFixed(1)+' '+(Math.sin(a)*90).toFixed(1)+'L'+(Math.cos(a)*330).toFixed(1)+' '+(Math.sin(a)*330).toFixed(1)}
  return'<svg class="bp" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true">'+
  '<g transform="translate(120 520)"><circle class="draw" r="90"/><circle class="draw" r="170"/><circle class="draw" r="250"/><circle class="draw" r="330"/><path class="draw" d="'+p+'"/></g>'+
  '<g class="draw"><path d="M560 300h520M560 390h520M560 480h520M560 570h520M640 260v380M760 260v380M880 260v380M1000 260v380"/><circle cx="1010" cy="480" r="120"/><circle cx="1010" cy="480" r="60"/></g>'+
  '<text x="800" y="250" font-size="12" fill="currentColor" stroke="none">4.00</text><text x="570" y="294" font-size="11" fill="currentColor" stroke="none">RB1</text></svg>';}
function card(e,base){
  var meta=[e.category,e.date,e.price!==undefined?(e.price?'KES '+e.price:'Price to be set'):''].filter(Boolean).join(' · ');
  return'<a class="tile" href="#/'+base+'/'+esc(e.slug)+'"><div class="ph">'+(e.image?'<img src="'+esc(e.image)+'" alt="'+esc(e.title)+'" loading="lazy">':'<span>Image slot</span>')+'</div>'+
  '<div class="b"><h3>'+esc(e.title)+'</h3><p>'+esc(meta)+'</p><p>'+esc(e.summary)+'</p>'+(e.placeholder?'<span class="badge">Placeholder</span>':'')+'</div></a>';}
var cards=function(list,base){return'<div class="grid">'+list.map(function(e){return card(e,base)}).join('')+'</div>'};
function portrait(){return site.portrait?'<img class="avatar" src="'+esc(site.portrait)+'" alt="'+esc(site.name)+'">':'<div class="portrait" role="img" aria-label="Portrait placeholder">Portrait goes here.<br>Set <code>portrait</code> in js/content.js</div>'}
function subscribe(){return site.channelUrl?'<a class="btn p" href="'+esc(site.channelUrl)+'" target="_blank" rel="noopener noreferrer">Subscribe on YouTube</a>':'<span class="btn p off" aria-disabled="true">Subscribe on YouTube (channel URL not set)</span>'}
function ytBanner(){return'<section class="dark sec"><div class="wrap"><div class="ytname">EMMANUEL KIBIWOTT CHEBII</div><div class="tag alt">Design. Build. Experiment.</div><p class="lead">Graphic design, coding, AI tools, web development, ICT tutorials, 3D modelling and DIY builds, with the lessons from each real project.</p>'+subscribe()+'</div></section>'}
function notFound(){return{title:'Page not found',html:'<section class="sec"><div class="wrap"><h1 class="pgt">Page not found</h1><p>Use the menu to find what you were looking for.</p></div></section>'}}

/* ---------- pages ---------- */
function home(){
  var lines=[['Emmanuel',0],['Kibiwott Chebii',9]];
  var h1=lines.map(function(l){return'<span class="line" aria-hidden="true">'+Array.from(l[0]).map(function(c,j){return'<i class="ch" style="--i:'+(l[1]+j)+'">'+(c===' '?'&nbsp;':esc(c))+'</i>'}).join('')+'</span>'}).join('');
  var t6='DESIGN. BUILD. EXPERIMENT. '.repeat(6),P=get('portfolio'),S=get('software'),M=get('maker'),J=get('journal');
  var html='<div class="hero" id="hero">'+blueprint()+'<div class="spot"></div><div class="wrap"><h1 aria-label="'+esc(site.name)+'">'+h1+'</h1><div class="tag">Design. Build. Experiment.</div>'+
  '<div class="intro"><div><p>I\'m a <span class="rot" id="rot">'+esc(roles[0])+'</span> in Eldoret. I train technicians, design brands and build small tools that work.</p><div class="roles">'+roles.map(function(r){return'<i>'+esc(r)+'</i>'}).join('')+'</div></div>'+
  '<div class="btns"><a class="btn p" href="#/portfolio">Explore my work</a><a class="btn s" href="#/youtube">Watch on YouTube</a><a class="btn s" href="#/contact">Contact me</a></div></div></div></div>'+
  '<div class="marq" aria-hidden="true"><div>'+t6+t6+'</div></div>'+
  '<section class="sec"><div class="wrap">'+rv('<h2>Featured work</h2><p class="lead">'+esc(P.lead)+'</p>')+rv(cards(P.entries.slice(0,3),'portfolio')+'<p><a href="#/portfolio">See the full creative portfolio</a></p>')+'</div></section>'+
  '<section class="sec dark"><div class="wrap">'+rv('<h2>Software &amp; AI projects</h2><p class="lead">'+esc(S.lead)+'</p>')+rv(cards(S.entries.slice(0,3),'software')+'<p><a href="#/software">All projects</a></p>')+'</div></section>'+
  '<section class="sec"><div class="wrap">'+rv('<h2>Expertise</h2>')+rv('<div class="exp">'+expertise.map(function(g){return'<div><h3>'+esc(g.t)+'</h3><div class="tools">'+g.i.map(function(x){return'<i>'+esc(x)+'</i>'}).join('')+'</div></div>'}).join('')+'</div>')+'</div></section>'+
  '<section class="sec"><div class="wrap">'+rv('<h2>Latest content</h2><p class="lead">Maker builds and journal entries appear here as you add them.</p>')+
  rv('<div class="grid">'+M.entries.slice(0,2).map(function(e){return card(e,'maker')}).join('')+J.entries.slice(0,2).map(function(e){return card(e,'journal')}).join('')+'</div>')+'</div></section>'+
  ytBanner()+
  '<section class="sec"><div class="wrap"><div class="two">'+rv(portrait())+rv('<h2>About</h2><p>I\'m a technical trainer who also designs, codes and builds. My goal is to combine technology, creativity, hands-on making and technical education.</p><p><a class="btn s" href="#/about">Read the full story</a></p>')+'</div></div></section>';
  return{title:'',desc:site.description,html:html,after:function(){
    var hero=$('#hero');hero.addEventListener('pointermove',function(e){var b=hero.getBoundingClientRect();hero.style.setProperty('--mx',(e.clientX-b.left)+'px');hero.style.setProperty('--my',(e.clientY-b.top)+'px')});
    var i=0;timers.push(setInterval(function(){i=(i+1)%roles.length;var r=$('#rot'),n=r.cloneNode(false);n.textContent=roles[i];r.replaceWith(n)},2200));}};}

function section(s){
  var cats=['All'].concat(s.entries.map(function(e){return e.category}).filter(function(c,i,a){return a.indexOf(c)===i}));
  var html='<section class="sec"><div class="wrap">'+rv('<h1 class="pgt">'+esc(s.title)+'</h1><p class="lead">'+esc(s.lead)+'</p>'+(s.note?'<p class="note">'+esc(s.note)+'</p>':''))+
  '<div class="tools2"><label><span class="meta">Search </span><input type="search" id="q" placeholder="Search '+esc(s.title.toLowerCase())+'"></label></div>'+
  '<div class="filters" id="filters" role="group" aria-label="Filter by category">'+cats.map(function(c){return'<button data-c="'+esc(c)+'" aria-pressed="'+(c==='All')+'">'+esc(c)+'</button>'}).join('')+'</div><div class="grid" id="grid"></div></div></section>';
  return{title:s.title,desc:s.lead,html:html,after:function(){
    var cat='All',q='',grid=$('#grid'),f=$('#filters');
    function draw(){var list=s.entries.filter(function(e){return(cat==='All'||e.category===cat)&&(e.title+' '+e.summary).toLowerCase().indexOf(q.toLowerCase())>-1});
      grid.innerHTML=list.length?list.map(function(e){return card(e,s.key)}).join(''):'<p class="empty">Nothing matches. Clear the search or pick another category.</p>';
      $$('button',f).forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.c===cat))})}
    f.addEventListener('click',function(e){var b=e.target.closest('button');if(b){cat=b.dataset.c;draw()}});
    $('#q').addEventListener('input',function(e){q=e.target.value;draw()});draw();}};}

function entry(s,slug){
  var e=s.entries.filter(function(x){return x.slug===slug})[0];if(!e)return notFound();
  var h='<article class="wrap entry"><p><a href="#/'+s.key+'">Back to '+esc(s.title)+'</a></p><h1 class="pgt">'+esc(e.title)+'</h1><p class="meta">'+esc([e.category,e.date].filter(Boolean).join(' · '))+' '+(e.placeholder?'<span class="badge">Placeholder</span>':'')+'</p>';
  if(e.image)h+='<img src="'+esc(e.image)+'" alt="'+esc(e.title)+'" style="max-width:100%">';
  (e.gallery||[]).forEach(function(g){h+='<img src="'+esc(g)+'" alt="" loading="lazy" style="max-width:100%;margin-top:12px">'});
  h+='<p class="lead">'+esc(e.summary)+'</p>'+(e.body||[]).map(function(p){return'<p>'+esc(p)+'</p>'}).join('');
  if(e.price!==undefined)h+='<p><span class="price">'+(e.price?'KES '+e.price:'Price to be set')+'</span><br><button class="btn p off" disabled>Checkout not configured</button></p>';
  if(e.meta)h+='<dl>'+Object.keys(e.meta).map(function(k){return'<div style="display:contents"><dt>'+esc(k)+'</dt><dd>'+esc(e.meta[k])+'</dd></div>'}).join('')+'</dl>';
  if(e.links)h+='<p>'+(e.links.length?e.links.map(function(l){return'<a class="btn s" href="'+esc(l.url)+'" target="_blank" rel="noopener noreferrer">'+esc(l.label)+'</a>'}).join(' '):'<span class="meta">File link not set.</span>')+'</p>';
  if(e.log)h+='<h2 style="font-size:28px;margin-top:36px">Build log</h2><ul class="log">'+e.log.map(function(l){return'<li><b>'+esc(l.title)+'</b><span class="meta">'+esc(l.date)+'</span><p style="margin:6px 0 0">'+esc(l.text)+'</p></li>'}).join('')+'</ul>';
  return{title:e.title,desc:e.summary,html:h+'</article>'};}

function youtube(){
  var html=ytBanner()+'<section class="sec"><div class="wrap">'+rv('<h2>Categories</h2>')+'<div class="grid" id="cats">'+categories.map(function(c){return'<button class="catc" data-c="'+esc(c.name)+'" aria-pressed="false"><b>'+esc(c.name)+'</b><p>'+esc(c.d)+'</p></button>'}).join('')+'</div><h2 style="margin-top:56px">Latest uploads</h2><div id="vids"></div></div></section>';
  return{title:'YouTube',desc:'Design, coding, AI, ICT tutorials, 3D modelling and DIY builds from Emmanuel Kibiwott Chebii.',html:html,after:function(){
    var cat='All',box=$('#vids');
    function draw(){var v=videos.filter(function(x){return cat==='All'||x.category===cat});
      box.innerHTML=v.length?'<div class="grid">'+v.map(function(x){return'<article class="tile"><div class="ph vid" data-id="'+esc(x.id)+'" data-t="'+esc(x.title)+'"><button aria-label="Play '+esc(x.title)+'"><img src="https://i.ytimg.com/vi/'+esc(x.id)+'/hqdefault.jpg" alt="" loading="lazy"><span class="play">▶</span></button></div><div class="b"><h3>'+esc(x.title)+'</h3><p>'+esc(x.category)+'</p><a href="https://www.youtube.com/watch?v='+esc(x.id)+'" target="_blank" rel="noopener noreferrer">Open on YouTube</a></div></article>'}).join('')+'</div>'
      :'<p class="empty">'+(videos.length?'No videos in this category yet.':'No videos added yet. Add each real upload to the videos list in js/content.js with its video ID, title and category.')+(site.channelUrl?'':' Set channelUrl there to turn on the Subscribe button.')+'</p>'}
    $('#cats').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;cat=cat===b.dataset.c?'All':b.dataset.c;
      $$('#cats button').forEach(function(x){var on=x.dataset.c===cat;x.classList.toggle('on',on);x.setAttribute('aria-pressed',String(on))});draw()});
    box.addEventListener('click',function(e){var b=e.target.closest('.vid button');if(!b)return;var v=b.parentNode;
      v.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+encodeURIComponent(v.dataset.id)+'?autoplay=1" title="'+esc(v.dataset.t)+'" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>'});
    draw();}};}

function about(){
  return{title:'About',desc:'Technical trainer, ICT professional, graphic designer and maker in Eldoret, Kenya.',html:'<section class="sec"><div class="wrap"><div class="two">'+rv(portrait())+
  rv('<h1 class="pgt">About</h1><p>I\'m a technical trainer who also designs, codes and builds. My goal is to combine technology, creativity, practical making and technical education.</p><p>My interests: graphic design, coding, AI and automation, web development, 3D modelling, and building things by hand.</p><ul class="timeline">'+
  timeline.map(function(x){return'<li><b>'+esc(x.t)+'</b><span class="meta">'+esc(x.d)+'</span></li>'}).join('')+'</ul><div class="tools">'+
  expertise.reduce(function(a,g){return a.concat(g.i)},[]).map(function(x){return'<i>'+esc(x)+'</i>'}).join('')+'</div>')+'</div></div></section>'};}

function contact(){
  return{title:'Contact',desc:'Get in touch with Emmanuel Kibiwott Chebii in Eldoret, Kenya.',html:'<section class="sec"><div class="wrap">'+rv('<h1 class="pgt">Contact</h1><p class="cta"><a href="mailto:'+esc(site.email)+'">'+esc(site.email)+'</a></p><p class="cta">'+
  site.phones.map(function(p){return'<a href="tel:'+esc(p.tel)+'">'+esc(p.label)+'</a>'}).join(' · ')+'</p><p class="meta">'+esc(site.location)+'</p><div class="links">'+
  site.socials.map(function(s){return s.url?'<a class="btn s" href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+esc(s.name)+'</a>':'<span class="btn s off">'+esc(s.name)+' (link not set)</span>'}).join('')+'</div>')+'</div></section>'};}

/* ---------- router ---------- */
function route(){
  timers.forEach(clearInterval);timers=[];
  var parts=location.hash.replace(/^#\/?/,'').split('/').filter(Boolean),a=parts[0],b=parts[1],v;
  if(!a)v=home();else if(a==='about')v=about();else if(a==='youtube')v=youtube();else if(a==='contact')v=contact();
  else{var s=get(a);v=!s?notFound():b?entry(s,decodeURIComponent(b)):section(s)}
  document.title=v.title?v.title+' | '+site.name:site.name+' — Design. Build. Experiment.';
  if(v.desc)$('meta[name=description]').setAttribute('content',v.desc);
  main.innerHTML=v.html;window.scrollTo(0,0);
  $$('#nav a').forEach(function(x){x.classList.toggle('active',x.dataset.k===a)});nav.classList.remove('open');$('#menu').setAttribute('aria-expanded','false');
  if(v.after)v.after();reveal();}
function reveal(){
  var els=$$('.rv:not(.in)',main);
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
  var o=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');o.unobserve(x.target)}})},{threshold:.1});
  els.forEach(function(e){o.observe(e)});}

/* ---------- global effects ---------- */
addEventListener('hashchange',route);
addEventListener('scroll',function(){var h=root.scrollHeight-innerHeight;root.style.setProperty('--p',String(h>0?scrollY/h:0))},{passive:true});
addEventListener('pointermove',function(e){root.style.setProperty('--cx',e.clientX+'px');root.style.setProperty('--cy',e.clientY+'px')});
main.addEventListener('pointermove',function(e){var t=e.target.closest&&e.target.closest('a.tile');if(!t)return;var b=t.getBoundingClientRect();
  t.style.setProperty('--ry',(((e.clientX-b.left)/b.width-.5)*7)+'deg');t.style.setProperty('--rx',(-((e.clientY-b.top)/b.height-.5)*7)+'deg')});
main.addEventListener('pointerout',function(e){var t=e.target.closest&&e.target.closest('a.tile');if(t&&!t.contains(e.relatedTarget)){t.style.setProperty('--rx','0deg');t.style.setProperty('--ry','0deg')}});
$('#theme').addEventListener('click',function(){var d=matchMedia('(prefers-color-scheme:dark)').matches,c=root.dataset.theme||(d?'dark':'light');root.dataset.theme=c==='dark'?'light':'dark'});
$('#menu').addEventListener('click',function(){var o=nav.classList.toggle('open');this.setAttribute('aria-expanded',String(o))});
route();
})();
