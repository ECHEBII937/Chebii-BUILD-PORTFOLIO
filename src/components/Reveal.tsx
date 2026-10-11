import {useEffect,useRef,ReactNode} from 'react';
export default function Reveal({children,className=''}:{children:ReactNode;className?:string}){
  const r=useRef<HTMLDivElement>(null);
  useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([x])=>{if(x.isIntersecting){e.classList.add('in');o.disconnect()}},{threshold:.1});o.observe(e);return()=>o.disconnect()},[]);
  return <div ref={r} className={'rv '+className}>{children}</div>;}
