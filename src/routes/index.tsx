import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroCan from "@/assets/hero-can.jpg";
import athleteMoto from "@/assets/athlete-moto.jpg";
import athleteF1 from "@/assets/athlete-f1.jpg";
import athleteSnow from "@/assets/athlete-snow.jpg";
import athleteBreak from "@/assets/athlete-break.jpg";
import threeCans from "@/assets/three-cans.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Red Bull — Wings" },
      { name: "description", content: "Not a beverage. A point of view." },
      { property: "og:title", content: "Red Bull — Wings" },
      { property: "og:description", content: "Not a beverage. A point of view." },
    ],
  }),
  component: Index,
});

const athletes = [
  { name: "Marc Vega", sport: "Motocross", img: athleteMoto },
  { name: "Elias Roux", sport: "Formula 1", img: athleteF1 },
  { name: "Niko Berg", sport: "Snowboard", img: athleteSnow },
  { name: "Kade Ortiz", sport: "Breaking", img: athleteBreak },
];

const tickerItems = [
  "Red Bull Air Race · Salzburg · June 2026",
  "Red Bull Rampage · Virgin, Utah · Oct 2026",
  "Red Bull BC One · World Final · Paris · Nov 2026",
  "Red Bull Cliff Diving · Mostar · Sept 2026",
];

const events = [
  { date: "12 JUN 2026", name: "Air Race", loc: "Salzburg, Austria", accent: true },
  { date: "04 OCT 2026", name: "Rampage", loc: "Virgin, Utah" },
  { date: "21 NOV 2026", name: "BC One Finals", loc: "Paris, France" },
];

const cans = [
  { name: "Original", desc: "The blueprint. Untouched since 1987." },
  { name: "Sugarfree", desc: "Same altitude. Lighter ascent." },
  { name: "Red Edition", desc: "Cranberry. Sharper edge." },
];

