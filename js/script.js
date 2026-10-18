window.SITE_DATA = {

  /* ---------- GLOBAL SETTINGS ---------- */
  settings: {
    showSampleBadges: true,   // shows small "SAMPLE" tags on placeholder content. Set false before launch.
    introEnabled: true        // cinematic boot intro on page load
  },

  /* ---------- PERSONAL INFO ---------- */
  profile: {
    name: "SUDHARSON RAVI",
    role: "VIDEO EDITOR",
    experience: "2+ Years",
    photo: "videos/image1.jpg",                // optional: URL of your portrait (square works best). Empty = "SR" monogram.
    // Shown in the "player card" next to the About text
    card: [
      ["Player", "Sudharson Ravi"],
      ["Class",  "Video Editor"],
      ["Level",  "2+ Years"],
      ["Spec",   "Cinematic × AI"]
    ]
  },

  hero: {
    headline: ["I EDIT STORIES.", "I CREATE EXPERIENCES."],
    sub: "Video Editor with 2+ years of experience crafting engaging, cinematic, and visually powerful content."
  },

  about: {
    text: "I'm Sudharson Ravi, a passionate video editor with 2+ years of experience turning raw footage into engaging visual stories. I specialize in creating videos that combine strong storytelling, cinematic editing, motion graphics, visual effects, and modern AI-powered workflows.",
    aiNote: "I actively use modern AI tools for video editing, workflow automation, ideation, visual generation, and post-production.",
    mainSkills: [
      "Video Editing", "Motion Graphics", "Visual Effects", "AI-assisted Video Editing",
      "Cinematic Editing", "Short-form Content", "Social Media Video Editing", "Creative Storytelling"
    ]
  },

  /* ---------- ABILITY CARDS (About section) — value is 0–100 ---------- */
  abilities: [
    { name: "Video Editing",     value: 95, desc: "Pacing, rhythm and clean cuts that hold attention." },
    { name: "Motion Graphics",   value: 90, desc: "Titles, transitions and animated graphics." },
    { name: "Visual Effects",    value: 85, desc: "Compositing and effects that serve the story." },
    { name: "AI Video Workflow", value: 90, desc: "AI tools for ideation, automation and finishing." },
    { name: "Storytelling",      value: 88, desc: "Turning raw footage into a clear narrative." },
    { name: "Figma",             value: 80, desc: "Layouts, thumbnails and design assets." }
  ],

  /* ---------- SOFTWARE ARSENAL — level is 0–100, accent is the card glow colour ---------- */
  arsenal: [
    { name: "DaVinci Resolve",   mark: "Dr", level: 90, accent: "#ff7a45", slot: "Edit · Colour",
      desc: "Cinematic cutting, colour grading and finishing.",
      detail: "Where raw footage gets its final look: precise cuts, colour and delivery.",
      uses: ["Colour grading", "Cinematic editing", "Finishing & delivery"] },
    { name: "After Effects",     mark: "Ae", level: 88, accent: "#9d8cff", slot: "Motion · VFX",
      desc: "Motion graphics, compositing and visual effects.",
      detail: "Animated titles, transitions, compositing and effects that add polish and impact.",
      uses: ["Motion graphics", "Compositing", "Visual effects"] },
    { name: "Premiere Pro",      mark: "Pr", level: 95, accent: "#e879ff", slot: "Edit · Assembly",
      desc: "Fast, precise storytelling edits.",
      detail: "Story-driven editing for short-form, social and long-form projects.",
      uses: ["Story-driven editing", "Short-form content", "Social media cuts"] },
    { name: "Figma",             mark: "Fg", level: 80, accent: "#16d68a", slot: "Design · Layout",
      desc: "Layouts, thumbnails and design assets.",
      detail: "Planning thumbnails, layouts and motion design assets before they reach the timeline.",
      uses: ["Thumbnails", "Layouts & storyboards", "Design assets"] },
    { name: "AI Tools",          mark: "AI", level: 90, accent: "#22e6ff", slot: "Boost · Workflow",
      desc: "Modern AI tools across the whole workflow.",
      detail: "I actively use modern AI tools for video editing, workflow automation, ideation, visual generation, and post-production.",
      uses: ["Workflow automation", "Ideation", "Visual generation", "Post-production"] }
  ],

    /* ---------- SHOWREEL ----------
      videos: ordered direct video file URLs (.mp4/.webm) used by the showreel playlist.
      poster: optional poster image URL.  duration: only used for simulated placeholder playback. */
  showreel: {
    videos: [
        "https://res.cloudinary.com/atmtkyag/video/upload/v1791378387/video1.mp4",
        "https://res.cloudinary.com/atmtkyag/video/upload/v1791381882/Barzell_2a_web.mp4",
        "https://res.cloudinary.com/atmtkyag/video/upload/v1791379745/truff.mp4",
        "https://res.cloudinary.com/atmtkyag/video/upload/v1791379127/CANDID_VIDEO-3.mp4",
        "https://res.cloudinary.com/atmtkyag/video/upload/v1791379746/SHARSNG_SATHISH.mp4"
    ],

    poster: "",
    title: "SHOWREEL 2026",
    duration: 60
},

  /* ---------- PROJECTS (10 placeholders) ----------
     videoUrl:  direct link to the video file (.mp4/.webm). Empty = simulated placeholder player.
     thumbnail: URL of your own thumbnail. Empty = auto-generated placeholder art from `art`.
     duration:  display text, e.g. "01:12".  Keep `category` consistent — filter tabs are built from it. */
  projects: [
    { title: "Neon Nights", category: "Cinematic", duration: "01:12", year: "2026",
      description: "A moody, night-city visual set with neon grading, cinematic pacing, and a polished urban atmosphere.",
      software: ["DaVinci Resolve", "After Effects"], videoUrl: "https://res.cloudinary.com/atmtkyag/video/upload/v1791383189/Sudharson_Mov_web.mp4", thumbnail: "assets/images/sudharson__mov 1.jpg", sample: true,
      art: { motif: "city", seed: 11, colors: ["#0a0620", "#2a0f55", "#7a1f7a"], accent: "#ff3fd0" } },
    { title: "Gym Day 100", category: "YouTube", duration: "08:24", year: "2026",
      description: "A high-energy fitness montage built around momentum, rhythm, and retention-focused editing for social impact.",
      software: ["Premiere Pro", "After Effects"], videoUrl: "https://res.cloudinary.com/atmtkyag/video/upload/v1791381890/Gym_Day_100.mp4", thumbnail: "assets/images/gymday100 1.jpg", sample: true,
      art: { motif: "wave", seed: 22, colors: ["#12071f", "#3a1250", "#b8324f"], accent: "#ff9a3c" } },
    { title: "Kanish & Harini", category: "Instagram Reels", duration: "00:28", year: "2026",
      description: "A warm, romantic vertical edit with quick emotional beats, smooth transitions, and social-first storytelling.",
      software: ["Premiere Pro", "After Effects"], videoUrl: "https://res.cloudinary.com/atmtkyag/video/upload/v1791379597/kanish_harini.mp4", thumbnail: "assets/images/kanish 1.jpg", sample: true,
      art: { motif: "orbs", seed: 33, colors: ["#050a1f", "#0d1d5c", "#4b1c8f"], accent: "#22e6ff" } },
    { title: "Sharang Sathish Reel", category: "Commercial", duration: "00:45", year: "2026",
      description: "A sleek product-focused commercial edit blending premium visuals, motion graphics, and polished cut rhythm.",
      software: ["DaVinci Resolve", "After Effects"], videoUrl: "https://res.cloudinary.com/atmtkyag/video/upload/v1791379746/SHARSNG_SATHISH.mp4", thumbnail: "assets/images/shar 1.jpg", sample: true,
      art: { motif: "product", seed: 44, colors: ["#04070f", "#0b1b3d", "#123a7a"], accent: "#2f6bff" } },
    { title: "The Last Signal", category: "Short Film", duration: "06:40", year: "2025",
      description: "A cinematic sci-fi edit shaped by suspense, atmosphere, and a carefully paced narrative flow.",
      software: ["DaVinci Resolve"], videoUrl: "https://res.cloudinary.com/atmtkyag/video/upload/v1791379745/truff.mp4", thumbnail: "assets/images/turfff 1.jpg", sample: true,
      art: { motif: "planet", seed: 55, colors: ["#02030a", "#07142b", "#0e3a4a"], accent: "#ff8a3d" } },
    { title: "BMW Motion Reveal", category: "Motion Graphics", duration: "00:32", year: "2026",
      description: "A luxury automotive motion piece with precision cuts, sleek typography, and confident brand energy.",
      software: ["After Effects", "Figma"], videoUrl: "https://res.cloudinary.com/atmtkyag/video/upload/v1791379600/BMW-3.mp4", thumbnail: "assets/images/BMW.jpg", sample: true,
      art: { motif: "type", seed: 66, colors: ["#0d0524", "#2b0f6b", "#5b21b6"], accent: "#f5e04a" } },
    { title: "Ozone Social Cut", category: "Social Media", duration: "00:50", year: "2025",
      description: "A fast-paced social edit with crisp pacing, caption-led storytelling, and bold visual hooks for engagement.",
      software: ["Premiere Pro", "AI Tools"], videoUrl: "https://res.cloudinary.com/atmtkyag/video/upload/v1791381891/Ozone.mp4", thumbnail: "assets/images/ozone.jpg", sample: true,
      art: { motif: "road", seed: 77, colors: ["#150a1c", "#4a1d3a", "#e0703a"], accent: "#ffb347" } },
    { title: "TPO Launch Promo", category: "Promotional Video", duration: "01:05", year: "2026",
      description: "A launch-day promo cut to spotlight product energy, motion graphics, and a stronger brand-first message.",
      software: ["After Effects", "Premiere Pro", "Figma"], videoUrl: "https://res.cloudinary.com/atmtkyag/video/upload/v1791379591/kesav_bro_TPO__Final.mp4", thumbnail: "assets/images/Real estate 1.jpg", sample: true,
      art: { motif: "grid", seed: 88, colors: ["#070218", "#1b0a4a", "#5a1a8a"], accent: "#ff3fd0" } },
    { title: "TPO AD Campaign", category: "Cinematic", duration: "02:10", year: "2025",
      description: "A travel and brand film edit using warm tones, elegant pacing, and cinematic storytelling to build atmosphere.",
      software: ["DaVinci Resolve"], videoUrl: "https://res.cloudinary.com/atmtkyag/video/upload/v1791379884/TPO_Riya_AD-1.mp4", thumbnail: "assets/images/Real estate 1.jpg", sample: true,
      art: { motif: "mountain", seed: 99, colors: ["#0a0f24", "#2b3f7a", "#e8a06a"], accent: "#ffd08a" } },
    { title: "AI Dreamscape", category: "Motion Graphics", duration: "00:40", year: "2026",
      description: "An experimental concept combining AI-generated visuals, handcrafted motion design, and atmospheric transitions.",
      software: ["AI Tools", "After Effects"], videoUrl: "https://res.cloudinary.com/atmtkyag/video/upload/v1791379894/Spartans_4.mp4", thumbnail: "assets/images/spartanz.jpg", sample: true,
      art: { motif: "ai", seed: 101, colors: ["#030312", "#150a3a", "#0a2a5a"], accent: "#22e6ff" } }
  ],

  /* ---------- CLIENT FEEDBACK (3 cards) — PLACEHOLDERS: replace with real clients ---------- */
  clientFeedback: [
    { name: "Parthiban", projectType: "YouTube Video", rating: 5, avatar: "", sample: true,
      quote: "You transformed the raw footage into something much more engaging. The editing was exactly what I needed." },
    { name: "Barzell", projectType: "Brand Video", rating: 5, avatar: "", sample: true,
      quote: "Great storytelling, smooth transitions, and excellent attention to detail." },
    { name: "Suman", projectType: "Social Media Content", rating: 5, avatar: "", sample: true,
      quote: "Professional editing and very fast turnaround." }
  ],

  /* ---------- EDITOR STATS — edit values freely. Use `text` for non-numeric values like "24/7". ---------- */
  stats: [
    { value: 2,   suffix: "+", label: "Years experience" },
    { value: 10,  suffix: "+", label: "Featured projects" },
    { value: 100, suffix: "%", label: "Creative focus" },
    { text: "24/7",              label: "Passion for editing" }
  ],

  /* ---------- TESTIMONIAL SLIDER — PLACEHOLDERS: replace with real reviews ---------- */
  testimonials: [
    { name: "Nithis", company: "Agency", rating: 5, avatar: "", sample: true,
      quote: "The launch video felt like a proper campaign. Every cut had a reason, and the pacing kept people watching to the end." },
    { name: "Vikram S.", company: "Agency", rating: 5, avatar: "", sample: true,
      quote: "Sudharson understood the tone straight away. The edit gave the film the rhythm I couldn't find on my own." },
    { name: "Devaraj", company: "Agency", rating: 5, avatar: "", sample: true,
      quote: "Fast, communicative and creative. My reels look sharper and my audience has noticed." },
    { name: "Lokesh", company: "Agency", rating: 5, avatar: "", sample: true,
      quote: "Clear direction, quick revisions and a final cut that made our product easy to understand." },
    { name: "Jeeva", company: "Agency", rating: 5, avatar: "", sample: true,
      quote: "Our long recordings became short, shareable clips with strong hooks. Exactly what we needed." }
  ],

  /* ---------- CONTACT ---------- */
  contact: {
    lead1: "Have footage that needs a story?",
    lead2: "Let's turn your raw footage into something people remember.",
    email: "sudharsonrvsj@gmail.com",      // used by the contact form's fallback (opens the visitor's mail app)
    formEndpoint: "",                 // optional: Formspree / Netlify / your own POST URL. Empty = uses email above.
    projectTypes: ["YouTube video", "Instagram Reels / Shorts", "Commercial / Ad", "Cinematic", "Motion graphics", "Social media content", "Promotional video", "Something else"],
    budgets: ["Under ₹2,500", "₹2,500 – ₹5,000", "₹5,000 – ₹10,000", "Under₹10,000", "Not sure yet"]
  },

  /* ---------- SOCIAL LINKS — replace the URLs and handles ---------- */
  socials: [
    { icon: "instagram", label: "Instagram", handle: "@SudharsonRavi",       url: "https://www.instagram.com/unemployed_editor.24fps?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" },
    { icon: "youtube",   label: "YouTube",   handle: "youtube.com/@yourchannel", url: "https://youtube.com/@sudharsonravi07?si=VCd9rCtGFeCrT0js" },
    { icon: "whatsapp",  label: "Whatsapp",     handle: "Sudharson Ravi",url: "https://wa.me/919500519847" }
  ],

  footer: {
    tagline: "Video Editor / Creative Storyteller",
    copyright: "© 2026 Sudharson Ravi. All Rights Reserved."
  }
};
/* =========================================
   CONTINUOUS SHOWREEL VIDEO PLAYLIST
   ========================================= */
