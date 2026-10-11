import {useEffect} from 'react';
export const asset=(p:string)=>/^(https?:|data:)/.test(p)?p:import.meta.env.BASE_URL+p.replace(/^\//,'');
export function useSeo(title:string,desc?:string){useEffect(()=>{
  document.title=title?`${title} | Emmanuel Kibiwott Chebii`:'Emmanuel Kibiwott Chebii — Design. Build. Experiment.';
  if(desc)document.querySelector('meta[name=description]')?.setAttribute('content',desc);},[title,desc]);}
