import { FormEvent, Fragment, useEffect, useState } from "react";
import { Link } from "wouter";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Atom,
  BatteryCharging,
  Check,
  ChevronDown,
  ChevronRight,
  CircleGauge,
  CirclePlay,
  CarFront,
  Factory,
  FlaskConical,
  Gauge,
  GlassWater,
  Mail,
  MapPin,
  Menu,
  MoveRight,
  Network,
  Orbit,
  Phone,
  Printer,
  ShieldCheck,
  Send,
  ShipWheel,
  Sparkles,
  Sprout,
  Waves,
  Wind,
  X,
  Zap,
} from "lucide-react";

const ldkChoices = [
  {
    id: "lite",
    code: "LITE",
    use: "Compact passenger vehicles",
    voltage: "DC 12–15 V",
    meaning: "A lighter entry point for everyday driving.",
    detail: "Select LITE when the vehicle and electrical architecture are confirmed for compact mobility. Establish a familiar route, observe baseline conditions, and begin a measured AOS conversation.",
    icon: BatteryCharging,
  },
  {
    id: "drive",
    code: "DRIVE",
    use: "Mid / large cars · SUVs · vans",
    voltage: "DC 12–15 V",
    meaning: "A balanced selection for distance and daily load.",
    detail: "Select DRIVE for the everyday vehicle at the center of movement. Vehicle conditions, accumulated patterns, and electrical management are considered as one road-based system.",
    icon: MoveRight,
  },
  {
    id: "king",
    code: "KING",
    use: "Heavy-duty commercial applications",
    voltage: "DC 24–30 V",
    meaning: "A high-duty selection for scale and working load.",
    detail: "Select KING only after duty cycle, payload, route, idle time, and the final electrical architecture have been reviewed for the commercial application.",
    icon: CircleGauge,
  },
];

const aosRouteNotes = [
  { id: "input", className: "loop-input", number: "01", title: "Vehicle input", label: "Architecture · route · duty", detail: "The conversation starts with the real vehicle: electrical architecture, recurring route, operating load, and the conditions that create demand." },
  { id: "selection", className: "loop-learn", number: "02", title: "LDK selection", label: "Lite · Drive · King", detail: "LDK is a vehicle-fit choice inside AOS. Lite, Drive, and King are selected only after the vehicle context has been understood." },
  { id: "power", className: "loop-power", number: "03", title: "Power management", label: "Electrical pattern context", detail: "AOS considers the vehicle’s electrical pattern as part of a wider movement system—not as a universal answer detached from context." },
  { id: "observed", className: "loop-output", number: "04", title: "Observed experience", label: "Measured pilot discussion", detail: "A measured pilot discussion helps turn the route, baseline, and observed experience into a considered next decision." },
];

const proofNotes = [
  { title: "Match", detail: "Confirm vehicle class, electrical architecture, and the actual operating context before any selection conversation." },
  { title: "Test", detail: "Use a familiar route and a defined baseline so the discussion begins with comparable conditions." },
  { title: "Decide", detail: "Review the observed experience in context, then decide whether there is a meaningful next step to explore." },
];

const businessFields = [
  {
    number: "01",
    slug: "energy-systems",
    title: "Energy systems",
    text: "Energy-system thinking across material, mobility, and industrial applications—designed around fit, observation, and responsible scale.",
    icon: Atom,
  },
  {
    number: "02",
    slug: "film-coating",
    title: "Film & coating",
    text: "Film, casting, nano-layer, lamination, and material lines for architecture, medical, electronics, and high-tech applications.",
    icon: Orbit,
  },
  {
    number: "03",
    slug: "filling-packaging",
    title: "Filling & packaging",
    text: "Drinking, manufacturing, and precision process lines shaped around flow, timing, filling, packaging, and dependable operation.",
    icon: Zap,
  },
  {
    number: "04",
    slug: "robot-ai-semiconductor",
    title: "Robot · AI · semiconductor",
    text: "New thinking for automated systems, artificial intelligence, precision electronics, and next-generation semiconductor work.",
    icon: FlaskConical,
  },
  {
    number: "05",
    slug: "global-rnd-service",
    title: "Global R&D service",
    text: "Cross-border research program experience and practical support for complex development agendas with global laboratories.",
    icon: Wind,
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Mark() {
  return (
    <span className="ep-mark" aria-label="ePactive">
      <img className="brand-logo" src="/manus-storage/logo_bcc32ed6.png" alt="ePactive" />
    </span>
  );
}

function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className={`motion-header site-header${solid ? " motion-header-solid" : ""}`}>
        <Link href="/" className="motion-brand" aria-label="ePactive home"><Mark /></Link>
        <nav className="motion-nav site-nav" aria-label="Primary navigation">
          <div className="nav-cluster"><button className="nav-trigger">About <ChevronDown size={13} /></button><div className="nav-mega nav-mega-about"><p>THE EPACTIVE STORY</p><Link href="/about"><b>Pactive Ecosystem</b><span>One connected platform</span></Link><Link href="/pactive-korea"><b>Pactive Korea</b><span>Industrial and operating foundation</span></Link><Link href="/"><b>ePactive</b><span>Energy, industry, and systems</span></Link><Link href="/neipclova"><b>Neipclova</b><span>Culture, art, and technology</span></Link><Link href="/philosophy"><b>Our Philosophy</b><span>Technology in service of life</span></Link></div></div>
          <div className="nav-cluster"><button className="nav-trigger">Solutions <ChevronDown size={13} /></button><div className="nav-mega nav-mega-solutions"><p>EPACTIVE SOLUTIONS</p><Link href="/aos"><b>AOS</b><span>Automobile Optimization System</span></Link><Link href="/fuel-bar"><b>Fuel Bar</b><span>A fuel-side concept story</span></Link><Link href="/automotive-film"><b>Automotive Film</b><span>Heat-rejection glass film & PPF</span></Link></div></div>
          <Link className="nav-direct" href="/business">Ventures</Link>
          <Link className="nav-direct" href="/contact">Contact</Link>
        </nav>
        <Link className="motion-contact" href="/contact">Start a conversation <ArrowUpRight size={15} /></Link>
        <button className="motion-menu" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </header>
      {menuOpen && <nav className="motion-mobile-nav future-mobile-nav" aria-label="Mobile navigation"><Link onClick={() => setMenuOpen(false)} href="/about">About <ArrowDownRight size={18} /></Link><Link onClick={() => setMenuOpen(false)} href="/aos">Solutions <ArrowDownRight size={18} /></Link><Link onClick={() => setMenuOpen(false)} href="/business">Ventures <ArrowDownRight size={18} /></Link><Link onClick={() => setMenuOpen(false)} href="/contact">Contact <ArrowDownRight size={18} /></Link></nav>}
    </>
  );
}

