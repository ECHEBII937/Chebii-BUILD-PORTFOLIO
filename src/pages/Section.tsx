import {useState} from 'react';import {useParams} from 'react-router-dom';import {sections} from '../data/content';import Card from '../components/Card';import Reveal from '../components/Reveal';import {useSeo} from '../lib';
export function NotFound(){useSeo('Page not found');return <section className="sec"><div className="wrap"><h1 className="pgt">Page not found</h1><p>Use the menu to find what you were looking for.</p></div></section>}
function View({k}:{k:string}){
  const s=sections.find(x=>x.key===k);const [cat,setCat]=useState('All');const [q,setQ]=useState('');
  useSeo(s?.title??'Page not found',s?.lead);
  if(!s)return <NotFound/>;
  const cats=['All',...new Set(s.entries.map(e=>e.category))];
  const list=s.entries.filter(e=>(cat==='All'||e.category===cat)&&(e.title+' '+e.summary).toLowerCase().includes(q.toLowerCase()));
  return(<section className="sec"><div className="wrap"><Reveal><h1 className="pgt">{s.title}</h1><p className="lead">{s.lead}</p>{s.note&&<p className="note">{s.note}</p>}</Reveal>
   <div className="tools2"><label><span className="meta">Search </span><input type="search" value={q} onChange={e=>setQ(e.target.value)} placeholder={`Search ${s.title.toLowerCase()}`}/></label></div>
   <div className="filters" role="group" aria-label="Filter by category">{cats.map(c=><button key={c} aria-pressed={c===cat} onClick={()=>setCat(c)}>{c}</button>)}</div>
   {list.length?<div className="grid">{list.map(e=><Card key={e.slug} e={e} base={s.key}/>)}</div>:<p className="empty">Nothing matches. Clear the search or pick another category.</p>}</div></section>);}
export default function Section(){const {section}=useParams();return <View key={section} k={section??''}/>}
