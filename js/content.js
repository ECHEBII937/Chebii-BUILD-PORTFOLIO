// ===================== EDIT YOUR CONTENT HERE =====================
// Site details, projects, maker builds, videos, shop, journal

var site = {
    name: 'Emmanuel Kibiwott Chebii',
    description: 'Portfolio of Emmanuel Kibiwott Chebii: technical trainer, ICT professional, graphic designer, web developer and maker in Eldoret, Kenya.',
    email: 'emmanuelchebii937@gmail.com',

    phones: [
        { label: '0700 477 205', tel: '+254700477205' },
        { label: '0739 420 343', tel: '+254739420343' }
    ],

    location: 'Eldoret, Kenya',
    portrait: '', // e.g. 'images/portrait.jpg'

    channelUrl: 'https://youtube.com/@emmanuelkchebii937?si=zWQi-kdYfVHUL3EQ',

    socials: [
        {
            name: 'YouTube',
            url: 'https://youtube.com/@emmanuelkchebii937?si=zWQi-kdYfVHUL3EQ'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/ECHEBII937'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/emmanuel-k-chebii'
        },
        {
            name: 'Other platform',
            url: ''
        }
    ],

    // Shop payments: M-Pesa Lipa na M-Pesa till.
    // qr = your till QR image.
    // whatsapp = number for payment confirmations (country code, no +).
    payments: {
        mpesaTill: '4686524',
        tillName: '',
        qr: 'images/mpesa-till-qr.png',
        whatsapp: '254700477205'
    }
};

var roles = [
    'Technical Trainer',
    'ICT Professional',
    'Graphic Designer',
    'AI & Automation Enthusiast',
    'Web Developer',
    'Maker'
];

var expertise = [
    {
        t: 'Teach',
        i: [
            'CBET',
            'Curriculum development',
            'Instructional design',
            'Learner assessment',
            'Digital literacy'
        ]
    },
    {
        t: 'Build',
        i: [
            'Python',
            'Web technologies',
            'AI tools',
            'Workflow automation'
        ]
    },
    {
        t: 'Design',
        i: [
            'Graphic design',
            'Photoshop',
            'Illustrator',
            'InDesign',
            'CorelDRAW'
        ]
    },
    {
        t: 'Systems',
        i: [
            'Computer maintenance',
            'Networking',
            'Windows',
            'Linux',
            'VS Code & GitHub'
        ]
    }
];

var timeline = [
    {
        t: 'ICT Trainer, The Nairobi National Polytechnic (2026)',
        d: 'CBET training, lesson planning, learner assessment, PoE verification, practical sessions, technology integration.'
    },
    {
        t: 'Graphic Designer & Branding Specialist, Clavish Brands',
        d: 'July 2024 – January 2025. Branding, print-ready artwork, marketing materials, client projects.'
    },
    {
        t: 'ICT Assistant & Customer Care, Kesses Sub-County',
        d: 'September – December 2023. ICT support, installations, troubleshooting, user assistance.'
    },
    {
        t: 'Diploma in Technical Trainer Education (Computer Studies)',
        d: 'Kenya School of TVET, 2025–2026.'
    },
    {
        t: 'Diploma in Information Communication Technology',
        d: 'RVTTI, 2021–2024, Credit.'
    }
];


/* ---------- helpers ----------
   Images: every item points at images/<slug>-1.jpg, -2.jpg ...
   Upload files with those exact names and they appear.
   Until then a "coming soon" picture shows.

   Download / repo links: put the real link in the empty url:''
   (Google Drive share links are fine).
*/

const NOTE = 'This is a placeholder. Replace it in js/content.js with the real details, images and results.';

const mk = (slug, title, category, summary, x = {}) => ({
    slug,
    title,
    category,
    summary,
    body: [NOTE],
    placeholder: true,
    ...x
});

const pics = (slug, n) => {
    const a = Array.from(
        { length: n },
        (_, i) => 'images/' + slug + '-' + (i + 1) + '.jpg'
    );

    return {
        image: a[0],
        gallery: a.slice(1)
    };
};

const PDF = (label) => [
    {
        label: label || 'Download PDF',
        url: ''
    }
];

const pf = (slug, title, cat, summary, x = {}) => mk(
    slug,
    title,
    cat,
    summary,
    {
        ...pics(slug, 4),
        files: PDF('Download PDF'),
        ...x
    }
);

const sw = (slug, title, summary, body, tech) => mk(
    slug,
    title,
    'Software',
    summary,
    {
        ...pics(slug, 3),
        body: [body],
        meta: {
            Technologies: tech || 'To be added',
            Status: 'To be added'
        },
        links: [
            {
                label: 'View repository on GitHub',
                url: ''
            }
        ],
        placeholder: false
    }
);