export default function Home() {
  const [headerSolid, setHeaderSolid] = useState(false);
  const [activeLdk, setActiveLdk] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const selected = ldkChoices[activeLdk];
  const SelectedIcon = selected.icon;

  useEffect(() => {
    const onScroll = () => setHeaderSolid(window.scrollY > 34);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (target: string) => {
    scrollToId(target);
  };

  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="motion-site">
      <SiteHeader solid={headerSolid} />

      <main id="top">
        <section className="motion-hero" aria-labelledby="hero-title">
          <div className="hero-car" />
          <div className="hero-spectrum" />
          <div className="hero-light-pool" />
          <div className="hero-veil" />
          <div className="hero-texture" />
          <div className="hero-copy-shell">
            <p className="hero-label"><span /> EPACTIVE / ENERGY IN MOTION</p>
            <h1 id="hero-title">Feel the energy<br /><em>before it moves.</em></h1>
            <p className="hero-subtitle">A platform for material intelligence, energy systems, and the measured relationships that make movement more considered.</p>
            <div className="hero-actions">
              <button className="hero-discover" onClick={() => navigate("aos")}>Explore AOS <ArrowDownRight size={20} /></button>
              <Link className="spectrum-button" href="/fuel-bar"><span className="spectrum-mini" /> Explore Fuel Bar</Link>
            </div>
          </div>
          <div className="spectrum-legend"><span>RED</span><i /><span>ORANGE</span><i /><span>YELLOW</span><i /><span>GREEN</span><i /><span>BLUE</span><i /><span>INDIGO</span><i /><span>VIOLET</span></div>
          <div className="hero-footer-line"><span>01</span><i /><span>LIGHT / ENERGY / MOTION</span><span className="hero-origin">Pactive Korea · Seoul</span></div>
        </section>

        <section className="direction-section" aria-labelledby="direction-title">
          <div className="direction-serial">01</div>
          <div className="direction-title"><p className="eyebrow-dark">THE EPACTIVE DIRECTION</p><h2 id="direction-title">Electric. Power.<br /><em>Potential.</em> Active.</h2></div>
          <div className="direction-copy"><p>ePactive gives the potential held in energy and power an active direction—across materials, mobility, electronics, energy systems, and future-facing research.</p><p className="direction-note">An innovation platform in the Pactive Korea ecosystem, joining practical system work with patient, cross-disciplinary inquiry.</p></div>
        </section>

        <section className="company-presence" aria-labelledby="company-presence-title">
          <div className="company-presence-index">01A</div>
          <div className="company-presence-copy"><p className="eyebrow-light">EPACTIVE / COMPANY PRESENCE</p><h2 id="company-presence-title">A place for<br /><em>energy to become active.</em></h2><p>ePactive is an energy, materials, and systems platform in the Pactive Korea ecosystem. We bring together industrial process thinking, cross-disciplinary research, and future-facing technology through careful questions and practical collaboration.</p><Link href="/pactive-korea" className="system-link">Explore the group foundation <ArrowUpRight size={17} /></Link></div>
          <address className="company-address"><div className="company-address-title"><MapPin size={17} /><span>HEAD OFFICE / SEOUL</span></div><p>Seongsu Academy Tower Suite 1611,<br />118, Seongsui-ro, Seongdong-gu,<br />Seoul, South Korea 04797</p><div className="company-site-row"><span>OPERATING LOCATIONS</span><div><b>INCHEON</b><i /> <b>BUNDANG</b></div><small>Factory and office operations</small></div></address>
        </section>

        <section className="aos-overview" id="aos" aria-labelledby="aos-title">
          <div className="aos-overview-media" />
          <div className="aos-overview-shade" />
          <div className="aos-overview-copy">
            <p className="eyebrow-light">02 / AOS</p>
            <h2 id="aos-title">One system.<br /><em>Three selections.</em></h2>
            <p>AOS is the Automobile Optimization System. LDK is not a company name: it is the vehicle-selection family inside AOS—Lite, Drive, and King—chosen according to the vehicle class and electrical architecture.</p>
            <div className="aos-quick-flow"><span>Vehicle fit</span><i /><span>LDK selection</span><i /><span>Measured pilot</span></div>
            <Link href="/aos" className="system-link">Explore the AOS system <ArrowUpRight size={17} /></Link>
          </div>
          <div className="aos-overview-note">AOS is presented as a vehicle-management concept. Final vehicle fit and any observed result must be verified in context.</div>
        </section>

        <section className="ldk-section" aria-labelledby="ldk-title">
          <div className="section-heading-dark"><div><p className="eyebrow-light">03 / LDK SELECTION</p><h2 id="ldk-title">Choose the vehicle.<br /><em>Then choose LDK.</em></h2></div><p>LDK stands for Lite, Drive, and King. It is a straightforward selection framework inside AOS—not a separate company or a one-size-fits-all device.</p></div>
          <div className="ldk-stage">
            <div className="aos-loop" aria-label="AOS vehicle optimization loop">
              <div className="loop-ring loop-ring-one" /><div className="loop-ring loop-ring-two" /><div className="loop-core"><Zap size={22} /><span>AOS</span></div>
              {aosRouteNotes.map((note) => <button key={note.id} className={`loop-point ${note.className}`}><span>{note.number}</span><strong>{note.title.split(" ").map((word, index) => <Fragment key={`${note.id}-${word}-${index}`}>{index > 0 && <br />}{word}</Fragment>)}</strong><small>{note.label}</small><span className="loop-tooltip"><b>{note.title}</b>{note.detail}</span></button>)}
              <div className="loop-track"><span /><span /><span /><span /></div>
            </div>
            <div className="aos-description"><p className="aos-kicker">AUTOMOBILE OPTIMIZATION SYSTEM</p><h3>Match the system.<br /><em>Respect the vehicle.</em></h3><p>Start with the vehicle, not a promise. AOS is framed as a measured vehicle-management concept. The LDK choice follows vehicle class, electrical architecture, duty, and the conditions that matter on the road.</p><div className="evidence-chip"><Activity size={15} /><span>Vehicle fit first. Claims only with documented evidence.</span></div></div>
          </div>
          <div className="ldk-product-area">
            <div className="ldk-tabs" role="tablist" aria-label="LDK vehicle selections">
              {ldkChoices.map((choice, index) => <button key={choice.id} role="tab" aria-selected={index === activeLdk} className={`ldk-tab ldk-tab--${choice.id}${index === activeLdk ? " ldk-tab-active" : ""}`} onMouseEnter={() => setActiveLdk(index)} onFocus={() => setActiveLdk(index)} onClick={() => setActiveLdk(index)}><span className="ldk-tab-index">{String(index + 1).padStart(2, "0")}</span><span className="ldk-tab-word"><strong>{choice.code}</strong><small>{choice.meaning}</small></span><span className="ldk-tab-visual" aria-hidden="true"><i /><i /><i /></span><ChevronRight className="ldk-tab-arrow" size={17} /></button>)}
            </div>
            <div className={`ldk-detail ldk-detail--${selected.id}`} role="tabpanel" aria-live="polite">
              <div className="ldk-glass-mark">{selected.code.charAt(0)}</div>
              <div className="ldk-detail-main"><div><div className="ldk-detail-topline"><span className="ldk-detail-serial">LDK SELECTION / {selected.use}</span><span className="ldk-meaning-tag">{selected.meaning}</span></div><h3>{selected.code}</h3><p className="ldk-line">A vehicle-fit choice within AOS.</p><p className="ldk-detail-copy">{selected.detail}</p><div className="ldk-specs"><span><small>VOLTAGE GUIDANCE</small>{selected.voltage}</span><span><small>APPLICATION CONTEXT</small>{selected.use}</span></div></div><div className="ldk-tech-focus"><div className="ldk-tech-visual" aria-hidden="true"><span className="ldk-tech-orbit ldk-tech-orbit-one" /><span className="ldk-tech-orbit ldk-tech-orbit-two" /><span className="ldk-tech-node ldk-tech-node-one" /><span className="ldk-tech-node ldk-tech-node-two" /><span className="ldk-tech-icon"><SelectedIcon size={24} /></span></div><div className="ldk-tech-copy"><small>SELECTION LOGIC</small><strong>Vehicle class + electrical architecture</strong><p>Each LDK selection begins with fit. Route, use pattern, duty, and final installation requirements are reviewed before any measured pilot conversation.</p></div></div></div>
            </div>
          </div>
          <div className="proof-rail">{proofNotes.map((note, index) => <button key={note.title} className="proof-card"><span>{String(index + 1).padStart(2, "0")}</span><strong>{note.title}</strong><p>{index === 0 ? "Confirm vehicle class and electrical architecture." : index === 1 ? "Use a familiar route and a defined baseline." : "Review the measured experience in context."}</p><div className="proof-detail"><i /><b>{note.title} / WHY IT MATTERS</b><small>{note.detail}</small></div></button>)}<div className="proof-rail-end">YOUR VEHICLE. YOUR ROAD.<br />YOUR DATA. YOUR DECISION.</div></div>
        </section>

        <section className="fuel-teaser" aria-labelledby="fuel-teaser-title">
          <div className="fuel-teaser-media" /><div className="fuel-engine-assembly" aria-hidden="true"><i className="engine-shell" /><i className="engine-ring engine-ring-one" /><i className="engine-ring engine-ring-two" /><i className="engine-piston engine-piston-one" /><i className="engine-piston engine-piston-two" /><i className="engine-piston engine-piston-three" /><span className="engine-core"><Zap size={22} /></span><b>ENGINE / ENERGY IN MOTION</b></div><div className="fuel-teaser-shade" />
          <div className="fuel-teaser-copy"><p className="eyebrow-light">04 / FUEL BAR</p><h2 id="fuel-teaser-title">A quieter story<br /><em>inside the fuel.</em></h2><p>Fuel Bar is discussed as a fuel-side concept. Its communication focus is not changing the fuel material. It is a conceptual way of describing how temporary clustered states may be considered more evenly before combustion.</p><Link href="/fuel-bar" className="system-link">Enter the Fuel Bar story <ArrowUpRight size={17} /></Link><p className="fuel-disclosure">Concept visualization only. This is not a performance claim, fuel specification, or technical schematic.</p></div>
          <div className="fuel-teaser-caption"><span>FUEL TANK</span><i /><span>FUEL BAR</span><i /><span>ENGINE</span></div>
        </section>

        <section className="business-section" id="business" aria-labelledby="business-title">
          <div className="business-media" /><div className="business-shade" />
          <div className="business-heading"><p className="eyebrow-light">05 / VENTURES</p><h2 id="business-title">Built to connect<br /><em>industries in motion.</em></h2><p>Within the Pactive Korea ecosystem, ePactive connects materials, process plants, global R&D programs, intelligent technology, and energy systems through practical design, observation, and a long-term view.</p></div>
          <div className="business-grid">{businessFields.map((field) => { const Icon = field.icon; return <Link key={field.number} href={`/business/${field.slug}`} className="business-card"><span>{field.number}</span><Icon size={19} /><h3>{field.title}</h3><p>{field.text}</p><b>Explore <ArrowUpRight size={14} /></b></Link>; })}</div>
          <Link href="/business" className="business-more">Enter the ventures platform <ArrowUpRight size={16} /></Link>
        </section>

        <section className="systems-section" aria-labelledby="systems-title">
          <div className="systems-copy"><p className="eyebrow-dark">06 / ACTIVE ACROSS SYSTEMS</p><h2 id="systems-title">From the road<br />to the <em>wider system.</em></h2><p>ePactive explores how careful energy thinking may travel across mobility, marine systems, controlled agriculture, materials, and future infrastructure. Each field requires its own fit, evidence, and operating context.</p></div>
          <div className="systems-ribbon"><article className="system-card system-card-mobility"><Gauge size={20} /><div><small>01</small><span>Mobility</span></div></article><article className="system-card system-card-marine"><ShipWheel size={20} /><div><small>02</small><span>Marine</span></div></article><article className="system-card system-card-agri"><Sprout size={20} /><div><small>03</small><span>Agri-energy</span></div></article><article className="system-card system-card-industry"><Factory size={20} /><div><small>04</small><span>Industry</span></div></article><article className="system-card system-card-materials"><Waves size={20} /><div><small>05</small><span>Materials</span></div></article></div>
        </section>

        <section className="contact-section-motion" id="contact" aria-labelledby="contact-title">
          <div className="contact-fog" /><div className="contact-intro"><p className="eyebrow-light">07 / START THE CONVERSATION</p><h2 id="contact-title">What do you want<br />to <em>move?</em></h2><p>An AOS vehicle-fit question. A Fuel Bar conversation. A material or energy-system opportunity. Start with a considered human conversation.</p><a href="mailto:hyeon@epactive.com" className="driver-link"><Mail size={19} /> hyeon@epactive.com <ArrowUpRight size={17} /></a><div className="contact-channels"><a href="tel:+8224380287"><Phone size={13} /> +82 (0)2-438-0287</a><span><Printer size={13} /> +82 (0)2-433-0287</span></div><div className="contact-location"><MapPin size={14} /> Seoul, Republic of Korea · Global outlook</div></div>
          <div className="motion-form-wrap">{submitted ? <div className="motion-success"><span><Check size={25} /></span><p className="eyebrow-light">MESSAGE PREPARED</p><h3>Thank you.</h3><p>For direct delivery, send your note to the ePactive team.</p><a href="mailto:hyeon@epactive.com?subject=ePactive%20inquiry" className="driver-mail-button">Email ePactive <ArrowUpRight size={16} /></a><button onClick={() => setSubmitted(false)}>Write another note</button></div> : <form className="motion-form" onSubmit={submitInquiry}><div className="motion-form-row"><label>NAME<input name="name" required placeholder="Your name" /></label><label>EMAIL<input name="email" type="email" required placeholder="you@company.com" /></label></div><label className="motion-wide-label">WHAT WOULD YOU LIKE TO MOVE FORWARD?<span><textarea name="message" required rows={4} placeholder="A vehicle-fit question, an energy-system project, or an idea in motion." /></span></label><div className="motion-form-foot"><span>This preview prepares your message. Email provides direct delivery.</span><button type="submit">Send enquiry <Send size={16} /></button></div></form>}</div>
        </section>
      </main>

      <footer className="motion-footer"><div><Mark /><p>Energy, made active.</p></div><div className="footer-family"><span>ePactive</span><i /> <span>Pactive Korea ecosystem</span></div><div className="footer-end"><span>© {new Date().getFullYear()}</span><button onClick={() => navigate("top")}>Back to top <ArrowUpRight size={14} /></button></div></footer>
    </div>
  );
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="motion-site contact-page">
      <SiteHeader solid />
      <main>
        <section className="contact-section-motion contact-page-section" id="contact" aria-labelledby="contact-page-title">
          <div className="contact-fog" />
          <div className="contact-intro"><p className="eyebrow-light">START THE CONVERSATION</p><h2 id="contact-page-title">What do you want<br />to <em>move?</em></h2><p>An AOS vehicle-fit question. A Fuel Bar conversation. A material or energy-system opportunity. Start with a considered human conversation.</p><a href="mailto:hyeon@epactive.com" className="driver-link"><Mail size={19} /> hyeon@epactive.com <ArrowUpRight size={17} /></a><div className="contact-channels"><a href="tel:+8224380287"><Phone size={13} /> +82 (0)2-438-0287</a><span><Printer size={13} /> +82 (0)2-433-0287</span></div><div className="contact-location"><MapPin size={14} /> Seoul, Republic of Korea · Global outlook</div></div>
          <div className="motion-form-wrap">{submitted ? <div className="motion-success"><span><Check size={25} /></span><p className="eyebrow-light">MESSAGE PREPARED</p><h3>Thank you.</h3><p>For direct delivery, send your note to the ePactive team.</p><a href="mailto:hyeon@epactive.com?subject=ePactive%20inquiry" className="driver-mail-button">Email ePactive <ArrowUpRight size={16} /></a><button onClick={() => setSubmitted(false)}>Write another note</button></div> : <form className="motion-form" onSubmit={submitInquiry}><div className="motion-form-row"><label>NAME<input name="name" required placeholder="Your name" /></label><label>EMAIL<input name="email" type="email" required placeholder="you@company.com" /></label></div><label className="motion-wide-label">WHAT WOULD YOU LIKE TO MOVE FORWARD?<span><textarea name="message" required rows={4} placeholder="A vehicle-fit question, an energy-system project, or an idea in motion." /></span></label><div className="motion-form-foot"><span>This form prepares your message. Email provides direct delivery.</span><button type="submit">Send enquiry <Send size={16} /></button></div></form>}</div>
        </section>
      </main>
      <footer className="motion-footer"><div><Mark /><p>Energy, made active.</p></div><div className="footer-family"><span>ePactive</span><i /> <span>Pactive Korea ecosystem</span></div><div className="footer-end"><span>© {new Date().getFullYear()}</span><Link href="/">Home <ArrowUpRight size={14} /></Link></div></footer>
    </div>
  );
}