const optimizeCloudinaryVideo = url => String(url || '').replace(
    /(https:\/\/res\.cloudinary\.com\/[^/]+\/video\/upload\/)(?=v\d+\/)/,
    '$1q_auto,f_auto,w_1280/'
);

document.addEventListener("DOMContentLoaded", () => {

    const video = document.getElementById("showreelVideo");

    if (!video) {
        console.log("Showreel video element not found.");
        return;
    }

    const videos = window.SITE_DATA.showreel.videos || [];

    let currentVideo = 0;


    function loadVideo(index) {

        currentVideo = index;

        if (video.getAttribute("src") !== videos[currentVideo]) {
            video.src = videos[currentVideo];
            video.load();
        }

        video.play().catch(error => {
            console.log("Autoplay waiting for user interaction:", error);
        });
    }


    function playNextVideo() {

        currentVideo++;

        if (currentVideo >= videos.length) {
            currentVideo = 0;
        }

        loadVideo(currentVideo);
    }


    // Start first video
    loadVideo(0);


    // Automatically play the next video
    video.addEventListener("ended", playNextVideo);

});

/* ==========================================================================
   SUDHARSON RAVI — PORTFOLIO
   Structure:  helpers → icons → procedural thumbnails → section renderers
               → player → modal → hero FX → interactions → boot/init
   All content comes from window.SITE_DATA (see the EDIT ME block above).
   ========================================================================== */
(() => {
'use strict';

const D = window.SITE_DATA;
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const pad = n => String(n).padStart(2, '0');
const get = (o, path) => path.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover:hover) and (pointer:fine)').matches;
const showSample = !!(D.settings && D.settings.showSampleBadges);
const tc = (t, fps = 24) => { const s = Math.floor(t); return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s % 3600 / 60))}:${pad(s % 60)}:${pad(Math.floor((t - s) * fps))}`; };
const mmss = t => `${pad(Math.floor(t / 60))}:${pad(Math.floor(t % 60))}`;
const rank = v => v >= 95 ? 'S' : v >= 90 ? 'A+' : v >= 85 ? 'A' : v >= 80 ? 'B+' : v >= 70 ? 'B' : 'C';
const tier = v => v >= 95 ? 'LEGENDARY' : v >= 90 ? 'EPIC' : v >= 85 ? 'RARE' : 'UNCOMMON';
const segs = (v, n = 10) => Array.from({ length: n }, (_, k) => `<i class="${k < Math.round(v / 100 * n) ? 'on' : ''}" style="--k:${k}"></i>`).join('');
const sample = o => (showSample && o.sample) ? '<span class="sample-tag">SAMPLE</span>' : '';

/* ---------- icons (Lucide-style inline SVG, no external requests) ---------- */
const ICONS = {
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  pause: '<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>',
  volume: '<path d="M11 5 6 9H2v6h4l5 4V5Z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
  mute: '<path d="M11 5 6 9H2v6h4l5 4V5Z"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/>',
  maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
  minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>',
  left: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  right: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  youtube: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  sparkles: '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>',
  menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  up: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>'
};
const icon = (n, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[n]}</svg>`;

/* ---------- small content helpers ---------- */
const initials = n => n.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
function avatar(name, url) {
  if (url) return `<img class="avatar" src="${esc(url)}" alt="" loading="lazy">`;
  const h = Math.abs([...name].reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7)) % 360;
  return `<span class="avatar" aria-hidden="true" style="background:linear-gradient(135deg,hsl(${h} 75% 48%),hsl(${(h + 55) % 360} 70% 32%))">${esc(initials(name))}</span>`;
}
const stars = n => `<span class="stars" role="img" aria-label="${n} out of 5 stars">${[1, 2, 3, 4, 5].map(i => icon('star', i <= n ? 'fill' : 'fill off')).join('')}</span>`;

/* ==========================================================================
   PROCEDURAL PLACEHOLDER THUMBNAILS
   Generated as SVG so the page needs no image files. Replace by setting
   `thumbnail: "https://…"` on any project.
   ========================================================================== */
const W = 640, H = 360;
const f = n => Math.round(n * 10) / 10;
const rng = seed => { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; };
const pick = (r, arr) => arr[(r() * arr.length) | 0];

