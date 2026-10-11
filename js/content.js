// ===================== EDIT YOUR CONTENT HERE (site details, projects, maker builds, videos, shop, journal) =====================

var site={
  name:'Emmanuel Kibiwott Chebii',
  description:'Portfolio of Emmanuel Kibiwott Chebii: technical trainer, ICT professional, graphic designer, web developer and maker in Eldoret, Kenya.',
  email:'emmanuelchebii937@gmail.com',
  phones:[{label:'0700 477 205',tel:'+254700477205'},{label:'0739 420 343',tel:'+254739420343'}],
  location:'Eldoret, Kenya',
  portrait:'',            // e.g. 'images/portrait.jpg'
  channelUrl:'',          // your real YouTube channel URL
  socials:[{name:'YouTube',url:''},{name:'GitHub',url:''},{name:'LinkedIn',url:''},{name:'Other platform',url:''}],
};
var roles=['Technical Trainer','ICT Professional','Graphic Designer','AI & Automation Enthusiast','Web Developer','Maker'];
var expertise=[
 {t:'Teach',i:['CBET','Curriculum development','Instructional design','Learner assessment','Digital literacy']},
 {t:'Build',i:['Python','Web technologies','AI tools','Workflow automation']},
 {t:'Design',i:['Graphic design','Photoshop','Illustrator','InDesign','CorelDRAW']},
 {t:'Systems',i:['Computer maintenance','Networking','Windows','Linux','VS Code & GitHub']}];
var timeline=[
 {t:'ICT Trainer, The Nairobi National Polytechnic (2026)',d:'CBET training, lesson planning, learner assessment, PoE verification, practical sessions, technology integration.'},
 {t:'Graphic Designer & Branding Specialist, Clavish Brands',d:'July 2024 – January 2025. Branding, print-ready artwork, marketing materials, client projects.'},
 {t:'ICT Assistant & Customer Care, Kesses Sub-County',d:'September – December 2023. ICT support, installations, troubleshooting, user assistance.'},
 {t:'Diploma in Technical Trainer Education (Computer Studies)',d:'Kenya School of TVET, 2025–2026.'},
 {t:'Diploma in Information Communication Technology',d:'RVTTI, 2021–2024, Credit.'}];

const NOTE='This is a placeholder. Replace it in js/content.js with the real details, images and results.';
const mk=(slug,title,category,summary,x={})=>({slug,title,category,summary,body:[NOTE],placeholder:true,...x});
const sw=(slug,title,summary)=>mk(slug,title,'Software',summary,{meta:{Technologies:'To be added',Status:'To be added',GitHub:'Link not set',Demo:'Link not set'}});
const mm=(slug,title,category,summary)=>mk(slug,title,category,summary,{meta:{Materials:'To be added',Progress:'To be added','Lessons learned':'To be added'},log:[{date:'Date',title:'First log entry',text:'What you did, what worked, what went wrong. Add photos.'}]});
const rs=(slug,title,category,summary)=>mk(slug,title,category,summary,{links:[]});
const pr=(slug,title,category,summary)=>mk(slug,title,category,summary,{price:0});