export function SystemPage({ type }: { type: "aos" | "fuel" | "business" }) {
  const [activeAosLens, setActiveAosLens] = useState(0);
  const isAos = type === "aos";
  const isFuel = type === "fuel";
  const title = isAos ? "AOS, made for the vehicle in front of you." : isFuel ? "Fuel Bar, explained without changing the fuel story." : "A connected platform for the work ahead.";
  const body = isAos
    ? "AOS is the Automobile Optimization System. Within it, LDK is the selection framework—Lite, Drive, and King. The selection begins with vehicle class, electrical architecture, use pattern, and final installation fit."
    : isFuel
      ? "Fuel Bar is a fuel-side communication concept. It does not describe a change to the chemical identity of fuel. It is a way to visualize a more even consideration of temporary clustered fuel states before combustion, without promising a specific outcome."
      : "ePactive brings together advanced materials, foundational science, electrical and electronic systems, bio-electric material exploration, and clean energy applications. The platform is designed to connect ideas across disciplines while remaining practical about fit, evidence, and responsible scale.";
  const imageClass = isAos ? "system-page-aos" : isFuel ? "system-page-fuel" : "system-page-business";
  const fields = isAos ? ["Vehicle class", "Electrical architecture", "LDK selection", "Measured pilot"] : isFuel ? ["Fuel tank context", "Fuel Bar concept", "Engine-side context", "Measured discussion"] : businessFields.map((item) => item.title);
  const aosLenses = [
    { label: "Vehicle", title: "The vehicle is the starting point.", copy: "Body type, duty cycle, route, passenger load, and daily use all shape the conversation before an LDK selection is made.", meta: "VEHICLE / REAL OPERATING CONDITIONS", visual: "vehicle" },
    { label: "Architecture", title: "Read the electrical architecture.", copy: "AOS selection takes the vehicle’s electrical architecture seriously. It is part of the fit conversation, not a technical afterthought.", meta: "ARCHITECTURE / POWER CONTEXT", visual: "architecture" },
    { label: "Route", title: "Let the route reveal the pattern.", copy: "A familiar road pattern creates a more useful baseline for a measured pilot conversation than an abstract promise ever can.", meta: "ROUTE / BASELINE OBSERVATION", visual: "route" },
    { label: "Observe", title: "Observe before the next decision.", copy: "The point is not a universal result. It is to turn a known vehicle and a documented context into a considered next decision.", meta: "OBSERVE / DISCUSS / DECIDE", visual: "observe" },
  ];
  const activeLens = aosLenses[activeAosLens];

  return (
    <div className="system-page">
      <SiteHeader />
      <main>
        <section className={`system-page-hero ${imageClass}`}><div className="system-page-shade" /><div className="system-page-copy"><p className="eyebrow-light">EPACTIVE / {isAos ? "AOS" : isFuel ? "FUEL BAR" : "BUSINESS PLATFORM"}</p><h1>{title}</h1><p>{body}</p><Link href="/contact" className="system-link">Start a conversation <ArrowUpRight size={17} /></Link></div><div className="system-page-index">01 / {isAos ? "AOS" : isFuel ? "FUEL BAR" : "BUSINESS"}</div></section>
        <section className={`system-page-detail${isFuel ? " fuel-context-panel" : ""}`}><div><p className="eyebrow-dark">{isFuel ? "FUEL BAR / CONCEPT LAYER" : "HOW TO READ THIS"}</p><h2>{isAos ? <>Start with the <em>vehicle.</em></> : isFuel ? <>Read the <em>fuel-side rhythm.</em></> : <>Start with the <em>discipline.</em></>}</h2></div><p>{isAos ? "LDK is the selection inside AOS. Lite, Drive, and King are not company divisions; they are practical vehicle-fit choices. Confirm the vehicle and electrical architecture before any installation or pilot conversation." : isFuel ? "Fuel Bar is a fuel-side communication concept. The visual considers the path from tank to engine and the possibility of a more even temporary fuel field before combustion. It does not state that fuel chemistry changes, nor does it promise a specific efficiency or emissions outcome." : "ePactive’s business areas are designed to inform one another. Materials can shape electronics; electronics can improve observation; observation can support better energy-system decisions. Each program is evaluated in its own operating context."}</p></section>
        {isFuel ? <section className="fuel-rhythm-cards" aria-label="Fuel Bar concept layers"><article className="fuel-rhythm-card tank"><span>01 / FUEL TANK</span><div className="fuel-card-art"><i /><i /><i /></div><h3>Fuel tank context</h3><p>Start with the physical journey from tank to engine—without changing the identity of the fuel.</p></article><article className="fuel-rhythm-card bar"><span>02 / FUEL BAR</span><div className="fuel-card-art"><i /><i /><i /></div><h3>Concept field</h3><p>A visual way to consider temporary clustered states more evenly before combustion.</p></article><article className="fuel-rhythm-card engine"><span>03 / ENGINE</span><div className="fuel-card-art"><i /><i /><i /></div><h3>Engine-side context</h3><p>The concept becomes part of a measured conversation at the engine-side context.</p></article><article className="fuel-rhythm-card data"><span>04 / DISCUSS</span><div className="fuel-card-art"><i /><i /><i /></div><h3>Measured discussion</h3><p>Review the observed experience in context. No universal efficiency claim is implied.</p></article></section> : <section className="system-page-steps">{fields.map((field, index) => <div key={field}><span>{String(index + 1).padStart(2, "0")}</span><h3>{field}</h3><p>{isAos ? "Review the actual operating context before selecting an LDK configuration." : "A distinct capability within the ePactive business platform."}</p></div>)}</section>}
        {isAos && <section className="aos-storyboard" aria-label="AOS vehicle selection storyboard"><div className="aos-storyboard-heading"><div><p className="eyebrow-light">START WITH THE VEHICLE</p><h2>Click into the<br /><em>road you know.</em></h2></div><p>A visual guide to the questions that make an AOS discussion more useful. Select a stage to reveal its role in the vehicle-fit conversation.</p></div><div className="aos-storyboard-stage"><div className={`aos-story-visual aos-story-${activeLens.visual}`} aria-hidden="true"><i /><i /><i /><span><CarFront size={29} /></span><b>{activeLens.meta}</b></div><div className="aos-story-copy"><p>{String(activeAosLens + 1).padStart(2, "0")} / {activeLens.label.toUpperCase()}</p><h3>{activeLens.title}</h3><p>{activeLens.copy}</p><div className="aos-story-tabs">{aosLenses.map((lens, index) => <button key={lens.label} onClick={() => setActiveAosLens(index)} className={index === activeAosLens ? "active" : ""}><span>{String(index + 1).padStart(2, "0")}</span>{lens.label}<ArrowUpRight size={14} /></button>)}</div></div></div></section>}
        <section className="system-page-disclosure"><Activity size={18} /><p>{isFuel ? "Fuel Bar communication uses a conceptual visualization. It does not make a claim that fuel chemistry is changed, and it does not guarantee fuel-use or emissions outcomes." : isAos ? "AOS information is presented as a manufacturer-described vehicle-management concept. Any fit or observed outcome must be reviewed with the actual vehicle, route, and documented evidence." : "Business platform descriptions describe areas of inquiry and development direction. They are not product specifications, medical claims, or performance guarantees."}</p></section>
      </main>
      <footer className="motion-footer"><div><Mark /><p>Energy, made active.</p></div><div className="footer-family"><span>ePactive</span><i /> <span>Pactive Korea ecosystem</span></div><div className="footer-end"><span>© {new Date().getFullYear()}</span><Link href="/">Home <ArrowUpRight size={14} /></Link></div></footer>
    </div>
  );
}

