import {
  CalendarCheck, MessageCircle, Sparkles, Wrench, Leaf, Package, LineChart, ArrowDown,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import detail from "@/assets/detail.jpg";
import { Wave } from "./motion";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={hero}
        alt="A weatherboarded holiday cottage with a deck overlooking the sea and shingle beach at sunset"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="animate-hero-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40 md:px-10 md:pb-32">
        <p data-reveal className="eyebrow text-sand">Holiday let management | East Sussex</p>
        <h1 data-reveal style={{ "--d": "120ms" } as React.CSSProperties} className="mt-6 max-w-4xl text-5xl leading-[1.02] text-primary-foreground md:text-7xl lg:text-8xl">
          More time to enjoy ownership. <em className="text-sand">Less time managing</em> your holiday let.
        </h1>
        <p data-reveal style={{ "--d": "240ms" } as React.CSSProperties} className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
          Professional holiday letting management across East Sussex, helping property owners deliver welcoming guest
          experiences while taking the day to day work off their hands.
        </p>
        <div data-reveal style={{ "--d": "360ms" } as React.CSSProperties} className="mt-10 flex flex-wrap gap-4">
          <a href="#contact" className="rounded-sm bg-primary-foreground px-7 py-4 text-sm font-semibold text-primary transition-colors hover:bg-sand">
            Discuss Your Property
          </a>
          <a href="#services" className="rounded-sm border border-primary-foreground/60 px-7 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
            Explore Our Services
          </a>
        </div>
      </div>
      <a href="#intro" aria-label="Scroll to introduction" className="absolute bottom-8 right-6 hidden flex-col items-center gap-3 text-primary-foreground/80 md:right-10 md:flex">
        <span className="eyebrow [writing-mode:vertical-rl]">Scroll</span>
        <span className="relative h-14 w-px overflow-hidden bg-primary-foreground/30">
          <span className="animate-scroll-cue absolute inset-x-0 top-0 h-1/2 bg-primary-foreground" />
        </span>
        <ArrowDown className="sr-only" />
      </a>
    </section>
  );
}

export function Intro() {
  return (
    <section id="intro" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-36">
      <div className="relative aspect-[4/5] overflow-hidden md:col-span-5" data-reveal="zoom">
        <img data-parallax="0.08" src={interior} alt="A bright holiday cottage living room with linen sofas and a large window looking out to sea" width={1200} height={1504} loading="lazy" className="h-full w-full scale-110 object-cover" />
      </div>
      <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
        <Wave data-reveal className="h-3 w-20 text-accent" />
        <h2 data-reveal className="mt-6 text-4xl leading-tight md:text-6xl">Your property deserves thoughtful management.</h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p data-reveal>
            Running a successful holiday let involves much more than welcoming guests. From managing enquiries and
            bookings to coordinating property care and responding when something needs attention, the details matter.
          </p>
          <p data-reveal>
            Sea &amp; Stay Hosting helps holiday property owners across East Sussex manage those responsibilities with a
            professional, organised and personal approach.
          </p>
          <p data-reveal>
            Whether you own a single holiday cottage or manage several properties, our aim is to make the experience
            simpler for you and more welcoming for your guests.
          </p>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: CalendarCheck, title: "Listing and Booking Management", text: "Support with presenting your property professionally, maintaining listing information, managing booking enquiries and reservations, and keeping guest information organised." },
  { icon: MessageCircle, title: "Guest Communication and Support", text: "Guest communication before, during and after stays: practical arrival information, answers to questions and help resolving issues. A 24 hour service is available for guest support." },
  { icon: Sparkles, title: "Cleaning and Laundry Coordination", text: "Cleaning and laundry arranged through approved contractors to maintain the property's presentation and prepare it for incoming guests.", cost: "Cleaning and laundry may incur additional charges." },
  { icon: Wrench, title: "Maintenance and Repairs", text: "Approved contractors coordinated when maintenance issues or repairs arise, with practical solutions organised and owners kept informed of anything requiring their attention.", cost: "Repair work and contractor services may incur additional charges." },
  { icon: Leaf, title: "Gardening and External Areas", text: "Gardening and external property care coordinated through approved contractors, helping keep outdoor areas presentable and welcoming.", cost: "Gardening work may incur additional charges." },
  { icon: Package, title: "Guest Essentials and Consumables", text: "Provision or replenishment of agreed guest essentials and consumables coordinated where required.", cost: "The cost of these items may be charged separately." },
  { icon: LineChart, title: "Pricing and Performance Support", text: "Help reviewing your listing presentation, booking activity, availability and pricing approach, with the aim of improving the appeal and performance of your holiday let." },
];

