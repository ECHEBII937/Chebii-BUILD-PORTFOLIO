import {useEffect,useState} from 'react';import type {CSSProperties,PointerEvent} from 'react';import {Link} from 'react-router-dom';
import Blueprint from '../components/Blueprint';import Card from '../components/Card';import Reveal from '../components/Reveal';import Portrait from '../components/Portrait';
import YTBanner from '../components/YTBanner';import {site,roles,expertise,sections} from '../data/content';import {useSeo} from '../lib';
const get=(k:string)=>sections.find(s=>s.key===k)!;
const lines:[string,number][]=[['Emmanuel',0],['Kibiwott Chebii',9]];
const tagline='Design. Build. Experiment. ';
export default function Home(){
  useSeo('',site.description);
  const [i,setI]=useState(0);
  useEffect(()=>{const t=setInterval(()=>setI(x=>(x+1)%roles.length),2200);return()=>clearInterval(t)},[]);
  const mv=(e:PointerEvent<HTMLDivElement>)=>{const b=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--mx',e.clientX-b.left+'px');e.currentTarget.style.setProperty('--my',e.clientY-b.top+'px')};
  const t6=tagline.toUpperCase().repeat(6);
  return(<>
  <div className="hero" onPointerMove={mv}><Blueprint/><div className="spot"/>
   <div className="wrap">
    <h1 aria-label={site.name}>{lines.map(([l,o])=><span key={l} className="line" aria-hidden="true">{[...l].map((c,j)=><i key={j} className="ch" style={{'--i':o+j} as CSSProperties}>{c===' '?'\u00A0':c}</i>)}</span>)}</h1>
    <div className="tag">Design. Build. Experiment.</div>
    <div className="intro"><div>
      <p>I'm a <span className="rot" key={i}>{roles[i]}</span> in Eldoret. I train technicians, design brands and build small tools that work.</p>
      <div className="roles">{roles.map(r=><i key={r}>{r}</i>)}</div></div>
     <div className="btns"><Link className="btn p" to="/portfolio">Explore my work</Link><Link className="btn s" to="/youtube">Watch on YouTube</Link><Link className="btn s" to="/contact">Contact me</Link></div></div>
   </div></div>
  <div className="marq" aria-hidden="true"><div>{t6}{t6}</div></div>

  <section className="sec"><div className="wrap"><Reveal><h2>Featured work</h2><p className="lead">{get('portfolio').lead}</p></Reveal>
   <Reveal><div className="grid">{get('portfolio').entries.slice(0,3).map(e=><Card key={e.slug} e={e} base="portfolio"/>)}</div><p><Link to="/portfolio">See the full creative portfolio</Link></p></Reveal></div></section>

  <section className="sec dark"><div className="wrap"><Reveal><h2>Software &amp; AI projects</h2><p className="lead">{get('software').lead}</p></Reveal>
   <Reveal><div className="grid">{get('software').entries.slice(0,3).map(e=><Card key={e.slug} e={e} base="software"/>)}</div><p><Link to="/software">All projects</Link></p></Reveal></div></section>

  <section className="sec"><div className="wrap"><Reveal><h2>Expertise</h2></Reveal>
   <Reveal><div className="exp">{expertise.map(g=><div key={g.t}><h3>{g.t}</h3><div className="tools">{g.i.map(x=><i key={x}>{x}</i>)}</div></div>)}</div></Reveal></div></section>

  <section className="sec"><div className="wrap"><Reveal><h2>Latest content</h2><p className="lead">Maker builds and journal entries appear here as you add them.</p></Reveal>
   <Reveal><div className="grid">{[...get('maker').entries.slice(0,2).map(e=>[e,'maker'] as const),...get('journal').entries.slice(0,2).map(e=>[e,'journal'] as const)].map(([e,b])=><Card key={e.slug} e={e} base={b}/>)}</div></Reveal></div></section>

  <YTBanner/>

  <section className="sec"><div className="wrap"><div className="two"><Reveal><Portrait/></Reveal>
   <Reveal><h2>About</h2><p>I'm a technical trainer who also designs, codes and builds. My goal is to combine technology, creativity, hands-on making and technical education.</p><p><Link className="btn s" to="/about">Read the full story</Link></p></Reveal></div></div></section>
  </>);}