export function BusinessPage() {
  const operatingLines = [
    {
      index: "01",
      className: "business-line-energy-system",
      eyebrow: "ENERGY SYSTEMS",
      title: "Energy, understood as a system.",
      copy: "ePactive approaches energy as a connected system rather than an isolated component. Across material, mobility, industrial, and future applications, the work considers energy movement, operating conditions, interfaces, and how a solution can be evaluated in its real environment.",
      items: ["Energy flow", "System interface", "Operational context", "Measured pathway"],
      markets: ["Mobility", "Industry", "Materials", "Future infrastructure"],
    },
    {
      index: "02",
      className: "business-line-film",
      eyebrow: "FILM / COATING / PLASTIC PROCESSING",
      title: "A material line that keeps moving.",
      copy: "ePactive supports plant and process work across film, casting, nano-layer, lamination, and related plastic-material operations. The work is shaped for applications where surface behavior, repeatable production, and precise process control matter—from building materials and medical components to electronic and high-tech surfaces.",
      items: ["Film", "Casting", "Nano layer", "Lamination"],
      markets: ["Architecture", "Medical", "Electronics", "High-tech"],
    },
    {
      index: "03",
      className: "business-line-fill",
      eyebrow: "FILLING / PACKAGING / PRECISION PROCESS",
      title: "Flow, filled and packaged with discipline.",
      copy: "For drinking, production, and precision-process environments, ePactive brings a systems view to filling and packaging lines. It considers material flow, dosing rhythm, conveying, closure, packaging interface, and the conditions required for dependable line operation.",
      items: ["Flow", "Dosing", "Conveying", "Packaging"],
      markets: ["Drinking", "Manufacturing", "Precision", "Packaging"],
    },
    {
      index: "04",
      className: "business-line-frontier",
      eyebrow: "ROBOT / AI / SEMICONDUCTOR",
      title: "New technology starts with a new question.",
      copy: "Robot, AI, and semiconductor programs need more than individual components. They require an integrated view of materials, precision, sensing, process conditions, and the way a next-generation system must operate in the real world.",
      items: ["Robotics", "AI direction", "Semiconductor", "Precision systems"],
      markets: ["Automation", "Intelligent systems", "High-tech", "Future programs"],
    },
    {
      index: "05",
      className: "business-line-rnd",
      eyebrow: "GLOBAL R&D SERVICE",
      title: "Experience that helps research travel further.",
      copy: "ePactive has experience supporting global laboratory and R&D agendas where a single technical question reaches across materials, engineering, process design, and commercialization. We help frame the problem, connect the right capability, and make the path from research task to practical development more understandable.",
      items: ["Research framing", "Partner connection", "Program support", "Practical translation"],
      markets: ["Global labs", "Development teams", "Industry partners", "Future programs"],
    },
  ];

  return (
    <div className="business-page">
      <SiteHeader />
      <main>
        <section className="business-page-hero" aria-labelledby="business-page-title">
          <div className="business-page-hero-shade" />
          <div className="business-page-hero-copy"><p className="eyebrow-light">EPACTIVE / VENTURES</p><h1 id="business-page-title">Operations. Research.<br /><em>New thinking in motion.</em></h1><p>ePactive connects practical industrial lines, global R&D support, and emerging technology thinking across materials, processes, energy systems, robotics, artificial intelligence, and semiconductors.</p><Link href="/contact" className="system-link">Discuss a program <ArrowUpRight size={17} /></Link></div>
          <div className="business-page-signal" aria-hidden="true"><i /><i /><i /><span>EPACTIVE VENTURES</span></div>
        </section>

        <section className="ecosystem-section" aria-labelledby="ecosystem-title">
          <div className="ecosystem-intro"><p className="eyebrow-dark">THE ECOSYSTEM</p><h2 id="ecosystem-title">One foundation.<br /><em>Two active companies.</em></h2><p>Pactive Korea is the operating foundation for the ecosystem. ePactive and Neipclova work within it as complementary platforms: ePactive focuses on energy, systems, materials, and industrial innovation; Neipclova extends work in bio-material exploration and living-system perspectives.</p></div>
          <div className="ecosystem-map" aria-label="Pactive Korea ecosystem structure"><Link href="/pactive-korea" className="ecosystem-root"><span>FOUNDATION</span><strong>Pactive Korea</strong><small>Operating ecosystem <ArrowUpRight size={12} /></small></Link><div className="ecosystem-link" /><div className="ecosystem-branches"><Link href="/" aria-label="ePactive home"><span>01</span><strong>ePactive</strong><p>Energy systems · industrial process · materials · mobility</p></Link><Link href="/neipclova"><span>02</span><strong>Neipclova</strong><p>Bio-material exploration · living systems · future surfaces</p></Link></div><Link href="/flowsophia" className="ecosystem-flow-link">FlowSophia / Lighthouse Poet Yoo Hyeun <ArrowUpRight size={13} /></Link></div>
        </section>

        <section className="business-lines" aria-label="Operating capabilities">
          {operatingLines.map((line, lineIndex) => <article key={line.index} className={`business-line ${line.className}${lineIndex % 2 === 1 ? " business-line-reverse" : ""}`}><div className="business-line-media"><div className="business-line-energy" aria-hidden="true"><i /><i /><i /><i /></div><div className="business-line-visual"><span>{line.index}</span><b>{line.eyebrow}</b></div></div><div className="business-line-copy"><p className="eyebrow-dark">{line.index} / {line.eyebrow}</p><h2>{line.title}</h2><p>{line.copy}</p><div className="line-tags">{line.items.map((item) => <span key={item}>{item}</span>)}</div><div className="market-tags"><small>APPLICATION AREAS</small><div>{line.markets.map((market) => <span key={market}>{market}</span>)}</div></div></div></article>)}
        </section>

        <section className="venture-vision"><div className="venture-vision-shade" /><div className="venture-vision-copy"><p className="eyebrow-light">ONE PLATFORM / MANY DIRECTIONS</p><h2>Material. Energy.<br /><em>Living culture.</em></h2><p>ePactive ventures work across the places where industrial reality, research curiosity, and human-scale imagination need to meet. The ecosystem gives each direction a distinct voice while allowing capability to travel between fields.</p><Link href="/about" className="system-link">Meet the ecosystem <ArrowUpRight size={17} /></Link></div><div className="venture-vision-orbit" aria-hidden="true"><i /><i /><i /></div></section>

        <section className="frontier-section" aria-labelledby="frontier-title">
          <div className="frontier-heading"><p className="eyebrow-light">NEW FRONTIERS</p><h2 id="frontier-title">New systems require<br /><em>new ways of thinking.</em></h2><p>Robot, AI, and semiconductor programs need more than individual components. They require a shared view of materials, precision, sensing, process integration, and how a future system will actually operate.</p></div>
          <div className="frontier-grid"><article><Factory size={25} /><span>01</span><h3>Robot systems</h3><p>Industrial motion, production cells, material handling, and the process conditions that allow automated systems to work with confidence.</p></article><article><Orbit size={25} /><span>02</span><h3>AI direction</h3><p>Fresh problem framing for AI-enabled observation, smarter process decisions, and the relationship between real physical conditions and digital intelligence.</p></article><article><Zap size={25} /><span>03</span><h3>Semiconductor future</h3><p>Material, coating, clean-process, and high-precision thinking for semiconductor-adjacent development and future technology collaboration.</p></article></div>
        </section>

        <section className="business-cta"><div><p className="eyebrow-light">GLOBAL PROGRAM SUPPORT</p><h2>Bring the question.<br /><em>We help make the path visible.</em></h2></div><p>From a production line to a global laboratory program, ePactive supports complex questions with cross-disciplinary experience, practical dialogue, and a readiness to connect the right next step.</p><Link href="/contact" className="system-link">Start a conversation <ArrowUpRight size={17} /></Link></section>
      </main>
      <footer className="motion-footer"><div><Mark /><p>Energy, made active.</p></div><div className="footer-family"><span>ePactive</span><i /> <span>with Neipclova in the Pactive Korea ecosystem</span></div><div className="footer-end"><span>© {new Date().getFullYear()}</span><Link href="/">Home <ArrowUpRight size={14} /></Link></div></footer>
    </div>
  );
}