const MOTIFS = {
  city(r, p) {
    let s = `<circle cx="${f(430 + r() * 90)}" cy="${f(120 + r() * 30)}" r="44" fill="${p.accent}" opacity=".9" filter="url(#b1)"/>`;
    const cols = ['#26174d', '#180d36', '#08050f'];
    for (let L = 0; L < 3; L++) {
      let x = -20;
      while (x < W) {
        const w = 26 + r() * (38 - L * 6), h = (150 - L * 28) + r() * (100 - L * 10), y = H - h;
        s += `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" fill="${cols[L]}"/>`;
        if (L > 0) for (let wy = y + 10; wy < H - 14; wy += 13) for (let wx = x + 5; wx < x + w - 7; wx += 9)
          if (r() < (L === 2 ? .16 : .1)) s += `<rect x="${f(wx)}" y="${f(wy)}" width="4" height="6" fill="${pick(r, ['#22e6ff', p.accent, '#ffd27a'])}" opacity="${f(.5 + r() * .5)}"/>`;
        x += w + r() * 4;
      }
    }
    s += `<rect x="120" y="150" width="6" height="90" fill="#22e6ff" filter="url(#b1)"/><rect x="121" y="150" width="3" height="90" fill="#dffcff"/><rect x="500" y="190" width="70" height="5" fill="${p.accent}" filter="url(#b1)"/>`;
    for (let i = 0; i < 46; i++) { const x = r() * W, y = r() * H; s += `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x - 6)}" y2="${f(y + 18)}" stroke="#bfe9ff" stroke-opacity=".22"/>`; }
    return s;
  },
  wave(r, p) {
    let s = '';
    for (let i = 0; i < 14; i++) s += `<circle cx="${f(r() * W)}" cy="${f(r() * H * .8)}" r="${f(14 + r() * 40)}" fill="${i % 2 ? p.accent : '#ff3fd0'}" opacity="${f(.08 + r() * .18)}" filter="url(#b2)"/>`;
    const n = 58;
    for (let i = 0; i < n; i++) {
      const x = 24 + i * ((W - 48) / n), env = Math.sin(i / n * Math.PI), amp = (10 + r() * 70) * (.35 + env * .8);
      s += `<rect x="${f(x)}" y="${f(180 - amp)}" width="6" height="${f(amp * 2)}" rx="3" fill="${i % 11 === 0 ? p.accent : '#ffffff'}" opacity="${f(.25 + .55 * env)}"/>`;
    }
    return s + `<rect x="0" y="179" width="${W}" height="2" fill="${p.accent}" opacity=".6"/>`;
  },
  orbs(r, p) {
    let s = '';
    const pal = [p.accent, '#22e6ff', '#7c3aed', '#ff3fd0'];
    for (let i = 0; i < 30; i++) s += `<circle cx="${f(r() * W)}" cy="${f(r() * H)}" r="${f(8 + r() * 36)}" fill="${pal[i % 4]}" opacity="${f(.1 + r() * .35)}" filter="url(#b1)"/>`;
    s += `<path d="M190 360C196 262 256 222 320 222C384 222 444 262 450 360Z" fill="#050308"/><circle cx="320" cy="152" r="42" fill="#050308"/>`;
    return s + `<path d="M320 110A42 42 0 0 1 362 152" fill="none" stroke="${p.accent}" stroke-width="2.5" filter="url(#b1)"/><path d="M444 340C436 262 392 232 350 224" fill="none" stroke="${p.accent}" stroke-width="2" opacity=".7"/>`;
  },
  product(r, p) {
    const cube = (cx, cy, sz, a, b, c, o = 1) => { const h = .866 * sz; return `<g opacity="${o}"><polygon points="${cx},${cy - sz} ${f(cx + h)},${f(cy - sz / 2)} ${cx},${cy} ${f(cx - h)},${f(cy - sz / 2)}" fill="${a}"/><polygon points="${f(cx - h)},${f(cy - sz / 2)} ${cx},${cy} ${cx},${cy + sz} ${f(cx - h)},${f(cy + sz / 2)}" fill="${b}"/><polygon points="${cx},${cy} ${f(cx + h)},${f(cy - sz / 2)} ${f(cx + h)},${f(cy + sz / 2)} ${cx},${cy + sz}" fill="${c}"/></g>`; };
    let s = `<polygon points="290,0 350,0 520,300 120,300" fill="#fff" opacity=".06" filter="url(#b1)"/><ellipse cx="320" cy="262" rx="170" ry="26" fill="${p.accent}" opacity=".35" filter="url(#b2)"/>`;
    s += cube(320, 170, 84, '#dbe8ff', '#4a78e8', '#1a3a9a') + cube(150, 220, 34, '#a9c4ff', '#2f56c8', '#15308a', .8) + cube(505, 205, 44, '#a9c4ff', '#2f56c8', '#15308a', .85) + cube(440, 105, 20, '#22e6ff', '#1a9db3', '#0e6a80', .7) + cube(205, 120, 16, '#7c3aed', '#5b2bb8', '#3a1a80', .7);
    return s + `<line x1="60" y1="290" x2="580" y2="290" stroke="${p.accent}" stroke-opacity=".5"/>`;
  },
  planet(r, p) {
    let s = `<defs><radialGradient id="pl" cx=".3" cy=".3" r=".9"><stop offset="0" stop-color="${p.accent}"/><stop offset=".55" stop-color="#3a1a3a"/><stop offset="1" stop-color="#05020f"/></radialGradient></defs>`;
    for (let i = 0; i < 70; i++) s += `<circle cx="${f(r() * W)}" cy="${f(r() * H * .8)}" r="${f(.4 + r() * 1.1)}" fill="#fff" opacity="${f(.2 + r() * .7)}"/>`;
    s += `<circle cx="450" cy="190" r="150" fill="url(#pl)"/><ellipse cx="450" cy="190" rx="240" ry="34" fill="none" stroke="${p.accent}" stroke-opacity=".55" stroke-width="2" transform="rotate(-16 450 190)"/>`;
    s += `<path d="M0 360V308Q120 274 230 304T430 322L640 306V360Z" fill="#03020a"/><path d="M124 300V206" stroke="#03020a" stroke-width="4"/><path d="M104 208Q124 194 144 208" fill="none" stroke="#03020a" stroke-width="3"/>`;
    for (let i = 1; i <= 3; i++) s += `<circle cx="124" cy="206" r="${i * 22}" fill="none" stroke="#22e6ff" stroke-opacity="${f(.5 - i * .13)}"/>`;
    return s + `<g fill="#03020a"><circle cx="212" cy="290" r="5"/><path d="M205 312L207 296Q212 292 217 296L219 312Z"/></g>`;
  },
  type(r, p) {
    let s = '';
    for (let i = 0; i < 6; i++) s += `<rect x="${-60 + i * 130}" y="-20" width="34" height="420" fill="${i % 2 ? '#7c3aed' : p.accent}" opacity="${f(.06 + r() * .1)}" transform="skewX(-18)"/>`;
    const t = (dx, st, o) => `<text x="${320 + dx}" y="218" text-anchor="middle" font-family="Impact,Arial Black,sans-serif" font-weight="900" font-size="132" textLength="520" lengthAdjust="spacingAndGlyphs" fill="none" stroke="${st}" stroke-width="2" opacity="${o}">KINETIC</text>`;
    s += t(-36, '#7c3aed', .4) + t(-24, '#2f6bff', .55) + t(-12, p.accent, .75);
    s += `<text x="320" y="218" text-anchor="middle" font-family="Impact,Arial Black,sans-serif" font-weight="900" font-size="132" textLength="520" lengthAdjust="spacingAndGlyphs" fill="#fff">KINETIC</text><rect x="60" y="246" width="520" height="4" fill="${p.accent}"/>`;
    for (let i = 0; i < 8; i++) s += `<rect x="${60 + i * 66}" y="266" width="${f(20 + r() * 40)}" height="6" fill="#fff" opacity=".35"/>`;
    return s;
  },
  road(r, p) {
    let s = `<rect y="200" width="${W}" height="160" fill="#0a0710"/><circle cx="320" cy="196" r="80" fill="${p.accent}" opacity=".5" filter="url(#b2)"/><polygon points="306,200 334,200 700,360 -60,360" fill="#14101c"/>`;
    s += `<line x1="306" y1="200" x2="-60" y2="360" stroke="${p.accent}" stroke-opacity=".7"/><line x1="334" y1="200" x2="700" y2="360" stroke="${p.accent}" stroke-opacity=".7"/>`;
    for (let i = 0; i < 7; i++) { const t = (i + 1) / 8, y = 200 + 160 * t * t, w = 1 + 8 * t * t, h = 2 + 14 * t * t; s += `<rect x="${f(320 - w / 2)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" fill="#ffe9b0" opacity=".85"/>`; }
    for (let i = 0; i < 6; i++) {
      const t = (i + 1) / 7, y = 200 + 160 * t * t, off = 24 + 400 * t * t, ph = 10 + 80 * t * t;
      for (const sd of [-1, 1]) { const x = 320 + sd * off; s += `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x)}" y2="${f(y - ph)}" stroke="#05030a" stroke-width="${f(1 + 3 * t)}"/><circle cx="${f(x)}" cy="${f(y - ph)}" r="${f(1.5 + 5 * t)}" fill="${p.accent}" filter="url(#b1)"/><circle cx="${f(x)}" cy="${f(y - ph)}" r="${f(1 + 2.5 * t)}" fill="#fff"/>`; }
    }
    return s + `<path d="M0 200Q80 176 170 196T330 198T500 188T640 200V204H0Z" fill="#05030a"/>`;
  },
  grid(r, p) {
    let s = `<defs><linearGradient id="sun" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe066"/><stop offset=".5" stop-color="${p.accent}"/><stop offset="1" stop-color="#7c3aed"/></linearGradient><mask id="sm"><rect width="${W}" height="${H}" fill="#fff"/>${[0, 1, 2, 3, 4].map(i => `<rect x="200" y="${150 + i * 10}" width="240" height="${f(2 + i * 1.5)}" fill="#000"/>`).join('')}</mask></defs>`;
    for (let i = 0; i < 50; i++) s += `<circle cx="${f(r() * W)}" cy="${f(r() * 170)}" r="${f(.4 + r() * .9)}" fill="#fff" opacity="${f(.2 + r() * .6)}"/>`;
    s += `<circle cx="320" cy="196" r="96" fill="url(#sun)" mask="url(#sm)"/><rect y="200" width="${W}" height="160" fill="#08031a"/>`;
    for (let i = 1; i <= 9; i++) s += `<line x1="0" y1="${f(200 + 160 * Math.pow(i / 9, 2))}" x2="${W}" y2="${f(200 + 160 * Math.pow(i / 9, 2))}" stroke="#22e6ff" stroke-opacity="${f(.25 + i * .06)}"/>`;
    for (let x = -500; x <= 1140; x += 100) s += `<line x1="320" y1="200" x2="${x}" y2="360" stroke="#22e6ff" stroke-opacity=".45"/>`;
    return s + `<rect y="199" width="${W}" height="2" fill="#22e6ff" opacity=".8" filter="url(#b1)"/>`;
  },
  mountain(r, p) {
    let s = '';
    for (let i = 0; i < 60; i++) s += `<circle cx="${f(r() * W)}" cy="${f(r() * 170)}" r="${f(.4 + r() * .9)}" fill="#fff" opacity="${f(.15 + r() * .5)}"/>`;
    s += `<circle cx="420" cy="190" r="90" fill="${p.accent}" opacity=".28" filter="url(#b2)"/><circle cx="420" cy="190" r="34" fill="${p.accent}" opacity=".95"/>`;
    const fills = ['#3a3f70', '#232a55', '#10132b', '#05060f'];
    for (let L = 0; L < 4; L++) {
      const base = 210 + L * 36, amp = 90 - L * 16;
      let d = `M-10 ${H}L-10 ${base}`;
      for (let x = 0; x <= W + 40; x += 32) d += `L${x} ${f(base - Math.abs(Math.sin(x * .013 + L * 2 + r() * .4)) * amp * (.4 + r() * .6))}`;
      s += `<path d="${d}L${W + 10} ${H}Z" fill="${fills[L]}"/><rect x="0" y="${base - 10}" width="${W}" height="70" fill="${p.colors[2]}" opacity="${f(.18 - L * .03)}" filter="url(#b2)"/>`;
    }
    return s;
  },
  ai(r, p) {
    let s = '';
    const pal = [p.accent, '#7c3aed', '#2f6bff', '#ff3fd0'];
    for (let i = 0; i < 6; i++) s += `<circle cx="${f(80 + r() * 480)}" cy="${f(40 + r() * 280)}" r="${f(70 + r() * 90)}" fill="${pal[i % 4]}" opacity="${f(.18 + r() * .2)}" filter="url(#b2)"/>`;
    for (let k = 0; k < 16; k++) {
      let d = '';
      for (let i = 0; i <= 72; i++) { const a = i / 72 * Math.PI * 2, rad = 38 + k * 9 + Math.sin(a * 3 + k * .7) * (6 + k * 1.1) + Math.cos(a * 5 - k) * (3 + k * .4); d += (i ? 'L' : 'M') + f(320 + Math.cos(a) * rad * 1.5) + ' ' + f(180 + Math.sin(a) * rad * .9); }
      s += `<path d="${d}Z" fill="none" stroke="${pal[k % 3]}" stroke-width="1.2" opacity="${f(.85 - k * .04)}"/>`;
    }
    for (let i = 0; i < 50; i++) s += `<circle cx="${f(r() * W)}" cy="${f(r() * H)}" r="${f(.6 + r() * 1.6)}" fill="#fff" opacity="${f(.2 + r() * .6)}"/>`;
    return s;
  }
};

