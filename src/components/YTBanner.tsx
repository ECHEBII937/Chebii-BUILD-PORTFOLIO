import {site} from '../data/content';
export function Subscribe(){return site.channelUrl?<a className="btn p" href={site.channelUrl} target="_blank" rel="noopener noreferrer">Subscribe on YouTube</a>:<span className="btn p off" aria-disabled="true">Subscribe on YouTube (channel URL not set)</span>}
export default function YTBanner(){return(<section className="dark sec"><div className="wrap"><div className="ytname">EMMANUEL KIBIWOTT CHEBII</div><div className="tag alt">Design. Build. Experiment.</div>
<p className="lead">Graphic design, coding, AI tools, web development, ICT tutorials, 3D modelling and DIY builds, with the lessons from each real project.</p><Subscribe/></div></section>)}
