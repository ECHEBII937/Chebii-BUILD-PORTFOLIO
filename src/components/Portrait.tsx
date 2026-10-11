import {site} from '../data/content';import {asset} from '../lib';
export default function Portrait(){return site.portrait?<img className="avatar" src={asset(site.portrait)} alt={site.name}/>:<div className="portrait" role="img" aria-label="Portrait placeholder">Portrait goes here.<br/>Set <code>portrait</code> in content.ts</div>}