export type CapabilityKey = "energy-systems" | "film-coating" | "filling-packaging" | "robot-ai-semiconductor" | "global-rnd-service";
type GroupKey = "pactive-korea" | "neipclova" | "flowsophia";

const capabilityDetails: Record<CapabilityKey, { eyebrow: string; title: string; lead: string; focus: string[]; visual: string; note: string }> = {
  "energy-systems": {
    eyebrow: "EPACTIVE / ENERGY SYSTEMS",
    title: "Energy is more useful when the system is visible.",
    lead: "ePactive looks at energy across movement, materials, electrical architectures, and industrial interfaces. The goal is to make the relationships around energy easier to observe, discuss, and improve in their actual operating environment.",
    focus: ["Energy flow", "Power architecture", "System interface", "Measured pathway"],
    visual: "capability-energy",
    note: "Every project begins with context: the environment, the operating load, the existing system, and the question that needs to be answered.",
  },
  "film-coating": {
    eyebrow: "EPACTIVE / FILM & COATING",
    title: "A surface can hold a system of ideas.",
    lead: "Film, casting, nano-layer, lamination, and material process lines are approached as connected production systems. ePactive helps shape the conversation between substrate, coating, surface, process condition, and the application that follows.",
    focus: ["Film", "Casting", "Nano layer", "Lamination"],
    visual: "capability-film",
    note: "Application conversations span architecture, medical, electronics, and high-tech materials where repeatability and surface behavior matter.",
  },
  "filling-packaging": {
    eyebrow: "EPACTIVE / FILLING & PACKAGING",
    title: "Flow becomes a product experience.",
    lead: "Filling and packaging lines are viewed through flow, timing, dosing, conveying, package interface, and operational rhythm. ePactive supports practical process conversations across drinking, manufacturing, and precision environments.",
    focus: ["Dosing", "Conveying", "Packaging", "Line rhythm"],
    visual: "capability-fill",
    note: "The right conversation aligns the process line with its material, output, quality needs, and real operating conditions.",
  },
  "robot-ai-semiconductor": {
    eyebrow: "EPACTIVE / ROBOT · AI · SEMICONDUCTOR",
    title: "New technology begins with new questions.",
    lead: "Robot, AI, and semiconductor initiatives are not treated as isolated buzzwords. They are approached through material behavior, sensing, precision, process integration, and the new forms of collaboration that emerging systems demand.",
    focus: ["Robotics", "AI direction", "Semiconductor", "Precision systems"],
    visual: "capability-frontier",
    note: "ePactive brings an interdisciplinary mindset to programs where physical conditions and digital intelligence must meet.",
  },
  "global-rnd-service": {
    eyebrow: "EPACTIVE / GLOBAL R&D SERVICE",
    title: "A research question deserves a path forward.",
    lead: "ePactive supports global laboratories, development teams, and industry partners with experience in programs that cross materials, engineering, process design, and commercialization. The service begins by clarifying the question and connecting the capabilities needed for the next stage.",
    focus: ["Research framing", "Partner connection", "Program support", "Practical translation"],
    visual: "capability-rnd",
    note: "The aim is not to over-promise; it is to help complex research become more legible, collaborative, and ready for a practical development conversation.",
  },
};

const groupProfiles: Record<GroupKey, { eyebrow: string; title: string; lead: string; visual: string; external: string; externalLabel: string; pillars: { heading: string; text: string }[]; statement: string }> = {
  "pactive-korea": {
    eyebrow: "Pactive Korea / Group Foundation",
    title: "The platform behind the movement.",
    lead: "Pactive Korea is presented within the ePactive story as the operating foundation for a wider ecosystem of industrial, material, energy, and future-facing work. It gives the group a shared point of view: serious inquiry, practical technology, and a long-term appetite for new systems.",
    visual: "profile-pactive",
    external: "http://www.pactivekorea.com/en/",
    externalLabel: "Visit Pactive Korea",
    pillars: [
      { heading: "Operating foundation", text: "A shared organizational base for ePactive and Neipclova within the group narrative." },
      { heading: "Industrial perspective", text: "A practical orientation toward technology, process, materials, and the conditions required to put an idea into motion." },
      { heading: "Open connection", text: "A platform designed to connect collaborators, development programs, and opportunities across fields." },
    ],
    statement: "Pactive Korea gives the ecosystem its center of gravity—so each specialized platform can speak with its own voice while remaining part of a coherent whole.",
  },
  neipclova: {
    eyebrow: "Neipclova / Bio-material Perspective",
    title: "Material, life, and the quiet intelligence of form.",
    lead: "Within the group story, Neipclova brings a bio-material and living-systems perspective to the wider ePactive platform. Its presentation is inspired by the Korean moon jar: balanced, tactile, quietly expressive, and attentive to the relationship between material form and human experience.",
    visual: "profile-neipclova",
    external: "http://www.neipclova.com/",
    externalLabel: "Visit Neipclova",
    pillars: [
      { heading: "Bio-material perspective", text: "An exploratory lens for intelligent surfaces, material behavior, and the relationships between designed matter and living systems." },
      { heading: "Moon jar sensibility", text: "A cultural reference for balance, restrained beauty, tactile depth, and the power of a form that does not need excess to be present." },
      { heading: "Human-centered inquiry", text: "A place in the group narrative for questions where materials, environment, attention, and future experience meet." },
    ],
    statement: "The moon jar is presented as a cultural and material inspiration—not as a medical claim—bringing quiet balance and human sensitivity into a technology conversation.",
  },
  flowsophia: {
    eyebrow: "FlowSophia / Lighthouse Poet Yoo Hyeun",
    title: "Warm wisdom, carried in the flow.",
    lead: "FlowSophia is the public creative identity of Yoo Hyeun. Its official profile introduces Yoo Hyeun as a poet, philosopher, artist, physicist, entrepreneur, and extrusion technology expert at Pactive Korea. The name joins Flow and Sophia: a belief that warm wisdom can move gently through life, language, and purposeful work.",
    visual: "profile-flowsophia",
    external: "https://www.flowsophia.com/",
    externalLabel: "Visit FlowSophia",
    pillars: [
      { heading: "Lighthouse poet", text: "FlowSophia describes a lighthouse-like intention: offering a quiet guiding light and warm comfort to people who feel lost or weary." },
      { heading: "Interdisciplinary practice", text: "The public profile brings together poetry, philosophy, art, physics, entrepreneurship, and extrusion technology expertise." },
      { heading: "Flow + Sophia", text: "A creative philosophy in which wisdom is not static; it moves with the natural flow of life and reaches people through a vessel of expression." },
    ],
    statement: "In the ePactive narrative, FlowSophia adds a human and reflective dimension: technology can move forward with precision while still keeping a sense of care, meaning, and direction.",
  },
};

export function CapabilityPage({ capability }: { capability: CapabilityKey }) {
  const detail = capabilityDetails[capability];
  return (
    <div className="capability-page">
      <SiteHeader />
      <main>
        <section className={`capability-hero ${detail.visual}`}><div className="capability-shade" /><div className="capability-hero-copy"><p className="eyebrow-light">{detail.eyebrow}</p><h1>{detail.title}</h1><p>{detail.lead}</p><Link href="/business" className="system-link">Back to business platform <ArrowUpRight size={17} /></Link></div><div className="capability-index">BUSINESS / {capability.replaceAll("-", " ").toUpperCase()}</div></section>
        <section className="capability-focus"><div><p className="eyebrow-dark">FOCUS AREAS</p><h2>Built for a<br /><em>real operating context.</em></h2></div><div className="capability-tags">{detail.focus.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}</div><p>{detail.note}</p></section>
        <section className="capability-chapters"><div><p className="eyebrow-dark">GO DEEPER</p><h2>Enter the<br /><em>working chapters.</em></h2><p>Each chapter takes one part of the capability and turns it into a visual, contextual conversation.</p></div><div className="capability-chapter-list">{capabilityChapters[capability].map((chapter) => <Link key={chapter.slug} href={`/business/${capability}/${chapter.slug}`}><span>{chapter.label}</span><strong>{chapter.title}</strong><ArrowUpRight size={18} /></Link>)}</div></section>
        <section className="capability-next"><p>EPACTIVE BUSINESS PLATFORM</p><div><h2>From insight<br />to the <em>next right question.</em></h2><Link href="/contact" className="system-link">Discuss this capability <ArrowUpRight size={17} /></Link></div></section>
      </main>
      <footer className="motion-footer"><div><Mark /><p>Energy, made active.</p></div><div className="footer-family"><span>ePactive</span><i /> <span>Pactive Korea ecosystem</span></div><div className="footer-end"><span>© {new Date().getFullYear()}</span><Link href="/business">Business <ArrowUpRight size={14} /></Link></div></footer>
    </div>
  );
}