function thumbSVG(a) {
  const r = rng(a.seed || 1), [c1, c2, c3] = a.colors, acc = a.accent;
  const defs = `<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset=".6" stop-color="${c2}"/><stop offset="1" stop-color="${c3}"/></linearGradient><radialGradient id="bloom" cx=".5" cy=".62" r=".65"><stop offset="0" stop-color="${acc}" stop-opacity=".5"/><stop offset="1" stop-color="${acc}" stop-opacity="0"/></radialGradient><linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset=".5" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".7"/></linearGradient><filter id="b1" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="5"/></filter><filter id="b2" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="18"/></filter></defs>`;
  const body = (MOTIFS[a.motif] || MOTIFS.orbs)(r, a);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">${defs}<rect width="${W}" height="${H}" fill="url(#sky)"/><rect width="${W}" height="${H}" fill="url(#bloom)"/>${body}<rect width="${W}" height="${H}" fill="url(#fade)"/></svg>`;
}
const svgURI = s => 'url("data:image/svg+xml;utf8,' + s.replace(/"/g, "'").replace(/%/g, '%25').replace(/#/g, '%23').replace(/</g, '%3C').replace(/>/g, '%3E').replace(/\s+/g, ' ') + '")';

/* Each project gets a CSS variable --thumb-N on <html>; components reference it with var(--thumb-N) */
function buildThumbs() {
  D.projects.forEach((p, i) => {
    const v = p.thumbnail
      ? `url("${new URL(p.thumbnail, document.baseURI).href.replace(/"/g, '%22')}")`
      : svgURI(thumbSVG(p.art || { motif: 'orbs', seed: i + 1, colors: ['#050a1f', '#0d1d5c', '#4b1c8f'], accent: '#22e6ff' }));
    document.documentElement.style.setProperty('--thumb-' + i, v);
  });
}

/* ==========================================================================
   SECTION RENDERERS
   ========================================================================== */
function bind() {
  $$('[data-bind]').forEach(el => { const v = get(D, el.dataset.bind); if (typeof v === 'string') el.textContent = v; });
  document.title = `${D.profile.name.replace(/\b(\w)(\w*)/g, (m, a, b) => a + b.toLowerCase())} — ${D.profile.role.charAt(0) + D.profile.role.slice(1).toLowerCase()} | Cinematic Editing, Motion Graphics & AI Workflows`;
  // structured data for search engines (built from the same data)
  const ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: D.profile.name.replace(/\b(\w)(\w*)/g, (m, a, b) => a + b.toLowerCase()), jobTitle: 'Video Editor', description: D.hero.sub, knowsAbout: D.about.mainSkills, sameAs: D.socials.filter(s => /^https?:/.test(s.url)).map(s => s.url) });
  document.head.appendChild(ld);
}

function renderStaticIcons() {
  $('#navToggle').innerHTML = icon('menu');
  $('#aiIcon').innerHTML = icon('sparkles');
  $('#bigPlayIcon').innerHTML = icon('play', 'fill');
  $('#slPrev').innerHTML = icon('left');
  $('#slNext').innerHTML = icon('right');
  $('#wave').innerHTML = Array.from({ length: 22 }, (_, i) => `<i style="--i:${i}"></i>`).join('');
}

function renderAbout() {
  const P = D.profile;
  $('#skillChips').innerHTML = D.about.mainSkills.map(s => `<li class="chip">${esc(s)}</li>`).join('');
  $('#pcard').innerHTML =
    `<div class="pcard-avatar">${P.photo ? `<img src="${esc(P.photo)}" alt="Portrait of ${esc(P.name)}">` : `<span class="mono-sr" aria-hidden="true">${esc(initials(P.name))}</span>`}<i class="scan"></i></div>` +
    `<dl class="pcard-rows">${P.card.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>` +
    `<div class="xp" aria-hidden="true">Creative XP<div class="xp-bar"><i></i></div></div>`;
  $('#abilities').innerHTML = D.abilities.map((a, i) =>
    `<article class="ability" role="listitem" data-reveal data-tilt="5" style="--d:${i * 90}ms">
      <div class="ring" role="img" aria-label="${esc(a.name)}: ${a.value} percent">
        <svg viewBox="0 0 100 100" aria-hidden="true"><circle class="track" cx="50" cy="50" r="44"/><circle class="fill" cx="50" cy="50" r="44" style="--v:${a.value}"/></svg>
        <div class="ring-val" aria-hidden="true"><span><b data-count="${a.value}">${a.value}</b><small>%</small></span></div>
      </div>
      <div class="ab-body"><h3>${esc(a.name)}</h3><p>${esc(a.desc)}</p><div class="seg" aria-hidden="true">${segs(a.value)}</div><span class="ab-rank">RANK ${rank(a.value)}</span></div>
    </article>`).join('');
}

function renderArsenal() {
  $('#arsenalGrid').innerHTML = D.arsenal.map((g, i) =>
    `<li class="gear-li" data-reveal style="--d:${i * 80}ms">
      <button type="button" class="gear" data-i="${i}" style="--acc:${g.accent}" aria-pressed="false" aria-label="Equip ${esc(g.name)}, level ${g.level}">
        <span class="gear-top"><span class="hex"><span>${esc(g.mark)}</span></span><span class="gear-slot">Slot ${pad(i + 1)}<br>${esc(g.slot)}</span></span>
        <span class="gear-name">${esc(g.name)}</span>
        <span><span class="gear-lv"><span>LV ${g.level}</span><span>${tier(g.level)}</span></span><span class="seg">${segs(g.level)}</span></span>
        <span class="gear-desc">${esc(g.desc)}</span>
        <span class="gear-eq">Equip</span>
      </button>
    </li>`).join('');
  $('#arsenalGrid').addEventListener('click', e => { const b = e.target.closest('.gear'); if (b) setLoadout(+b.dataset.i); });
  setLoadout(0);
}
function setLoadout(i) {
  const g = D.arsenal[i], box = $('#loadout');
  $$('.gear').forEach((b, k) => { b.setAttribute('aria-pressed', String(k === i)); b.querySelector('.gear-eq').textContent = k === i ? 'Equipped' : 'Equip'; });
  box.style.setProperty('--acc', g.accent);
  box.innerHTML = `<span class="hex" style="--acc:${g.accent}"><span>${esc(g.mark)}</span></span>
    <div class="lo-copy"><span class="lo-tag">EQUIPPED — ${esc(g.slot.toUpperCase())}</span><div class="lo-name">${esc(g.name)}</div><p>${esc(g.detail)}</p></div>
    <ul class="lo-uses">${g.uses.map(u => `<li>${esc(u)}</li>`).join('')}</ul>`;
}

function missionHTML(p, i, k) {
  return `<article class="mission" style="--i:${k}">
    <div class="mission-media" data-open="${i}" data-cursor="VIEW">
      <div class="mission-thumb" style="--thumb:var(--thumb-${i})" role="img" aria-label="Thumbnail for ${esc(p.title)}"></div>
      <div class="mission-shade"></div>
      <span class="m-num">Mission ${pad(i + 1)}</span>
      <span class="m-cat">${esc(p.category)}</span>
      <span class="m-dur">${esc(p.duration || '')}</span>
      ${sample(p)}
      <button type="button" class="m-play" data-open="${i}" aria-label="Play ${esc(p.title)}" data-cursor="PLAY">${icon('play', 'fill')}</button>
    </div>
    <div class="mission-body">
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.description)}</p>
      <ul class="chips" aria-label="Software used">${p.software.map(s => `<li class="chip">${esc(s)}</li>`).join('')}</ul>
      <div class="mission-foot"><button type="button" class="btn-mini" data-open="${i}">View project ${icon('up')}</button></div>
    </div>
  </article>`;
}

