// Home page

const PRACTICES = [
  {
    num: "01", name: "Disputes", slug: "practice-disputes",
    desc: "Expert litigation and dispute resolution services for complex legal matters."
  },
  {
    num: "02", name: "Contracts", slug: "practice-contracts",
    desc: "Comprehensive contract drafting, review, and negotiation services."
  },
  {
    num: "03", name: "Compliance", slug: "practice-compliance",
    desc: "Comprehensive contract drafting, review, and negotiation services."
  },
];

window.PRACTICES = PRACTICES;

const MATTERS = [
  {
    slug: "corporate-law",
    num: "01",
    tag: "Corporate Law",
    headline: "Acquisition Facilitated",
    body: "Facilitated a prominent enterprise through its growth and funding stages, completing critical corporate restructuring, legal audits, and complete regulatory compliance.",
    metric: "30% faster than industry average"
  },
  {
    slug: "disputes",
    num: "02",
    tag: "Disputes",
    headline: "High-Stake Recovery Suit",
    body: "Successfully represented the client in a high-value commercial recovery dispute, securing a favorable decree within an accelerated 90-day window.",
    metric: "60% faster dispute resolution"
  },
  {
    slug: "compliance",
    num: "03",
    tag: "Compliance",
    headline: "Fintech Compliance Framework",
    body: "Designed and implemented a comprehensive regulatory compliance architecture for a fintech startup, mitigating critical cross-border exposures and saving millions.",
    metric: "Zero regulatory violations in 2 years"
  },
];

const HOMEPAGE_NOTES = [
  {
    date: "20 May 2026",
    section: "Data & Privacy",
    title: "Navigating the DPDP Act, GDPR, and Cross-Border Data Transfers for Businesses",
    excerpt: "A strategic breakdown of compliance requirements under India's DPDP Act, mapping cross-border data flows and critical contractual safeguards for global SaaS architectures.",
    author: "Adv. Vaayu Goyal",
    slug: "blog-dpdp-saas-clauses",
    image: "assets/blog_dpdp.jpg?v=1.1.2"
  },
  {
    date: "6 May 2026",
    section: "Data & Privacy",
    title: "Shadow AI at Work: Why an AI Acceptable Use Policy is Non-Negotiable",
    excerpt: "An analysis of the hidden corporate liabilities of unauthorized employee AI tool integration, outlining legal compliance structures and acceptable use policy frameworks.",
    author: "Adv. Vaayu Goyal",
    slug: "blog-shadow-ai-aup",
    image: "assets/blog_shadow_ai.jpg?v=1.1.2"
  },
];

window.HOMEPAGE_NOTES = HOMEPAGE_NOTES;

function PracticeRow({ p, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="practice-row block w-full text-left group"
      style={{ borderTop: "0.5px solid var(--hairline)", padding: "28px 0" }}
    >
      <div className="grid grid-cols-12 items-baseline gap-6">
        <div className="col-span-2 md:col-span-1 num mono-cap" style={{ color: "var(--bone-dim)" }}>
          {p.num}
        </div>
        <div className="col-span-10 md:col-span-6 name font-display"
          style={{
            fontSize: "clamp(28px, 4.5vw, 64px)",
            fontWeight: 300,
            letterSpacing: "-0.025em",
            lineHeight: 1.04,
          }}
        >
          {p.name}
        </div>
        <div className="hidden md:block md:col-span-4 desc" style={{ color: "var(--bone-dim)", fontSize: 15, lineHeight: 1.55 }}>
          {p.desc}
        </div>
        <div className="hidden md:flex md:col-span-1 justify-end desc" style={{ color: "var(--amber)" }}>
          <span aria-hidden="true">→</span>
        </div>
      </div>
      <div className="md:hidden mt-3" style={{ color: "var(--bone-dim)", fontSize: 14 }}>
        {p.desc}
      </div>
    </button>
  );
}

