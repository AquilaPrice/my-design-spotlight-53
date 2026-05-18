import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Aurélie — Independent Design Studio" },
      {
        name: "description",
        content:
          "Portfolio of Aurélie Voss — brand identity, art direction & editorial design for considered houses.",
      },
      { property: "og:title", content: "Maison Aurélie — Independent Design Studio" },
      {
        property: "og:description",
        content: "Brand identity, art direction & editorial design.",
      },
    ],
  }),
  component: Index,
});

const works = [
  { img: work2, title: "Issue Nº 07", client: "Atelier Press", year: "2025", tag: "Editorial", span: "row-span-2" },
  { img: work1, title: "Nuit Brûlée", client: "Maison Lune", year: "2024", tag: "Packaging", span: "" },
  { img: work6, title: "Garamis", client: "Parfums Ros", year: "2025", tag: "Identity", span: "row-span-2" },
  { img: work3, title: "Lunaire", client: "Lunaire Studio", year: "2024", tag: "Digital", span: "" },
  { img: work4, title: "Hille Nelle", client: "Hille Nelle", year: "2023", tag: "Stationery", span: "" },
  { img: work5, title: "Holy Gold", client: "Cathedral Co.", year: "2025", tag: "Type", span: "" },
];

function Index() {
  return (
    <div className="grain min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Works />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-gold font-display text-2xl leading-none">M</span>
          <span className="font-display text-xl tracking-tight">aison Aurélie</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide uppercase text-muted-foreground">
          <a href="#work" className="hover:text-gold transition-colors">Work</a>
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="text-xs uppercase tracking-[0.2em] border border-gold/40 text-gold px-4 py-2 hover:bg-gold hover:text-primary-foreground transition-colors"
        >
          Commission
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-7 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-8">
            Independent Studio · Est. MMXVIII · Paris
          </p>
          <h1 className="font-display text-[14vw] md:text-[10vw] leading-[0.85] tracking-tight">
            Quiet
            <br />
            <span className="italic gold-gradient">luxury,</span>
            <br />
            loud craft.
          </h1>
        </div>
        <div className="col-span-12 md:col-span-5 reveal" style={{ animationDelay: "0.15s" }}>
          <div className="md:pl-10 md:border-l md:border-gold/30">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-md">
              I build identities, editorial systems and digital
              experiences for houses that prefer to be felt before they
              are seen.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <span className="h-px w-16 bg-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Selected work, 2023 — 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Brand Identity", "Editorial", "Art Direction", "Packaging", "Typography", "Digital"];
  return (
    <div className="border-y border-border/60 py-5 overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-3xl md:text-4xl px-10 flex items-center gap-10">
            {t}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Works() {
  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between mb-12 md:mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">01 — Index</p>
            <h2 className="font-display text-5xl md:text-7xl">Selected Works</h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs text-right">
            A small index of recent commissions. Full archive available on request.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 md:auto-rows-[320px]">
          {works.map((w, i) => (
            <article
              key={i}
              className={`group relative overflow-hidden bg-card ${w.span}`}
            >
              <img
                src={w.img}
                alt={w.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-[0.25em] text-gold">
                    {String(i + 1).padStart(2, "0")} / {w.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{w.year}</span>
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-foreground">{w.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">for {w.client}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-32 border-t border-border/60">
      <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-card">
            <img
              src={portrait}
              alt="Aurélie Voss, designer"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.25em] text-gold">
              Aurélie V. · Paris
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 md:pl-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">02 — Studio</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            A studio of <span className="italic gold-gradient">one,</span>
            <br />
            for a few.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <p>
              I'm Aurélie — a designer working at the intersection of
              brand, print and screen. For seven years I have shaped
              identities for fragrance houses, restaurants, galleries
              and quietly ambitious founders.
            </p>
            <p>
              My practice is slow, deliberate, and deeply collaborative.
              I take on six commissions a year. Each one is built like a
              book — pages turned in unhurried sequence.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-8 border-t border-border pt-10">
            <Stat n="07" label="Years in practice" />
            <Stat n="42" label="Brands shaped" />
            <Stat n="06" label="Per year, no more" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-5xl md:text-6xl text-gold">{n}</p>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{label}</p>
    </div>
  );
}

function Services() {
  const list = [
    { n: "i", t: "Brand Identity", d: "Logotypes, marks, naming, type systems and full guidelines." },
    { n: "ii", t: "Art Direction", d: "Campaigns, lookbooks, photography direction and editorial." },
    { n: "iii", t: "Packaging", d: "Structural and surface design for fragrance, spirits and skin." },
    { n: "iv", t: "Digital", d: "Quiet, considered websites built for longevity and atmosphere." },
  ];
  return (
    <section id="services" className="px-6 md:px-10 py-24 md:py-32 border-t border-border/60">
      <div className="max-w-[1600px] mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">03 — Practice</p>
        <h2 className="font-display text-5xl md:text-7xl mb-16">What I make.</h2>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {list.map((s) => (
            <div key={s.n} className="bg-background p-8 md:p-12 group hover:bg-card transition-colors">
              <div className="flex items-baseline gap-6">
                <span className="font-display text-gold text-3xl italic">{s.n}.</span>
                <h3 className="font-display text-3xl md:text-4xl">{s.t}</h3>
              </div>
              <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-32 md:py-48 border-t border-border/60 relative">
      <div className="max-w-[1600px] mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-8">04 — Correspondence</p>
        <h2 className="font-display text-6xl md:text-[12vw] leading-[0.9]">
          Let's make
          <br />
          <span className="italic gold-gradient">something</span>
          <br />
          enduring.
        </h2>
        <a
          href="mailto:studio@maisonaurelie.com"
          className="inline-block mt-16 text-xl md:text-2xl text-gold border-b border-gold/40 pb-2 hover:border-gold transition-colors"
        >
          studio@maisonaurelie.com
        </a>
        <p className="mt-10 text-sm text-muted-foreground">
          Currently booking commissions for late 2026.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 md:px-10 py-10">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <p>© MMXXVI Maison Aurélie</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gold">Instagram</a>
          <a href="#" className="hover:text-gold">Are.na</a>
          <a href="#" className="hover:text-gold">LinkedIn</a>
        </div>
        <p>Paris · New York</p>
      </div>
    </footer>
  );
}
