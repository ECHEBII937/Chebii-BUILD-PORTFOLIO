/* =====================================================================
   effects.js : animations and small interactions ONLY.
   All your content lives in the HTML pages. You rarely need to edit this file.
   ===================================================================== */
(function(){
'use strict';
var d=document,root=d.documentElement;
function $(s,r){return(r||d).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||d).querySelectorAll(s))}

/* ---- Footer year, theme toggle, mobile menu ---- */
var yr=$('#yr');if(yr)yr.textContent=new Date().getFullYear();
var th=$('#theme');if(th)th.addEventListener('click',function(){var dark=matchMedia('(prefers-color-scheme:dark)').matches,c=root.dataset.theme||(dark?'dark':'light');root.dataset.theme=c==='dark'?'light':'dark'});
var menu=$('#menu'),nav=$('#nav');if(menu&&nav)menu.addEventListener('click',function(){var o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(o))});

/* ---- Scroll progress bar + cursor glow ---- */
addEventListener('scroll',function(){var h=root.scrollHeight-innerHeight;root.style.setProperty('--p',String(h>0?scrollY/h:0))},{passive:true});
addEventListener('pointermove',function(e){root.style.setProperty('--cx',e.clientX+'px');root.style.setProperty('--cy',e.clientY+'px')});

/* ---- Hero: cursor spotlight on the blueprint grid + rotating role word ---- */
var hero=$('.hero');
if(hero)hero.addEventListener('pointermove',function(e){var b=hero.getBoundingClientRect();hero.style.setProperty('--mx',(e.clientX-b.left)+'px');hero.style.setProperty('--my',(e.clientY-b.top)+'px')});
var rot=$('#rot');
if(rot&&rot.dataset.roles){var roles=rot.dataset.roles.split('|'),ri=0;setInterval(function(){ri=(ri+1)%roles.length;var n=rot.cloneNode(false);n.textContent=roles[ri];rot.replaceWith(n);rot=n},2200)}

/* ---- Scroll reveal ---- */
var rv=$$('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.1});rv.forEach(function(e){io.observe(e)})}
else rv.forEach(function(e){e.classList.add('in')});

/* ---- Card tilt ---- */
d.addEventListener('pointermove',function(e){var t=e.target.closest&&e.target.closest('a.tile');if(!t)return;var b=t.getBoundingClientRect();t.style.setProperty('--ry',(((e.clientX-b.left)/b.width-.5)*7)+'deg');t.style.setProperty('--rx',(-((e.clientY-b.top)/b.height-.5)*7)+'deg')});
d.addEventListener('pointerout',function(e){var t=e.target.closest&&e.target.closest('a.tile');if(t&&!t.contains(e.relatedTarget)){t.style.setProperty('--rx','0deg');t.style.setProperty('--ry','0deg')}});

/* ---- Search + category filters (listing pages) ---- */
var fg=$('[data-filters]');
if(fg){var items=$$('[data-cat]'),q=$('[data-search]'),empty=$('[data-empty]'),cat='All';
  var run=function(){var t=q?q.value.toLowerCase():'',n=0;items.forEach(function(it){var ok=(cat==='All'||it.dataset.cat===cat)&&it.textContent.toLowerCase().indexOf(t)>-1;it.hidden=!ok;if(ok)n++});if(empty)empty.hidden=n>0};
  fg.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var f=b.dataset.f;cat=(b.classList.contains('catc')&&cat===f)?'All':f;
    $$('button',fg).forEach(function(x){var on=x.dataset.f===cat;x.setAttribute('aria-pressed',String(on));x.classList.toggle('on',on)});run()});
  if(q)q.addEventListener('input',run)}