function ManifestoTypo() {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Split text into segments: normal words and the amber highlight phrase
  const before = "With Akvyre, you get more than legal support – you get ";
  const highlight = "peace of mind.";
  const after = " Our approach ensures every task is delivered with clarity, consistency, and confidence.";

  const allWords = [...before.split(" "), "__HIGHLIGHT__", ...after.trim().split(" ")];

  let wordIndex = 0;
  const renderWord = (word, key, isHighlight = false) => {
    const delay = wordIndex * 38;
    wordIndex++;
    return (
      <span
        key={key}
        style={{
          display: "inline-block",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) blur(0px)" : "translateY(18px)",
          filter: visible ? "blur(0px)" : "blur(6px)",
          transition: visible
            ? `opacity 0.55s ease ${delay}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}ms, filter 0.55s ease ${delay}ms`
            : "none",
          color: isHighlight ? "var(--amber)" : "inherit",
          fontStyle: "italic",
          marginRight: "0.28em",
        }}
      >
        {word}
      </span>
    );
  };

  return (
    <p
      ref={ref}
      className="font-display italic max-w-5xl"
      style={{
        fontSize: "clamp(26px, 3.4vw, 42px)",
        fontWeight: 300,
        lineHeight: 1.4,
        letterSpacing: "-0.015em",
        marginRight: "-0.28em", // compensate last word trailing margin
      }}
    >
      {before.split(" ").map((w, i) => renderWord(w, `b${i}`))}
      {highlight.split(" ").map((w, i) => renderWord(w, `h${i}`, true))}
      {after.trim().split(" ").map((w, i) => renderWord(w, `a${i}`))}
    </p>
  );
}

