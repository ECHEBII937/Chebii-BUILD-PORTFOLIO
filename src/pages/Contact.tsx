import Reveal from '../components/Reveal';import {site} from '../data/content';import {useSeo} from '../lib';
export default function Contact(){
  useSeo('Contact','Get in touch with Emmanuel Kibiwott Chebii in Eldoret, Kenya.');
  return(<section className="sec"><div className="wrap"><Reveal><h1 className="pgt">Contact</h1>
   <p className="cta"><a href={`mailto:${site.email}`}>{site.email}</a></p>
   <p className="cta">{site.phones.map((p,i)=><span key={p.tel}>{i>0&&' · '}<a href={`tel:${p.tel}`}>{p.label}</a></span>)}</p>
   <p className="meta">{site.location}</p>
   <div className="links">{site.socials.map(s=>s.url?<a key={s.name} className="btn s" href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>:<span key={s.name} className="btn s off">{s.name} (link not set)</span>)}</div></Reveal></div></section>);}