export function Services() {
  return (
    <section id="services" className="bg-primary py-24 text-primary-foreground md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-8 md:grid-cols-12">
          <p data-reveal className="eyebrow text-sand md:col-span-3">Our services</p>
          <h2 data-reveal className="text-4xl leading-tight text-primary-foreground md:col-span-8 md:text-6xl">
            Support across every part of running a holiday let.
          </h2>
        </div>
        <ul className="mt-16 grid gap-px border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li
              key={s.title}
              data-reveal
              style={{ "--d": `${(i % 3) * 100}ms` } as React.CSSProperties}
              className="group relative flex flex-col bg-primary p-8 transition-colors duration-500 hover:bg-accent/25 focus-within:bg-accent/25 md:p-10"
            >
              <span className="font-display text-sm text-sand">0{i + 1}</span>
              <s.icon className="mt-6 h-7 w-7 text-sand transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.3} aria-hidden="true" />
              <h3 className="mt-6 text-2xl text-primary-foreground">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-primary-foreground/75">{s.text}</p>
              {s.cost && <p className="mt-5 border-t border-primary-foreground/15 pt-4 text-sm text-sand">{s.cost}</p>}
            </li>
          ))}
          <li className="hidden flex-col justify-end bg-primary p-10 lg:col-span-2 lg:flex">
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              We do not promise guaranteed occupancy, revenue or returns. The scope of each service is agreed with every owner.
            </p>
            <a href="#contact" className="mt-6 text-sm font-semibold text-sand underline-offset-4 hover:underline">Discuss your property →</a>
          </li>
        </ul>
        <p className="mt-6 text-sm text-primary-foreground/70 lg:hidden">
          We do not promise guaranteed occupancy, revenue or returns. The scope of each service is agreed with every owner.
        </p>
      </div>
    </section>
  );
}

const steps = [
  { t: "Tell us about your property", d: "We discuss your accommodation, your objectives and the level of support you need." },
  { t: "Agree your management arrangements", d: "We establish the scope of the service, responsibilities and the practical arrangements for managing your property." },
  { t: "Coordinate the details", d: "We support listing and booking administration, guest communication and the coordination of agreed property services." },
  { t: "Enjoy a more manageable ownership experience", d: "You have a professional point of contact to help coordinate the ongoing responsibilities of your holiday let." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <p data-reveal className="eyebrow text-accent">How it works</p>
      <h2 data-reveal className="mt-6 max-w-3xl text-4xl leading-tight md:text-6xl">A straightforward approach to holiday let management.</h2>
      <ol className="relative mt-16 grid gap-12 border-l border-border pl-8 lg:grid-cols-4 lg:gap-10 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-12">
        {steps.map((s, i) => (
          <li key={s.t} data-reveal style={{ "--d": `${i * 150}ms` } as React.CSSProperties} className="relative">
            <span className="absolute -left-[2.3rem] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background lg:-top-[3.45rem] lg:left-0" aria-hidden="true" />
            <span className="eyebrow text-accent">Step {i + 1}</span>
            <h3 className="mt-3 text-2xl leading-snug">{s.t}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

const owners = [
  { t: "Individual property owners", d: "Owners who want professional help with the responsibilities of running a holiday let." },
  { t: "Busy owners and frequent travellers", d: "Owners who need a reliable point of contact while they are away or occupied with other commitments." },
  { t: "Owners with multiple properties", d: "Owners seeking a more organised approach to bookings, guest support and property care." },
];

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="bg-muted py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p data-reveal className="eyebrow text-accent">Who we help</p>
        <h2 data-reveal className="mt-6 max-w-3xl text-4xl leading-tight md:text-6xl">Management shaped around your property.</h2>
        <p data-reveal className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Not every owner needs a full management package. The support we provide is agreed with each client, so it fits
          your property and the way you want to run it.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {owners.map((o, i) => (
            <article key={o.t} data-reveal style={{ "--d": `${i * 120}ms` } as React.CSSProperties} className="border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent">
              <Wave className="h-3 w-12 text-accent" />
              <h3 className="mt-6 text-2xl">{o.t}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{o.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-36">
        <div className="md:col-span-5">
          <p data-reveal className="eyebrow text-accent">Our approach</p>
          <h2 data-reveal className="mt-6 text-4xl leading-tight md:text-6xl">Professional, personal and detail focused.</h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p data-reveal>
              We believe successful holiday letting depends on the details. Clear communication, thoughtful presentation,
              organised bookings and prompt coordination all contribute to a better experience for guests and property owners.
            </p>
            <p data-reveal>
              Sea &amp; Stay Hosting takes a practical, personal approach to managing these responsibilities. We work with
              approved contractors for cleaning, laundry, maintenance and gardening where required, coordinating these
              services with the property's needs and the arrangements agreed with its owner.
            </p>
          </div>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden md:col-span-7" data-reveal="zoom">
          <img data-parallax="0.1" src={detail} alt="Freshly made guest bed with folded white towels and a sprig of sea lavender" width={1504} height={1008} loading="lazy" className="h-full w-full scale-110 object-cover" />
        </div>
      </div>
    </section>
  );
}

export function Costs() {
  return (
    <section id="costs" aria-labelledby="costs-heading" className="px-5 pb-24 md:px-10 md:pb-36">
      <div data-reveal className="mx-auto max-w-5xl border-2 border-secondary bg-card p-8 md:p-14">
        <p className="eyebrow text-accent">Important information about additional costs</p>
        <h2 id="costs-heading" className="mt-5 text-4xl leading-tight md:text-5xl">Clear arrangements. Transparent costs.</h2>
        <div className="mt-8 grid gap-8 text-lg leading-relaxed md:grid-cols-2">
          <p>
            Sea &amp; Stay Hosting coordinates cleaning, laundry, maintenance, gardening and other property services through
            approved contractors where required. <strong className="font-semibold text-primary">These services are not automatically included in the management fee unless expressly agreed.</strong>
          </p>
          <p>
            Additional costs may apply for cleaning, laundry, maintenance and repair work, gardening, guest essentials,
            consumables and other property related services. The nature and cost of these services will depend on the
            requirements of the property and the arrangements agreed with the owner.
          </p>
        </div>
      </div>
    </section>
  );
}