function Index() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#ededed] overflow-x-hidden">
      <Nav />
      <Hero />
      <Roster />
      <Cans />
      <Manifesto />
      <Events />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-6 flex justify-between items-center mix-blend-difference">
      <span className="label text-[#ededed]">Red Bull</span>
      <ul className="flex gap-12 label text-[#ededed]">
        <li>Athletes</li>
        <li>Products</li>
        <li>Events</li>
        <li>Stories</li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] w-full bg-[#080808] overflow-hidden">
      {/* Grid */}
      <div className="grid grid-cols-12 h-full">
        {/* Left — headline */}
        <div className="col-span-7 relative flex flex-col justify-center pl-0">
          <h1
            className="display text-[#ededed] font-normal"
            style={{ fontSize: "280px", marginLeft: "-40px", lineHeight: 0.82 }}
          >
            Wings
          </h1>
          <div className="pl-10 mt-12 max-w-[520px]">
            <p className="label text-[#c9a84c] mb-6">
              Est. 1987 · Fuschl am See, Austria
            </p>
            <p className="body-copy text-[#ededed]">
              Not a beverage. A point of view.
            </p>
            <div className="mt-6 h-[2px] w-12 bg-[#cc0000]" />
          </div>
        </div>

        {/* Right — can */}
        <div className="col-span-5 relative">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(255,34,0,0.06) 0%, transparent 55%)",
            }}
          />
          <img
            src={heroCan}
            alt="Red Bull can"
            width={1024}
            height={1536}
            className="absolute right-0 top-1/2 -translate-y-1/2 h-[110%] w-auto object-cover"
            style={{ transform: "translateY(-50%) rotate(-6deg)" }}
          />
        </div>
      </div>

      {/* Ticker */}
      <div className="absolute bottom-8 left-0 right-0 overflow-hidden">
        <div className="ticker-track flex gap-16 whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="label text-[#c9a84c]">
              {t} ·
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roster() {
  return (
    <section className="bg-[#080808] py-[160px]">
      <div className="px-10 mb-20">
        <p className="label text-[#c9a84c]">The Athletes</p>
      </div>
      <div className="grid grid-cols-4 w-full">
        {athletes.map((a) => (
          <AthleteCard key={a.name} {...a} />
        ))}
      </div>
    </section>
  );
}

function AthleteCard({ name, sport, img }: { name: string; sport: string; img: string }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative aspect-[3/4] overflow-hidden cursor-pointer"
      style={{ borderLeft: hover ? "2px solid #cc0000" : "2px solid transparent" }}
    >
      <img
        src={img}
        alt={name}
        loading="lazy"
        width={640}
        height={896}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
        style={{
          filter: hover ? "saturate(1) contrast(1.05)" : "saturate(0.15) contrast(1.1) brightness(0.85)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <p className="label text-[#c9a84c] mb-3">{sport}</p>
        <h3 className="display text-[#ededed]" style={{ fontSize: "72px" }}>
          {name}
        </h3>
      </div>
    </div>
  );
}

function Cans() {
  return (
    <section className="bg-[#101010] py-[160px] relative">
      <div className="grid grid-cols-12 gap-0 items-center">
        {/* Left third */}
        <div className="col-span-4 relative h-[600px]">
          <div
            className="absolute left-20 top-1/2"
            style={{
              transform: "rotate(-90deg) translateX(50%)",
              transformOrigin: "left center",
            }}
          >
            <p className="label text-[#c9a84c] whitespace-nowrap">
              Choose your weapon
            </p>
          </div>
        </div>

        {/* Right two-thirds */}
        <div className="col-span-8 pr-10">
          <img
            src={threeCans}
            alt="Three Red Bull cans"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full h-auto object-contain"
          />
          <div className="grid grid-cols-3 mt-12">
            {cans.map((c, i) => (
              <div
                key={c.name}
                className="px-8 py-8 relative"
                style={{
                  borderLeft: i > 0 ? "0.5px solid #2a2a2a" : "none",
                }}
              >
                <h4 className="display text-[#ededed] mb-3" style={{ fontSize: "18px" }}>
                  {c.name}
                </h4>
                <p className="text-[12px] leading-[20px] text-[#ededed]/70 mb-6 max-w-[220px]">
                  {c.desc}
                </p>
                <a className="label text-[#c9a84c] hover:text-[#ededed] transition-colors cursor-pointer">
                  → Explore
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="bg-[#cc0000] h-screen min-h-[700px] w-full flex items-center justify-center px-10">
      <h2
        className="display text-[#080808] text-center"
        style={{ fontSize: "96px", lineHeight: 0.9 }}
      >
        We don't make drinks.
        <br />
        We make moments.
      </h2>
    </section>
  );
}

function Events() {
  return (
    <section className="bg-[#080808] py-[160px] px-10">
      <p className="label text-[#c9a84c] mb-20">Upcoming</p>
      <div className="grid grid-cols-3 gap-0">
        {events.map((e) => (
          <div
            key={e.name}
            className="pl-8 pr-10 py-12 relative"
            style={{
              borderLeft: e.accent ? "2px solid #cc0000" : "2px solid transparent",
              borderBottom: "1px solid #1a1a1a",
            }}
          >
            <p className="label text-[#c9a84c] mb-8">{e.date}</p>
            <h3 className="display text-[#ededed] mb-6" style={{ fontSize: "56px" }}>
              {e.name}
            </h3>
            <p className="text-[12px] text-[#ededed]/60">{e.loc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#080808] pt-20 pb-12 relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#cc0000]" />
      <div className="flex flex-col items-center gap-12">
        <BullMark />
        <ul className="flex gap-12 label text-[#c9a84c]">
          <li>Company</li>
          <li>Athletes</li>
          <li>Events</li>
          <li>Press</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <p className="text-[10px] text-[#444444] tracking-wider">
          © 2026 RED BULL GMBH · ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}

function BullMark() {
  return (
    <svg width="64" height="32" viewBox="0 0 64 32" fill="none" aria-label="Red Bull">
      <path
        d="M2 22 L14 8 L20 14 L26 6 L32 16 L40 4 L48 18 L56 10 L62 22 L52 28 L40 24 L32 28 L22 24 L12 28 Z"
        fill="#cc0000"
      />
      <circle cx="32" cy="14" r="3" fill="#c9a84c" />
    </svg>
  );
}