export function GroupProfilePage({ group }: { group: GroupKey }) {
  const profile = groupProfiles[group];
  return (
    <div className="group-profile-page">
      <SiteHeader />
      <main>
        <section className={`group-profile-hero ${profile.visual}`}><div className="group-profile-shade" /><div className="group-profile-copy"><p className="eyebrow-light">{profile.eyebrow}</p><h1>{profile.title}</h1><p>{profile.lead}</p><a href={profile.external} target="_blank" rel="noreferrer" className="system-link">{profile.externalLabel} <ArrowUpRight size={17} /></a></div></section>
        <section className="group-profile-pillars">{profile.pillars.map((pillar, index) => <article key={pillar.heading}><span>{String(index + 1).padStart(2, "0")}</span><h2>{pillar.heading}</h2><p>{pillar.text}</p></article>)}</section>
        <section className="group-profile-statement"><div className="profile-pulse" aria-hidden="true"><i /><i /><i /></div><blockquote>{profile.statement}</blockquote><p>PART OF THE EPACTIVE / PACTIVE KOREA ECOSYSTEM</p></section>
        <section className="group-profile-links"><p className="eyebrow-dark">DISCOVER THE ECOSYSTEM</p><div><Link href="/pactive-korea"><span>01 / INDUSTRIAL FOUNDATION</span>Pactive Korea <ArrowUpRight size={17} /></Link><Link href="/neipclova"><span>02 / LIVING CULTURE</span>Neipclova <ArrowUpRight size={17} /></Link><Link href="/flowsophia"><span>03 / HUMAN HORIZON</span>FlowSophia <ArrowUpRight size={17} /></Link></div></section>
      </main>
      <footer className="motion-footer"><div><Mark /><p>Energy, made active.</p></div><div className="footer-family"><span>ePactive</span><i /> <span>with Neipclova in the Pactive Korea ecosystem</span></div><div className="footer-end"><span>© {new Date().getFullYear()}</span><Link href="/">Home <ArrowUpRight size={14} /></Link></div></footer>
    </div>
  );
}


type CapabilityChapter = {
  slug: string;
  label: string;
  title: string;
  intro: string;
  focus: string;
  details: string[];
  closing: string;
};

const capabilityChapters: Record<CapabilityKey, CapabilityChapter[]> = {
  "energy-systems": [
    {
      slug: "energy-field",
      label: "01 / ENERGY FIELD",
      title: "See the field before changing the flow.",
      intro: "An energy system becomes easier to work with when its relationships are visible: source, load, movement, interface, and the conditions that create demand. This page frames the first conversation around the field, not a single component.",
      focus: "The visual field is a way to make relationships discussable. It is not a technical drawing or a performance claim.",
      details: ["Observe the operating environment", "Map the existing system interfaces", "Name the question that matters most"],
      closing: "The useful next step is rarely a promise. It is a clear view of what is moving, where energy is being asked to work, and what must be understood before action.",
    },
    {
      slug: "power-architecture",
      label: "02 / POWER ARCHITECTURE",
      title: "Power architecture is a shared language.",
      intro: "Electrical pathways, material interfaces, control points, and operating loads need to be considered together. ePactive frames this as a shared language that helps engineering, operations, and future development teams align around the same system context.",
      focus: "The animated pathway expresses connection across a system; it does not represent a prescribed electrical configuration.",
      details: ["Clarify the source-to-load relationship", "Recognize interfaces and constraints", "Create a common operating picture"],
      closing: "When the architecture is understandable, decisions can become more deliberate. The aim is a better conversation between the actual system and the people responsible for it.",
    },
    {
      slug: "context-pilot",
      label: "03 / CONTEXT PILOT",
      title: "A meaningful pilot starts with a meaningful baseline.",
      intro: "A pilot is a chance to learn in context. The route, operating pattern, baseline condition, observation window, and documented questions should be agreed before a system is asked to show anything at all.",
      focus: "The pilot loop is a discussion framework for context and observation—not a guarantee of a particular energy outcome.",
      details: ["Set the operating context", "Agree on a reference condition", "Review observations with care"],
      closing: "A focused pilot turns general ambition into a practical learning cycle: understand the context, observe deliberately, and decide what deserves the next stage of attention.",
    },
  ],
  "film-coating": [
    {
      slug: "substrate-story",
      label: "01 / SUBSTRATE STORY",
      title: "Every surface begins with a material story.",
      intro: "Film and coating work starts with the material beneath the surface. The substrate, its condition, the intended application, and the process window all influence the questions a production line must answer.",
      focus: "The surface visualization is an editorial interpretation of layer relationships, not a material specification.",
      details: ["Identify the substrate condition", "Define the intended surface behavior", "Connect the material to the application"],
      closing: "The line becomes more legible when the surface is understood as part of a wider material story—not merely the final visual layer.",
    },
    {
      slug: "layer-rhythm",
      label: "02 / LAYER RHYTHM",
      title: "A line has rhythm, not just speed.",
      intro: "Casting, nano-layer, lamination, and coating processes have their own rhythm: feed, temperature, tension, thickness, timing, and the interaction of each stage with the next. A useful conversation makes that rhythm visible.",
      focus: "The moving layer graphic illustrates sequence and attention points; it is not a production-control model.",
      details: ["Read the process as a sequence", "Notice timing and layer transitions", "Frame control points for discussion"],
      closing: "When a line’s rhythm is respected, teams can ask sharper questions about repeatability, surface behavior, and the conditions that support stable work.",
    },
    {
      slug: "application-window",
      label: "03 / APPLICATION WINDOW",
      title: "The process must meet the world beyond the line.",
      intro: "Film and coating questions do not end at production. Architecture, medical, electronics, and high-tech applications each bring a different environment, use condition, surface expectation, and definition of readiness.",
      focus: "The application window is a framing device for connecting a material process to its future environment.",
      details: ["Translate line conditions into use conditions", "Connect material and application teams", "Set a practical next question"],
      closing: "The best material conversation links the surface, the process, and the future environment in which that material must perform its role.",
    },
  ],
  "filling-packaging": [
    {
      slug: "flow-window",
      label: "01 / FLOW WINDOW",
      title: "Flow needs a window in which to stay reliable.",
      intro: "In filling and packaging, flow is more than movement. It is the relationship between material, dosing, timing, vessel, and line conditions. A clear flow window helps teams discuss what needs to remain stable.",
      focus: "The flowing stream is a visual language for timing and connection, not a machine or process specification.",
      details: ["Trace the material journey", "Recognize timing and dose relationships", "Define the operating window"],
      closing: "A dependable line is built from a series of considered relationships. The conversation begins by seeing the journey of the material as one connected event.",
    },
    {
      slug: "packaging-gesture",
      label: "02 / PACKAGING GESTURE",
      title: "Packaging is where process meets experience.",
      intro: "The package is a practical interface between the line and the world. The container, closure, handoff, presentation, and use case all belong in the conversation when a process is designed for dependable delivery.",
      focus: "The package field visual is conceptual; it brings attention to the handoff between process, product, and user experience.",
      details: ["Consider the container interface", "Connect closure to line timing", "Respect the final-use moment"],
      closing: "When packaging is treated as part of the system, a line can be discussed with greater care for both process discipline and the product experience it creates.",
    },
    {
      slug: "precision-handoff",
      label: "03 / PRECISION HANDOFF",
      title: "The final handoff deserves precision.",
      intro: "Whether the environment is drinking, manufacturing, or a precision process, the handoff between filling, closure, inspection, and packaging brings many small decisions together. This is the point where consistency becomes visible.",
      focus: "The precision grid is an abstract editorial device for focusing attention on transitions and review points.",
      details: ["Identify critical transitions", "Align inspection and packaging context", "Create a reviewable line story"],
      closing: "A clear handoff lets teams speak about quality and operating context without reducing a complex line to a single metric or promise.",
    },
  ],
  "robot-ai-semiconductor": [
    {
      slug: "physical-intelligence",
      label: "01 / PHYSICAL INTELLIGENCE",
      title: "Intelligence begins in a physical world.",
      intro: "Robot and AI programs become more meaningful when digital intelligence remains connected to material behavior, movement, sensing, precision, and the conditions surrounding a real operating environment.",
      focus: "The signal constellation is a conceptual representation of physical and digital relationships, not a system architecture.",
      details: ["Begin with the physical condition", "Connect sensing to purpose", "Frame intelligence as a working relationship"],
      closing: "The goal is not technology for its own sake. It is a clearer conversation about how intelligent systems can meet real materials, processes, and people.",
    },
    {
      slug: "precision-space",
      label: "02 / PRECISION SPACE",
      title: "Precision is a space teams create together.",
      intro: "Advanced electronics, robotic cells, and semiconductor-adjacent programs require an environment where motion, material, cleanliness, process control, and attention to detail can be considered as one continuous space.",
      focus: "The precision field is a visual metaphor for focus and alignment; it does not specify cleanroom, semiconductor, or robotics requirements.",
      details: ["Name the critical material interactions", "Map movement and control points", "Align the required precision language"],
      closing: "Precision becomes more practical when a team can see where it must be designed, observed, and protected throughout a complete program.",
    },
    {
      slug: "future-questions",
      label: "03 / FUTURE QUESTIONS",
      title: "The right future question changes the path.",
      intro: "Emerging technology asks teams to move before every answer is known. ePactive creates room for new questions around automation, AI, semiconductors, advanced materials, and the future systems that connect them.",
      focus: "The future field visual is a way to show inquiry in motion—an invitation to explore, not a forecast or a technology claim.",
      details: ["Frame the opportunity with care", "Connect disciplines early", "Choose a practical next experiment"],
      closing: "When a question is well framed, frontier work can become less abstract and more ready for a useful, cross-disciplinary next step.",
    },
  ],
  "global-rnd-service": [
    {
      slug: "research-brief",
      label: "01 / RESEARCH BRIEF",
      title: "A research brief gives a question a place to start.",
      intro: "Complex programs often begin with a question that spans materials, engineering, process, and commercialization. A clear brief helps explain the question, its context, the people needed around it, and what an initial investigation should make visible.",
      focus: "The research pulse is a conceptual map for framing inquiry and collaboration, not a project-management or scientific protocol.",
      details: ["Define the question in context", "Recognize the disciplines involved", "Prepare a practical first brief"],
      closing: "A well-framed brief does not close down possibilities. It creates enough shared clarity for the right people to begin working together.",
    },
    {
      slug: "capability-bridge",
      label: "02 / CAPABILITY BRIDGE",
      title: "The missing connection is often the next capability.",
      intro: "Global R&D work gains momentum when a program can connect the capability it has with the capability it needs next. ePactive supports a practical bridge between questions, partners, material knowledge, process insight, and program direction.",
      focus: "The bridge animation is an editorial expression of collaboration across disciplines and locations.",
      details: ["Identify the capability gap", "Connect the relevant expertise", "Keep the program question visible"],
      closing: "A capability bridge is not simply a referral. It is a considered way of making a complex research path more connected and ready to move forward.",
    },
    {
      slug: "translation-path",
      label: "03 / TRANSLATION PATH",
      title: "Research travels farther when it can be translated.",
      intro: "The movement from laboratory question to practical development requires translation: from hypothesis to material, from material to process, from process to application, and from application to an honest next decision.",
      focus: "The path visual represents translation between stages. It is not a guarantee of commercialization or development outcomes.",
      details: ["Move from question to working language", "Connect research and application context", "Prepare the next decision with care"],
      closing: "Practical translation protects the value of research. It makes the next conversation clearer without making promises that the evidence has not yet earned.",
    },
  ],
};

