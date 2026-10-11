import {useMemo} from 'react';
export default function Blueprint(){
  const spokes=useMemo(()=>{let p='';for(let i=0;i<48;i++){const a=i*Math.PI/24;p+=`M${(Math.cos(a)*90).toFixed(1)} ${(Math.sin(a)*90).toFixed(1)}L${(Math.cos(a)*330).toFixed(1)} ${(Math.sin(a)*330).toFixed(1)}`}return p},[]);
  return(<svg className="bp" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
  <g transform="translate(120 520)"><circle className="draw" r="90"/><circle className="draw" r="170"/><circle className="draw" r="250"/><circle className="draw" r="330"/><path className="draw" d={spokes}/></g>
  <g className="draw"><path d="M560 300h520M560 390h520M560 480h520M560 570h520M640 260v380M760 260v380M880 260v380M1000 260v380"/><circle cx="1010" cy="480" r="120"/><circle cx="1010" cy="480" r="60"/></g>
  <text x="800" y="250" fontSize="12" fill="currentColor" stroke="none">4.00</text><text x="570" y="294" fontSize="11" fill="currentColor" stroke="none">RB1</text></svg>);}