var sections=[
{key:'portfolio',title:'Creative portfolio',lead:'Logos, branding, posters, brochures, layouts, digital content and print-ready artwork.',entries:[
 mk('logo-project','Logo project','Logos','Logo design: brief, process and final marks.'),
 mk('brand-identity','Brand identity','Branding','A full branding project: palette, type and applications.'),
 mk('poster-design','Poster design','Posters','Poster work for events and campaigns.'),
 mk('brochure-layout','Brochure layout','Brochures & Layouts','Brochure and layout design.'),
 mk('print-ready-artwork','Print-ready artwork','Print','Artwork prepared for print production.'),
 mk('digital-content','Digital content','Digital','Social and digital marketing content.')]},
{key:'software',title:'ICT, software & AI',lead:'Practical tools for training, small business and events.',entries:[
 sw('receipt-generator','Python Receipt Generator','Receipt generation with PDF output.'),
 sw('invoice-system','Automated Invoice Generation System','Automated invoice creation.'),
 sw('telegram-chatbot','Telegram AI Chatbot','A customer support chatbot.'),
 sw('qr-ticket-verification','QR Code Event Ticket Verification','Event ticket verification with QR codes.'),
 sw('learning-plan-generator','AI-assisted Learning Plan Generator','Learning plans for TVET trainers.'),
 sw('sme-digital-solutions','Web, automation & SME digital solutions','Web development and automation for small businesses.')]},
{key:'maker',title:'Maker Lab',lead:'A workshop journal: what I tried, what it took, and what I got wrong. Each build page holds materials, progress, lessons and a build log.',entries:[
 mm('diy-furniture','DIY furniture','DIY & Furniture','Furniture built by hand.'),
 mm('monitor-stands','Custom monitor stands','DIY & Furniture','Monitor stands made to fit the desk.'),
 mm('woodworking','Woodworking experiments','Woodworking','Joinery, finishes and tool experiments.'),
 mm('model-boat','Model boat construction','Model Building','Building a model boat step by step.'),
 mm('3d-modelling','3D modelling','3D Modelling','Models and prototypes designed on screen.'),
 mm('future-builds','Future builds','Prototypes','Ideas on the bench.')]},
{key:'resources',title:'Resources & teaching',lead:'Lesson plans, session plans, ICT guides, templates and AI tools for trainers.',note:'Use the search box and categories to find materials. Add file links to each entry as you upload files.',entries:[
 rs('lesson-plans','Lesson plans','Lesson Plans','CBET lesson plans.'),
 rs('session-plans','Session plans','Session Plans','Session plans for practical and theory delivery.'),
 rs('ict-guides','ICT guides','ICT Guides','Step-by-step ICT guides.'),
 rs('templates','Templates','Templates','Reusable training templates.'),
 rs('ai-tools','AI tools for trainers','AI Tools','AI tools and prompts for teaching work.'),
 rs('teaching-materials','Downloadable teaching materials','Teaching Materials','Handouts and learner resources.')]},
{key:'shop',title:'Digital shop',lead:'Downloadable designs, models, plans and guides. Coming soon.',note:'Sample products only. Checkout and payments are disabled until configured.',entries:[
 pr('design-template','Graphic design template pack','Design Templates','Sample product.'),
 pr('3d-model','3D model','3D Models','Sample product.'),
 pr('project-plans','Project plans','Plans','Sample product.'),
 pr('teaching-pack','Teaching resource pack','Teaching Resources','Sample product.'),
 pr('project-guide','Practical project guide','Guides','Sample product.')]},
{key:'journal',title:'Journal',lead:'Project updates, tutorials, design process, experiments, builds and what I learn along the way.',entries:[
 mk('sample-project-update','Sample post: project update','Project Updates','Replace with a real project update.'),
 mk('sample-tutorial','Sample post: tutorial','Tutorials','Replace with a real tutorial.'),
 mk('sample-reflection','Sample post: reflection','Reflections','Replace with a real reflection.')]},
];

var categories=[
 {name:'Design & Branding',d:'Logos, branding and print work.'},
 {name:'Coding & Web Development',d:'Python, web and automation builds.'},
 {name:'AI & Automation',d:'AI tools and workflows that save time.'},
 {name:'ICT Tutorials & Teaching',d:'Tutorials and training resources.'},
 {name:'Maker Projects & DIY Builds',d:'Woodwork, 3D modelling and builds.'},
 {name:'Experiments & Behind the Scenes',d:'What worked, what failed, what I learned.'}];
// Add real videos here: {id:'YOUTUBE_VIDEO_ID',title:'...',category:'one of the names above'}
var videos=[];
window.DATA={site:site,roles:roles,expertise:expertise,timeline:timeline,sections:sections,categories:categories,videos:videos};
