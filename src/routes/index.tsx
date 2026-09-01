import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowRight, BookOpen, Brain, Compass, Dumbbell, Instagram,
  MapPin, Menu, Mountain, Play, Quote, Route as RouteIcon, ShieldCheck,
  Target, X, Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/climber-hero.jpg";
import portraitImage from "@/assets/climber-portrait.jpg";
import philosophyImage from "@/assets/mountain-philosophy.jpg";
import expeditionImage from "@/assets/expedition.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Summit & Stone | Professional Rock Climber" },
      { name: "description", content: "Professional rock climber, coach and author sharing a lifetime of experience, movement and mountain craft." },
      { property: "og:title", content: "Summit & Stone | Professional Rock Climber" },
      { property: "og:description", content: "A life built around the rock—climbing, coaching, writing and exploration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const nav = ["About", "Achievements", "Books", "Coaching", "Gallery", "Contact"];
const stats = [["25+", "Years of Climbing"], ["100+", "Major Ascents"], ["10+", "National / International Achievements"], ["3", "Published Books"]];
const timeline = [
  ["2005", "First Major Expedition", "A formative high-altitude objective that shaped a lifelong approach to mountain craft."],
  ["2010", "National Championship", "A milestone season at the highest level of competitive climbing."],
  ["2018", "Published First Climbing Book", "Years of practical experience distilled into a resource for committed climbers."],
  ["2024", "Mentoring the Next Generation", "Supporting emerging athletes through thoughtful, individual coaching."],
];
const coaching = [
  [Mountain, "Climbing Technique", "Move with efficiency, precision and purpose across every style of rock."],
  [Dumbbell, "Strength & Conditioning", "Build durable, climbing-specific power without losing mobility."],
  [Brain, "Mental Training", "Turn fear and uncertainty into focus, confidence and better decisions."],
  [RouteIcon, "Route Reading", "See sequences early, conserve energy and adapt when the plan changes."],
  [ShieldCheck, "Outdoor Safety", "Develop sound judgment, systems and respect for the environment."],
  [Target, "Performance Coaching", "A focused path from your current level to your next breakthrough."],
];
const gallery = [
  [heroImage, "Climbing", "Golden granite"], [portraitImage, "Behind the Scenes", "Between attempts"],
  [expeditionImage, "Expeditions", "Alpine line"], [philosophyImage, "Mountains", "Last light"],
  [heroImage, "Mountains", "Above the valley"], [expeditionImage, "Coaching", "On the sharp end"],
];
const books = [
  ["01", "The Climber's Mind", "2018", "A practical study of focus, fear and decision-making on the wall.", "Mindset · Fear · Focus"],
  ["02", "Movement on Stone", "2021", "An illustrated approach to efficiency, balance and fluid technique.", "Technique · Movement · Balance"],
  ["03", "Beyond the Crux", "2024", "Lessons in patience, preparation and progress for lifelong climbers.", "Training · Strategy · Longevity"],
];

function SectionTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">{eyebrow}</p><h2 className="max-w-3xl font-display text-5xl font-bold uppercase leading-[0.92] text-foreground sm:text-6xl lg:text-7xl">{children}</h2></div>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visibleGallery = gallery.map((item, index) => ({ item, index })).filter(({ item }) => filter === "All" || item[1] === filter);

  return <main className="overflow-hidden bg-background text-foreground rock-texture">
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${scrolled ? "border-border bg-background/90 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <a href="#home" className="flex items-center gap-3" aria-label="Summit and Stone home"><span className="font-display text-xl font-bold uppercase">Summit <span className="text-primary">/</span> Stone</span></a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-hero-foreground/75 transition-colors hover:text-primary">{item}</a>)}
        </nav>
        <div className="hidden lg:block"><Button asChild variant="ember"><a href="#contact">Work With Me <ArrowRight /></a></Button></div>
        <Button variant="ghost" size="icon" className="text-hero-foreground lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav className="border-t border-border bg-background px-5 py-6 lg:hidden">{nav.map(item => <a onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="block border-b border-border py-4 font-display text-3xl uppercase">{item}</a>)}</nav>}
    </header>

    <section id="home" className="relative min-h-[760px] h-[100svh] overflow-hidden">
      <img src={heroImage} width={1920} height={1280} alt="Climber ascending a sunlit granite wall above a mountain valley" className="hero-drift absolute inset-0 h-full w-full object-cover object-[64%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_80%,transparent)_35%,color-mix(in_oklab,var(--background)_8%,transparent)_78%)]" />
      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-center px-5 pt-16 lg:px-10">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Professional Rock Climber · Coach · Author</p>
        <h1 className="max-w-4xl font-display text-[clamp(4.5rem,10vw,9rem)] font-extrabold uppercase leading-[0.78] text-hero-foreground">Climb Higher.<br/><span className="text-primary">Push Further.</span></h1>
        <p className="mt-8 max-w-xl text-base leading-7 text-hero-foreground/75 sm:text-lg">Decades of experience on the wall and in the mountains, helping climbers push beyond their limits.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="ember" size="lg"><a href="#about">Explore My Journey <ArrowDown /></a></Button><Button asChild variant="cinematic" size="lg"><a href="#contact">Work With Me</a></Button></div>
        <div className="absolute bottom-8 left-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-hero-foreground/60 lg:left-10"><span className="h-10 w-px overflow-hidden bg-hero-foreground/25"><span className="scroll-mark block h-4 w-px bg-primary" /></span>Scroll to explore</div>
      </div>
    </section>

    <section id="about" className="grid lg:grid-cols-2">
      <div className="relative min-h-[620px] overflow-hidden"><img src={portraitImage} width={1024} height={1280} loading="lazy" alt="Experienced climbing coach resting beside a limestone cliff" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"/><div className="absolute bottom-0 right-0 bg-primary px-7 py-5 text-primary-foreground"><p className="font-display text-4xl font-bold">25+</p><p className="text-[10px] uppercase tracking-widest">Years on rock</p></div></div>
      <div className="flex items-center bg-panel px-6 py-20 sm:px-12 lg:px-16"><div className="max-w-2xl"><SectionTitle eyebrow="The story">More Than a Climber.<br/>A Lifelong Student of the Mountain.</SectionTitle><div className="mt-8 space-y-5 text-sm leading-7 text-muted-foreground sm:text-base"><p>His life has been shaped by rock, movement and the quiet discipline required to keep learning. As an experienced climber and professional coach, he brings hard-won insight to every ascent and every athlete he supports.</p><p>Beyond personal climbing, his work extends to writing, mentoring younger climbers and sharing the principles that make a lifetime in the mountains possible: patience, humility, preparation and trust.</p></div><Button asChild variant="cinematic" size="lg" className="mt-9"><a href="#achievements">Read My Story <ArrowRight /></a></Button></div></div>
    </section>

    <section id="achievements" className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10 lg:py-32">
      <SectionTitle eyebrow="By the numbers">A Career Built<br/>One Move at a Time.</SectionTitle>
      <div className="mt-16 grid grid-cols-2 border-y border-border lg:grid-cols-4">{stats.map(([number,label], i) => <div key={label} className={`py-8 pr-4 lg:py-12 ${i > 0 ? "border-l border-border pl-5 lg:pl-8" : ""}`}><div className="font-display text-6xl font-bold text-primary sm:text-7xl">{number}</div><div className="mt-2 max-w-44 text-xs uppercase leading-5 tracking-[0.14em] text-muted-foreground">{label}</div></div>)}</div>
      <div className="mt-20 grid gap-10 lg:grid-cols-[.6fr_1.4fr]"><p className="font-display text-3xl uppercase text-stone">Selected milestones</p><div>{timeline.map(([year,title,desc]) => <article key={year} className="group grid grid-cols-[72px_1fr] gap-5 border-t border-border py-7 sm:grid-cols-[110px_1fr]"><span className="font-display text-2xl text-primary">{year}</span><div><h3 className="font-display text-2xl font-semibold uppercase transition-transform group-hover:translate-x-1">{title}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{desc}</p></div></article>)}</div></div>
    </section>

    <section id="books" className="bg-foreground py-24 text-background lg:py-32"><div className="mx-auto max-w-[1440px] px-5 lg:px-10"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Books & writing</p><h2 className="font-display text-5xl font-bold uppercase leading-[.92] sm:text-7xl">Knowledge Worth<br/>Passing On</h2><p className="mt-6 max-w-xl text-sm leading-7 text-background/65">Years on the rock, distilled into books for the next generation of climbers.</p>
      <div className="mt-14 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div className="relative mx-auto aspect-[3/4] w-full max-w-sm bg-background p-8 shadow-2xl"><div className="flex h-full flex-col justify-between border border-stone/35 p-7"><span className="text-xs uppercase tracking-[.25em] text-primary">A climbing field guide</span><div><Mountain className="mb-6 size-12 text-primary"/><p className="font-display text-5xl font-bold uppercase text-foreground">The Climber's Mind</p></div><p className="text-xs uppercase tracking-widest text-muted-foreground">Author Name · 2018</p></div></div><div className="lg:pl-12"><span className="text-xs uppercase tracking-[.2em] text-primary">Featured publication</span><h3 className="mt-4 font-display text-5xl font-bold uppercase">The Climber's Mind</h3><p className="mt-3 text-xs uppercase tracking-widest text-background/50">By Author Name</p><p className="mt-7 max-w-xl leading-7 text-background/65">A thoughtful, practical exploration of mental strength on the wall—from working with fear to staying composed when every decision matters.</p><div className="mt-7 flex flex-wrap gap-2">{["Mindset","Fear management","Decision-making","Focus"].map(x=><span key={x} className="border border-background/20 px-3 py-2 text-xs uppercase tracking-wider">{x}</span>)}</div><Button variant="ember" size="lg" className="mt-8">View Book <ArrowRight /></Button></div></div>
      <div className="mt-20 grid gap-px bg-background/15 md:grid-cols-3">{books.map(([no,title,year,desc,topics])=><article key={no} className="group bg-foreground p-7 transition-colors hover:bg-background/5"><div className="flex items-center justify-between text-xs text-background/45"><span>{no}</span><span>{year}</span></div><BookOpen className="mt-12 size-9 text-primary"/><h3 className="mt-5 font-display text-3xl font-semibold uppercase">{title}</h3><p className="mt-4 text-sm leading-6 text-background/60">{desc}</p><p className="mt-7 text-[10px] uppercase tracking-widest text-primary">{topics}</p><Button variant="link" className="mt-4 px-0 text-background">Learn More <ArrowRight /></Button></article>)}</div>
    </div></section>

    <section id="coaching" className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10 lg:py-32"><div className="grid gap-10 lg:grid-cols-2"><SectionTitle eyebrow="Coaching philosophy">Climbing Is Not Just About Strength.</SectionTitle><p className="self-end max-w-xl text-base leading-8 text-muted-foreground">Real progress comes from bringing technique, movement, mental discipline, strategy and patience into balance—while learning to understand your own limits.</p></div><div className="mt-16 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">{coaching.map(([Icon,title,desc]) => { const C = Icon as typeof Mountain; return <article key={String(title)} className="group min-h-64 border-b border-r border-border p-7 transition-colors hover:bg-panel"><C className="size-8 text-primary"/><h3 className="mt-12 font-display text-2xl font-semibold uppercase">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{String(desc)}</p></article>})}</div><Button asChild variant="ember" size="lg" className="mt-10"><a href="#contact">Train With Me <ArrowRight /></a></Button></section>

    <section className="relative flex min-h-[650px] items-center justify-center bg-background px-5 py-24 text-center"><img src={philosophyImage} width={1920} height={1088} loading="lazy" alt="A lone climber standing among dramatic mountain cliffs at dusk" className="absolute inset-0 h-full w-full object-cover opacity-55"/><div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--background)_40%,transparent),color-mix(in_oklab,var(--background)_82%,transparent))]"/><div className="relative max-w-5xl"><Quote className="mx-auto size-10 text-primary"/><blockquote className="mt-8 font-display text-4xl font-semibold uppercase leading-tight text-hero-foreground sm:text-6xl">“The goal isn't simply to reach the top.<br/>It's to become the climber capable of getting there.”</blockquote><p className="mt-8 text-xs uppercase tracking-[.25em] text-hero-foreground/65">— Author Name</p></div></section>

    <section id="gallery" className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10 lg:py-32"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionTitle eyebrow="Field notes">Life on the Rock</SectionTitle><div className="flex max-w-full gap-5 overflow-x-auto pb-2">{["All","Climbing","Mountains","Expeditions","Coaching","Behind the Scenes"].map(cat=><button key={cat} onClick={()=>setFilter(cat)} className={`shrink-0 border-b pb-2 text-[11px] uppercase tracking-widest transition-colors ${filter===cat ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>{cat}</button>)}</div></div><div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">{visibleGallery.map(({item,index},i)=><button key={`${item[1]}-${index}`} onClick={()=>setLightbox(index)} className={`group relative mb-4 block w-full overflow-hidden ${i%3===1 ? "aspect-[4/5]" : "aspect-[4/3]"}`}><img src={item[0]} width={1200} height={1500} loading="lazy" alt={item[2]} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/><div className="absolute inset-0 flex items-end bg-[linear-gradient(transparent,color-mix(in_oklab,var(--background)_75%,transparent))] p-5 opacity-0 transition-opacity group-hover:opacity-100"><span className="text-xs uppercase tracking-widest text-hero-foreground">{item[1]} — {item[2]}</span></div></button>)}</div></section>

    {lightbox !== null && <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4" role="dialog" aria-modal="true" aria-label="Gallery image"><Button variant="ghost" size="icon" onClick={()=>setLightbox(null)} className="absolute right-5 top-5 text-foreground" aria-label="Close gallery"><X /></Button><img src={gallery[lightbox][0]} alt={gallery[lightbox][2]} className="max-h-[86vh] max-w-[92vw] object-contain"/><p className="absolute bottom-5 text-xs uppercase tracking-widest text-muted-foreground">{gallery[lightbox][1]} — {gallery[lightbox][2]}</p></div>}

    <section className="bg-panel py-24 lg:py-32"><div className="mx-auto max-w-[1440px] px-5 lg:px-10"><SectionTitle eyebrow="Expeditions / Journey">Lines That Shaped Me</SectionTitle><div className="mt-14 grid lg:grid-cols-[1.1fr_.9fr]"><div className="relative min-h-[650px]"><img src={expeditionImage} width={1200} height={1504} loading="lazy" alt="Climbing partners on a remote alpine rock route" className="absolute inset-0 h-full w-full object-cover"/><span className="absolute left-6 top-6 bg-background/85 px-4 py-3 text-xs uppercase tracking-widest"><MapPin className="mr-2 inline size-4 text-primary"/>Alpine granite</span></div><div className="flex flex-col justify-center border border-border bg-background p-7 sm:p-12"><p className="text-xs uppercase tracking-[.22em] text-primary">Selected journey · 2024</p><h3 className="mt-4 font-display text-5xl font-bold uppercase">The North Ridge</h3><dl className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-7 text-sm"><div><dt className="text-muted-foreground">Location</dt><dd className="mt-2 uppercase">Mountain Range</dd></div><div><dt className="text-muted-foreground">Difficulty</dt><dd className="mt-2 uppercase">Advanced alpine</dd></div></dl><p className="mt-7 leading-7 text-muted-foreground">A placeholder expedition story about commitment, partnership and the patient work behind a significant line. Replace this entry with the climber’s real route, location and experience.</p><Button variant="cinematic" size="lg" className="mt-8 self-start">Explore Journey <Compass /></Button></div></div></div></section>

    <section className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10 lg:py-32"><SectionTitle eyebrow="Voices from the wall">Trust Is Earned</SectionTitle><div className="mt-14 grid gap-px bg-border lg:grid-cols-3">{[["His coaching changed the way I approach difficult movement. Calm, precise, and deeply personal.","Student Name","Performance athlete"],["A rare combination of experience and humility. He teaches you to think, not just to pull harder.","Climber Name","Expedition partner"],["I left every session with a clearer plan and more confidence in my own decisions.","Client Name","Outdoor climber"]].map(([q,n,r])=><article key={n} className="bg-background p-8"><Quote className="size-7 text-primary"/><p className="mt-8 font-display text-2xl leading-snug">“{q}”</p><p className="mt-8 text-xs font-semibold uppercase tracking-widest">{n}</p><p className="mt-2 text-xs text-muted-foreground">{r}</p></article>)}</div></section>

    <section id="contact" className="border-t border-border bg-foreground py-24 text-background lg:py-32"><div className="mx-auto grid max-w-[1440px] gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-10"><div><p className="text-xs font-semibold uppercase tracking-[.24em] text-primary">Work with me</p><h2 className="mt-4 font-display text-6xl font-bold uppercase leading-[.88] sm:text-7xl">Ready to Take Your Climbing Further?</h2><p className="mt-7 max-w-lg leading-7 text-background/65">Whether you're starting your climbing journey or preparing for your next major ascent, let's talk.</p><div className="mt-10 flex gap-3"><Button variant="outline" size="icon" aria-label="Instagram"><Instagram/></Button><Button variant="outline" size="icon" aria-label="YouTube"><Youtube/></Button><Button variant="outline" size="icon" aria-label="Video channel"><Play/></Button></div></div><form className="grid gap-5 sm:grid-cols-2" onSubmit={(e)=>e.preventDefault()}><label className="text-xs uppercase tracking-widest">Name<input className="mt-2 h-12 w-full border-b border-background/25 bg-transparent px-0 text-base outline-none focus:border-primary" required /></label><label className="text-xs uppercase tracking-widest">Email<input type="email" className="mt-2 h-12 w-full border-b border-background/25 bg-transparent px-0 text-base outline-none focus:border-primary" required /></label><label className="text-xs uppercase tracking-widest">Phone<input type="tel" className="mt-2 h-12 w-full border-b border-background/25 bg-transparent px-0 text-base outline-none focus:border-primary" /></label><label className="text-xs uppercase tracking-widest">Experience level<select className="mt-2 h-12 w-full border-b border-background/25 bg-foreground px-0 text-base outline-none focus:border-primary"><option>Beginner</option><option>Intermediate</option><option>Advanced</option><option>Elite</option></select></label><label className="text-xs uppercase tracking-widest sm:col-span-2">Message<textarea rows={4} className="mt-3 w-full resize-none border-b border-background/25 bg-transparent py-3 text-base outline-none focus:border-primary" required /></label><Button variant="ember" size="lg" className="mt-3 sm:col-span-2 sm:justify-self-start">Get In Touch <ArrowRight /></Button></form></div></section>

    <footer className="border-t border-border bg-background"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10"><div><p className="font-display text-2xl font-bold uppercase">Summit <span className="text-primary">/</span> Stone</p><p className="mt-4 text-sm text-muted-foreground">Climber. Coach. Author.<br/>Built around a life on the rock.</p></div><div><p className="text-xs uppercase tracking-widest text-primary">Navigate</p>{nav.slice(0,4).map(x=><a key={x} href={`#${x.toLowerCase()}`} className="mt-3 block text-sm text-muted-foreground hover:text-foreground">{x}</a>)}</div><div><p className="text-xs uppercase tracking-widest text-primary">Connect</p><p className="mt-3 text-sm text-muted-foreground">hello@example.com</p><p className="mt-2 text-sm text-muted-foreground">Instagram · YouTube</p></div><div className="flex items-end lg:justify-end"><p className="text-xs text-muted-foreground">© 2026 Author Name. All rights reserved.</p></div></div></footer>
  </main>;
}