const mm = (slug, title, cat, summary, x = {}) => mk(
    slug,
    title,
    cat,
    summary,
    {
        ...pics(slug, 5),

        meta: {
            Materials: 'To be added',
            Progress: 'To be added',
            'Lessons learned': 'To be added'
        },

        log: [
            {
                date: 'Date',
                title: 'First log entry',
                text: 'What you did, what worked, what went wrong. Add photos.'
            }
        ],

        files: [
            {
                label: 'Download drawing (PDF)',
                url: ''
            },
            {
                label: 'Download plans / files',
                url: ''
            }
        ],

        ...x
    }
);

const rs = (slug, title, cat, summary, files) => mk(
    slug,
    title,
    cat,
    summary,
    {
        ...pics(slug, 1),
        files: files || PDF('Download PDF')
    }
);

const pr = (slug, title, cat, summary, price) => mk(
    slug,
    title,
    cat,
    summary,
    {
        ...pics(slug, 3),
        price: price,

        meta: {
            Format: 'To be added',
            Includes: 'To be added'
        },

        body: [
            'Sample product. Replace with what the buyer gets, how it is delivered and how to use it.'
        ]
    }
);

const jp = (slug, title, cat, summary) => mk(
    slug,
    title,
    cat,
    summary,
    {
        ...pics(slug, 1)
    }
);


