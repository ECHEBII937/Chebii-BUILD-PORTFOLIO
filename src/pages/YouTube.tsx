import {useState} from 'react';import YTBanner from '../components/YTBanner';import Reveal from '../components/Reveal';import {categories,videos,site} from '../data/content';import type {Video} from '../data/content';import {useSeo} from '../lib';
function VideoCard({v}:{v:Video}){const [p,setP]=useState(false);
  return(<article className="tile"><div className="ph vid">{p?<iframe src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1`} title={v.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen/>
   :<button onClick={()=>setP(true)} aria-label={`Play ${v.title}`}><img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy"/><span className="play">▶</span></button>}</div>
   <div className="b"><h3>{v.title}</h3><p>{v.category}</p><a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer">Open on YouTube</a></div></article>)}
export default function YouTube(){
  useSeo('YouTube','Design, coding, AI, ICT tutorials, 3D modelling and DIY builds from Emmanuel Kibiwott Chebii.');
  const [c,setC]=useState('All');const v=videos.filter(x=>c==='All'||x.category===c);
  return(<><YTBanner/><section className="sec"><div className="wrap"><Reveal><h2>Categories</h2></Reveal>
   <div className="grid">{categories.map(x=><button key={x.name} className={'catc'+(c===x.name?' on':'')} aria-pressed={c===x.name} onClick={()=>setC(c===x.name?'All':x.name)}><b>{x.name}</b><p>{x.d}</p></button>)}</div>
   <h2 style={{marginTop:56}}>Latest uploads</h2>
   {v.length?<div className="grid">{v.map(x=><VideoCard key={x.id} v={x}/>)}</div>
   :<p className="empty">{videos.length?'No videos in this category yet.':'No videos added yet. Add each real upload to the videos list in src/data/content.ts with its video ID, title and category.'}{!site.channelUrl&&' Set channelUrl there to turn on the Subscribe button.'}</p>}
  </div></section></>);}