/* ---- Image slider (swipe, arrows, dots, keyboard) ---- */
$$('.car').forEach(function(car){
  var tr=$('.car-track',car),figs=$$('figure',tr),n=figs.length,cnt=$('.car-count',car),db=$('.car-dots',car);
  function idx(){return Math.round(tr.scrollLeft/(tr.clientWidth||1))}
  function go(i){var x=Math.max(0,Math.min(n-1,i))*tr.clientWidth;if(tr.scrollTo)tr.scrollTo({left:x,behavior:'smooth'});else tr.scrollLeft=x}
  figs.forEach(function(f,i){var b=d.createElement('button');b.setAttribute('aria-label','Go to image '+(i+1));b.addEventListener('click',function(){go(i)});db.appendChild(b)});
  var dots=$$('button',db);
  function mark(){var i=idx();dots.forEach(function(x,j){x.classList.toggle('on',j===i)});cnt.textContent=(i+1)+' / '+n}
  tr.addEventListener('scroll',mark,{passive:true});
  $('.car-btn.prev',car).addEventListener('click',function(){go(idx()-1)});
  $('.car-btn.next',car).addEventListener('click',function(){go(idx()+1)});
  tr.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){go(idx()+1);e.preventDefault()}if(e.key==='ArrowLeft'){go(idx()-1);e.preventDefault()}});
  mark()});

/* ---- Click-to-enlarge (lightbox) ---- */
var lb=d.createElement('div');lb.className='lb';lb.innerHTML='<img alt=""><button aria-label="Close">&times;</button>';d.body.appendChild(lb);
d.addEventListener('click',function(e){var i=e.target.closest&&e.target.closest('img.zoomable');if(!i)return;var im=$('img',lb);im.src=i.src;im.alt=i.alt;lb.classList.add('open')});
lb.addEventListener('click',function(){lb.classList.remove('open')});
addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('open')});

/* ---- Missing images show a green "Image coming soon" tile ---- */
var g='';for(var x=0;x<=400;x+=40)g+='M'+x+' 0V300';for(var y=0;y<=300;y+=40)g+='M0 '+y+'H400';
var PH='data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#101713"/><path d="'+g+'" stroke="#65C995" stroke-opacity=".2" fill="none"/><text x="200" y="154" text-anchor="middle" fill="#65C995" font-family="Arial,sans-serif" font-size="18" font-weight="bold">Image coming soon</text></svg>');
d.addEventListener('error',function(e){var t=e.target;if(t&&t.tagName==='IMG'&&!t.dataset.ph){t.dataset.ph='1';t.src=PH}},true);
$$('img').forEach(function(im){if(im.complete&&im.naturalWidth===0&&!im.dataset.ph){im.dataset.ph='1';im.src=PH}});

/* ---- Buttons marked "off" do nothing; Google Drive share links become direct downloads ---- */
d.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a.off');if(a)e.preventDefault()});
$$('a[href*="drive.google.com/file/d/"]').forEach(function(a){var m=/\/file\/d\/([^\/?#]+)/.exec(a.getAttribute('href'));if(m)a.href='https://drive.google.com/uc?export=download&id='+m[1]});

/* ---- Shop checkout panel ---- */
var bb=$('#buybtn');
if(bb){var box=$('#checkout');bb.addEventListener('click',function(){var open=box.hasAttribute('hidden');if(open)box.removeAttribute('hidden');else box.setAttribute('hidden','');bb.setAttribute('aria-expanded',String(open));bb.textContent=open?'Close checkout':'Checkout'})}
$$('.ptabs button').forEach(function(t){t.addEventListener('click',function(){
  $$('.ptabs button').forEach(function(x){var on=x===t;x.classList.toggle('on',on);x.setAttribute('aria-selected',String(on))});
  $$('.ppanel').forEach(function(p){if(p.id==='p-'+t.dataset.p)p.removeAttribute('hidden');else p.setAttribute('hidden','')})})});
var ct=$('#copytill');
if(ct)ct.addEventListener('click',function(){var v=$('#tillno').textContent,done=function(m){ct.textContent=m;setTimeout(function(){ct.textContent='Copy'},1800)};
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(v).then(function(){done('Copied')},function(){done('Copy failed')});else done('Copy failed')});

/* ---- YouTube click-to-play ---- */
$$('.vid').forEach(function(v){v.addEventListener('click',function(e){if(!e.target.closest('button'))return;
  v.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+encodeURIComponent(v.dataset.id)+'?autoplay=1" title="Video player" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>'})});
})();
