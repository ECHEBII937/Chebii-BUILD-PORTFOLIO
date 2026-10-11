import Portrait from '../components/Portrait';import Reveal from '../components/Reveal';import {timeline,expertise} from '../data/content';import {useSeo} from '../lib';
export default function About(){
  useSeo('About','Technical trainer, ICT professional, graphic designer and maker in Eldoret, Kenya.');
  return(<section className="sec"><div className="wrap"><div className="two"><Reveal><Portrait/></Reveal>
   <Reveal><h1 className="pgt">About</h1>
    <p>I'm a technical trainer who also designs, codes and builds. My goal is to combine technology, creativity, practical making and technical education.</p>
    <p>My interests: graphic design, coding, AI and automation, web development, 3D modelling, and building things by hand.</p>
    <ul className="timeline">{timeline.map(x=><li key={x.t}><b>{x.t}</b><span className="meta">{x.d}</span></li>)}</ul>
    <div className="tools">{expertise.flatMap(g=>g.i).map(x=><i key={x}>{x}</i>)}</div></Reveal></div></div></section>);}
