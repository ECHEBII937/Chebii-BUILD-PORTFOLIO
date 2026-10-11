import {Link,useParams} from 'react-router-dom';import {sections} from '../data/content';import {NotFound} from './Section';import {asset,useSeo} from '../lib';
export default function EntryPage(){
  const {section,slug}=useParams();const s=sections.find(x=>x.key===section);const e=s?.entries.find(x=>x.slug===slug);
  useSeo(e?.title??'Page not found',e?.summary);
  if(!s||!e)return <NotFound/>;
  return(<article className="wrap entry"><p><Link to={`/${s.key}`}>Back to {s.title}</Link></p>
   <h1 className="pgt">{e.title}</h1><p className="meta">{[e.category,e.date].filter(Boolean).join(' · ')} {e.placeholder&&<span className="badge">Placeholder</span>}</p>
   {e.image&&<img src={asset(e.image)} alt={e.title} style={{maxWidth:'100%'}}/>}
   {e.gallery?.map(g=><img key={g} src={asset(g)} alt="" loading="lazy" style={{maxWidth:'100%',marginTop:12}}/>)}
   <p className="lead">{e.summary}</p>{e.body?.map((p,i)=><p key={i}>{p}</p>)}
   {e.price!==undefined&&<p><span className="price">{e.price?`KES ${e.price}`:'Price to be set'}</span><br/><button className="btn p off" disabled>Checkout not configured</button></p>}
   {e.meta&&<dl>{Object.entries(e.meta).map(([k,v])=><div key={k} style={{display:'contents'}}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>}
   {e.links&&<p>{e.links.length?e.links.map(l=><a key={l.url} className="btn s" href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>):<span className="meta">File link not set.</span>}</p>}
   {e.log&&<><h2 style={{fontSize:28,marginTop:36}}>Build log</h2><ul className="log">{e.log.map(l=><li key={l.title}><b>{l.title}</b><span className="meta">{l.date}</span><p style={{margin:'6px 0 0'}}>{l.text}</p></li>)}</ul></>}
  </article>);}