export function SubCapabilityPage({ capability, chapter }: { capability: CapabilityKey; chapter: string }) {
  const detail = capabilityDetails[capability];
  const chapters = capabilityChapters[capability];
  const current = chapters.find((item) => item.slug === chapter) ?? chapters[0];
  const visualClass = `deep-visual-${capability}`;
  return (
    <div className="deep-page">
      <SiteHeader />
      <main>
        <section className={`deep-hero ${visualClass}`}>
          <div className="deep-hero-shade" />
          <div className="deep-hero-copy"><p className="eyebrow-light">{detail.eyebrow} / {current.label}</p><h1>{current.title}</h1><p>{current.intro}</p><Link href={`/business/${capability}`} className="system-link">Back to {detail.eyebrow.replace("EPACTIVE / ", "")} <ArrowUpRight size={17} /></Link></div>
          <div className="deep-title-rail"><span>{current.label}</span><i /><span>THOUGHT IN MOTION</span></div>
        </section>
        <section className="deep-field">
          <div className="deep-field-copy"><p className="eyebrow-dark">HOW TO READ THIS CHAPTER</p><h2>A moving picture<br /><em>for a considered question.</em></h2><p>{current.focus}</p></div>
          <div className="deep-diagram" aria-hidden="true"><div className="deep-diagram-field"><i /><i /><i /><i /><i /><span className="deep-core"><CirclePlay size={25} /></span><b>CONTEXT</b><small>OBSERVE · CONNECT · DISCUSS</small></div></div>
        </section>
        <section className="deep-sequence"><p className="eyebrow-light">A PRACTICAL SEQUENCE</p><div>{current.details.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><h2>{item}</h2><p>{index === 0 ? "Begin with the conditions already in front of the team." : index === 1 ? "Make the relationship between people, process, and system visible." : "Use the shared view to decide what deserves the next stage of attention."}</p></article>)}</div></section>
        <section className="deep-closing"><div><p className="eyebrow-dark">WHERE THIS CAN GO NEXT</p><h2>{current.closing}</h2></div><div className="deep-closing-actions"><Link href="/contact" className="deep-conversation">Start a program conversation <ArrowUpRight size={18} /></Link><Link href={`/business/${capability}`} className="deep-return">Return to capability overview <ArrowUpRight size={15} /></Link></div></section>
        <nav className="deep-chapter-nav" aria-label={`${detail.title} detailed chapters`}><span>{detail.eyebrow}</span><div>{chapters.map((item) => <Link key={item.slug} className={item.slug === current.slug ? "active" : ""} href={`/business/${capability}/${item.slug}`}><b>{item.label.split(" / ")[0]}</b><strong>{item.label.split(" / ")[1]}</strong><ArrowUpRight size={14} /></Link>)}</div></nav>
      </main>
      <footer className="motion-footer"><div><Mark /><p>Energy, made active.</p></div><div className="footer-family"><span>ePactive</span><i /> <span>Pactive Korea ecosystem</span></div><div className="footer-end"><span>© {new Date().getFullYear()}</span><Link href="/business">Business <ArrowUpRight size={14} /></Link></div></footer>
    </div>
  );
}


export function AboutPage() {
  const ecosystem = [
    { code: "01", title: "Pactive Korea", focus: "Industrial process · extrusion · coating · converting", copy: "Established in 2008, Pactive Korea presents equipment, components, engineering services, and process systems for extrusion, coating, lamination, surface treatment, web cleaning, and related converting applications.", href: "/pactive-korea", external: "http://www.pactivekorea.com/en/", className: "ecosystem-card-pactive" },
    { code: "02", title: "ePactive", focus: "Energy systems · mobility · material intelligence", copy: "ePactive brings an active direction to industrial energy, system thinking, materials, mobility, and future technology through practical dialogue and measured context.", href: "/", className: "ecosystem-card-epactive" },
    { code: "03", title: "Neipclova", focus: "Art · materials · living culture", copy: "A future-facing cultural lens in the ecosystem, inspired by the connection between form, materials, human experience, and the quiet intelligence of life. The official site is currently being prepared.", href: "/neipclova", external: "http://www.neipclova.com/", className: "ecosystem-card-neipclova" },
  ];
  return (
    <div className="about-page">
      <SiteHeader />
      <main>
        <section className="about-hero"><div className="about-hero-shade" /><div className="about-hero-copy"><p className="eyebrow-light">ABOUT / PACTIVE ECOSYSTEM</p><h1>One ecosystem.<br /><em>Many ways to move.</em></h1><p>ePactive is part of a wider Pactive Korea ecosystem: an industrial foundation, an active energy-and-systems platform, and an emerging cultural perspective that connects material intelligence with life.</p><Link href="/philosophy" className="system-link">Read our philosophy <ArrowUpRight size={17} /></Link></div><div className="about-hero-index">SEOUL · INCHEON · BUNDANG<br />GLOBAL DIALOGUE</div></section>
        <section className="about-intro"><div><p className="eyebrow-dark">THE CONNECTION</p><h2>Different fields.<br /><em>A shared horizon.</em></h2></div><p>We believe the strongest systems do not isolate industry from culture, or technology from human life. The Pactive Ecosystem creates a place where practical process knowledge, emerging energy questions, and long-term cultural imagination can inform one another.</p></section>
        <section className="ecosystem-gallery" aria-label="Pactive Ecosystem brands">{ecosystem.map((item) => <article key={item.title} className={`ecosystem-gallery-card ${item.className}`}><div className="ecosystem-card-visual"><span>{item.code}</span><i /><i /><i /></div><div className="ecosystem-card-copy"><p>{item.focus}</p><h2>{item.title}</h2><p>{item.copy}</p><div>{item.external && <a href={item.external} target="_blank" rel="noreferrer">Official site <ArrowUpRight size={15} /></a>}<Link href={item.href}>Explore the story <ArrowUpRight size={15} /></Link></div></div></article>)}</section>
        <section className="about-industrial"><div className="about-industrial-art" aria-hidden="true"><i /><i /><i /><span><Network size={28} /></span></div><div><p className="eyebrow-light">PRACTICAL FOUNDATION / PACTIVE KOREA</p><h2>Process knowledge<br /><em>that keeps moving.</em></h2><p>Pactive Korea’s public profile describes a focus on extrusion technology and related processes across flexible packaging, display, electronic materials, medical applications, automotive, batteries, decorative sheets, non-wovens, paper, tires, and other high-tech industries. Its Research & Development activities include laboratory, pilot, and production-related support, process data work, and operating training.</p><a href="http://www.pactivekorea.com/en/" target="_blank" rel="noreferrer" className="system-link">Visit Pactive Korea <ArrowUpRight size={17} /></a></div></section>
        <section className="about-philosophy-bridge"><div><p className="eyebrow-dark">OUR PHILOSOPHY</p><h2>Technology should<br /><em>make room for more life.</em></h2><p>From material lines to mobility and from research systems to poetry, our interest is in technology that supports clearer attention, considered movement, durable relationships, and a more human future.</p></div><Link href="/philosophy" className="about-philosophy-link">Enter the living research field <ArrowUpRight size={22} /></Link></section>
      </main>
      <footer className="motion-footer"><div><Mark /><p>Energy, made active.</p></div><div className="footer-family"><span>ePactive</span><i /> <span>Pactive Korea ecosystem</span></div><div className="footer-end"><span>© {new Date().getFullYear()}</span><Link href="/">Home <ArrowUpRight size={14} /></Link></div></footer>
    </div>
  );
}

