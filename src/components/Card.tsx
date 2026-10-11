import {Link} from 'react-router-dom';import type {PointerEvent} from 'react';import type {Entry} from '../data/content';import {asset} from '../lib';
export default function Card({e,base}:{e:Entry;base:string}){
  const tilt=(ev:PointerEvent<HTMLAnchorElement>)=>{const t=ev.currentTarget,b=t.getBoundingClientRect(),x=(ev.clientX-b.left)/b.width-.5,y=(ev.clientY-b.top)/b.height-.5;t.style.setProperty('--ry',x*7+'deg');t.style.setProperty('--rx',-y*7+'deg')};
  const reset=(ev:PointerEvent<HTMLAnchorElement>)=>{ev.currentTarget.style.setProperty('--ry','0deg');ev.currentTarget.style.setProperty('--rx','0deg')};
  const meta=[e.category,e.date,e.price!==undefined?(e.price?`KES ${e.price}`:'Price to be set'):''].filter(Boolean).join(' · ');
  return(<Link to={`/${base}/${e.slug}`} className="tile" onPointerMove={tilt} onPointerLeave={reset}>
   <div className="ph">{e.image?<img src={asset(e.image)} alt={e.title} loading="lazy"/>:<span>Image slot</span>}</div>
   <div className="b"><h3>{e.title}</h3><p>{meta}</p><p>{e.summary}</p>{e.placeholder&&<span className="badge">Placeholder</span>}</div></Link>);}