let currentFilter = 'All';
function renderMissions(filter = 'All') {
  currentFilter = filter;
  const items = D.projects.map((p, i) => ({ p, i })).filter(({ p }) => filter === 'All' || p.category === filter);
  const grid = $('#missionGrid');
  grid.innerHTML = items.map(({ p, i }, k) => missionHTML(p, i, k)).join('');
  $('#mCount').textContent = `Showing ${pad(items.length)} / ${pad(D.projects.length)} missions${filter === 'All' ? '' : ' — ' + filter}`;
  $$('.fbtn').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.cat === filter)));
  $$('.mission', grid).forEach(el => attachTilt(el, 7, true));
}
function initMissions() {
  const cats = ['All', ...Array.from(new Set(D.projects.map(p => p.category)))];
  $('#filters').innerHTML = cats.map(c => `<button type="button" class="fbtn" data-cat="${esc(c)}" aria-pressed="false">${esc(c)}</button>`).join('');
  $('#filters').addEventListener('click', e => { const b = e.target.closest('.fbtn'); if (b) renderMissions(b.dataset.cat); });
  $('#missionGrid').addEventListener('click', e => {
    const t = e.target.closest('[data-open]');
    if (t) openProject(+t.dataset.open, { autoplay: true, trigger: e.target.closest('button') || t });
  });
  renderMissions('All');
}

function renderFeedback() {
  $('#fbGrid').innerHTML = D.clientFeedback.map((c, i) =>
    `<article class="fb-card hud" data-reveal data-tilt="4" style="--d:${i * 110}ms">
      ${sample(c)}<span class="fb-tag">Transmission ${pad(i + 1)}</span>
      <div class="fb-who">${avatar(c.name, c.avatar)}<div><h3>${esc(c.name)}</h3><p>${esc(c.projectType)}</p></div></div>
      ${stars(c.rating)}
      <blockquote>“${esc(c.quote)}”</blockquote>
    </article>`).join('');
}

function renderStats() {
  $('#statsGrid').innerHTML = D.stats.map((s, i) => {
    const isText = s.text != null, suffix = s.suffix || '';
    return `<div class="stat" role="listitem" data-reveal style="--d:${i * 100}ms">
      <div class="stat-num" ${isText ? `data-scramble="${esc(s.text)}"` : `data-count="${s.value}" data-suffix="${esc(suffix)}"`}>${isText ? esc(s.text) : s.value + esc(suffix)}</div>
      <div class="stat-label">${esc(s.label)}</div>
    </div>`;
  }).join('');
  if (showSample) { const n = $('#statsNote'); n.hidden = false; n.textContent = 'Sample values — edit them in SITE_DATA.stats'; }
}

function renderSlider() {
  const n = D.testimonials.length;
  $('#slTrack').innerHTML = D.testimonials.map((t, i) =>
    `<article class="sl-slide" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${n}">
      ${sample(t)}<div class="sl-quote" aria-hidden="true">“</div>
      <blockquote>${esc(t.quote)}</blockquote>
      <div class="sl-who">${avatar(t.name, t.avatar)}<div><h3>${esc(t.name)}</h3><p>${esc(t.company)}</p></div>${stars(t.rating)}</div>
    </article>`).join('');
  $('#slDots').innerHTML = D.testimonials.map((t, i) => `<button type="button" data-i="${i}" aria-label="Go to testimonial ${i + 1}"></button>`).join('');
}

function renderContact() {
  $('#f-type').innerHTML = D.contact.projectTypes.map(t => `<option>${esc(t)}</option>`).join('');
  $('#f-budget').innerHTML = D.contact.budgets.map(t => `<option>${esc(t)}</option>`).join('');
  $('#socials').innerHTML = D.socials.map(s => {
    const ext = /^https?:/.test(s.url) || /^mailto:/.test(s.url);
    return `<a class="social" href="${esc(s.url)}" ${ext ? 'target="_blank" rel="noopener noreferrer"' : ''} data-cursor="OPEN">${icon(s.icon)}<div><b>${esc(s.label)}</b><span>${esc(s.handle)}</span></div>${icon('up', 'go')}</a>`;
  }).join('');
}
/* ==========================================================================
   INTERACTION HELPERS: tilt, magnetic, cursor
   ========================================================================== */
function attachTilt(el, max = 6, glare = true) {
  if (!finePointer || reduced) return;
  if (glare && !el.querySelector(':scope > .tilt-glare')) {
    const g = document.createElement('div'); g.className = 'tilt-glare'; g.setAttribute('aria-hidden', 'true'); el.appendChild(g);
  }
  let raf = 0;
  const hasReveal = el.hasAttribute('data-reveal');
  el.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    const r = el.getBoundingClientRect();
    const x = clamp((e.clientX - r.left) / r.width, 0, 1), y = clamp((e.clientY - r.top) / r.height, 0, 1);
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      el.style.transform = `perspective(900px) rotateX(${f((.5 - y) * max)}deg) rotateY(${f((x - .5) * max)}deg)`;
      el.style.setProperty('--px', f((x - .5) * 2)); el.style.setProperty('--py', f((y - .5) * 2));
      el.style.setProperty('--gx', (x * 100).toFixed(1) + '%'); el.style.setProperty('--gy', (y * 100).toFixed(1) + '%');
    });
    el.classList.add('is-tilting');
  });
  el.addEventListener('pointerleave', () => {
    cancelAnimationFrame(raf);
    if (hasReveal) { el.style.transition = 'transform .7s var(--ease),opacity .9s var(--ease),translate .9s var(--ease),scale .9s var(--ease),border-color .3s,box-shadow .3s'; setTimeout(() => { el.style.transition = ''; }, 750); }
    el.style.transform = ''; el.style.setProperty('--px', 0); el.style.setProperty('--py', 0);
    el.classList.remove('is-tilting');
  });
}
function initTilt() { $$('[data-tilt]').forEach(el => attachTilt(el, parseFloat(el.dataset.tilt) || 6, el.id !== 'showreelFrame')); }

function initMagnetic() {
  if (!finePointer || reduced) return;
  $$('[data-magnetic]').forEach(w => {
    const inner = w.firstElementChild;
    w.addEventListener('pointermove', e => {
      const r = w.getBoundingClientRect(), dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      w.style.translate = `${f(dx * .22)}px ${f(dy * .3)}px`; inner.style.translate = `${f(dx * .1)}px ${f(dy * .14)}px`;
    });
    w.addEventListener('pointerleave', () => { w.style.translate = ''; inner.style.translate = ''; });
  });
}

let cur = { x: -100, y: -100, rx: -100, ry: -100, el: null, dot: null, ring: null };
function initCursor() {
  if (!finePointer) return;
  const c = $('#cursor'), lab = $('#cLabel');
  cur.el = c; cur.dot = $('.c-dot', c); cur.ring = $('.c-ring', c);
  addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    cur.x = e.clientX; cur.y = e.clientY; c.classList.add('on');
    const t = e.target.closest ? e.target.closest('a,button,input,select,textarea,[data-cursor],[role="slider"]') : null;
    c.classList.toggle('hover', !!t);
    const l = t && t.closest('[data-cursor]');
    if (l) { lab.textContent = l.dataset.cursor; c.classList.add('label'); } else c.classList.remove('label');
  }, { passive: true });
  document.documentElement.addEventListener('mouseleave', () => c.classList.remove('on'));
}
function cursorTick() {
  if (!cur.el) return;
  cur.rx += (cur.x - cur.rx) * .2; cur.ry += (cur.y - cur.ry) * .2;
  cur.dot.style.transform = `translate3d(${cur.x}px,${cur.y}px,0)`;
  cur.ring.style.transform = `translate3d(${cur.rx.toFixed(1)}px,${cur.ry.toFixed(1)}px,0)`;
}

/* ==========================================================================
   VIDEO PLAYER — used by the showreel and the project modal.
   • With a `src` it wraps a real <video>.
   • Without one it runs a simulated placeholder playback (timer + project thumbnails),
     so every control is fully functional before you add real footage.
   ========================================================================== */
