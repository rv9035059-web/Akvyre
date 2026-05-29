// About, Contact, Disclaimer, 404

function AboutPage() {
  return (
    <PageShell>
      <HeroBlock
        eyebrow="About"
        headline="A firm that takes on large matters."
        smallHeadline={true}
      />

      <section className="pb-12">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-3">
              <div className="mono-label" style={{ color: "var(--bone-dim)" }}>The firm</div>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <div className="max-w-column space-y-7" style={{ fontSize: 17, lineHeight: 1.7 }}>
                <p>
                  Akvyre was founded in 2024 by Akshay Tyagi and Vaayu Goyal, after spending a decade deep in commercial matters across industries. The thesis was simple, and remains so: that the best work happens when the lawyer doing the thinking is the lawyer in the room — and that clients in significant matters deserve direct access to senior counsel, not layered through a chain of associates.
                </p>
                <p>
                  We work in commercial law in its widest reading: mergers and acquisitions, private equity and venture capital, complex disputes, financial crime, banking and finance, and matters before the Supreme Court of India. Our clients are sponsors, founders, listed companies, banks, sovereign investors, and foreign counsel coming into India for the first time. Some of our best work goes unsigned and unmentioned, because the best resolutions are the ones that never reach a courtroom.
                </p>
                <p>
                  We are based in Delhi and Haryana. The firm is intentionally lean. We take on a small number of significant matters at a time, and we staff each of them with the partner whose name is on the engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
          <Reveal>
            <div className="mt-16 mono-label" style={{ color: "var(--bone-dim)" }}>How we work</div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { word: "Plainly.", body: "We write contracts and notices in English that a sensible non-lawyer can understand. We explain risk in terms that allow decisions to be made. We do not bury the point." },
              { word: "Promptly.", body: "Speed is a courtesy, and in commercial matters it is also a commercial advantage. Drafts arrive when promised, or earlier. Calls are returned the same day. Substantive responses do not require chasing." },
              { word: "Personally.", body: "The partner you meet is the partner who handles the matter. Where junior lawyers are involved, they are named and introduced. There are no surprises on a bill, and no surprises on who is reading your documents." },
            ].map((b, i) => (
              <Reveal key={i} delay={i * 100}>
                <div>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "clamp(36px, 4vw, 56px)",
                      fontWeight: 300,
                      letterSpacing: "-0.025em",
                      lineHeight: 1,
                      fontStyle: "italic",
                    }}
                  >
                    {b.word}
                  </h3>
                  <p className="mt-6 max-w-sm" style={{ fontSize: 17, lineHeight: 1.7 }}>
                    {b.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-3">
              <div className="mono-label" style={{ color: "var(--bone-dim)" }}>People</div>
            </div>
            <div className="md:col-span-9">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {PEOPLE.map((p) => {
                  const Element = p.noDetail ? "div" : "button";
                  return (
                    <Element
                      key={p.slug}
                      onClick={p.noDetail ? undefined : () => nav(p.slug)}
                      className={`text-left group block ${p.noDetail ? "" : "cursor-pointer"}`}
                    >
                      <Monogram initials={p.initials} name={`${p.first} ${p.last}`} ratio="4 / 5" image={p.image} />
                      <div className={`mt-4 font-display ${p.noDetail ? "" : "group-hover:text-[color:var(--amber)]"} transition-colors duration-200`}
                        style={{ fontSize: 19, fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1.2 }}
                      >
                        {p.first} {p.last}
                      </div>
                      <div className="mt-1 mono-label" style={{ color: "var(--bone-dim)" }}>
                        {p.role.split("·")[0].trim()}
                      </div>
                    </Element>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-3">
              <div className="mono-label" style={{ color: "var(--bone-dim)" }}>Compliance & Disclosures</div>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <p className="mono-cap max-w-column" style={{ color: "var(--bone-dim)", fontSize: 12, lineHeight: 1.8, letterSpacing: "0.14em" }}>
                THE FIRM IS REGISTERED WITH THE BAR COUNCIL OF DELHI. AKVYR DOES NOT SOLICIT CLIENTS AND DOES NOT ADVERTISE WITHIN THE MEANING OF THE BAR COUNCIL OF INDIA RULES. THIS WEBSITE IS INFORMATIONAL ONLY.
              </p>
              <div className="mt-6">
                <button onClick={() => nav("disclaimer")} className="text-arrow mono-label">
                  Read the full disclaimer <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", org: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [isLight, setIsLight] = useState(document.documentElement.getAttribute("data-theme") === "light");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute("data-theme") === "light");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = true;
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = true;
    if (!form.subject.trim()) errs.subject = true;
    if (!form.message.trim() || form.message.trim().length < 12) errs.message = true;
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
    }
  };

  const Field = ({ id, label, type = "text", multiline = false, required = false }) => {
    const filled = form[id]?.length > 0;
    const hasError = errors[id];
    return (
      <div
        className="field"
        style={{
          borderBottomColor: hasError ? "var(--amber)" : undefined,
        }}
      >
        <label htmlFor={id}>{label}{required ? "" : " (optional)"}</label>
        {multiline ? (
          <textarea
            id={id}
            rows={4}
            value={form[id]}
            onChange={set(id)}
            className={filled ? "filled" : ""}
          />
        ) : (
          <input
            id={id}
            type={type}
            value={form[id]}
            onChange={set(id)}
            className={filled ? "filled" : ""}
          />
        )}
        <style>{`.field.filled label{transform:translateY(-22px);font-size:10px;color:var(--amber);}`}</style>
      </div>
    );
  };

  // Need a different approach — Field re-renders kill focus. Inline instead.
  const renderField = ({ id, label, type = "text", multiline = false, hint = "" }) => {
    const filled = form[id]?.length > 0;
    const hasError = errors[id];
    return (
      <div className={`field ${filled ? "filled" : ""}`} style={{ borderBottomColor: hasError ? "var(--amber)" : undefined }}>
        <label htmlFor={id}>{label}{hint && <span style={{ marginLeft: 8, color: "var(--bone-dim)" }}>{hint}</span>}</label>
        {multiline ? (
          <textarea id={id} rows={5} value={form[id]} onChange={set(id)} />
        ) : (
          <input id={id} type={type} value={form[id]} onChange={set(id)} autoComplete="off" />
        )}
      </div>
    );
  };

  return (
    <PageShell>
      <HeroBlock
        eyebrow="Free consultation"
        headline="Ready to Get Started? Let's Talk."
        smallHeadline={true}
      />

      <section className="pb-12">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <Reveal>
            <p
              className="font-display max-w-column"
              style={{
                fontSize: "clamp(20px, 2.2vw, 24px)",
                fontWeight: 300,
                lineHeight: 1.55,
                letterSpacing: "-0.015em",
              }}
            >
              Every legal challenge is unique. Schedule a consultation to discuss your specific needs and discover how our expertise can work for you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Free consultation — chat (WhatsApp), mail, and Calendly scheduler */}
      <section className="py-16 md:py-20">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
          <div className="pt-16">
            <div className="mono-label mb-6" style={{ color: "var(--bone-dim)" }}>Schedule Consultation</div>
            <div style={{ position: "relative", minHeight: "350px", overflow: "hidden", background: isLight ? "#FFFFFF" : "var(--ink)", border: isLight ? "0.5px solid rgba(0, 0, 0, 0.08)" : "0.5px solid var(--hairline)", borderRadius: "4px", maxWidth: "960px", margin: "0 auto 64px auto" }} className="mb-16">
              {!loaded && (
                <div style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--ink)",
                  zIndex: 2,
                  gap: 16,
                  padding: "64px 0"
                }}>
                  <style>{`
                    @keyframes spinner-rotate {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `}</style>
                  <div className="loader-spinner" style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    border: "2.5px solid var(--hairline)",
                    borderTopColor: "var(--amber)",
                    animation: "spinner-rotate 0.8s linear infinite",
                  }} />
                  <span className="mono-label" style={{ color: "var(--bone-dim)", fontSize: 13, letterSpacing: "0.08em" }}>Initializing Secure Scheduler...</span>
                </div>
              )}
              <iframe
                key={isLight ? "light" : "dark"}
                title="Schedule a free consultation"
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3N5mf7Da6bpn8otQX8Zb35gk_-rC8ziPDn32RAOrdVhyA5x0CygoUwmVZyKmB2HdC9tsKJsjW9?gv=true"
                style={{ width: "100%", height: "600px", border: "none", display: "block", colorScheme: isLight ? "light" : "dark" }}
                onLoad={() => setLoaded(true)}
                loading="lazy"
              />
            </div>

            <div className="mono-label mb-10" style={{ color: "var(--bone-dim)" }}>Get Your Free Consultation</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://wa.me/919812044285?text=Hi%20Akvyre%2C%20I%27d%20like%20to%20book%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                style={{ border: "0.5px solid var(--hairline)", padding: "32px", transition: "border-color 0.2s" }}
              >
                <div className="mono-cap" style={{ color: "var(--amber)" }}>Chat</div>
                <div className="font-display mt-3 group-hover:text-[color:var(--amber)] transition-colors" style={{ fontSize: "clamp(24px, 2.4vw, 34px)", fontWeight: 300, letterSpacing: "-0.015em" }}>
                  WhatsApp us <span className="arrow">→</span>
                </div>
                <div className="mt-3" style={{ color: "var(--bone-dim)", fontSize: 15 }}>+91 98120 44285</div>
              </a>
              <a
                href="mailto:info@akvyre.com?subject=Free%20consultation%20request"
                className="group block"
                style={{ border: "0.5px solid var(--hairline)", padding: "32px", transition: "border-color 0.2s" }}
              >
                <div className="mono-cap" style={{ color: "var(--amber)" }}>Mail</div>
                <div className="font-display mt-3 group-hover:text-[color:var(--amber)] transition-colors" style={{ fontSize: "clamp(24px, 2.4vw, 34px)", fontWeight: 300, letterSpacing: "-0.015em" }}>
                  Email us <span className="arrow">→</span>
                </div>
                <div className="mt-3" style={{ color: "var(--bone-dim)", fontSize: 15 }}>info@akvyre.com</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function DisclaimerPage() {
  return (
    <PageShell>
      <HeroBlock
        eyebrow="Bar Council of India · Disclaimer"
        headline="Disclaimer."
        smallHeadline={true}
      />

      <section className="pb-12">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-3">
              <div className="mono-label" style={{ color: "var(--bone-dim)" }}>Notice</div>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <div className="max-w-column" style={{ fontSize: 17, lineHeight: 1.7 }}>
                <p style={{ marginBottom: "1.4em" }}>
                  The rules of the Bar Council of India prohibit law firms from soliciting work or advertising. By continuing to this website, you confirm the following:
                </p>
                <ol className="space-y-6" style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "There has been no advertisement, personal communication, solicitation, invitation, or inducement of any kind from Akvyre or any of its members to solicit work or to advertise through this website.",
                    "You are accessing this website at your own request, for the purpose of obtaining information about the firm.",
                    "No material or information on this website is intended as legal advice, and the firm accepts no liability for any action taken in reliance on it.",
                    "Nothing on this website creates or is intended to create an attorney-client relationship.",
                  ].map((t, i) => (
                    <li key={i} className="grid grid-cols-12 gap-4" style={{ borderTop: "0.5px solid var(--hairline)", paddingTop: 20 }}>
                      <span className="col-span-2 mono-cap" style={{ color: "var(--bone-dim)" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="col-span-10">{t}</span>
                    </li>
                  ))}
                </ol>

                <p style={{ marginTop: "2em" }}>
                  For any specific legal matter, please write to us at <a href="mailto:info@akvyre.com" className="link-amber underline" style={{ textDecorationColor: "var(--bone-dim)" }}>info@akvyre.com</a>. We do not respond to general legal enquiries through this website.
                </p>
              </div>

              <div className="mt-16">
                <button onClick={() => nav("home")} className="text-arrow underline-amber" style={{ fontSize: 18 }}>
                  Return home <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function NotFoundPage() {
  return (
    <PageShell>
      <section className="min-h-[70vh] flex items-center">
        <div className="max-w-shell mx-auto px-6 md:px-12 w-full text-center">
          <div className="mono-label mb-10" style={{ color: "var(--bone-dim)" }}>404</div>
          <h1 className="font-display" style={{ fontSize: "clamp(64px, 9vw, 168px)", fontWeight: 300, letterSpacing: "-0.035em", lineHeight: 1.05 }}>
            Not here.
          </h1>
          <p className="mt-8 max-w-lg mx-auto" style={{ fontSize: 18, lineHeight: 1.55, color: "var(--bone-dim)" }}>
            The page you were looking for does not exist, or has moved.
          </p>
          <div className="mt-12">
            <button onClick={() => nav("home")} className="text-arrow underline-amber" style={{ fontSize: 18 }}>
              Return home <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

window.AboutPage = AboutPage;
window.ContactPage = ContactPage;
window.DisclaimerPage = DisclaimerPage;
window.NotFoundPage = NotFoundPage;

// ---------- Industries (copy: Lawselor "Industries We Serve", verbatim) ----------
const INDUSTRIES = [
  {
    num: "01", slug: "technology", name: "Technology",
    body: "Comprehensive legal support for tech startups, software companies, and digital platforms.",
    services: "IP Protection, Data Privacy Compliance, Software Licensing, Employment Law."
  },
  {
    num: "02", slug: "healthcare", name: "Healthcare",
    body: "Specialized legal services for healthcare providers, medical device companies, and pharma.",
    services: "Regulatory Compliance, Medical Licensing, Patient Privacy, Healthcare Contracts."
  },
  {
    num: "03", slug: "finance", name: "Finance",
    body: "Expert guidance for financial institutions, fintech companies, and investment firms.",
    services: "Banking Regulations, Securities Compliance, Anti-Money Laundering, Investment Advisory."
  },
  {
    num: "04", slug: "manufacturing", name: "Manufacturing",
    body: "Legal solutions for manufacturing companies, industrial operations, and supply chains.",
    services: "Environmental Compliance, Labor Relations, Product Liability, Supply Chain Contracts."
  },
  {
    num: "05", slug: "retail", name: "Retail & E-commerce",
    body: "Tailored legal support for retail businesses and e-commerce platforms.",
    services: "Consumer Protection, E-commerce Regulations, Franchise Law, Brand Protection."
  },
  {
    num: "06", slug: "real-estate", name: "Real Estate",
    body: "Comprehensive legal services for real estate developers, investors, and property managers.",
    services: "Property Transactions, Land Acquisition, Real Estate Regulations, Construction Contracts"
  },
];

const INDUSTRY_WHY = [
  {
    num: "01",
    title: "Sector Fluency",
    desc: "We speak your industry's native language. There is zero time wasted explaining your business model, capital structure, or operational workflows from scratch."
  },
  {
    num: "02",
    title: "Statutory Efficiency",
    desc: "Accelerated turnaround times powered by our highly refined, sector-specific templates and comprehensive institutional clause libraries."
  },
  {
    num: "03",
    title: "Proactive Counsel",
    desc: "Strategic legal advisory that anticipates upcoming regulatory shifts, state compliance updates, and industry-wide risk mitigation."
  },
  {
    num: "04",
    title: "Cross-Domain Synergy",
    desc: "Deep cross-domain understanding of modern intersections, such as fintech integration in real estate or AI compliance in healthcare."
  }
];

const getIndustryIcon = (slug) => {
  const props = { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.2", className: "ind-svg-icon" };
  if (slug === "technology") {
    return (
      <svg {...props}>
        <rect x="2" y="2" width="20" height="8" rx="1.5" />
        <rect x="2" y="14" width="20" height="8" rx="1.5" />
        <line x1="6" y1="6" x2="6" y2="6.01" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="18" y1="6" x2="18" y2="6.01" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="6" y1="18" x2="6" y2="18.01" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="18" y1="18" x2="18" y2="18.01" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 10v4" />
      </svg>
    );
  }
  if (slug === "healthcare") {
    return (
      <svg {...props}>
        <path d="M19 14c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3H5C3.34 3 2 4.34 2 6v5c0 1.66 1.34 3 3 3h14z" />
        <path d="M12 3v11" />
        <path d="M8 8h8" />
        <path d="M12 14c0 3.87-3.13 7-7 7" />
        <path d="M12 14c0 3.87 3.13 7 7 7" />
      </svg>
    );
  }
  if (slug === "finance") {
    return (
      <svg {...props}>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    );
  }
  if (slug === "manufacturing") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    );
  }
  if (slug === "retail") {
    return (
      <svg {...props}>
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    );
  }
  if (slug === "real-estate") {
    return (
      <svg {...props}>
        <path d="M3 21h18" />
        <path d="M19 21v-8a2 2 0 0 0-2-2h-3V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14" />
        <path d="M7 10h2" />
        <path d="M7 14h2" />
        <path d="M13 14h2" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
};

function IndustriesPage({ targetSlug }) {
  const [activeSlug, setActiveSlug] = useState(INDUSTRIES[0].slug);

  useEffect(() => {
    if (targetSlug) {
      setActiveSlug(targetSlug);
      // scroll the explorer container into view
      const timer = setTimeout(() => {
        const el = document.querySelector(".ind-explorer-container");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 320);
      return () => clearTimeout(timer);
    }
  }, [targetSlug]);

  const activeInd = INDUSTRIES.find(ind => ind.slug === activeSlug) || INDUSTRIES[0];
  const serviceList = activeInd.services.split(", ");

  return (
    <PageShell>
      <HeroBlock
        eyebrow="Industries"
        headline="Industries We Serve."
        smallHeadline={true}
      />

      <section className="pb-12">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <Reveal>
            <p
              className="font-display max-w-column"
              style={{ fontSize: "clamp(20px, 2.2vw, 28px)", fontWeight: 300, lineHeight: 1.4, letterSpacing: "-0.01em", color: "var(--bone-dim)" }}
            >
              At Akvyre, we believe legal advice is only effective when it understands the business it supports. That’s why our legal services are tailored, not just to the law, but to the realities, risks, and opportunities of each sector we serve.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel className="mb-20">Key Industries We Work With</SectionLabel>
          </Reveal>
          
          <div className="ind-explorer-container">
            {/* Left Column: Vertical Selector List */}
            <div className="ind-explorer-left">
              {INDUSTRIES.map((ind) => (
                <button
                  key={ind.slug}
                  onMouseEnter={() => setActiveSlug(ind.slug)}
                  onClick={() => setActiveSlug(ind.slug)}
                  className={`ind-explorer-btn ${activeSlug === ind.slug ? "active" : ""}`}
                >
                  <span className="exp-num">{ind.num}</span>
                  <span className="exp-name">{ind.name}</span>
                </button>
              ))}
            </div>

            {/* Right Column: Dynamic Widescreen Showcase Dashboard */}
            <div className="ind-showcase-panel">
              <div key={activeSlug} className="ind-showcase-content">
                <div className="showcase-top">
                  <span className="showcase-label">✦ SECTOR SCOPE & COMPLIANCE</span>
                  {getIndustryIcon(activeSlug)}
                </div>
                <h3 className="showcase-title">{activeInd.name}</h3>
                <p className="showcase-body">{activeInd.body}</p>
                
                <div className="showcase-services-section">
                  <div className="showcase-services-title">Specialized Legal Scope</div>
                  <div className="showcase-services-grid">
                    {serviceList.map((service, sIdx) => (
                      <span key={sIdx} className="showcase-chip">
                        ✦ {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pt-16">
            <div className="md:col-span-3">
              <div className="mono-label" style={{ color: "var(--bone-dim)" }}>Why Industry Experience Matters</div>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <ul className="space-y-0">
                {INDUSTRY_WHY.map((w, i) => (
                  <Reveal key={i} delay={i * 60}>
                    <li className="ind-matters-row">
                      <div className="matters-num">{w.num}</div>
                      <div className="matters-content">
                        <div className="matters-title">✦ {w.title}</div>
                        <div className="matters-desc">{w.desc}</div>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <hr className="hairline" />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

// ---------- Cases (copy: Lawselor "Cases", verbatim) ----------
const CASES = [
  {
    slug: "corporate-law",
    num: "01", tag: "Corporate Law", headline: "Acquisition Facilitated",
    body: "Facilitated a prominent enterprise through its growth and funding stages, completing critical corporate restructuring, legal audits, and complete regulatory compliance.",
    stats: ["30% faster than industry average", "Zero regulatory violations in 2 years"]
  },
  {
    slug: "disputes",
    num: "02", tag: "Disputes", headline: "High-Stake Recovery Suit",
    body: "Successfully represented the client in a high-value commercial recovery dispute, securing a favorable decree within an accelerated 90-day window.",
    stats: ["60% faster dispute resolution", "Saved client $2M+ in potential damages"]
  },
  {
    slug: "compliance",
    num: "03", tag: "Compliance", headline: "Fintech Compliance Framework",
    body: "Designed and implemented a comprehensive regulatory compliance architecture for a fintech startup, mitigating critical cross-border exposures and saving millions.",
    stats: ["Proactive compliance audits", "Zero regulatory violations"]
  },
];

function CasesPage({ targetSlug }) {
  const rowRefs = useRef({});

  useEffect(() => {
    if (!targetSlug) return;
    const timer = setTimeout(() => {
      const el = rowRefs.current[targetSlug];
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("ind-row-highlight");
        setTimeout(() => el.classList.remove("ind-row-highlight"), 1800);
      }
    }, 320);
    return () => clearTimeout(timer);
  }, [targetSlug]);

  return (
    <PageShell>
      <HeroBlock
        eyebrow="Cases"
        headline="Results That Speak for Themselves."
        smallHeadline={true}
      />

      <section className="pb-12">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <Reveal>
            <div className="mono-label mb-8" style={{ color: "var(--bone-dim)" }}>Driving Success Through Innovation · Where legal excellence meets business outcomes</div>
            <p
              className="font-display max-w-3xl"
              style={{ fontSize: "clamp(20px, 2.2vw, 28px)", fontWeight: 300, lineHeight: 1.4, letterSpacing: "-0.01em", color: "var(--bone-dim)" }}
            >
              Our commitment to excellence has earned us the trust of businesses worldwide. Here are some highlights from our successful partnerships.
            </p>
          </Reveal>
        </div>
      </section>
 
      <section className="py-16 md:py-24">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <div className="timeline-board">
            {CASES.map((c, i) => {
              const romans = ["I", "II", "III", "IV", "V", "VI"];
              const romanNum = romans[i] || c.num;
              
              return (
                <Reveal key={c.num} delay={Math.min(i * 60, 240)}>
                  <div
                    ref={el => { rowRefs.current[c.slug] = el; }}
                    className="timeline-row"
                  >
                    <div className="timeline-dot"></div>
                    
                    {/* Left Narrative Column */}
                    <div className="timeline-narrative-left">
                      <div className="timeline-roman">{romanNum}.</div>
                      <div className="timeline-tag">{c.tag}</div>
                    </div>
                    
                    {/* Right Content Column */}
                    <div className="timeline-content-right">
                      <h3 className="timeline-headline">{c.headline}</h3>
                      <div className="timeline-accent-line"></div>
                      
                      {c.body && (
                        <p className="timeline-body">
                          {c.body}
                        </p>
                      )}
                      
                      {c.stats.length > 0 && (
                        <div className="kpi-grid">
                          {c.stats.map((s, j) => {
                            let val = "✦";
                            let lbl = s;
                            if (s.includes("$2M+")) {
                              val = "$2M+";
                              lbl = "saved in damages";
                            } else if (s.includes("90-day")) {
                              val = "90 Days";
                              lbl = "resolution window";
                            } else {
                              const spaceIdx = s.indexOf(" ");
                              if (spaceIdx > 0) {
                                val = s.substring(0, spaceIdx);
                                lbl = s.substring(spaceIdx + 1);
                              }
                            }
                            return (
                              <div key={j} className="kpi-item">
                                <span className="kpi-val">{val}</span>
                                <span className="kpi-lbl">{lbl}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
 
      <section className="py-20 md:py-28">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="font-display italic max-w-3xl" style={{ fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 300, lineHeight: 1.35, letterSpacing: "-0.015em" }}>
              Ready to Join Our Success Stories?
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-2xl" style={{ fontSize: 16, lineHeight: 1.65, color: "var(--bone-dim)" }}>
              Experience the difference that comes with working with legal experts who combine deep knowledge with innovative solutions. Let’s create your success story together.
            </p>
          </Reveal>
          <div className="mt-10">
            <button onClick={() => nav("contact")} className="text-arrow underline-amber" style={{ fontSize: 18 }}>
              Start Your Success Story <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

window.IndustriesPage = IndustriesPage;
window.CasesPage = CasesPage;

// ---------- Terms of Use Page ----------
function TermsPage() {
  return (
    <PageShell>
      <HeroBlock
        eyebrow="Legal"
        headline="Terms of Use"
        smallHeadline={true}
        sub="Effective Date: 07/12/2025"
        ambient={false}
      />

      <section className="pb-6">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-3">
              <div className="sticky top-28 space-y-4">
                <div className="mono-label" style={{ color: "var(--bone-dim)" }}>Sections</div>
                <ul className="space-y-2 text-sm" style={{ color: "var(--bone-dim)" }}>
                  {["1. Purpose", "2. No Legal Advice", "3. Modifications", "4. Intellectual Property", "5. Restrictions", "6. Third-Party Links", "7. Disclaimers", "8. Limitation of Liability", "9. Indemnification", "10. Copyright & Trademark", "11. Privacy & Data", "12. Termination", "13. Governing Law", "14. Miscellaneous"].map((sec) => (
                    <li key={sec} className="mono-cap">{sec}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <div className="prose-akvyr max-w-column" style={{ fontSize: 17, lineHeight: 1.7, color: "var(--bone)" }}>
                <p className="mb-8" style={{ fontSize: 18, color: "var(--bone-dim)" }}>
                  This Terms of Use Agreement (&quot;Terms&quot; or &quot;Agreement&quot;) governs your access to and use of this website <a href="https://www.lawselor.com" className="link-amber underline">www.lawselor.com</a> (&quot;Website&quot;), operated by Lawselor LLP (&quot;Lawselor&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using this Website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not access or use the Website.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>1. Purpose of the Website</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  This Website is made available as a general informational resource regarding our legal services and areas of practice. The content is provided free of charge and does not constitute legal advice, solicitation, advertisement, or a lawyer-client relationship. You should not act, or refrain from acting, based on any information on this Website without seeking appropriate legal or professional counsel.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>2. No Legal Relationship or Advice</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  Your use of this Website or its content does not create a lawyer-client relationship between you and Lawselor or any of its partners, associates, affiliates, or employees. Any communication through the Website or email shall not be treated as confidential unless a formal engagement has been executed.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>3. Modifications to the Terms</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  Lawselor reserves the right to modify these Terms at any time by posting updated versions on the Website. Your continued use of the Website following such changes shall constitute your acceptance of those changes. Any changes will apply prospectively and not retroactively.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>4. Intellectual Property and Permitted Use</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  All content on the Website, including but not limited to text, graphics, logos, designs, images, videos, publications, and the Website layout (&quot;Content&quot;) is the intellectual property of Lawselor or its licensors and is protected by applicable copyright, trademark, and other proprietary rights.
                </p>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  You may view or print a single copy of the Content for personal, non-commercial use, provided you retain all proprietary notices. Any other use, including reproduction, distribution, modification, republication, or commercial exploitation, without our prior written consent is strictly prohibited.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>5. Restrictions on Use</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  You agree not to:
                </p>
                <ul className="mb-6 space-y-2 pl-5" style={{ listStyleType: "disc" }}>
                  <li style={{ color: "var(--bone-dim)" }}>Use the Website for unlawful, infringing, or harmful purposes;</li>
                  <li style={{ color: "var(--bone-dim)" }}>Access the Website using any means other than through a standard browser;</li>
                  <li style={{ color: "var(--bone-dim)" }}>Modify, copy, or scrape any Content for commercial purposes;</li>
                  <li style={{ color: "var(--bone-dim)" }}>Interfere with the Website's operation or access by other users.</li>
                </ul>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>6. Third-Party Links</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  The Website may contain links to third-party websites. These links are provided solely for convenience and do not imply any endorsement by Lawselor. We are not responsible for the content, privacy practices, or terms of use of third-party sites and disclaim any liability in relation thereto.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>7. Disclaimers</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  The Website and Content are provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without any warranties of any kind, express or implied.
                </p>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  We make no warranty that the Website will be uninterrupted, error-free, or secure. You are responsible for ensuring your use of the Website is virus-free.
                </p>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  Lawselor disclaims all liability for any loss or damage resulting from reliance on any Content or use of the Website.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>8. Limitation of Liability</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  To the fullest extent permitted by law, Lawselor, its partners, affiliates, employees, and agents shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your access to or use of the Website.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>9. Indemnification</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  You agree to indemnify, defend, and hold harmless Lawselor and its affiliates, partners, and personnel from any claims, liabilities, damages, losses, or expenses (including legal fees) arising out of or in connection with your violation of these Terms or use of the Website.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>10. Copyright and Trademark</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  All rights reserved. You may not copy, use, or distribute any content or trademark belonging to Lawselor without our express written permission.
                </p>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  If you believe any material on the Website infringes your intellectual property rights, please contact us with the following:
                </p>
                <ul className="mb-6 space-y-2 pl-5" style={{ listStyleType: "disc" }}>
                  <li style={{ color: "var(--bone-dim)" }}>Your name, contact details, and signature;</li>
                  <li style={{ color: "var(--bone-dim)" }}>Description of the infringing work;</li>
                  <li style={{ color: "var(--bone-dim)" }}>Description of where the material is located (URL);</li>
                  <li style={{ color: "var(--bone-dim)" }}>A good faith statement that the use is not authorized;</li>
                  <li style={{ color: "var(--bone-dim)" }}>A statement under penalty of perjury that the information provided is accurate.</li>
                </ul>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  <strong>Contact:</strong> Lawselor LLP<br />
                  <strong>Email:</strong> <a href="mailto:info@lawselor.com" className="link-amber underline">info@lawselor.com</a>
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>11. Privacy and Data</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  Your use of the Website is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal data.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>12. Termination</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  We reserve the right to terminate or restrict your access to the Website at our sole discretion, without notice, for conduct that we believe violates these Terms or applicable law.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>13. Governing Law and Jurisdiction</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  These Terms shall be governed by the laws of India. Any disputes arising from or related to these Terms shall be subject to the exclusive jurisdiction of the Courts in New Delhi ousting every other Jurisdiction.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>14. Miscellaneous</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall remain in full force. Our failure to enforce any right shall not be deemed a waiver. These Terms constitute the entire agreement between you and Lawselor concerning use of the Website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

// ---------- Privacy Policy Page ----------
function PrivacyPage() {
  return (
    <PageShell>
      <HeroBlock
        eyebrow="Legal"
        headline="Privacy Policy"
        smallHeadline={true}
        sub="Effective Date: 07/08/2025"
        ambient={false}
      />

      <section className="pb-6">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-3">
              <div className="sticky top-28 space-y-4">
                <div className="mono-label" style={{ color: "var(--bone-dim)" }}>Sections</div>
                <ul className="space-y-2 text-sm" style={{ color: "var(--bone-dim)" }}>
                  {["1. Introduction", "2. Scope of Policy", "3. Info We Collect", "4. How We Use Info", "5. Legal Basis", "6. Categories of Data", "7. Sharing Info", "8. Retention", "9. Security", "10. Your Rights", "11. Cookies", "12. Policy Changes"].map((sec) => (
                    <li key={sec} className="mono-cap">{sec}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <div className="prose-akvyr max-w-column" style={{ fontSize: 17, lineHeight: 1.7, color: "var(--bone)" }}>
                <p className="mb-8" style={{ fontSize: 18, color: "var(--bone-dim)" }}>
                  We understand that when you use our legal services, you place deep trust in us. This Privacy Policy outlines how we protect and handle your personal information when you access or use our website <a href="https://www.lawselor.com" className="link-amber underline">www.lawselor.com</a> or avail any service (collectively, the &quot;Services&quot;).
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>1. Introduction</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  Lawselor, a product of Law Sellential Solutions LLP (&quot;Lawselor&quot;, &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. We understand that when you use our Services to support your information qua Legal Services, such as Legal Representation and Advice, Litigation, Negotiation, Settlements, Alternative Dispute Resolution (ADR), Mediation and Arbitration, Consultation, Document Preparation, Drafting contracts, corporate agreements, Reviewing documents, or any other services which you have availed, you are placing a deep level of trust in us. This Privacy Policy outlines how we collect, use, disclose, store, and protect your personal information when you access or use our website or avail any service (collectively, the &quot;Services&quot;).
                </p>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  This policy is designed in accordance with governmental regulations and other relevant data privacy mandates including GDPR.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>2. Scope of This Policy</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  This Privacy Policy applies to all personal information collected through our Services for consumer-facing, law-related, or administrative purposes. It applies to visitors, registered users, and subscribers who use Lawselor through direct signup, third-party access, or any other authorized means.
                </p>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  This policy does not apply to data collected through employment applications, employee records, or third-party platforms we do not operate. If we integrate with other service providers in the future, additional notices may apply.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>3. Information We Collect</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  We collect three types of information: information you provide directly, data collected automatically, and data inferred or derived through analytics and engagement.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>4. How We Use Your Information</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  We use the information you provide to operate, maintain, and enhance the legal and advisory services offered through Lawselor, and to ensure a seamless, secure, and efficient user experience. Specifically, your data may be used for the following purposes:
                </p>
                <ul className="mb-6 space-y-2 pl-5" style={{ listStyleType: "disc" }}>
                  <li style={{ color: "var(--bone-dim)" }}>To provide and manage legal services, consultations, and other professional engagements;</li>
                  <li style={{ color: "var(--bone-dim)" }}>To personalize your experience on our website and tailor legal content, resources, or recommendations relevant to your interests or inquiries;</li>
                  <li style={{ color: "var(--bone-dim)" }}>To send important updates, newsletters, legal alerts, and other relevant communications;</li>
                  <li style={{ color: "var(--bone-dim)" }}>To respond to your queries, provide client support, and facilitate professional interactions;</li>
                  <li style={{ color: "var(--bone-dim)" }}>To conduct internal analytics, service improvement, and website optimization;</li>
                  <li style={{ color: "var(--bone-dim)" }}>To maintain platform integrity, enhance security, and prevent fraud or misuse;</li>
                  <li style={{ color: "var(--bone-dim)" }}>To comply with applicable legal obligations, court orders, or regulatory requirements;</li>
                  <li style={{ color: "var(--bone-dim)" }}>To enforce our terms, policies, or other legal rights;</li>
                  <li style={{ color: "var(--bone-dim)" }}>To solicit feedback and conduct optional client satisfaction surveys;</li>
                  <li style={{ color: "var(--bone-dim)" }}>To manage our business operations, including audits, data analysis, and research for internal purposes.</li>
                </ul>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  We do not use your information for automated profiling. All processing of data is done in compliance with applicable data protection laws and with utmost confidentiality and professional responsibility.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>5. Legal Basis for Processing Personal Data</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  At Lawselor, we process your personal data only when we have a valid legal basis to do so under applicable data protection laws. The legal bases on which we rely may include:
                </p>
                <ul className="mb-6 space-y-2 pl-5" style={{ listStyleType: "disc" }}>
                  <li style={{ color: "var(--bone-dim)" }}><strong>Performance of a Contract:</strong> When you engage our legal services, we process your data as necessary to enter into or fulfil our contractual obligations to you.</li>
                  <li style={{ color: "var(--bone-dim)" }}><strong>Compliance with Legal Obligations:</strong> We may process your information to comply with applicable laws, regulations, court orders, or law enforcement requests.</li>
                  <li style={{ color: "var(--bone-dim)" }}><strong>Legitimate Interests:</strong> We may process your data where it is necessary for our legitimate business interests—such as managing our client relationships, improving our services, providing data for reference, enhancing security, or conducting internal research—provided that such interests are not overridden by your rights and interests.</li>
                  <li style={{ color: "var(--bone-dim)" }}><strong>Consent:</strong> In limited cases where we rely on your consent (e.g., to send marketing communications or newsletters), you have the right to withdraw that consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.</li>
                  <li style={{ color: "var(--bone-dim)" }}><strong>Establishment, Exercise, or Defence of Legal Claims:</strong> As a legal services provider, we may process personal data as necessary to establish, exercise, or defend legal claims.</li>
                </ul>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>6. Categories and Purposes of Data We Collect and Use</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  Lawselor collects and uses personal data strictly for legitimate, clearly defined purposes in connection with the provision of legal services provided and operations as desired. The categories of data we may collect, and the purposes for which they are used, include:
                </p>
                <ul className="mb-6 space-y-4 pl-0" style={{ listStyleType: "none" }}>
                  <li style={{ borderTop: "0.5px solid var(--hairline)", paddingTop: 14 }}>
                    <strong style={{ color: "var(--bone)" }}>A. Contact and Identity Information</strong>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}><em>Examples:</em> Name, email address, phone number, company name, job title</p>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}><em>Purpose:</em> To communicate with you, respond to inquiries, schedule consultations, and provide legal updates or alerts.</p>
                  </li>
                  <li style={{ borderTop: "0.5px solid var(--hairline)", paddingTop: 14 }}>
                    <strong style={{ color: "var(--bone)" }}>B. Client and Case-Related Information</strong>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}><em>Examples:</em> Information shared during onboarding, legal documentation, matter details, transactional or litigation data</p>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}><em>Purpose:</em> To deliver legal advice, prepare legal documents, represent clients, and manage professional engagements.</p>
                  </li>
                  <li style={{ borderTop: "0.5px solid var(--hairline)", paddingTop: 14 }}>
                    <strong style={{ color: "var(--bone)" }}>C. Technical and Usage Data</strong>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}><em>Examples:</em> IP address, browser type, device identifiers, website usage data, referral URLs.</p>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}><em>Purpose:</em> To improve website functionality, enhance user experience, analyze platform usage, and ensure site security.</p>
                  </li>
                  <li style={{ borderTop: "0.5px solid var(--hairline)", paddingTop: 14 }}>
                    <strong style={{ color: "var(--bone)" }}>D. Marketing and Communication Preferences</strong>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}><em>Examples:</em> Newsletter opt-ins, event registrations, preferences for receiving communications</p>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}><em>Purpose:</em> To send relevant updates, insights, legal bulletins, or invitations, only where permitted by law or with your consent.</p>
                  </li>
                  <li style={{ borderTop: "0.5px solid var(--hairline)", paddingTop: 14 }}>
                    <strong style={{ color: "var(--bone)" }}>E. Payment and Billing Information (if applicable)</strong>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}><em>Examples:</em> Billing contact details, GSTIN, transaction records</p>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}><em>Purpose:</em> To process payments, generate invoices, and manage accounts receivable.</p>
                  </li>
                  <li style={{ borderTop: "0.5px solid var(--hairline)", paddingTop: 14, borderBottom: "0.5px solid var(--hairline)", paddingBottom: 14 }}>
                    <strong style={{ color: "var(--bone)" }}>F. Compliance and Regulatory Information</strong>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}><em>Examples:</em> KYC documents, regulatory filings, identity verification data</p>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}><em>Purpose:</em> To comply with applicable laws, professional obligations, and regulatory requirements.</p>
                  </li>
                </ul>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>7. How and Why We Share Information</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  At Lawselor, we value the confidentiality of your information and share it only when necessary and in accordance with applicable laws and professional obligations. We do not sell your personal data to third parties. However, in limited and specific circumstances, we may share your information as follows:
                </p>
                <ul className="mb-6 space-y-4 pl-0" style={{ listStyleType: "none" }}>
                  <li style={{ borderTop: "0.5px solid var(--hairline)", paddingTop: 14 }}>
                    <strong style={{ color: "var(--bone)" }}>A. With Authorized Personnel and Affiliates</strong>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}>We may share information internally within Lawselor and with authorized personnel, consultants, or affiliates who are bound by confidentiality obligations and require the data to perform services on our behalf.</p>
                  </li>
                  <li style={{ borderTop: "0.5px solid var(--hairline)", paddingTop: 14 }}>
                    <strong style={{ color: "var(--bone)" }}>B. With Third-Party Service Providers</strong>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}>We may engage trusted third-party service providers (e.g., legal practitioners, advocates, counsels, solicitors, cloud hosting providers, communication platforms, CRM tools, or accounting software) to support our operations. These providers are contractually bound to use your data only for the purposes specified and in compliance with applicable data protection laws.</p>
                  </li>
                  <li style={{ borderTop: "0.5px solid var(--hairline)", paddingTop: 14 }}>
                    <strong style={{ color: "var(--bone)" }}>C. With Legal or Regulatory Authorities</strong>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}>We may disclose personal information if required to do so by law, court order, regulatory authority, or in response to valid legal process.</p>
                  </li>
                  <li style={{ borderTop: "0.5px solid var(--hairline)", paddingTop: 14 }}>
                    <strong style={{ color: "var(--bone)" }}>D. In Connection with Legal Representation</strong>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}>Where necessary and with or without your knowledge, we may share relevant information with third parties such as opposing counsel, courts, arbitral tribunals, or government bodies as part of your legal representation.</p>
                  </li>
                  <li style={{ borderTop: "0.5px solid var(--hairline)", paddingTop: 14 }}>
                    <strong style={{ color: "var(--bone)" }}>E. In Case of a Business Transfer</strong>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}>In the event of a merger, acquisition, restructuring, or transfer of assets, personal data may be transferred to the relevant successor entity, subject to confidentiality and data protection commitments.</p>
                  </li>
                  <li style={{ borderTop: "0.5px solid var(--hairline)", paddingTop: 14, borderBottom: "0.5px solid var(--hairline)", paddingBottom: 14 }}>
                    <strong style={{ color: "var(--bone)" }}>F. With Your Consent</strong>
                    <p style={{ color: "var(--bone-dim)", marginTop: 4 }}>In all other cases, we will share your personal data only with your explicit consent or at your direction.</p>
                  </li>
                </ul>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>8. Data Retention and Storage</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  <strong>A.</strong> We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including for providing legal services, maintaining client records, complying with legal and regulatory obligations, and safeguarding our legal rights.
                </p>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  <strong>B.</strong> In accordance with the Bar Council of India Rules and applicable professional standards, we may retain client files and related data for up to 8 years or longer where legally required or justified for legitimate purposes, if the same is secured by us.
                </p>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  <strong>C.</strong> All data is stored securely on encrypted servers with strict access controls. Where data is stored or processed outside India, we ensure adequate safeguards as required under GDPR or equivalent data protection frameworks.
                </p>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  <strong>D.</strong> We periodically review our retention practices to ensure data is not held longer than necessary and is securely deleted when no longer required.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>9. Security Measures</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  We implement technical, administrative, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Our security measures include:
                </p>
                <ul className="mb-6 space-y-2 pl-5" style={{ listStyleType: "disc" }}>
                  <li style={{ color: "var(--bone-dim)" }}><strong>Requisite encryption of data:</strong> All user data is encrypted both at rest and in transit to ensure the highest level of security and confidentiality.</li>
                  <li style={{ color: "var(--bone-dim)" }}>Secure user authentication and access control protocols</li>
                  <li style={{ color: "var(--bone-dim)" }}>Firewalls and regular security monitoring</li>
                  <li style={{ color: "var(--bone-dim)" }}>Limiting employee access to sensitive data</li>
                  <li style={{ color: "var(--bone-dim)" }}>Regular internal audits and security reviews</li>
                </ul>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>10. Your Rights and Choices</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  You have certain rights over your personal information, subject to applicable laws. These may include the right to:
                </p>
                <ul className="mb-6 space-y-2 pl-5" style={{ listStyleType: "disc" }}>
                  <li style={{ color: "var(--bone-dim)" }}>Access the personal information we hold about you</li>
                  <li style={{ color: "var(--bone-dim)" }}>Request correction of inaccurate or incomplete data</li>
                  <li style={{ color: "var(--bone-dim)" }}>Request deletion of your information, subject to legal retention obligations</li>
                  <li style={{ color: "var(--bone-dim)" }}>Withdraw your consent where processing is based on consent</li>
                  <li style={{ color: "var(--bone-dim)" }}>Opt out of marketing communications or restrict data processing in specific contexts</li>
                </ul>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  To exercise any of these rights, please contact us at <a href="mailto:info@lawselor.com" className="link-amber underline">info@lawselor.com</a>. We may need to verify your identity before fulfilling your request.
                </p>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>11. Cookies and Tracking Technologies</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  We use essential, analytical and session cookies to provide and enhance your user experience. These technologies help us to:
                </p>
                <ul className="mb-6 space-y-2 pl-5" style={{ listStyleType: "disc" }}>
                  <li style={{ color: "var(--bone-dim)" }}>Remember your preferences and login state</li>
                  <li style={{ color: "var(--bone-dim)" }}>Understand user behavior and engagement with the platform</li>
                  <li style={{ color: "var(--bone-dim)" }}>Measure the effectiveness of our content and outreach efforts</li>
                  <li style={{ color: "var(--bone-dim)" }}>Improve system performance and usability</li>
                </ul>

                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 300, marginTop: "2em", marginBottom: "0.5em" }}>12. Changes to This Policy</h3>
                <p className="mb-6" style={{ color: "var(--bone-dim)" }}>
                  We may revise this Privacy Policy periodically to reflect changes in law, technology, or business practices. If we make material changes, we will notify you via e-mail or in-app notice. The updated policy will include a new effective date at the top. We encourage you to review this page regularly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

window.IndustriesPage = IndustriesPage;
window.CasesPage = CasesPage;
window.TermsPage = TermsPage;
window.PrivacyPage = PrivacyPage;

// ============================================================================
//  COMPLIANCE CHECKLISTS DATA MODELS
// ============================================================================
const AGRITECH_CHECKLIST_SECTIONS = [
  {
    id: "foundational",
    title: "Foundational Agreements (Every Startup Needs These)",
    items: [
      { id: "agri-found-1", title: "1. Founders' Agreement" },
      { id: "agri-found-2", title: "2. Employment / Consultancy Agreements", req: "Must have: IPR Ownership and Assignment, Restrictive covenants, NDA" },
      { id: "agri-found-3", title: "3. MoUs with Affiliates" }
    ]
  },
  {
    id: "commercial",
    title: "Commercial & Sector-Specific Agreements",
    items: [
      { id: "agri-comm-1", title: "1. Supplier / Vendor Contracts", req: "Must have: quality control, liability for defective goods, regulatory compliance." },
      { id: "agri-comm-2", title: "2. Farmer Contracts", req: "Must have: Pricing terms, buy-back clause, dispute resolution." },
      { id: "agri-comm-3", title: "3. Distribution / Channel Partner Agreements", req: "Must have: branding, minimum sales obligations, liability clauses." },
      { id: "agri-comm-4", title: "4. Licensing & Franchise Agreements (if building a farmer-facing retail network)", req: "Must have: Uptime commitments, data accuracy disclaimers, limitation of liability." },
      { id: "agri-comm-5", title: "5. Service Level Agreements (SLAs) (for agri-SaaS/IoT startups)" },
      { id: "agri-comm-6", title: "6. Non Solicitation and Non Disclosure Agreement" }
    ]
  },
  {
    id: "digital",
    title: "Digital & Data Protection Agreements",
    items: [
      { id: "agri-dig-1", title: "1. Privacy Policy & Terms of Service (for mobile apps, digital marketplaces, or IoT platforms)" },
      { id: "agri-dig-2", title: "2. Data Processing Agreements (DPAs) with third-party processors (cloud, analytics, CRM)" },
      { id: "agri-dig-3", title: "3. User / Customer Agreements", req: "Must have: service scope, payment terms, refund/cancellation, dispute resolution." },
      { id: "agri-dig-4", title: "4. Cookie Policy" },
      { id: "agri-dig-5", title: "5. Subscription and Cancellation Agreement" }
    ]
  },
  {
    id: "regulatory",
    title: "Regulatory & Compliance-Linked Agreements",
    items: [
      { id: "agri-reg-1", title: "1. FSSAI Licensing & Supplier Compliance Declarations (if dealing in food products, packaged seeds, agri-produce)" },
      { id: "agri-reg-2", title: "2. MSME / Udyam Registration Support Agreements with consultants" },
      { id: "agri-reg-3", title: "3. Quality Certification & Testing Agreements (BIS, NABL labs, GMP for manufacturing)" },
      { id: "agri-reg-4", title: "4. Environmental & Safety Compliance Contracts (e.g. for hazardous chemical use in pesticides)" },
      { id: "agri-reg-5", title: "5. Sector Specific Licenses" }
    ]
  },
  {
    id: "funding",
    title: "Funding & Investor Agreements",
    items: [
      { id: "agri-fund-1", title: "1. Term Sheet" },
      { id: "agri-fund-2", title: "2. Share Subscription and Share Holders Agreement" },
      { id: "agri-fund-3", title: "3. Convertible Notes / CCD Agreements (for early stage funding flexibility)" },
      { id: "agri-fund-4", title: "4. ESOP Scheme" },
      { id: "agri-fund-5", title: "5. Equity Sharing Agreement and ASOPs (incase of Advisor-equity)" }
    ]
  }
];

const POSH_CHECKLIST_SECTIONS = [
  {
    id: "posh-policy",
    index: 1,
    title: "PoSH Policy",
    badge: "FOUNDATIONAL",
    subtitle: "Establish and implement your organization's anti-sexual harassment policy",
    bestPractice: "Provide the policy in multiple languages to ensure comprehension across diverse workforce. Consider creating simplified versions for different employee categories while maintaining legal accuracy.",
    items: [
      { id: "posh-1-1", title: "Comprehensive PoSH Policy", req: "Draft a comprehensive policy defining sexual harassment, listing employee rights, redressal processes, and penalties." },
      { id: "posh-1-2", title: "Obtain Board/Management Approval", req: "Formally secure executive or board of directors' sign-off on the active PoSH policy document." },
      { id: "posh-1-3", title: "Display Policy at Conspicuous Places", req: "Display key policy terms and contact details of the ICC prominently in high-traffic workplace areas." },
      { id: "posh-1-4", title: "Digital Distribution to All Employees", req: "Email the approved PoSH policy to all workers, including contract staff, interns, and part-time workers." },
      { id: "posh-1-5", title: "Annual Policy Review and Updates", req: "Review the policy annually to incorporate new legal developments, case law precedents, and operational changes." }
    ]
  },
  {
    id: "posh-icc",
    index: 2,
    title: "ICC Constitution & Notices",
    badge: "MANDATORY",
    subtitle: "Internal Complaints Committee formation and notification requirements",
    bestPractice: "Create a dedicated ICC email address (e.g., icc@companyname.com) accessible to all members. This provides a centralized, confidential channel for complaints and ensures continuity despite member changes.",
    items: [
      { id: "posh-2-1", title: "Constitute ICC with Proper Composition", req: "Must have: Presiding Officer (senior woman employee), at least 2 employee members (committed to cause of women/legal/social work), and 1 external member (NGO or association)." },
      { id: "posh-2-2", title: "Issue Formal Appointment Orders", req: "Draft and execute formal written appointment letters for each designated ICC member detailing their term." },
      { id: "posh-2-3", title: "Display ICC Notice at Workplace", req: "Statutory posting detailing ICC composition, contact emails, and office locations across all physical workspaces." },
      { id: "posh-2-4", title: "Organization-wide Communication", req: "Issue a formal company-wide announcement introducing current ICC members and explaining how to contact them." },
      { id: "posh-2-5", title: "Document Changes in ICC Composition", req: "Keep meticulous internal logs and formal corporate minutes of any resignations, new appointments, or term expirations." },
      { id: "posh-2-6", title: "Notify District Officer", req: "Register the constitution of the ICC and submit updated contact details to the local municipal/district officer." }
    ]
  },
  {
    id: "posh-training",
    index: 3,
    title: "Training & Awareness Programs",
    badge: "ANNUAL",
    subtitle: "Mandatory training and awareness initiatives for all stakeholders",
    bestPractice: "Utilize diverse training methods including workshops, e-learning modules, videos, role-plays, and scenario-based discussions. Record online sessions for employees on leave or joining mid-year to ensure 100% training coverage.",
    items: [
      { id: "posh-3-1", title: "Annual Employee Training Programs", req: "Conduct interactive gender sensitization workshops annually for all employees regarding rights, recourse, and behaviors." },
      { id: "posh-3-2", title: "Specialized ICC Member Training", req: "Provide training for ICC members regarding inquiry procedures, rules of evidence, natural justice, and timeline compliance." },
      { id: "posh-3-3", title: "New Hire Onboarding Training", req: "Integrate a dedicated PoSH sensitization module into the standard onboarding process for all new joiners." },
      { id: "posh-3-4", title: "Maintain Comprehensive Training Logs", req: "Keep detailed records of all training sessions, including dates, attendance sheets, and curriculum details for statutory audits." },
      { id: "posh-3-5", title: "Training Feedback and Certification", req: "Collect feedback forms from attendees and issue training completion certificates to verify 100% organizational compliance." },
      { id: "posh-3-6", title: "Leadership and Management Training", req: "Conduct specialized sessions for managers and leadership on handling disclosures and preventing retaliation." }
    ]
  },
  {
    id: "posh-report",
    index: 4,
    title: "Annual Report Preparation",
    badge: "Filed Annually",
    subtitle: "Comprehensive documentation of annual PoSH compliance activities",
    bestPractice: "Maintain quarterly data compilation rather than year-end consolidation. This approach reduces last-minute pressure, helps identify trends throughout the year, and ensures accuracy of information in the annual report.",
    items: [
      { id: "posh-4-1", title: "Compile Complete Complaints Data", req: "Collate full records of all complaints filed, pending, and resolved, including date of receipt and final action taken." },
      { id: "posh-4-2", title: "Document Inquiry Outcomes", req: "Synthesize inquiry reports, disciplinary actions recommended by ICC, and action taken by the management." },
      { id: "posh-4-3", title: "Summarize Training Initiatives", req: "Document the total number of sensitization programs conducted and count of employees trained." },
      { id: "posh-4-4", title: "Report ICC Activities", req: "Summarize general ICC review meetings, preventative workshops, and community outreach efforts." },
      { id: "posh-4-5", title: "Ensure Format Compliance", req: "Format the report to strictly align with local statutory layouts and specific state/district requirements." },
      { id: "posh-4-6", title: "Obtain Required Signatures", req: "Get the formal signatures of the Presiding Officer and corporate directors on the final annual report draft." }
    ]
  },
  {
    id: "posh-filing",
    index: 5,
    title: "Filing Requirements",
    badge: "Filed Annually",
    subtitle: "Statutory submission of annual reports to authorities",
    bestPractice: "Begin filing process one month in advance to accommodate potential queries, document corrections, or technical issues. Avoid last minute rush when District Offices may be experiencing high submission volumes.",
    items: [
      { id: "posh-5-1", title: "Submit to District Officer", req: "Statutorily file the comprehensive annual report with the local District Officer by the December 31st annual deadline." },
      { id: "posh-5-2", title: "Include Mandatory Information", req: "Double-check that all state-mandated metrics, employer details, and ICC composition data are fully filled." },
      { id: "posh-5-3", title: "Obtain Filing Acknowledgment", req: "Obtain and securely archive the stamped physical receipt or digital acknowledgment from the District Officer." },
      { id: "posh-5-4", title: "Annual Company Returns Inclusion", req: "Ensure PoSH compliance status and annual report submission details are included in the company's annual corporate filing." },
      { id: "posh-5-5", title: "Maintain Filing Records", req: "Store copies of filed reports, and proof of receipt for at least 3-5 years for regulatory inspection readiness." }
    ]
  },
  {
    id: "posh-audit",
    index: 6,
    title: "Documentation & Audits",
    badge: "CONTINUOUS",
    subtitle: "Comprehensive record-keeping and internal compliance audits",
    bestPractice: "Implement digital document management system with version control, audit trails, and automated reminders for compliance deadlines. This ensures organized record-keeping and facilitates quick retrieval during inspections.",
    items: [
      { id: "posh-6-1", title: "Document ICC Meetings", req: "Maintain formal written minutes and attendance registers for all quarterly reviews and active complaint hearings." },
      { id: "posh-6-2", title: "Maintain Complaint Case Files", req: "Keep all complaints, witness statements, inquiry proceedings, and evidence in secure, confidential folders." },
      { id: "posh-6-3", title: "Conduct Internal Compliance Audits", req: "Perform routine internal compliance self-audits to identify gaps in sensitization, posting notices, or ICC composition." },
      { id: "posh-6-4", title: "Prepare Audit Reports", req: "Draft annual compliance self-assessment reports detailing overall readiness and improvements needed." },
      { id: "posh-6-5", title: "Track Recommendation Implementation", req: "Ensure management executes any disciplinary or preventive recommendations made by the ICC within statutory timelines." },
      { id: "posh-6-6", title: "Secure Document Storage", req: "Keep all sensitive complaint and inquiry case files under lock and key or encrypted digital storage with strict access controls." },
      { id: "posh-6-7", title: "Master Compliance Register", req: "Maintain a consolidated master tracker of all historical PoSH filing receipts, training records, and ICC histories." }
    ]
  }
];

// ============================================================================
//  GENERIC INTERACTIVE COMPLIANCE CHECKLIST COMPONENT
// ============================================================================
const getBadgeStyles = (badge) => {
  const b = (badge || "").toLowerCase();
  if (b.includes("foundational")) {
    return {
      bg: "rgba(34, 197, 94, 0.08)",
      border: "0.5px solid rgba(34, 197, 94, 0.3)",
      color: "#4ade80"
    };
  } else if (b.includes("mandatory")) {
    return {
      bg: "rgba(249, 115, 22, 0.08)",
      border: "0.5px solid rgba(249, 115, 22, 0.3)",
      color: "#fb923c"
    };
  } else if (b.includes("annual")) {
    return {
      bg: "rgba(34, 197, 94, 0.08)",
      border: "0.5px solid rgba(34, 197, 94, 0.3)",
      color: "#4ade80"
    };
  } else if (b.includes("filed annually")) {
    return {
      bg: "rgba(239, 68, 68, 0.08)",
      border: "0.5px solid rgba(239, 68, 68, 0.3)",
      color: "#f87171"
    };
  } else if (b.includes("continuous")) {
    return {
      bg: "rgba(34, 197, 94, 0.08)",
      border: "0.5px solid rgba(34, 197, 94, 0.3)",
      color: "#4ade80"
    };
  }
  return {
    bg: "rgba(212, 175, 55, 0.08)",
    border: "0.5px solid rgba(212, 175, 55, 0.3)",
    color: "var(--amber)"
  };
};

function ComplianceChecklist({ title, subtitle, storageKey, sections, aboutTitle, aboutText, deadlineText }) {
  const [isLight, setIsLight] = useState(document.documentElement.getAttribute("data-theme") === "light");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute("data-theme") === "light");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const [checkedItems, setCheckedItems] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const [expandedSections, setExpandedSections] = useState(() => {
    const initial = {};
    sections.forEach(s => {
      initial[s.id] = true;
    });
    return initial;
  });

  const [showCompletedOnly, setShowCompletedOnly] = useState(false);

  // Totals
  const totalItems = sections.reduce((acc, s) => acc + s.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const percentComplete = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  const toggleItem = (id) => {
    const next = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch (e) {}
  };

  const toggleSection = (id) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset your compliance progress? This will clear all checked items.")) {
      setCheckedItems({});
      try {
        localStorage.removeItem(storageKey);
      } catch (e) {}
    }
  };

  const handleExport = () => {
    let report = `========================================================================\n`;
    report += `                     AKVYRE LEGAL COMPLIANCE REPORT                     \n`;
    report += `========================================================================\n`;
    report += `Checklist: ${title}\n`;
    report += `Date Generated: ${new Date().toLocaleDateString()}\n`;
    report += `Progress: ${checkedCount} / ${totalItems} items completed (${percentComplete}% Compliant)\n`;
    report += `========================================================================\n\n`;

    sections.forEach(s => {
      report += `------------------------------------------------------------------------\n`;
      report += `[SECTION] ${s.title.toUpperCase()}\n`;
      report += `------------------------------------------------------------------------\n`;
      
      s.items.forEach(item => {
        const isChecked = !!checkedItems[item.id];
        report += `[${isChecked ? "✔ COMPLIANT" : "  PENDING  "}] ${item.title.replace(/^\d+\.\s*/, "")}\n`;
        if (item.req) {
          report += `             Requirements: ${item.req}\n`;
        }
        report += `\n`;
      });
      report += `\n`;
    });

    report += `========================================================================\n`;
    report += `Consult with Akvyre Legal LLP at info@akvyre.com to secure legally binding\n`;
    report += `compliance execution, documentation drafting, and audits.\n`;
    report += `© 2026 Akvyre Legal LLP · Delhi · Haryana\n`;
    report += `========================================================================\n`;

    const blob = new Blob([report], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title.replace(/\s+/g, "_")}_Compliance_Report.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadSample = (itemName) => {
    const cleanItemName = itemName.replace(/^\d+\.\s*/, "");
    let docOutline = "";

    if (cleanItemName.toLowerCase() === "comprehensive posh policy") {
      docOutline = `========================================================================
                   AKVYRE LEGAL LLP - STATUTORY MODEL DRAFT
                   DOCUMENT: COMPREHENSIVE POSH POLICY TEMPLATE
------------------------------------------------------------------------
DISCLAIMER: This is a standard corporate statutory template in compliance with
the POSH Act, 2013. It is a baseline reference. Please contact Akvyre Legal LLP 
(info@akvyre.com) to draft custom legal-grade documentation tailored to your 
specific corporate structure, employee handbook, and state requirements.
========================================================================

1. POLICY STATEMENT
-------------------
[Company Name] (the "Company") is committed to providing a safe, secure, and
respectful working environment for all its employees. The Company has a zero-
tolerance policy toward any form of sexual harassment at the workplace.

This Policy is formulated in accordance with the Sexual Harassment of Women
at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (the "POSH Act")
and the Rules framed thereunder.

2. SCOPE & COVERAGE
-------------------
This policy applies to all employees, contract staff, interns, advisors,
consultants, and visitors of the Company across all offices, virtual workspaces,
client sites, and transit provided by the Company.

3. DEFINITION OF SEXUAL HARASSMENT
----------------------------------
Under Section 2(n) of the POSH Act, "sexual harassment" includes any one or
more of the following unwelcome acts or behavior (whether directly or by
implication):
a) Physical contact and advances;
b) A demand or request for sexual favors;
c) Making sexually colored remarks;
d) Showing pornography;
e) Any other unwelcome physical, verbal or non-verbal conduct of sexual nature.

4. CONSTITUTION OF INTERNAL COMMITTEE (IC)
------------------------------------------
The Company has constituted an Internal Committee (IC) at all administrative
units and offices with the following composition:
- Presiding Officer: A senior-level woman employee.
- Employee Members: At least two employees committed to the cause of women or
  with experience in social work or legal knowledge.
- External Member: One member from an NGO/association committed to women's causes.

5. REDRESSAL & INQUIRY MECHANISM
--------------------------------
- Secure Complaint: Any aggrieved person can file a written complaint to the IC 
  within 3 months of the incident (email: icc@companyname.com).
- Conciliation: Voluntary resolution process without monetary settlement.
- Formal Inquiry: In compliance with natural justice, to be completed in 90 days.
- Recommendations: Action report to the management within 10 days of inquiry.

6. CONSEQUENCES & PENALTIES
---------------------------
Any employee found guilty of sexual harassment will face strict disciplinary 
actions up to suspension, termination of employment, and withholding of 
promotions/salaries as recommended by the IC.

========================================================================
© 2026 Akvyre Legal LLP · Delhi · Haryana · info@akvyre.com
========================================================================`;
    } else if (cleanItemName.toLowerCase() === "obtain board/management approval") {
      docOutline = `========================================================================
                   AKVYRE LEGAL LLP - CORPORATE RESOLUTION TEMPLATE
                   DOCUMENT: BOARD RESOLUTION APPROVING POSH POLICY
------------------------------------------------------------------------
DISCLAIMER: Standard template. Contact Akvyre Legal LLP (info@akvyre.com)
for tailored board meeting minutes, governance documentation, and filings.
========================================================================

CERTIFIED TRUE COPY OF THE RESOLUTION PASSED IN THE MEETING OF THE BOARD OF
DIRECTORS OF [COMPANY NAME] HELD ON [DATE] AT [TIME] AT [REGISTERED OFFICE].

"RESOLVED THAT the draft of the Prevention of Sexual Harassment (POSH) Policy 
of the Company, prepared in accordance with the provisions of the Sexual 
Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 
2013 and rules framed thereunder, as placed before the Board, be and is 
hereby approved and adopted with immediate effect."

"RESOLVED FURTHER THAT the Board hereby authorizes the constitution of the 
Internal Committee (IC) with the following designated members for a term of 
[Number] years:
1. [Name of Presiding Officer] - Presiding Officer
2. [Name of Employee Member 1] - Member
3. [Name of Employee Member 2] - Member
4. [Name of NGO External Member] - External Member"

"RESOLVED FURTHER THAT any Director of the Company or [Name of Authorized Signatory]
be and is hereby authorized to distribute the policy digitally to all staff,
conspicuously display the IC notices at all offices, and perform all filings
required with the local District Officer."

For [COMPANY NAME]


__________________________
[Director Name]
Director / Authorised Signatory
DIN: [Number]

========================================================================
© 2026 Akvyre Legal LLP · Delhi · Haryana · info@akvyre.com
========================================================================`;
    } else if (cleanItemName.toLowerCase() === "display policy at conspicuous places") {
      docOutline = `========================================================================
                   AKVYRE LEGAL LLP - STATUTORY POSTER / NOTICE TEMPLATE
                   DOCUMENT: STATUTORY OFFICE NOTICE FOR NOTICE BOARDS
------------------------------------------------------------------------
DISCLAIMER: Every employer in India must display this notice in Hindi, English, 
and local regional languages at visible areas in the office.
========================================================================

                                  NOTICE

                    PREVENTION OF SEXUAL HARASSMENT (POSH)
                  AT THE WORKPLACE IS A CONSTITUTIONAL RIGHT

[Company Name] has a STRICT ZERO-TOLERANCE policy for sexual harassment.
Every employee has the right to work in a safe, harassment-free environment.

WHAT CONSTITUTES HARASSMENT?
- Unwelcome physical contact, advances, or inappropriate gestures.
- Demands or requests for sexual favors or implied promises of preference/threats.
- Making offensive sexually colored comments, jokes, or texts.
- Unwelcome displaying of pornography, explicit images, or screens.

INTERNAL COMPLAINTS COMMITTEE (ICC) DETAILS:
If you or anyone you know experiences harassment, please reach out directly:
1. Presiding Officer: [Name] - [Email/Phone]
2. Employee Member: [Name] - [Email/Phone]
3. Employee Member: [Name] - [Email/Phone]
4. External NGO Member: [Name] - [Email/Phone]

🔒 SECURE INTAKE EMAIL: icc@companyname.com

All complaints will be kept STRICTLY CONFIDENTIAL. Retaliation of any kind 
against a complainant or witness is a severe terminable offense.

Failure to report or comply is subject to legal action under the POSH Act, 2013.

========================================================================
© 2026 Akvyre Legal LLP · Delhi · Haryana · info@akvyre.com
========================================================================`;
    } else {
      docOutline = `========================================================================\n` +
        `AKVYRE LEGAL LLP - SAMPLE DOCUMENT FRAMEWORK & COMPLIANCE OUTLINE\n` +
        `Document Title: ${cleanItemName}\n` +
        `Category Reference: ${title}\n` +
        `------------------------------------------------------------------------\n` +
        `DISCLAIMER: This document is a standard corporate outline and framework\n` +
        `reference. It does NOT constitute legal advice. Please contact Akvyre Legal\n` +
        `LLP (info@akvyre.com) to draft custom legal-grade documentation tailored to\n` +
        `your specific business models, liabilities, and jurisdictions.\n` +
        `========================================================================\n\n` +
        `------------------------------------------------------------------------\n` +
        `1. CORE PURPOSE & SCOPE\n` +
        `------------------------------------------------------------------------\n` +
        `This document is designed to secure full compliance, limit liability, and\n` +
        `establish strict corporate parameters for ${cleanItemName} within your operations.\n\n` +
        `------------------------------------------------------------------------\n` +
        `2. ESSENTIAL CLAUSES & PROVISIONS TO INCLUDE\n` +
        `------------------------------------------------------------------------\n` +
        `Clause A: Recitals & Identification of Parties\n` +
        `- Full legal names of all entities, corporate registration details, and registered offices.\n\n` +
        `Clause B: Rights, Deliverables & Scope\n` +
        `- Clear operational matrices, deliverables, schedules, payment schedules, and obligations.\n\n` +
        `Clause C: Intellectual Property Rights (IPR) Transfer (Critical for Employment/Founders)\n` +
        `- Clear, absolute assignment of all generated work product, inventions, patents,\n` +
        `  trademarks, and code to the enterprise, ensuring clean ownership.\n\n` +
        `Clause D: Governing Law & Multi-Tiered Dispute Resolution\n` +
        `- Governing Law: Laws of India.\n` +
        `- Dispute Resolution: Multi-tiered procedure beginning with amicable consultation,\n` +
        `  leading to mediation, and finalized via binding arbitration in New Delhi under the\n` +
        `  Arbitration and Conciliation Act.\n\n` +
        `------------------------------------------------------------------------\n` +
        `3. TAILORED SECTORAL ADVISORY\n` +
        `------------------------------------------------------------------------\n` +
        `Startups, Agritech firms, and corporate employers in India must ensure all\n` +
        `covenants comply fully with standard commercial codes, FSSAI regulations,\n` +
        `and statutory POSH guidelines. Self-drafted outlines often lack structural\n` +
        `defensibility in court.\n\n` +
        `------------------------------------------------------------------------\n` +
        `4. NEXT STEPS FOR EXECUTION\n` +
        `------------------------------------------------------------------------\n` +
        `- Email info@akvyre.com with your draft parameters.\n` +
        `- Schedule a free detailed compliance consultation using our global floating\n` +
        `  calendar scheduler on our official website: https://www.akvyre.com\n\n` +
        `========================================================================\n` +
        `© 2026 Akvyre Legal LLP · Delhi · Haryana\n` +
        `========================================================================`;
    }

    const blob = new Blob([docOutline], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${cleanItemName.replace(/\s+/g, "_")}_Draft_Template.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <PageShell>
      <HeroBlock
        eyebrow="Compliance"
        headline={title}
        smallHeadline={true}
        sub={subtitle}
        ambient={false}
      />

      <section className="pb-6">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          {/* Progress and Controls Card */}
          <div 
            style={{
              background: isLight ? "rgba(255, 255, 255, 0.65)" : "rgba(255, 255, 255, 0.015)",
              border: "0.5px solid var(--hairline)",
              borderRadius: "12px",
              padding: "clamp(24px, 4vw, 48px)",
              boxShadow: isLight ? "0 12px 30px rgba(30, 27, 22, 0.03)" : "0 12px 40px rgba(0,0,0,0.4)",
              transition: "all 0.35s ease"
            }}
          >
            {/* Progress Strip */}
            <div>
              <div className="flex justify-between items-center text-xs mono-label" style={{ color: "var(--bone-dim)" }}>
                <span>Progress</span>
                <span style={{ color: "var(--amber)" }}>{checkedCount} / {totalItems} items</span>
              </div>
              <div style={{ background: isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)", borderRadius: 999, height: "8px", marginTop: "10px", overflow: "hidden" }}>
                <div style={{ background: "linear-gradient(90deg, var(--amber) 0%, #F5D77F 100%)", borderRadius: 999, height: "100%", width: `${percentComplete}%`, transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)" }}></div>
              </div>
              <div className="mt-3 text-center" style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--bone)", transition: "color 0.35s ease" }}>
                <span style={{ color: "var(--amber)", fontWeight: 500 }}>{percentComplete}%</span> Complete
              </div>
            </div>

            {/* Action Controls */}
            <div className="flex flex-wrap gap-3 mt-8 pt-6 justify-center md:justify-start" style={{ borderTop: "0.5px solid var(--hairline)" }}>
              <button 
                type="button"
                onClick={() => setShowCompletedOnly(prev => !prev)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "999px",
                  border: `0.5px solid ${showCompletedOnly ? "var(--amber)" : "var(--hairline)"}`,
                  background: showCompletedOnly ? "rgba(212, 175, 55, 0.08)" : "transparent",
                  color: showCompletedOnly ? "var(--amber)" : "var(--bone-dim)",
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                {showCompletedOnly ? "Show All Items" : "Show Completed Only"}
              </button>
              <button 
                type="button"
                onClick={handleExport}
                style={{
                  padding: "8px 16px",
                  borderRadius: "999px",
                  border: "0.5px solid var(--hairline)",
                  background: "transparent",
                  color: "var(--bone-dim)",
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.color = "var(--amber)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--hairline)"; e.currentTarget.style.color = "var(--bone-dim)"; }}
              >
                ↓ Export Progress Report
              </button>
              <button 
                type="button"
                onClick={handleReset}
                style={{
                  padding: "8px 16px",
                  borderRadius: "999px",
                  border: "0.5px solid var(--hairline)",
                  background: "transparent",
                  color: "var(--bone-dim)",
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#fd5949"; e.currentTarget.style.color = "#fd5949"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--hairline)"; e.currentTarget.style.color = "var(--bone-dim)"; }}
              >
                ⟳ Reset Checklist
              </button>
            </div>
          </div>

          {/* Deadline alert banner */}
          {deadlineText && (
            <div 
              className="mt-6 flex items-start gap-3"
              style={{
                background: isLight ? "rgba(197, 155, 39, 0.04)" : "rgba(212, 175, 55, 0.03)",
                border: isLight ? "0.5px solid rgba(197, 155, 39, 0.25)" : "0.5px solid rgba(212, 175, 55, 0.2)",
                borderRadius: "8px",
                padding: "16px 24px",
                color: "var(--bone)",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: "1.5",
                transition: "all 0.35s ease"
              }}
            >
              <span style={{ color: "var(--amber)", fontSize: "16px", marginTop: "-1px" }}>⚠️</span>
              <div>
                <span style={{ color: "var(--amber)", fontWeight: 500 }}>Compliance Deadline:</span> {deadlineText}
              </div>
            </div>
          )}

          {/* Accordion List */}
          <div className="mt-12 space-y-6">
            {sections.map(s => {
              const sectionItems = s.items;
              const completedInSection = sectionItems.filter(item => !!checkedItems[item.id]).length;
              const isExpanded = !!expandedSections[s.id];

              // Filter if Show Completed active
              const displayedItems = showCompletedOnly 
                ? sectionItems.filter(item => !!checkedItems[item.id])
                : sectionItems;

              if (showCompletedOnly && displayedItems.length === 0) return null;

              return (
                <div 
                  key={s.id}
                  style={{
                    background: isLight ? "rgba(255, 255, 255, 0.45)" : "rgba(255, 255, 255, 0.005)",
                    border: "0.5px solid var(--hairline)",
                    borderRadius: "8px",
                    overflow: "hidden",
                    transition: "all 0.35s ease"
                  }}
                >
                  {/* Category Header */}
                  <div 
                    onClick={() => toggleSection(s.id)}
                    className="flex items-start md:items-center justify-between gap-4"
                    style={{
                      background: isLight ? "rgba(197, 155, 39, 0.02)" : "rgba(212, 175, 55, 0.015)",
                      borderBottom: isExpanded ? "0.5px solid var(--hairline)" : "none",
                      padding: "20px 24px",
                      cursor: "pointer",
                      userSelect: "none",
                      transition: "background 0.2s"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = isLight ? "rgba(197, 155, 39, 0.05)" : "rgba(212, 175, 55, 0.03)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = isLight ? "rgba(197, 155, 39, 0.02)" : "rgba(212, 175, 55, 0.015)"; }}
                  >
                    <div className="flex items-start md:items-center gap-4 flex-1">
                      {s.index && (
                        <div 
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            background: isLight ? "rgba(0, 0, 0, 0.03)" : "rgba(255, 255, 255, 0.05)",
                            border: "0.5px solid var(--hairline)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--bone)",
                            fontFamily: "var(--font-mono)",
                            fontSize: "14px",
                            fontWeight: "bold",
                            flexShrink: 0,
                            marginTop: "2px",
                            transition: "all 0.35s ease"
                          }}
                        >
                          {s.index}
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="font-display text-lg md:text-xl" style={{ fontWeight: 300, color: "var(--bone)", letterSpacing: "-0.01em", margin: 0, transition: "color 0.35s ease" }}>
                            {s.title}
                          </h3>
                          {s.badge && (() => {
                            const styles = getBadgeStyles(s.badge);
                            return (
                              <span 
                                style={{
                                  background: styles.bg,
                                  border: styles.border,
                                  color: styles.color,
                                  borderRadius: "999px",
                                  padding: "2px 8px",
                                  fontSize: "10px",
                                  fontWeight: 500,
                                  textTransform: "uppercase",
                                  letterSpacing: "0.05em",
                                  fontFamily: "var(--font-mono)"
                                }}
                              >
                                {s.badge}
                              </span>
                            );
                          })()}
                        </div>
                        {s.subtitle && (
                          <div className="mt-1" style={{ color: "var(--bone-dim)", fontSize: "13px", fontWeight: 300, transition: "color 0.35s ease" }}>
                            {s.subtitle}
                          </div>
                        )}
                        <div className="mt-2 text-xs mono-label" style={{ color: "var(--bone-dim)", transition: "color 0.35s ease" }}>
                          {completedInSection} / {sectionItems.length} items completed · {Math.round((completedInSection/sectionItems.length)*100)}%
                        </div>
                      </div>
                    </div>
                    <div style={{ color: "var(--amber)", transition: "transform 0.3s", transform: isExpanded ? "rotate(180deg)" : "rotate(0)", marginTop: "8px" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>

                  {/* Category Items */}
                  {isExpanded && (
                    <div className="p-6 space-y-4">
                      {displayedItems.map(item => {
                        const isChecked = !!checkedItems[item.id];
                        return (
                          <div 
                            key={item.id}
                            style={{
                              background: isChecked 
                                ? (isLight ? "rgba(197, 155, 39, 0.02)" : "rgba(212, 175, 55, 0.01)") 
                                : (isLight ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.005)"),
                              border: `0.5px solid ${isChecked ? "rgba(212, 175, 55, 0.3)" : "var(--hairline)"}`,
                              borderRadius: "8px",
                              padding: "20px 24px",
                              transition: "all 0.2s"
                            }}
                          >
                            <div className="flex items-start gap-4">
                              {/* Circle Checkbox */}
                              <div 
                                onClick={() => toggleItem(item.id)}
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  borderRadius: "50%",
                                  border: `1.5px solid ${isChecked ? "var(--amber)" : "var(--hairline)"}`,
                                  background: isChecked ? "var(--amber)" : "transparent",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "var(--ink)",
                                  cursor: "pointer",
                                  flexShrink: 0,
                                  marginTop: "2px",
                                  transition: "all 0.2s"
                                }}
                              >
                                {isChecked && (
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                  </svg>
                                )}
                              </div>
                              
                              {/* Details */}
                              <div className="flex-1">
                                <h4 
                                  onClick={() => toggleItem(item.id)}
                                  className="font-sans" 
                                  style={{ 
                                    fontSize: "16px", 
                                    fontWeight: 300, 
                                    color: isChecked ? "var(--bone-dim)" : "var(--bone)", 
                                    cursor: "pointer",
                                    textDecoration: isChecked ? "line-through" : "none",
                                    opacity: isChecked ? 0.75 : 1,
                                    transition: "all 0.2s"
                                  }}
                                >
                                  {item.title}
                                </h4>
                                
                                {item.req && (
                                  <div 
                                    className="font-display mt-3 text-xs" 
                                    style={{ 
                                      background: isLight ? "rgba(197, 155, 39, 0.04)" : "rgba(212, 175, 55, 0.04)", 
                                      border: isLight ? "0.5px solid rgba(197, 155, 39, 0.2)" : "0.5px solid rgba(212, 175, 55, 0.2)", 
                                      borderRadius: "6px", 
                                      padding: "10px 14px",
                                      color: "var(--bone-dim)",
                                      fontWeight: 300,
                                      lineHeight: 1.45,
                                      transition: "all 0.35s ease"
                                    }}
                                  >
                                    <span style={{ color: "var(--amber)", fontWeight: 500, fontFamily: "var(--font-mono)" }}>Requirements: </span>
                                    {item.req}
                                  </div>
                                )}

                                {/* Action button inside checklist item */}
                                {storageKey !== "akvyr.checklist.agritech" && (
                                  <div className="mt-3 flex gap-2">
                                    <button
                                      type="button"
                                      onClick={() => handleDownloadSample(item.title)}
                                      style={{
                                        background: "transparent",
                                        border: "0.5px solid var(--hairline)",
                                        borderRadius: "4px",
                                        padding: "4px 10px",
                                        fontSize: "11px",
                                        color: "var(--bone-dim)",
                                        cursor: "pointer",
                                        transition: "all 0.2s",
                                        fontFamily: "var(--font-mono)"
                                      }}
                                      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--amber)"; e.currentTarget.style.color = "var(--amber)"; }}
                                      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--hairline)"; e.currentTarget.style.color = "var(--bone-dim)"; }}
                                    >
                                      ↓ Download Draft Template
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {s.bestPractice && (
                        <div 
                          className="mt-6 text-sm" 
                          style={{ 
                            background: isLight ? "rgba(197, 155, 39, 0.03)" : "rgba(212, 175, 55, 0.02)", 
                            border: isLight ? "0.5px solid rgba(197, 155, 39, 0.2)" : "0.5px solid rgba(212, 175, 55, 0.15)", 
                            borderLeft: "3px solid var(--amber)",
                            borderRadius: "6px", 
                            padding: "16px 20px",
                            color: "var(--bone-dim)",
                            fontWeight: 300,
                            lineHeight: 1.55,
                            transition: "all 0.35s ease"
                          }}
                        >
                          <span style={{ color: "var(--amber)", fontWeight: 500 }}>💡 Best Practice: </span>
                          {s.bestPractice}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 100% Completion Success Banner */}
          {percentComplete === 100 && (
            <div 
              className="mt-8 md:mt-12 text-center"
              style={{
                background: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
                borderRadius: "16px",
                padding: "clamp(24px, 5vw, 40px) clamp(16px, 4vw, 24px)",
                boxShadow: "0 12px 30px rgba(5, 150, 105, 0.2)",
                color: "#ffffff"
              }}
            >
              <div 
                style={{
                  width: "48px",
                  height: "48px",
                  background: "#ffffff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              
              <h2 className="font-display text-2xl md:text-3xl mb-4" style={{ fontWeight: 600, color: "#ffffff", fontSize: "clamp(20px, 4vw, 28px)", letterSpacing: "-0.01em" }}>
                Congratulations! 🎉
              </h2>
              
              <p className="font-sans mb-2" style={{ fontSize: "clamp(14px, 2.5vw, 16px)", fontWeight: 400, opacity: 0.95, lineHeight: 1.5 }}>
                {storageKey.includes("agritech") 
                  ? "You've completed all legal documentation requirements for your Agritech startup!"
                  : "You've completed all legal documentation requirements for your PoSH compliance!"
                }
              </p>
              
              <p className="font-sans" style={{ fontSize: "clamp(12px, 2vw, 14px)", fontWeight: 300, opacity: 0.85, lineHeight: 1.5 }}>
                {storageKey.includes("agritech")
                  ? "Your startup is now legally prepared for growth and investment opportunities."
                  : "Your organization is now legally prepared for audits and statutory filings."
                }
              </p>
            </div>
          )}

          {/* Legal fineprint notice */}
          <div className="mt-12 text-center text-xs" style={{ color: "var(--bone-dim)", fontWeight: 300, fontStyle: "italic", borderTop: "0.5px solid var(--hairline)", paddingTop: "24px", transition: "all 0.35s ease" }}>
            Remember to consult with legal professionals for specific requirements in your jurisdiction.
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function AgritechChecklistPage() {
  return (
    <ComplianceChecklist 
      title="Agritech Legal Documentation Checklist"
      subtitle="Comprehensive legal framework for agricultural technology startups"
      storageKey="akvyr.checklist.agritech"
      sections={AGRITECH_CHECKLIST_SECTIONS}
    />
  );
}

function PoshChecklistPage() {
  return (
    <ComplianceChecklist 
      title="PoSH Compliance Checklist"
      subtitle="Prevention of Sexual Harassment at Workplace - Complete Legal Documentation Framework"
      storageKey="akvyr.checklist.posh"
      sections={POSH_CHECKLIST_SECTIONS}
      deadlineText="Annual reports must be filed with the District Officer by December 31st of every year. Non-compliance can result in penalties up to ₹60,000 and cancellation of business licenses."
    />
  );
}

window.AgritechChecklistPage = AgritechChecklistPage;
window.PoshChecklistPage = PoshChecklistPage;
window.IndustriesPage = IndustriesPage;
window.CasesPage = CasesPage;
window.TermsPage = TermsPage;
window.PrivacyPage = PrivacyPage;