var sections = [
    {
        key: 'portfolio',
        title: 'Creative portfolio',
        lead: 'Logos, branding, posters, brochures, layouts, digital content and print-ready artwork.',

        entries: [
            pf(
                'logo-project',
                'Logo project',
                'Logos',
                'Logo design: brief, process and final marks.'
            ),

            pf(
                'brand-identity',
                'Brand identity',
                'Branding',
                'A full branding project: palette, type and applications.'
            ),
pf(
    'poster-design',
    'Poster design',
    'Posters',
    'Poster work for events and campaigns.',
    {
        image: 'images/mashujaa-day-poster.jpg',
        gallery: [
            'images/event-poster.jpg',
            'images/birthday-poster.jpg',
            'images/promo-poster.jpg'
        ],
        files: [
            {
                label: 'Download PDF',
                url: 'https://drive.google.com/file/d/15oEqNA7h1qMp-5HMatqEnwxfKxqXjcsg/view?usp=drive_link'
            }
        ],
        body: ['HAPPY MASHUJAA DAY '],
        placeholder: false
    }
),
            pf(
                'brochure-layout',
                'Brochure layout',
                'Brochures & Layouts',
                'Brochure and layout design.'
            ),

            pf(
                'print-ready-artwork',
                'Print-ready artwork',
                'Print',
                'Artwork prepared for print production.'
            ),

            pf(
                'digital-content',
                'Digital content',
                'Digital',
                'Social and digital marketing content.'
            )
        ]
    },

    {
        key: 'software',
        title: 'ICT, software & AI',
        lead: 'Practical tools for training, small business and events.',

        entries: [
            sw(
                'receipt-generator',
                'Python Receipt Generator',
                'Receipt generation with PDF output.',
                'A Python tool that takes sale details and produces a clean, printable receipt as a PDF.',
                'Python, PDF generation'
            ),

            sw(
                'invoice-system',
                'Automated Invoice Generation System',
                'Automated invoice creation.',
                'Generates professional invoices automatically from client and item details, ready to send.'
            ),

            sw(
                'telegram-chatbot',
                'Telegram AI Chatbot',
                'A customer support chatbot.',
                'An AI-powered Telegram chatbot that answers common customer questions around the clock.',
                'Telegram, AI'
            ),

            sw(
                'qr-ticket-verification',
                'QR Code Event Ticket Verification',
                'Event ticket verification with QR codes.',
                'Issues event tickets with QR codes and verifies them at the entrance so check-in is quick.'
            ),

            sw(
                'learning-plan-generator',
                'AI-assisted Learning Plan Generator',
                'Learning plans for TVET trainers.',
                'An AI-assisted tool that helps TVET trainers draft learning plans faster.',
                'AI'
            ),

            sw(
                'sme-digital-solutions',
                'Web, automation & SME digital solutions',
                'Web development and automation for small businesses.',
                'Websites, automation and small digital tools built for small and medium businesses.',
                'Web technologies, automation'
            )
        ]
    },

    {
        key: 'maker',
        title: 'Maker Lab',

        lead: "A record of things I imagine, design, build, break, and figure out along the way. From model boats and woodworking to 3D modelling and hands-on experiments, this is where I document the process behind each project: the materials I use, the decisions I make, the mistakes I learn from, and the progress that gets me closer to the finished build. Not everything works the first time. That's part of the process.",

        entries: [
            mm(
                'diy-furniture',
                'DIY furniture',
                'DIY & Furniture',
                'Furniture built by hand.'
            ),

            mm(
                'monitor-stands',
                'Custom monitor stands',
                'DIY & Furniture',
                'Monitor stands made to fit the desk.'
            ),

            mm(
                'woodworking',
                'Woodworking experiments',
                'Woodworking',
                'Joinery, finishes and tool experiments.'
            ),

            mm(
                'model-boat',
                'Model boat construction',
                'Model Building',
                'Building a model boat step by step.'
            ),

            mm(
                '3d-modelling',
                '3D modelling',
                '3D Modelling',
                'Models and prototypes designed on screen.'
            ),

            mm(
                'future-builds',
                'Future builds',
                'Prototypes',
                'Ideas on the bench.'
            )
        ]
    },

    {
        key: 'resources',
        title: 'Resources & teaching',
        lead: 'Lesson plans, session plans, ICT guides, templates and AI tools for trainers.',
        note: 'Use the search box and categories to find materials. Each resource has its own download button.',

        entries: [
            rs(
                'lesson-plans',
                'Lesson plans',
                'Lesson Plans',
                'CBET lesson plans.',
                [
                    { label: 'Download PDF', url: '' },
                    { label: 'Download Word version', url: '' }
                ]
            ),

            rs(
                'session-plans',
                'Session plans',
                'Session Plans',
                'Session plans for practical and theory delivery.'
            ),

            rs(
                'ict-guides',
                'ICT guides',
                'ICT Guides',
                'Step-by-step ICT guides.'
            ),

            rs(
                'templates',
                'Templates',
                'Templates',
                'Reusable training templates.'
            ),

            rs(
                'ai-tools',
                'AI tools for trainers',
                'AI Tools',
                'AI tools and prompts for teaching work.'
            ),

            rs(
                'teaching-materials',
                'Downloadable teaching materials',
                'Teaching Materials',
                'Handouts and learner resources.'
            )
        ]
    },

    {
        key: 'shop',
        title: 'Digital shop',
        lead: 'Downloadable designs, models, plans and guides.',
        note: 'Sample products and prices. Pay with Lipa na M-Pesa (Till ' + site.payments.mpesaTill + '). Card payments are coming soon.',

        entries: [
            pr(
                'design-template',
                'Graphic design template pack',
                'Design Templates',
                'Editable layouts for posters, flyers and social posts.',
                500
            ),

            pr(
                '3d-model',
                '3D model',
                '3D Models',
                'Print-ready 3D model files.',
                800
            ),

            pr(
                'project-plans',
                'Project plans',
                'Plans',
                'Step-by-step build plans with measurements.',
                1000
            ),

            pr(
                'teaching-pack',
                'Teaching resource pack',
                'Teaching Resources',
                'Lesson plans and learner materials in one pack.',
                700
            ),

            pr(
                'project-guide',
                'Practical project guide',
                'Guides',
                'A practical guide to building a real project.',
                600
            )
        ]
    },

    {
        key: 'journal',
        title: 'Journal',
        lead: 'Project updates, tutorials, design process, experiments, builds and what I learn along the way.',

        entries: [
            jp(
                'sample-project-update',
                'Sample post: project update',
                'Project Updates',
                'Replace with a real project update.'
            ),

            jp(
                'sample-tutorial',
                'Sample post: tutorial',
                'Tutorials',
                'Replace with a real tutorial.'
            ),

            jp(
                'sample-reflection',
                'Sample post: reflection',
                'Reflections',
                'Replace with a real reflection.'
            )
        ]
    }
];


var categories = [
    {
        name: 'Design & Branding',
        d: 'Logos, branding and print work.'
    },
    {
        name: 'Coding & Web Development',
        d: 'Python, web and automation builds.'
    },
    {
        name: 'AI & Automation',
        d: 'AI tools and workflows that save time.'
    },
    {
        name: 'ICT Tutorials & Teaching',
        d: 'Tutorials and training resources.'
    },
    {
        name: 'Maker Projects & DIY Builds',
        d: 'Woodwork, 3D modelling and builds.'
    },
    {
        name: 'Experiments & Behind the Scenes',
        d: 'What worked, what failed, what I learned.'
    }
];

// Add real videos here:
// {id:'YOUTUBE_VIDEO_ID',title:'...',category:'one of the names above'}

var videos = [
    {
        id: 'zenpoo--jCw',
        title: 'Gunna Feat Chebii & Cecil',
        category: 'Maker Projects & DIY Builds'
    }
];

window.DATA = {
    site: site,
    roles: roles,
    expertise: expertise,
    timeline: timeline,
    sections: sections,
    categories: categories,
    videos: videos
};