function createPlayer(o) {
  const real = !!o.src;
  const playlist = Array.isArray(o.playlist) ? o.playlist.filter(Boolean) : [];
  const videoSource = url => o.directSource ? url : optimizeCloudinaryVideo(url);
  const isPortrait = /(?:^|\/)portrait-\d+\.mp4$/i.test(o.src || '');
  const root = document.createElement('div');
  root.className = 'pl'; root.dataset.playing = 'false';
  root.dataset.videoOrientation = isPortrait ? 'portrait' : 'landscape';
  const ticks = (o.chapters || []).map(c => `<i class="tick" style="left:${(c * 100).toFixed(2)}%"></i>`).join('');
  root.innerHTML =
    `<div class="pl-stage" data-cursor="PLAY">
       <i class="pl-fx"></i><i class="pl-glint"></i>
       <i class="pl-corner tl"></i><i class="pl-corner tr"></i><i class="pl-corner bl"></i><i class="pl-corner br"></i>
       <span class="pl-hud rec"><i class="rec-dot"></i>REC</span><span class="pl-hud tc">00:00:00:00</span>
       <span class="pl-hud cap"><span class="cap-t"></span>${real ? '' : '<small>Placeholder playback — add a video URL in SITE_DATA</small>'}</span>
       <button type="button" class="pl-center" aria-label="Play video">${icon('play', 'fill')}</button>
     </div>
     <div class="pl-ctl">
       <button type="button" class="pl-btn pl-pp" aria-label="Play">${icon('play', 'fill')}</button>
       <div class="pl-time"><b class="cur">00:00</b><span class="sep"> / </span><span class="dur">00:00</span></div>
       <div class="pl-scrub" role="slider" tabindex="0" aria-label="Seek" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-valuetext="00:00"><i class="rail"></i><i class="prog"></i>${ticks}<i class="knob"></i></div>
       <button type="button" class="pl-btn pl-mute" aria-label="Mute">${icon('volume')}</button>
       <input class="pl-vol" type="range" min="0" max="1" step="0.05" value="1" aria-label="Volume">
       <button type="button" class="pl-btn pl-fs" aria-label="Fullscreen">${icon('maximize')}</button>
     </div>`;
  const q = s => root.querySelector(s);
  const stage = q('.pl-stage'), scrub = q('.pl-scrub'), ppBtn = q('.pl-pp'), centerBtn = q('.pl-center'), muteBtn = q('.pl-mute'), volEl = q('.pl-vol'), fsBtn = q('.pl-fs');
  const curEl = q('.cur'), durEl = q('.dur'), tcEl = q('.pl-hud.tc'), capT = q('.cap-t');

  let v = null, clipEls = [], curClip = -1, currentVideo = 0;
  let t = 0, dur = real ? 0 : (o.duration || 60), playing = false, raf = 0, last = 0, vol = 1, muted = false, dragging = false;

  if (real) {
    v = document.createElement('video');
    v.playsInline = true; v.preload = 'metadata'; v.src = videoSource(o.src); if (o.poster) v.poster = o.poster;
    v.load();
    stage.insertBefore(v, stage.firstChild);
  } else {
    (o.clips || []).forEach(c => { const d = document.createElement('div'); d.className = 'pl-clip'; d.style.backgroundImage = c; stage.insertBefore(d, stage.firstChild); clipEls.unshift(d); });
  }
  durEl.textContent = mmss(dur);

  function update() {
    const p = dur ? clamp(t / dur, 0, 1) : 0, txt = mmss(t);
    scrub.style.setProperty('--p', p.toFixed(4));
    scrub.setAttribute('aria-valuenow', Math.round(p * 100));
    scrub.setAttribute('aria-valuetext', `${txt} of ${mmss(dur)}`);
    if (curEl.textContent !== txt) curEl.textContent = txt;
    tcEl.textContent = tc(t);
    if (!real && clipEls.length) {
      const idx = Math.min(clipEls.length - 1, Math.floor(p * clipEls.length));
      if (idx !== curClip) { if (clipEls[curClip]) clipEls[curClip].classList.remove('on'); clipEls[idx].classList.add('on'); curClip = idx; capT.textContent = (o.captions && o.captions[idx]) || ''; }
    }
  }
  function setPlaying(on) {
    playing = on; root.dataset.playing = String(on);
    ppBtn.innerHTML = icon(on ? 'pause' : 'play', 'fill'); ppBtn.setAttribute('aria-label', on ? 'Pause' : 'Play');
    centerBtn.setAttribute('aria-label', on ? 'Pause video' : 'Play video');
  }
  function loop(now) {
    if (!playing) return;
    if (real) { t = v.currentTime; update(); raf = requestAnimationFrame(loop); return; }
    t += Math.min(.1, (now - last) / 1000); last = now;
    if (t >= dur) { t = dur; update(); pause(); return; }
    update(); raf = requestAnimationFrame(loop);
  }
  function play() {
    if (real) { const pr = v.play(); if (pr && pr.catch) pr.catch(() => {}); return; }
    if (playing) return;
    if (t >= dur) t = 0;
    setPlaying(true); last = performance.now(); raf = requestAnimationFrame(loop);
  }
  function pause() { if (real) { v.pause(); return; } setPlaying(false); cancelAnimationFrame(raf); }
  const toggle = () => (playing ? pause() : play());
  function seek(s) { t = clamp(s, 0, dur || 0); if (real && dur) v.currentTime = t; update(); }

  if (real) {
    v.addEventListener('loadedmetadata', () => { dur = v.duration || 0; durEl.textContent = mmss(dur); update(); });
    v.addEventListener('play', () => { setPlaying(true); cancelAnimationFrame(raf); raf = requestAnimationFrame(loop); });
    v.addEventListener('pause', () => setPlaying(false));
    v.addEventListener('ended', () => {
      if (!playlist.length) { setPlaying(false); update(); return; }
      currentVideo = (currentVideo + 1) % playlist.length;
      v.src = videoSource(playlist[currentVideo]);
      v.load();
      t = 0;
      dur = 0;
      update();
      const pr = v.play();
      if (pr && pr.catch) pr.catch(() => {});
    });
  }

  const seekFrom = e => { const r = scrub.getBoundingClientRect(); seek(clamp((e.clientX - r.left) / r.width, 0, 1) * dur); };
  scrub.addEventListener('pointerdown', e => { scrub.setPointerCapture(e.pointerId); dragging = true; seekFrom(e); });
  scrub.addEventListener('pointermove', e => { if (dragging) seekFrom(e); });
  ['pointerup', 'pointercancel'].forEach(n => scrub.addEventListener(n, () => { dragging = false; }));
  scrub.addEventListener('keydown', e => {
    const k = e.key;
    if (k === 'ArrowRight' || k === 'ArrowUp') seek(t + 5); else if (k === 'ArrowLeft' || k === 'ArrowDown') seek(t - 5);
    else if (k === 'Home') seek(0); else if (k === 'End') seek(dur); else return;
    e.preventDefault();
  });

  function setVol(x) {
    vol = clamp(x, 0, 1); muted = vol === 0;
    if (v) { v.volume = vol; v.muted = muted; }
    volEl.value = vol; volEl.style.setProperty('--v', (vol * 100) + '%');
    muteBtn.innerHTML = icon(muted ? 'mute' : 'volume'); muteBtn.setAttribute('aria-label', muted ? 'Unmute' : 'Mute');
  }
  let lastVol = 1;
  volEl.addEventListener('input', () => { setVol(+volEl.value); if (vol > 0) lastVol = vol; });
  muteBtn.addEventListener('click', () => { if (muted) setVol(lastVol || 1); else { lastVol = vol || 1; setVol(0); } });

  const fsEl = () => document.fullscreenElement || document.webkitFullscreenElement;
  function toggleFS() {
    try {
      if (fsEl() === root) { (document.exitFullscreen || document.webkitExitFullscreen).call(document); }
      else { const p = (root.requestFullscreen || root.webkitRequestFullscreen).call(root); if (p && p.catch) p.catch(() => {}); }
    } catch (err) { /* fullscreen may be blocked in embedded previews */ }
  }
  const onFS = () => { const on = fsEl() === root; fsBtn.innerHTML = icon(on ? 'minimize' : 'maximize'); fsBtn.setAttribute('aria-label', on ? 'Exit fullscreen' : 'Fullscreen'); };
  document.addEventListener('fullscreenchange', onFS); document.addEventListener('webkitfullscreenchange', onFS);
  fsBtn.addEventListener('click', toggleFS);
  stage.addEventListener('click', toggle);
  stage.addEventListener('dblclick', toggleFS);
  ppBtn.addEventListener('click', toggle);
  root.addEventListener('keydown', e => {
    if (e.target.matches('input') || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === 'k') toggle(); else if (e.key === 'm') muteBtn.click(); else if (e.key === 'f') toggleFS();
  });

  setVol(1); update();
  return {
    el: root, play, pause, toggle, seek, isPlaying: () => playing,
    destroy() {
      pause(); cancelAnimationFrame(raf);
      document.removeEventListener('fullscreenchange', onFS); document.removeEventListener('webkitfullscreenchange', onFS);
      if (fsEl() === root) { try { (document.exitFullscreen || document.webkitExitFullscreen).call(document); } catch (e) {} }
      if (v) { v.removeAttribute('src'); v.load(); }
    }
  };
}

let reel = null;
function renderShowreel() {
  const S = D.showreel, n = D.projects.length;
  reel = createPlayer({
    src: S.videos[0], playlist: S.videos, poster: S.poster, duration: S.duration || 60,
    directSource: true,
    clips: D.projects.map((_, i) => `var(--thumb-${i})`),
    captions: D.projects.map(p => p.title),
    chapters: D.projects.map((_, i) => i / n).slice(1)
  });
  $('#showreelFrame').appendChild(reel.el);
}
function initShowreelButtons() {
  $$('[data-showreel-play]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault();
    $('#showreelFrame').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
    setTimeout(() => reel && reel.play(), reduced ? 0 : 900);
  }));
}

/* ==========================================================================
   PROJECT MODAL
   ========================================================================== */
const modal = $('#modal'), mcard = $('#modalCard');
let mPlayer = null, mIndex = -1, lastFocus = null;
const parseDur = s => { const m = /^(\d+):(\d{2})$/.exec(String(s || '')); return m ? (+m[1]) * 60 + (+m[2]) : 30; };