function ReviewCarousel() {
  const reviews = [
    {
      quote: "Akvyre guided us through our Series A round with exceptional clarity. Having partner-level counsel in every negotiation was our single biggest commercial advantage.",
      author: "Srinivasan K.",
      role: "Founder, Fintech Platform"
    },
    {
      quote: "Vaayu Goyal's deep expertise in compliance helped us navigate complex regulatory hurdles effortlessly. Their plain English approach is incredibly refreshing.",
      author: "Elena R.",
      role: "General Counsel, AgriTech Group"
    },
    {
      quote: "In a highly complex shareholder dispute, Akshay Tyagi's strategy delivered a swift resolution before it reached the courtroom. Responsive, prompt, and precise.",
      author: "Rajiv Malhotra",
      role: "Director, Manufacturing Conglomerate"
    }
  ];

  const [active, setActive] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto text-center pt-8 pb-12 overflow-hidden animate-fade-in" style={{ minHeight: isMobile ? 280 : 180 }}>
      <div className="absolute inset-0 flex items-center justify-center">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="transition-all duration-700 absolute inset-0 flex flex-col justify-center items-center px-4"
            style={{
              opacity: active === i ? 1 : 0,
              transform: active === i ? "translateY(0) scale(1)" : "translateY(15px) scale(0.95)",
              pointerEvents: active === i ? "auto" : "none",
              width: "100%",
            }}
          >
            <p
              className="font-display italic"
              style={{
                fontSize: "clamp(17px, 2.2vw, 26px)",
                lineHeight: 1.45,
                color: "var(--bone)",
                fontWeight: 300,
              }}
            >
              "{r.quote}"
            </p>
            <div className="mt-5 flex flex-col md:flex-row items-center gap-1 md:gap-3 justify-center">
              <span className="mono-label" style={{ color: "var(--amber)" }}>{r.author}</span>
              <span className="hidden md:inline" style={{ color: "var(--bone-dim)", fontSize: 13, fontWeight: 300 }}>·</span>
              <span className="mono-label" style={{ color: "var(--bone-dim)", textTransform: "none", fontSize: 12 }}>{r.role}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 z-10">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: active === i ? "var(--amber)" : "var(--hairline)",
              border: 0,
              cursor: "pointer",
              padding: 0,
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <PageShell>
      <HeroBlock
        eyebrow="Akvyre — Your legal partner"
        headline="We protect what you have built, and navigate what's next."
        italicWord="what's next"
        ambient={true}
        bgImage="assets/hero_bg.png"
      />

      {/* Index / metadata strip */}
      <section className="relative">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
          
          {/* Row 1: Global Presence & Reach Stats */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-6 py-8">
            <div className="col-span-1 md:col-span-4">
              <div className="mono-label" style={{ color: "var(--bone-dim)" }}>Global Presence</div>
              <div className="mt-2">
                <div style={{ color: "var(--amber)", fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(22px, 2.5vw, 28px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>25+ Countries</div>
                <div className="mt-1" style={{ color: "var(--bone)", fontSize: "14px", fontWeight: 300 }}>Global Reach</div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-4">
              <div className="mono-label" style={{ color: "var(--bone-dim)" }}>Expert Lawyers</div>
              <div className="mt-2">
                <div style={{ color: "var(--amber)", fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(22px, 2.5vw, 28px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>50+</div>
                <div className="mt-1" style={{ color: "var(--bone)", fontSize: "14px", fontWeight: 300 }}>Available round the clock</div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-4">
              <div className="mono-label" style={{ color: "var(--bone-dim)" }}>Satisfied Clients</div>
              <div className="mt-2">
                <div style={{ color: "var(--amber)", fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(22px, 2.5vw, 28px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>200+</div>
                <div className="mt-1" style={{ color: "var(--bone)", fontSize: "14px", fontWeight: 300 }}>Proven Results</div>
              </div>
            </div>
          </div>
          
          <hr className="hairline" style={{ opacity: 0.3 }} />
          
          {/* Row 2: Core Firm Details */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-6 py-8">
            <div className="col-span-1 md:col-span-4">
              <div className="mono-label" style={{ color: "var(--amber)" }}>Firm</div>
              <div className="mt-2" style={{ color: "var(--bone)" }}>Akvyre Legal LLP</div>
            </div>
            <div className="col-span-1 md:col-span-4">
              <div className="mono-label" style={{ color: "var(--amber)" }}>Offices</div>
              <div className="mt-2" style={{ color: "var(--bone)" }}>Delhi · Haryana</div>
            </div>
            <div className="col-span-2 md:col-span-4">
              <div className="mono-label" style={{ color: "var(--amber)" }}>Founded</div>
              <div className="mt-2" style={{ color: "var(--bone)" }}>2024</div>
            </div>
          </div>
          
          <hr className="hairline" />
        </div>
      </section>

      {/* What we do */}
      <section className="py-12 md:py-16">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel className="mb-10">What we do</SectionLabel>
          </Reveal>
          <div>
            {PRACTICES.map((p, i) => (
              <Reveal key={p.slug} delay={i * 50}>
                <PracticeRow p={p} onClick={() => nav(p.slug)} />
              </Reveal>
            ))}
            <hr className="hairline" />
          </div>
          <div className="mt-12">
            <button onClick={() => nav("practice")} className="text-arrow mono-label">
              All practices <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 md:py-16">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel className="mb-10">Industries we serve</SectionLabel>
          </Reveal>
          <Reveal>
            <p
              className="font-display max-w-4xl"
              style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.015em" }}
            >
              <span style={{ color: "var(--amber)", fontStyle: "italic" }}>At Akvyre</span>, we believe legal advice is only effective when it understands the business it supports. That's why our legal services are tailored, not just to the law, but to the realities, risks, and opportunities of each sector we serve.
            </p>
          </Reveal>
          <div className="industries-grid" ref={el => {
            if (!el) return;
            const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  el.querySelectorAll(".industry-card").forEach((card, idx) => {
                    card.style.setProperty("--ind-delay", `${idx * 70}ms`);
                    card.classList.add("ind-visible");
                  });
                  observer.disconnect();
                }
              });
            }, { threshold: 0.15 });
            observer.observe(el);
          }}>
            {[
              {
                name: "Technology", slug: "technology",
                icon: (
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="16" height="12" rx="1.5"/>
                    <rect x="13" y="10" width="16" height="12" rx="1.5"/>
                    <line x1="8" y1="17" x2="8" y2="22"/>
                    <line x1="5" y1="22" x2="11" y2="22"/>
                  </svg>
                )
              },
              {
                name: "Healthcare", slug: "healthcare",
                icon: (
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4C11.5 4 8 8 8 12c0 7 8 15 8 15s8-8 8-15c0-4-3.5-8-8-8z"/>
                    <line x1="16" y1="9" x2="16" y2="15"/>
                    <line x1="13" y1="12" x2="19" y2="12"/>
                  </svg>
                )
              },
              {
                name: "Finance", slug: "finance",
                icon: (
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="26" x2="28" y2="26"/>
                    <rect x="5" y="16" width="5" height="10"/>
                    <rect x="13.5" y="11" width="5" height="15"/>
                    <rect x="22" y="6" width="5" height="20"/>
                  </svg>
                )
              },
              {
                name: "Manufacturing", slug: "manufacturing",
                icon: (
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 24V14l6-4v4l6-4v4l6-4v14H6z"/>
                    <rect x="11" y="19" width="4" height="5"/>
                    <rect x="17" y="17" width="4" height="7"/>
                  </svg>
                )
              },
              {
                name: "Retail", slug: "retail",
                icon: (
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 6h16l2 8H6L8 6z"/>
                    <rect x="9" y="14" width="14" height="12" rx="1"/>
                    <line x1="13" y1="14" x2="13" y2="26"/>
                    <line x1="19" y1="14" x2="19" y2="26"/>
                  </svg>
                )
              },
              {
                name: "Real Estate", slug: "real-estate",
                icon: (
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="10" width="10" height="16"/>
                    <rect x="14" y="4" width="14" height="22"/>
                    <line x1="17" y1="10" x2="17" y2="14"/>
                    <line x1="22" y1="10" x2="22" y2="14"/>
                    <line x1="17" y1="18" x2="17" y2="22"/>
                    <line x1="22" y1="18" x2="22" y2="22"/>
                    <line x1="7" y1="16" x2="7" y2="20"/>
                  </svg>
                )
              },
            ].map(({ name, slug, icon }) => (
              <div
                key={name}
                className="industry-card"
                role="button"
                tabIndex={0}
                aria-label={`View ${name} legal services`}
                onClick={() => nav(`industry-${slug}`)}
                onKeyDown={e => e.key === "Enter" && nav(`industry-${slug}`)}
                style={{ cursor: "pointer" }}
                onMouseDown={e => { e.currentTarget.style.transform = "translateY(-1px) scale(0.97)"; }}
                onMouseUp={e => { e.currentTarget.style.transform = ""; }}
              >
                <div className="ind-icon">{icon}</div>
                <div className="ind-label">{name}</div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <button onClick={() => nav("industries")} className="text-arrow mono-label">
              Explore industries <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Selected matters */}
      <section className="py-12 md:py-16">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel className="mb-10">Selected Cases</SectionLabel>
          </Reveal>

          <Reveal>
            <p
              className="font-display max-w-3xl"
              style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.015em" }}
            >
              <span style={{ color: "var(--amber)", fontStyle: "italic" }}>Our commitment</span> to excellence has earned us the trust of businesses worldwide. Here are some highlights from our successful partnerships.
            </p>
          </Reveal>

          <div className="cases-container mt-16 md:mt-24">
            {MATTERS.map((matter, i) => (
              <Reveal key={matter.slug} delay={Math.min(i * 30, 240)}>
                <div
                  className="case-row-modern grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-12 items-center"
                  role="button"
                  tabIndex={0}
                  aria-label={`View case: ${matter.tag}`}
                  onClick={() => nav(`case-${matter.slug}`)}
                  onKeyDown={e => e.key === "Enter" && nav(`case-${matter.slug}`)}
                >
                  {/* Left Column: Number & uppercase tag stacked vertically */}
                  <div className="col-span-12 md:col-span-3 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start gap-2">
                    <span className="case-num">{matter.num}</span>
                    <span className="case-tag md:mt-2">{matter.tag}</span>
                  </div>

                  {/* Center Column: Large Cormorant Garamond headline & prose description */}
                  <div className="col-span-12 md:col-span-6 flex flex-col">
                    <h3 className="case-headline">
                      {matter.headline}
                    </h3>
                    <p className="case-body">
                      {matter.body}
                    </p>
                  </div>

                  {/* Right Column: Key outcome metric badge & floating arrow */}
                  <div className="col-span-12 md:col-span-3 flex items-center justify-between md:justify-end gap-6 mt-4 md:mt-0">
                    <div className="case-metric-badge">
                      {matter.metric}
                    </div>
                    <div className="case-arrow-container hidden md:block">
                      →
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            <hr className="hairline" />
          </div>
          <div className="mt-12 flex justify-end">
            <button onClick={() => nav("cases")} className="text-arrow-right">
              All cases <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-12 md:py-16">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          
          {/* Header Row: Title & Short Philosophy Description */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
            <Reveal>
              <SectionLabel className="mb-0">Research & Insights</SectionLabel>
            </Reveal>
            <Reveal delay={60}>
              <p
                className="font-display max-w-lg md:text-right"
                style={{ fontSize: "clamp(15px, 1.8vw, 22px)", fontWeight: 300, lineHeight: 1.4, letterSpacing: "-0.01em", color: "var(--bone-dim)" }}
              >
                Translating shifting global regulations and compliance architectures into <span style={{ color: "var(--amber)", fontStyle: "italic" }}>strategic corporate briefs.</span>
              </p>
            </Reveal>
          </div>

          {/* Symmetrical Widescreen 2-Column Grid */}
          <div className="blog-grid-modern">
            {HOMEPAGE_NOTES.map((n, i) => (
              <Reveal key={n.slug} delay={i * 80}>
                <button
                  type="button"
                  onClick={() => nav(n.slug)}
                  className="blog-card-modern group text-left w-full block"
                  aria-label={`Read article: ${n.title}`}
                >
                  {/* Cinematic Image Frame */}
                  {n.image && (
                    <div className="blog-img-frame mb-6">
                      <img
                        src={n.image}
                        alt={n.title}
                        className="blog-img"
                      />
                    </div>
                  )}

                  {/* Metadata: Category & Date */}
                  <div className="mono-label mb-3" style={{ color: "var(--bone-dim)", fontSize: "11px", letterSpacing: "0.08em" }}>
                    <span style={{ color: "var(--amber)" }}>{n.section}</span> · {n.date}
                  </div>

                  {/* Headline */}
                  <h3 className="blog-title">
                    {n.title}
                  </h3>

                  {/* Excerpt Brief */}
                  <p className="blog-excerpt">
                    {n.excerpt}
                  </p>

                  {/* Luxury Card Footer */}
                  <div className="blog-card-footer">
                    <span className="mono-label" style={{ color: "var(--bone-dim)", fontSize: "11px", textTransform: "none", letterSpacing: "0" }}>
                      By {n.author}
                    </span>
                    <span className="text-arrow-right">
                      Read Insight <span className="arrow">→</span>
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex justify-end">
            <button onClick={() => nav("blog")} className="text-arrow-right">
              All briefings <span className="arrow">→</span>
            </button>
          </div>

        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 md:py-28">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel className="mb-8 md:mb-20">Manifesto</SectionLabel>
          </Reveal>
          <ManifestoTypo />
        </div>
      </section>

      {/* About teaser */}
      <section className="pb-0">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 md:py-14 items-start">
            <div className="md:col-span-4 mono-label" style={{ color: "var(--bone-dim)", letterSpacing: "0.16em", textTransform: "uppercase" }}>About the firm</div>
            <div className="md:col-span-8 flex flex-col items-start">
              <Reveal>
                <p 
                  className="font-display max-w-4xl" 
                  style={{ 
                    fontSize: "clamp(18px, 1.8vw, 26px)", 
                    fontWeight: 300, 
                    lineHeight: 1.4, 
                    letterSpacing: "-0.01em",
                    color: "var(--bone)" 
                  }}
                >
                  We are a dedicated law firm in India, providing comprehensive legal compliance services to startups, <span style={{ color: "var(--amber)", fontStyle: "italic", borderBottom: "0.5px solid rgba(212,175,55,0.3)" }}>global businesses and individuals.</span> Our lawyers blend deep legal know-how with tech-enabled workflows.
                </p>
              </Reveal>
              <div className="mt-8">
                <button 
                  onClick={() => nav("about")} 
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--bone)] hover:text-[var(--amber)] flex items-center gap-2 group transition-colors duration-300"
                  style={{ background: "transparent", border: 0, padding: 0, cursor: "pointer", fontWeight: 500 }}
                >
                  Read about Akvyre <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          </div>

          <hr className="hairline" />

          <Reveal delay={100}>
            <ReviewCarousel />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

window.HomePage = HomePage;
