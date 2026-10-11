import {useEffect,useState} from 'react';import {NavLink,Link,Outlet,useLocation} from 'react-router-dom';import {site} from '../data/content';
const links=[['/portfolio','Design'],['/software','Software & AI'],['/maker','Maker Lab'],['/youtube','YouTube'],['/resources','Resources'],['/shop','Shop'],['/journal','Journal'],['/about','About'],['/contact','Contact']];
export default function Layout(){
  const [open,setOpen]=useState(false);const {pathname}=useLocation();
  useEffect(()=>{setOpen(false);window.scrollTo(0,0)},[pathname]);
  useEffect(()=>{const el=document.documentElement;
    const sc=()=>{const h=el.scrollHeight-innerHeight;el.style.setProperty('--p',String(h>0?scrollY/h:0))};
    const mv=(e:PointerEvent)=>{el.style.setProperty('--cx',e.clientX+'px');el.style.setProperty('--cy',e.clientY+'px')};
    addEventListener('scroll',sc,{passive:true});addEventListener('pointermove',mv);return()=>{removeEventListener('scroll',sc);removeEventListener('pointermove',mv)}},[]);
  const theme=()=>{const r=document.documentElement,d=matchMedia('(prefers-color-scheme:dark)').matches,c=r.dataset.theme||(d?'dark':'light');r.dataset.theme=c==='dark'?'light':'dark'};
  return(<>
  <div className="prog"/><div className="glow"/><a className="skip" href="#main">Skip to content</a>
  <header><div className="wrap"><Link className="mono" to="/" aria-label={site.name+', home'}><b>EC</b><span>{site.name}</span></Link>
   <nav className={open?'open':''} aria-label="Main">{links.map(([to,t])=><NavLink key={to} to={to}>{t}</NavLink>)}</nav>
   <div className="hb"><button onClick={theme} aria-label="Toggle light and dark theme">Theme</button><button className="menu" aria-expanded={open} onClick={()=>setOpen(!open)}>Menu</button></div></div></header>
  <main id="main"><Outlet/></main>
  <footer><div className="wrap">© {new Date().getFullYear()} {site.name}. Design. Build. Experiment. · {site.location}</div></footer></>);}