function openProject(i, opts = {}) {
  const p = D.projects[i]; if (!p) return;
  if (mPlayer) { mPlayer.destroy(); mPlayer = null; }
  if (!modal.classList.contains('open')) lastFocus = opts.trigger || document.activeElement;
  mIndex = i;
  mcard.innerHTML =
    `<button type="button" class="modal-close" data-close aria-label="Close project">${icon('x')}</button>
     <div id="modalPlayer"></div>
     <div class="modal-info">
       <div><span class="kick">Mission ${pad(i + 1)} — ${esc(p.category)}</span><h3 id="modalTitle">${esc(p.title)}</h3><p>${esc(p.description)}</p>
         <ul class="chips" style="margin-top:16px" aria-label="Software used">${p.software.map(s => `<li class="chip">${esc(s)}</li>`).join('')}</ul></div>
       <dl class="modal-meta">
         <div><dt>Category</dt><dd>${esc(p.category)}</dd></div>
         <div><dt>Year</dt><dd>${esc(p.year || '—')}</dd></div>
         <div><dt>Duration</dt><dd>${esc(p.duration || '—')}</dd></div>
         <div><dt>Software</dt><dd>${esc(p.software.join(', '))}</dd></div>
       </dl>
     </div>
     <div class="modal-nav">
       <button type="button" class="btn-mini" data-nav="-1">${icon('left')} Previous</button>
       <button type="button" class="btn-mini" data-nav="1">Next ${icon('right')}</button>
     </div>`;
  mPlayer = createPlayer({ src: p.videoUrl, poster: p.thumbnail, duration: parseDur(p.duration), clips: [`var(--thumb-${i})`], captions: [p.title] });
  $('#modalPlayer').appendChild(mPlayer.el);
  modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
  document.documentElement.style.overflow = 'hidden';
  mcard.scrollTop = 0;
  setTimeout(() => { if (opts.autoplay !== false && mPlayer) mPlayer.play(); const c = $('.modal-close', mcard); if (c) c.focus({ preventScroll: true }); }, 60);
}
function closeModal() {
  if (!modal.classList.contains('open')) return;
  if (mPlayer) { mPlayer.destroy(); mPlayer = null; }
  modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true');
  document.documentElement.style.overflow = '';
  if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
}
function initModal() {
  modal.addEventListener('click', e => {
    if (e.target.closest('[data-close]')) return closeModal();
    const nav = e.target.closest('[data-nav]');
    if (nav) { const n = D.projects.length; openProject((mIndex + (+nav.dataset.nav) + n) % n, { autoplay: true }); const b = $(`[data-nav="${nav.dataset.nav}"]`, mcard); if (b) b.focus({ preventScroll: true }); }
  });
  document.addEventListener('keydown', e => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key === 'Tab') {
      const foc = $$('button,[href],input,[tabindex]:not([tabindex="-1"])', mcard).filter(el => !el.disabled && el.offsetParent !== null);
      if (!foc.length) return;
      const first = foc[0], lastEl = foc[foc.length - 1];
      if (e.shiftKey && document.activeElement === first) { lastEl.focus(); e.preventDefault(); }
      else if (!e.shiftKey && document.activeElement === lastEl) { first.focus(); e.preventDefault(); }
    }
  });
}

/* ==========================================================================
   HERO: editing timeline, particles, mouse parallax (one shared rAF loop)
   ========================================================================== */
const hero = $('#top');
const TL = {
  dur: 16, pos: 0.18, drag: false, clips: [],
  tracks: {
    V2: { c: 'rgba(124,58,237,.78)', b: '#a26bff', clips: [[3, 18, 'TITLE_FX'], [36, 14, 'LOWER_3RD'], [66, 20, 'OVERLAY']] },
    V1: { c: 'rgba(47,107,255,.74)', b: '#6b95ff', clips: [[0, 22, 'A_ROLL_01'], [22, 16, 'B_ROLL_04'], [38, 24, 'INTERVIEW'], [62, 18, 'CUTAWAY'], [80, 20, 'OUTRO']] },
    A1: { c: 'rgba(16,150,140,.6)', b: '#22e6c8', wave: true, clips: [[0, 48, 'MUSIC_BED'], [48, 52, 'VO_FINAL']] },
    FX: { c: 'rgba(255,63,208,.5)', b: '#ff3fd0', clips: [[10, 10, 'GLOW'], [30, 8, 'LUT'], [52, 14, 'AI_UPSCALE'], [74, 9, 'SHAKE']] }
  }
};
function waveSVG(seed) {
  const r = rng(seed * 97 + 3); let d = '';
  for (let i = 0; i < 70; i++) { const x = i * (100 / 70), h = 2 + r() * 7 * (.5 + Math.abs(Math.sin(i / 6))); d += `M${f(x)} ${f(10 - h)}V${f(10 + h)}`; }
  return `<svg viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true"><path d="${d}" stroke="rgba(255,255,255,.6)" stroke-width="1" vector-effect="non-scaling-stroke" fill="none"/></svg>`;
}
function buildTimeline() {
  const lanes = $('#tlLanes'); let k = 0;
  $('#tlRuler').innerHTML = Array.from({ length: 9 }, (_, i) => `<span style="left:${i / 8 * 100}%">${mmss(i * 2)}</span>`).join('');
  $$('.tl-lane', lanes).forEach(lane => {
    const cfg = TL.tracks[lane.dataset.track];
    cfg.clips.forEach(([s, w, label]) => {
      const el = document.createElement('div');
      el.className = 'tl-clip'; el.style.cssText = `left:${s}%;width:calc(${w}% - 1px);--c:${cfg.c};--cb:${cfg.b};--k:${k++}`;
      el.innerHTML = (cfg.wave ? waveSVG(s + 1) : '') + `<span style="position:relative">${label}</span>`;
      lane.appendChild(el); TL.clips.push({ el, s, e: s + w, on: false });
    });
  });
  const head = $('#tlHead'), tcEl = $('#tlTc'), mon = $('#monTc');
  TL.set = p => {
    TL.pos = clamp(p, 0, 1);
    head.style.left = (TL.pos * 100) + '%';
    const x = TL.pos * 100, t = tc(TL.pos * TL.dur);
    tcEl.textContent = t; mon.textContent = t;
    TL.clips.forEach(c => { const on = x >= c.s && x < c.e; if (on !== c.on) { c.on = on; c.el.classList.toggle('active', on); } });
  };
  const from = e => { const r = lanes.getBoundingClientRect(); TL.set((e.clientX - r.left) / r.width); };
  lanes.addEventListener('pointerdown', e => { TL.drag = true; lanes.setPointerCapture(e.pointerId); from(e); });
  lanes.addEventListener('pointermove', e => { if (TL.drag) from(e); });
  ['pointerup', 'pointercancel'].forEach(n => lanes.addEventListener(n, () => { TL.drag = false; }));
  TL.set(TL.pos);
}

const pc = $('#particles'), pctx = pc.getContext('2d');
let PW = 0, PH = 0, parts = [];
function sizeParticles() {
  const dpr = Math.min(devicePixelRatio || 1, 1.5);
  PW = pc.clientWidth; PH = pc.clientHeight; pc.width = PW * dpr; pc.height = PH * dpr; pctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const n = clamp(Math.round(PW * PH / 16000), 28, 90), cols = ['34,230,255', '124,58,237', '47,107,255', '255,255,255'];
  parts = Array.from({ length: n }, () => ({ x: Math.random() * PW, y: Math.random() * PH, z: .25 + Math.random() * .75, r: .6 + Math.random() * 1.8, ph: Math.random() * 6.28, c: cols[(Math.random() * 4) | 0] }));
}
let mx = 0, my = 0, tx = 0, ty = 0, lmx = 9, lmy = 9, heroVisible = true, lastT = 0;
function drawParticles(now, dt) {
  pctx.clearRect(0, 0, PW, PH);
  for (const p of parts) {
    p.y -= p.z * 14 * dt; p.x += Math.sin(now / 1800 + p.ph) * .12 * p.z;
    if (p.y < -8) { p.y = PH + 8; p.x = Math.random() * PW; }
    const x = p.x + mx * 26 * p.z, y = p.y + my * 18 * p.z, a = .15 + .55 * p.z * (.6 + .4 * Math.sin(now / 900 + p.ph));
    pctx.fillStyle = `rgba(${p.c},${a.toFixed(3)})`; pctx.beginPath(); pctx.arc(x, y, p.r * p.z * 1.4, 0, 6.283); pctx.fill();
    if (p.z > .8) { pctx.fillStyle = `rgba(${p.c},${(a * .15).toFixed(3)})`; pctx.beginPath(); pctx.arc(x, y, p.r * 5, 0, 6.283); pctx.fill(); }
  }
}
function initHeroFX() {
  sizeParticles();
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(sizeParticles, 200); });
  if ('IntersectionObserver' in window) new IntersectionObserver(es => { heroVisible = es[0].isIntersecting; }, { threshold: 0 }).observe(hero);
  hero.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    const r = hero.getBoundingClientRect(); tx = ((e.clientX - r.left) / r.width - .5) * 2; ty = ((e.clientY - r.top) / r.height - .5) * 2;
  });
  hero.addEventListener('pointerleave', () => { tx = 0; ty = 0; });
  if (reduced) { pctx.clearRect(0, 0, PW, PH); }
}
function tick(now) {
  requestAnimationFrame(tick);
  if (document.hidden) { lastT = now; return; }
  const dt = Math.min(.05, (now - lastT) / 1000 || 0); lastT = now;
  if (heroVisible && !reduced) {
    if (!finePointer) { tx = Math.sin(now / 4200) * .5; ty = Math.cos(now / 5100) * .35; }   // idle camera drift on touch screens
    mx += (tx - mx) * .07; my += (ty - my) * .07;
    if (Math.abs(mx - lmx) > .0004 || Math.abs(my - lmy) > .0004) { hero.style.setProperty('--mx', mx.toFixed(4)); hero.style.setProperty('--my', my.toFixed(4)); lmx = mx; lmy = my; }
    drawParticles(now, dt);
    if (!TL.drag) TL.set((TL.pos + dt / TL.dur) % 1);
  }
  cursorTick();
}

/* ==========================================================================
   NAV + SCROLL
   ========================================================================== */