export function PhilosophyPage() {
  const principles = [
    { code: "01", title: "Attention before acceleration", text: "Progress starts by seeing the actual system, material, context, and human need before deciding what should move faster." },
    { code: "02", title: "The useful connection", text: "We value relationships between disciplines: industrial process, energy systems, materials, culture, AI, and the living world." },
    { code: "03", title: "Warm wisdom in motion", text: "FlowSophia describes warm wisdom moving through life’s natural flow. In our work, that becomes a practical invitation to keep care, meaning, and direction present in technology." },
    { code: "04", title: "Research as a living practice", text: "Research is not only a laboratory stage. It is a continuing practice of observing, framing, testing, translating, and learning with humility." },
  ];
  const people = [
    {
      code: "01 / MOBILITY",
      role: "LDK product developer",
      portrait: "/manus-storage/ldk-developer-portrait_ed30043a.png",
      alt: "LDK product developer in a technical workstation",
      thought: "A vehicle question becomes more useful when the person developing it stays close to the road, the electrical context, and the driver’s real experience.",
    },
    {
      code: "02 / ENERGY",
      role: "Fuel Bar developer",
      portrait: "/manus-storage/fuel-bar-developer-portrait_bf4672dd.png",
      alt: "Fuel Bar developer working with an energy research setup",
      thought: "A fuel-side question deserves careful language, close observation, and the patience to distinguish a promising idea from a promise the evidence has not earned.",
    },
    {
      code: "03 / CULTURE",
      role: "Moon Jar artist",
      portrait: "/manus-storage/moon-jar-artist-portrait_eaa43497.png",
      alt: "Moon Jar artist shaping clay in a ceramic studio",
      thought: "Material culture keeps a future-facing practice human: it teaches attention to form, touch, time, repair, and the quiet knowledge held in making.",
    },
  ];
  return (
    <div className="philosophy-page">
      <SiteHeader />
      <main>
        <section className="philosophy-hero"><div className="philosophy-hero-shade" /><div className="philosophy-hero-copy"><p className="eyebrow-light">OUR PHILOSOPHY / A FUTURE WORTH BUILDING</p><h1>Technology, held<br /><em>to a human horizon.</em></h1><p>ePactive’s philosophy asks a simple question: as technology becomes more powerful, what kind of life should it make possible? Our answer begins with attention, connection, and a commitment to make progress more considered.</p><a href="https://www.flowsophia.com/" target="_blank" rel="noreferrer" className="system-link">Discover FlowSophia <ArrowUpRight size={17} /></a></div><div className="philosophy-signal"><span>OBSERVE</span><i /><span>CONNECT</span><i /><span>CARE</span></div></section>
        <section className="philosophy-manifesto"><p className="eyebrow-dark">A LIVING RESEARCH POSITION</p><blockquote>We do not see the future as a race to add more technology. We see it as a chance to build systems that let people, materials, and environments <em>thrive with greater awareness.</em></blockquote><div className="philosophy-manifesto-note">A non-technical commitment that guides how ePactive frames questions across industry, energy, materials, culture, and emerging technologies.</div></section>
        <section className="philosophy-people" aria-labelledby="people-title">
          <div className="philosophy-people-intro"><p className="eyebrow-light">THE PEOPLE BEHIND THE QUESTIONS</p><h2 id="people-title">Beyond products.<br /><em>Into living conversation.</em></h2><p>ePactive is not only a place to introduce products. It is a gathering of people who bring technology, development, art, and experience into one active conversation—so that difficult questions can be held, explored, and answered together.</p></div>
          <div className="philosophy-people-grid">{people.map((person) => <article className="philosophy-person-card" key={person.code}><div className="philosophy-person-portrait"><img src={person.portrait} alt={person.alt} /><span>{person.code}</span><i /><i /></div><div className="philosophy-person-copy"><p>{person.role}</p><h3>{person.role === "Moon Jar artist" ? <>Material, made<br /><em>with memory.</em></> : person.role === "Fuel Bar developer" ? <>Research, held<br /><em>to its evidence.</em></> : <>Development, close<br /><em>to the road.</em></>}</h3><p>{person.thought}</p></div></article>)}</div>
          <div className="philosophy-heritage"><p className="eyebrow-light">THE FORCE OF HERITAGE</p><blockquote>In the AI era, heritage is not nostalgia. It is the living force of experience, discernment, craft, and better questions—helping technology remember <em>what it is for.</em></blockquote><p>We want to create the kind of future in which developers, researchers, artists, and partners can make room for one another’s knowledge. That is how ePactive turns technical possibility into a more responsible, humane, and enduring direction.</p></div>
        </section>
        <section className="philosophy-principles">{principles.map((principle) => <article key={principle.code}><span>{principle.code}</span><div className="philosophy-principle-orbit" aria-hidden="true"><i /><i /><i /></div><h2>{principle.title}</h2><p>{principle.text}</p></article>)}</section>
        <section className="philosophy-ai"><div><p className="eyebrow-light">AI / MATERIAL / HUMAN JUDGMENT</p><h2>Intelligence is not only<br /><em>what a system can calculate.</em></h2><p>As AI develops, the essential work is to connect intelligence back to physical context, material behavior, human decision-making, and long-term responsibility. We explore how emerging tools can become more relevant when they stay grounded in the world they are meant to serve.</p></div><div className="philosophy-ai-field" aria-hidden="true"><i /><i /><i /><i /><span><Sparkles size={29} /></span><b>FUTURE / WITH CONTEXT</b></div></section>
        <section className="philosophy-flow"><div><p className="eyebrow-dark">FLOWSOPHIA / LITERARY CONTEXT</p><h2>Where wisdom<br /><em>keeps flowing.</em></h2><p>FlowSophia presents bilingual Korean-English poetry, the literary world of Yoo Hyeun, the Lighthouse Poet, and an invitation toward quiet reflection, human feeling, love, courage, and peace. Its name joins “Flow” and “Sophia”: warm wisdom drawn from life’s natural flow.</p><a href="https://www.flowsophia.com/" target="_blank" rel="noreferrer" className="philosophy-external">Visit FlowSophia <ArrowUpRight size={17} /></a></div><div className="philosophy-flow-lines" aria-hidden="true"><i /><i /><i /><i /></div></section>
      </main>
      <footer className="motion-footer"><div><Mark /><p>Energy, made active.</p></div><div className="footer-family"><span>ePactive</span><i /> <span>Pactive Korea ecosystem</span></div><div className="footer-end"><span>© {new Date().getFullYear()}</span><Link href="/about">About <ArrowUpRight size={14} /></Link></div></footer>
    </div>
  );
}

export function AutomotiveFilmPage() {
  const layers = [
    { title: "Glass film", note: "A considered thermal-and-visual layer for automotive glass." },
    { title: "Heat-rejection context", note: "A solution conversation around solar comfort, visual clarity, and vehicle fit." },
    { title: "PPF", note: "A protective exterior-film direction for paint and surface care." },
  ];
  return (
    <div className="automotive-film-page">
      <SiteHeader />
      <main>
        <section className="film-hero"><div className="film-hero-shade" /><div className="film-hero-copy"><p className="eyebrow-light">SOLUTIONS / AUTOMOTIVE FILM</p><h1>Visible comfort.<br /><em>Invisible protection.</em></h1><p>ePactive introduces an automotive-film solution direction for windshield and glass heat-rejection film, together with exterior paint-protection film. The conversation begins with the vehicle, the surface, and the driver’s real experience.</p><Link href="/contact" className="system-link">Discuss a vehicle solution <ArrowUpRight size={17} /></Link></div><div className="film-hero-tag">GLASS FILM · HEAT REJECTION · PPF</div></section>
        <section className="film-intro"><div><p className="eyebrow-dark">A MATERIAL VIEW OF THE VEHICLE</p><h2>Light, heat, surface.<br /><em>Read as one system.</em></h2></div><p>High-value vehicles deserve a solution conversation that respects the cabin, the glass, the paint, and the owner’s expectations. We treat film as a precisely selected layer within an overall vehicle experience—never as a generic add-on.</p></section>
        <section className="film-layers">{layers.map((layer, index) => <article key={layer.title}><span>{String(index + 1).padStart(2, "0")}</span><div className={`film-layer-art film-layer-${index + 1}`}><i /><i /><i /><b>{index === 0 ? <GlassWater size={24} /> : index === 1 ? <Sparkles size={24} /> : <ShieldCheck size={24} />}</b></div><h2>{layer.title}</h2><p>{layer.note}</p></article>)}</section>
        <section className="film-principles"><div className="film-principles-art"><i /><i /><i /><span><CarFront size={29} /></span></div><div><p className="eyebrow-light">FIT BEFORE INSTALLATION</p><h2>Respect the car.<br /><em>Respect the surface.</em></h2><p>Film conversations benefit from an attentive review of vehicle shape, glazing, paint condition, intended use, local requirements, and the owner’s visual preferences. This page introduces a solution direction; final specifications and installation suitability must be confirmed in context.</p><div className="film-disclosure">Solution overview only. Final film type, compatibility, performance, and installation scope require vehicle-specific consultation.</div></div></section>
      </main>
      <footer className="motion-footer"><div><Mark /><p>Energy, made active.</p></div><div className="footer-family"><span>ePactive</span><i /> <span>Energy in motion</span></div><div className="footer-end"><span>© {new Date().getFullYear()}</span><Link href="/">Home <ArrowUpRight size={14} /></Link></div></footer>
    </div>
  );
}