function initScroll() {
  const nav = $('#nav'), prog = $('#navProgress'), navTc = $('#navTc');
  const pars = reduced ? [] : $$('[data-parallax]').map(el => ({ el, sp: +el.dataset.parallax, sec: el.closest('section') }));
  let ticking = false;
  const run = () => {
    ticking = false;
    const y = scrollY, vh = innerHeight, max = Math.max(1, document.documentElement.scrollHeight - vh), p = clamp(y / max, 0, 1);
    nav.classList.toggle('scrolled', y > 24);
    prog.style.setProperty('--p', p.toFixed(4));
    navTc.textContent = tc(p * 120);
    if (!reduced) hero.style.setProperty('--sy', clamp(y / vh, 0, 1).toFixed(3));
    pars.forEach(o => {
      const r = o.sec.getBoundingClientRect(); if (r.bottom < -300 || r.top > vh + 300) return;
      o.el.style.setProperty('--py', ((r.top + r.height / 2 - vh / 2) * o.sp).toFixed(1) + 'px');
    });
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(run); } }, { passive: true });
  addEventListener('resize', run); run();
}
function initNav() {
  const toggle = $('#navToggle'), links = $('#navLinks');
  const setOpen = on => { links.classList.toggle('open', on); toggle.setAttribute('aria-expanded', String(on)); toggle.setAttribute('aria-label', on ? 'Close menu' : 'Open menu'); toggle.innerHTML = icon(on ? 'x' : 'menu'); };
  toggle.addEventListener('click', () => setOpen(!links.classList.contains('open')));
  links.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && links.classList.contains('open')) { setOpen(false); toggle.focus(); } });
  if ('IntersectionObserver' in window) {
    const map = new Map($$('a', links).map(a => [a.getAttribute('href').slice(1), a]));
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return;
      let hit = en.target.id; if (hit === 'stats') hit = 'feedback'; if (hit === 'reviews') hit = 'feedback';
      map.forEach((a, id) => a.toggleAttribute('aria-current', id === hit)); map.forEach((a, id) => { if (id !== hit) a.removeAttribute('aria-current'); else a.setAttribute('aria-current', 'true'); });
    }), { rootMargin: '-45% 0px -50% 0px' });
    $$('[data-section]').forEach(s => io.observe(s));
  }
}

/* ==========================================================================
   TESTIMONIAL SLIDER
   ========================================================================== */
function initSlider() {
  const track = $('#slTrack'), slides = $$('.sl-slide', track), dots = $$('#slDots button'), prev = $('#slPrev'), next = $('#slNext'), count = $('#slCount');
  let curI = -1, ticking = false;
  const centerOf = s => s.offsetLeft + s.offsetWidth / 2;
  const go = i => { i = clamp(i, 0, slides.length - 1); track.scrollTo({ left: centerOf(slides[i]) - track.clientWidth / 2, behavior: reduced ? 'auto' : 'smooth' }); };
  const sync = () => {
    ticking = false;
    const mid = track.scrollLeft + track.clientWidth / 2; let best = 0, bd = Infinity;
    slides.forEach((s, i) => { const d = Math.abs(centerOf(s) - mid); if (d < bd) { bd = d; best = i; } });
    if (best === curI) return; curI = best;
    slides.forEach((s, i) => s.classList.toggle('active', i === best));
    dots.forEach((d, i) => d.setAttribute('aria-current', String(i === best)));
    count.textContent = `${pad(best + 1)} / ${pad(slides.length)}`;
    prev.disabled = best === 0; next.disabled = best === slides.length - 1;
  };
  track.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(sync); } }, { passive: true });
  addEventListener('resize', sync);
  prev.addEventListener('click', () => go(curI - 1)); next.addEventListener('click', () => go(curI + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
  track.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { go(curI + 1); e.preventDefault(); } else if (e.key === 'ArrowLeft') { go(curI - 1); e.preventDefault(); } });
  track.setAttribute('aria-label', 'Testimonials. Use left and right arrow keys to browse.');
  sync();
}

/* ==========================================================================
   CONTACT FORM
   With no formEndpoint it opens the visitor's email app with the message filled in.
   ========================================================================== */
function initForm() {
  const form = $('#form'), status = $('#formStatus'), btn = $('#submitBtn'), lab = $('#submitLabel');
  const F = { name: $('#f-name'), email: $('#f-email'), msg: $('#f-msg') }, E = { name: $('#e-name'), email: $('#e-email'), msg: $('#e-msg') };
  const setErr = (k, m) => { E[k].textContent = m || ''; F[k].setAttribute('aria-invalid', m ? 'true' : 'false'); return !m; };
  const validate = () => {
    const a = setErr('name', F.name.value.trim() ? '' : 'Enter your name.');
    const b = setErr('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(F.email.value.trim()) ? '' : 'Enter a valid email address, like you@example.com.');
    const c = setErr('msg', F.msg.value.trim().length >= 10 ? '' : 'Tell me a little about the project (at least 10 characters).');
    return a && b && c;
  };
  Object.keys(F).forEach(k => F[k].addEventListener('input', () => { if (F[k].getAttribute('aria-invalid') === 'true') validate(); }));
  form.addEventListener('submit', async e => {
    e.preventDefault(); status.className = 'form-status';
    if (!validate()) { status.textContent = 'Fix the highlighted fields and try again.'; status.classList.add('bad'); const bad = form.querySelector('[aria-invalid="true"]'); if (bad) bad.focus(); return; }
    const data = { name: F.name.value.trim(), email: F.email.value.trim(), type: $('#f-type').value, budget: $('#f-budget').value, message: F.msg.value.trim() };
    lab.textContent = 'Transmitting…'; btn.disabled = true;
    try {
      if (D.contact.formEndpoint) {
        const res = await fetch(D.contact.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error('bad status');
        status.textContent = 'Message sent. I will reply as soon as I can.'; status.classList.add('ok'); form.reset();
      } else {
        const subject = `New Project Inquiry from ${data.name}`;
        const body = [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Project Type: ${data.type}`,
          `Budget: ${data.budget}`,
          `Message: ${data.message}`
        ].join('\n');
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(D.contact.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, "_blank");
        status.textContent = 'Gmail will open with your project request pre-filled. Review the details and hit Send.'; status.classList.add('ok');
      }
    } catch (err) {
      status.textContent = `The message could not be sent. Email ${D.contact.email} directly instead.`; status.classList.add('bad');
    } finally { lab.textContent = 'Initialize project'; btn.disabled = false; }
  });
}

/* ==========================================================================
   REVEALS, TEXT SPLIT, COUNTERS
   ========================================================================== */
function splitWords(root) {
  let i = 0;
  (function walk(node) {
    Array.from(node.childNodes).forEach(ch => {
      if (ch.nodeType === 3) {
        const frag = document.createDocumentFragment();
        ch.textContent.split(/(\s+)/).forEach(tok => {
          if (!tok) return;
          if (/^\s+$/.test(tok)) { frag.appendChild(document.createTextNode(' ')); return; }
          const w = document.createElement('span'), wi = document.createElement('span');
          w.className = 'w'; wi.className = 'wi'; wi.style.setProperty('--i', i++); wi.textContent = tok; w.appendChild(wi); frag.appendChild(w);
        });
        node.replaceChild(frag, ch);
      } else if (ch.nodeType === 1 && ch.tagName !== 'BR') walk(ch);
    });
  })(root);
}
const easeOut = t => 1 - Math.pow(1 - t, 3);
function startCounter(el) {
  if (el.dataset.done) return; el.dataset.done = '1';
  if (reduced) return;
  const t0 = performance.now();
  if (el.hasAttribute('data-scramble')) {
    const text = el.dataset.scramble, chars = '01/·#*+';
    (function step(now) {
      const p = clamp((now - t0) / 1100, 0, 1), k = Math.floor(p * text.length);
      el.textContent = p >= 1 ? text : text.slice(0, k) + Array.from(text.slice(k)).map(c => c === ' ' ? ' ' : chars[(Math.random() * chars.length) | 0]).join('');
      if (p < 1) requestAnimationFrame(step);
    })(t0);
    return;
  }
  const to = parseFloat(el.dataset.count), suf = el.dataset.suffix || '', dec = (String(to).split('.')[1] || '').length;
  (function step(now) {
    const p = clamp((now - t0) / 1500, 0, 1);
    el.textContent = (to * easeOut(p)).toFixed(dec) + suf;
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}
function initReveal() {
  const els = $$('[data-reveal]');
  const show = el => { el.classList.add('in'); $$('[data-count],[data-scramble]', el).forEach(startCounter); if (el.matches('[data-count],[data-scramble]')) startCounter(el); };
  if (reduced || !('IntersectionObserver' in window)) { els.forEach(show); return; }
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { show(en.target); io.unobserve(en.target); } }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  els.forEach(el => io.observe(el));
}

/* ==========================================================================
   BOOT INTRO + INIT
   ========================================================================== */
function runBoot(after) {
  const el = $('#boot'), body = document.body;
  const finish = () => {
    if (finish.done) return; finish.done = true;
    el.classList.add('done'); body.classList.remove('booting'); body.classList.add('ready');
    setTimeout(() => el.classList.add('gone'), 1150);
    setTimeout(after, reduced ? 0 : 350);
  };
  if (reduced || !(D.settings && D.settings.introEnabled)) { el.classList.add('gone'); finish.done = true; body.classList.remove('booting'); body.classList.add('ready'); after(); return; }
  const fill = $('#bootFill'), pct = $('#bootPct'), linesEl = $('#bootLines');
  const lines = ['MOUNTING MEDIA POOL', 'SYNCING TIMELINE — 24 FPS', 'LOADING AI WORKFLOW MODULES', 'CALIBRATING COLOUR PIPELINE', 'SYSTEM READY'];
  let shown = 0; const t0 = performance.now(), total = 2600;
  (function step(now) {
    if (finish.done) return;
    const p = clamp((now - t0) / total, 0, 1), e = 1 - Math.pow(1 - p, 2.2);
    fill.style.transform = `scaleX(${e.toFixed(4)})`; pct.textContent = String(Math.round(e * 100)).padStart(3, '0');
    const want = Math.min(lines.length, Math.floor(p * lines.length * 1.05) + 1);
    while (shown < want) { const d = document.createElement('div'); d.textContent = lines[shown++]; linesEl.appendChild(d); }
    if (p >= 1) { setTimeout(finish, 300); return; }
    requestAnimationFrame(step);
  })(t0);
  $('#bootSkip').addEventListener('click', finish);
  addEventListener('keydown', e => { if (!finish.done && (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); finish(); } });
}

function init() {
  bind(); buildThumbs(); renderStaticIcons();
  renderAbout(); renderArsenal(); renderShowreel(); initMissions(); renderFeedback(); renderStats(); renderSlider(); renderContact();
  $$('[data-split]').forEach(splitWords);
  buildTimeline(); initHeroFX(); initScroll(); initNav(); initSlider(); initForm();
  initTilt(); initMagnetic(); initCursor(); initShowreelButtons(); initModal();
  requestAnimationFrame(tick);
  runBoot(initReveal);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

})();
