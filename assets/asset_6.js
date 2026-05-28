// People pages: index + 4 bios

const PEOPLE = [
  {
    slug: "people-akshay-tyagi",
    initials: "AT",
    first: "Akshay",
    last: "Tyagi",
    role: "Managing Partner | 12+ Years Disputes Practice",
    image: "assets/akshay_tyagi.jpg",
    short: "Corporate, M&A, and private equity. Founders, sponsors, and the rare deal where the documentation has to catch up to the commercial.",
    bio: [
      "Akshay leads our litigation practice with extensive experience across civil, commercial, and criminal forums. His unique technical-legal background combined with proven courtroom expertise enables strategic advocacy with procedural precision and business acumen.",
    ],
    italics: ["Chambers Asia-Pacific", "The Legal 500", "Bar & Bench", "IndiaCorpLaw"],
    education: [
      "B.Pharm, M.Pharm, LLB",
      "Managing Partner",
      "12+ Years Independent Practice",
    ],
    linkedin: "https://www.linkedin.com/in/akshay-tyagi-4588264a/",
    practiceAreas: [
      {
        title: "Civil & Commercial Litigation",
        desc: "Contract enforcement | Partnership and shareholder disputes | Property litigation | Debt recovery | Tortious claims | Interim relief applications"
      },
      {
        title: "Financial Disputes & Recovery",
        desc: "Cheque dishonour cases (Section 138 NI Act) | Fast-track debt recovery | Banking disputes | Recovery suit strategies | Settlement negotiations | Insolvency and creditor rights"
      },
      {
        title: "Contract Disputes & Enforcement",
        desc: "Commercial contract interpretation | Negotiation and settlement structuring | Breach remedies | Specific performance | Arbitration enforcement | Pre-litigation advisory"
      },
      {
        title: "Criminal Litigation",
        desc: "White-collar crime defense and prosecution | Economic offenses | Corruption and bribery matters | Criminal breach of trust | Bail applications | Criminal trial management"
      },
      {
        title: "Court Representation",
        desc: "District Courts | High Courts | Statutory tribunals (NCLT, Consumer Forums, DRT) | Arbitration proceedings | Appeals and revisions | Execution proceedings"
      }
    ],
  },
  {
    slug: "people-vaayu-goyal",
    initials: "VG",
    first: "Vaayu",
    last: "Goyal",
    role: "Partner | Corporate Practice Head",
    image: "assets/vaayu_goyal.jpg",
    short: "Commercial disputes and international arbitration. Counsel in promoter disputes, JV breakups, and post-acquisition claims.",
    bio: [
      "Vaayu leads our compliance and advisory practice with deep expertise in corporate governance, regulatory navigation, and commercial contracting. Her experience supporting growth-stage companies from boardroom strategy to courtroom resolution enables pragmatic, business-aligned legal solutions across evolving regulatory environments.",
    ],
    italics: ["Chambers Asia-Pacific", "GAR", "Indian Journal of Arbitration Law"],
    education: [
      "BBA LLB (Hons.), Christ University",
      "ADR Diploma, NALSAR",
    ],
    linkedin: "https://www.linkedin.com/in/vaayu-goyal-33b572138/",
    practiceAreas: [
      {
        title: "Regulatory Confidence",
        desc: "Corporate and statutory compliance management | Industry-specific regulatory navigation | Government filing and liaison | Compliance monitoring and alerts | Board governance and secretarial services"
      },
      {
        title: "Commercial Protection",
        desc: "Contract lifecycle management | Strategic drafting and negotiation | Vendor and customer agreement optimization | Contract risk mitigation | Repository management and tracking"
      },
      {
        title: "Data & Technology Compliance",
        desc: "Data privacy frameworks (DPDP, GDPR) | Technology and SaaS agreements | Cybersecurity policy development | Cross-border compliance mechanisms | Platform and digital economy regulations"
      },
      {
        title: "Workplace Compliance & HR Enablement",
        desc: "Employment documentation and policy frameworks | POSH compliance (training, committee formation, investigations) | Labor law advisory | Employee relations and grievance handling | Separation protocols"
      },
      {
        title: "Operational Excellence",
        desc: "Legal process streamlining and automation | Technology-driven legal operations | Preventive legal audits | Scalable support models | Cost-effective resource optimization"
      }
    ],
  },
  {
    slug: "people-rakesh-sharma",
    initials: "RS",
    first: "Rakesh",
    last: "Sharma",
    role: "Counsel",
    short: "Financial Crime, Anti-Money Laundering, PMLA, FEMA",
    noDetail: true,
  },
  {
    slug: "people-amandeep-singh",
    initials: "AS",
    first: "Amandeep",
    last: "Singh",
    role: "Counsel",
    short: "Crimes against Women and Children",
    noDetail: true,
  },
  {
    slug: "people-akshat-kalia",
    initials: "AK",
    first: "Akshat",
    last: "Kalia",
    role: "Counsel",
    short: "Service Matters, Civil and Criminal Litigation — Punjab and Haryana High Court",
    noDetail: true,
  },
  {
    slug: "people-janmejai-shukla",
    initials: "JS",
    first: "Janmejai",
    last: "Shukla",
    role: "Counsel",
    short: "Criminal Law, FEMA, and Service Matters — Allahabad High Court",
    noDetail: true,
  },
  {
    slug: "people-suraj-malik",
    initials: "SM",
    first: "Suraj",
    last: "Malik",
    role: "Counsel",
    short: "Dishonour of Cheques & Financial Recovery",
    noDetail: true,
  },
];

window.PEOPLE = PEOPLE;

function PeopleIndexPage() {
  const withImages = PEOPLE.filter((p) => p.image);
  const withoutImages = PEOPLE.filter((p) => !p.image);

  return (
    <PageShell>
      <HeroBlock
        eyebrow="People"
        headline="Meet The Team"
        smallHeadline={true}
        sub="The Akvyre team."
      />

      <section className="pb-24 md:pb-36">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          {/* Partners with Images */}
          <hr className="hairline" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 pt-20">
            {withImages.map((p, i) => {
              const CardElement = p.noDetail ? "div" : "button";
              return (
                <Reveal key={p.slug} delay={i * 80}>
                  <CardElement
                    className={`text-left group block w-full ${p.noDetail ? "" : "cursor-pointer"}`}
                    onClick={p.noDetail ? undefined : () => nav(p.slug)}
                  >
                    <div className="max-w-md">
                      <Monogram initials={p.initials} name={`${p.first} ${p.last}`} ratio="4 / 5" image={p.image} />
                    </div>
                    <div className="mono-label mt-8" style={{ color: "var(--bone-dim)" }}>
                       {p.role}
                    </div>
                    <h2
                      className={`mt-3 font-display transition-colors duration-200 ${p.noDetail ? "" : "group-hover:text-[color:var(--amber)]"}`}
                      style={{
                        fontSize: "clamp(28px, 3.5vw, 44px)",
                        fontWeight: 300,
                        letterSpacing: "-0.015em",
                        lineHeight: 1.15,
                      }}
                    >
                      {p.first} {p.last}
                    </h2>
                    <p className="mt-5 max-w-md" style={{ color: "var(--bone-dim)", fontSize: 15, lineHeight: 1.65 }}>
                      {p.short}
                    </p>
                    {!p.noDetail && (
                      <div className="mt-6 mono-label group-hover:text-[color:var(--amber)] transition-colors duration-200" style={{ color: "var(--bone)" }}>
                        Read bio →
                      </div>
                    )}
                  </CardElement>
                </Reveal>
              );
            })}
          </div>
 
          {/* Counsel / Team members without images in beautiful list form */}
          {withoutImages.length > 0 && (
            <div className="pt-16">
              <div className="flex flex-col">
                {withoutImages.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 60}>
                    <div
                      className="grid grid-cols-1 md:grid-cols-12 items-baseline py-8 gap-4 md:gap-8"
                      style={{ borderTop: "0.5px solid var(--hairline)" }}
                    >
                      {/* Name */}
                      <div className="col-span-12 md:col-span-4">
                        <h3
                          className="font-display text-balance"
                          style={{
                            fontSize: "clamp(20px, 2.2vw, 26px)",
                            fontWeight: 300,
                            letterSpacing: "-0.01em",
                            color: "var(--bone)",
                          }}
                        >
                          {p.first} {p.last}
                        </h3>
                      </div>
                      
                      {/* Role Label */}
                      <div className="col-span-12 md:col-span-2">
                        <span className="mono-label" style={{ color: "var(--amber)", fontSize: 13 }}>
                          {p.role}
                        </span>
                      </div>
 
                      {/* Short description / areas of practice */}
                      <div className="col-span-12 md:col-span-6">
                        <p style={{ color: "var(--bone-dim)", fontSize: 15, lineHeight: 1.5 }}>
                          {p.short}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
                {/* Extra bottom border line to close the list */}
                <div style={{ borderTop: "0.5px solid var(--hairline)" }} />
              </div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function PersonPage({ slug }) {
  const p = PEOPLE.find((x) => x.slug === slug);
  if (!p) return <NotFoundPage />;

  // Helper to italicise certain phrases in bio body
  const renderBio = (text) => {
    let nodes = [text];
    p.italics.forEach((phrase) => {
      const next = [];
      nodes.forEach((node) => {
        if (typeof node !== "string") { next.push(node); return; }
        const parts = node.split(phrase);
        parts.forEach((part, i) => {
          next.push(part);
          if (i < parts.length - 1) next.push(<em key={phrase + i + Math.random()} style={{ fontStyle: "italic" }}>{phrase}</em>);
        });
      });
      nodes = next;
    });
    return nodes;
  };

  return (
    <PageShell>
      <section className="pt-28 md:pt-40 pb-16">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <button onClick={() => nav("people")} className="text-arrow mono-label mb-14">
            <span style={{ display: "inline-block", transform: "rotate(180deg)" }} className="arrow">→</span> All people
          </button>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-5">
              <Monogram initials={p.initials} name={`${p.first} ${p.last}`} ratio="4 / 5" image={p.image} />
            </div>
            <div className="md:col-span-7">
              <div className="mono-label" style={{ color: "var(--bone-dim)" }}>
                {p.role}
              </div>
              <h1
                className="mt-5 font-display"
                style={{
                  fontSize: "clamp(36px, 4.5vw, 54px)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {p.first} {p.last}
              </h1>

              <div className="mt-10 pt-8" style={{ borderTop: "0.5px solid var(--hairline)" }}>
                <div className="mono-label mb-4" style={{ color: "var(--bone-dim)", fontSize: 11, letterSpacing: "0.15em" }}>Education & Admissions</div>
                <ul className="space-y-2">
                  {p.education.map((line, i) => (
                    <li key={i} className="mono-cap" style={{ color: "var(--bone)", fontSize: 13, letterSpacing: "0.08em" }}>{line}</li>
                  ))}
                </ul>

                {p.linkedin && (
                  <div className="mt-6 flex items-center">
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${p.first}'s LinkedIn`}
                      aria-label={`${p.first}'s LinkedIn`}
                      style={{
                        display: "inline-flex",
                        transition: "transform 200ms ease, filter 200ms ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.12)";
                        e.currentTarget.style.filter = "brightness(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.filter = "brightness(1)";
                      }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" style={{ display: "block" }}>
                        <rect width="24" height="24" rx="4" fill="#0A66C2" />
                        <path d="M19 19h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#ffffff" />
                        <rect x="5" y="8" width="3" height="11" fill="#ffffff" />
                        <circle cx="6.5" cy="5" r="1.5" fill="#ffffff" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-36">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pt-16">
            <div className="md:col-span-3">
              <div className="mono-label" style={{ color: "var(--bone-dim)" }}>Biography</div>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <div className="prose-akvyr max-w-column" style={{ fontSize: 16, lineHeight: 1.7 }}>
                {p.bio.map((para, i) => <p key={i}>{renderBio(para)}</p>)}
              </div>
 
              {p.practiceAreas && (
                <div className="mt-20">
                  <div className="mono-label mb-8" style={{ color: "var(--bone-dim)" }}>Practice Areas</div>
                  <div className="space-y-8">
                    {p.practiceAreas.map((pa, idx) => (
                      <div key={idx}>
                        <h3 className="font-display" style={{ fontSize: "clamp(18px, 1.8vw, 22px)", color: "var(--bone)", fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1.25 }}>
                          {pa.title}
                        </h3>
                        <p className="mt-3 max-w-column" style={{ color: "var(--bone-dim)", fontSize: 15, lineHeight: 1.68 }}>
                          {pa.desc.split(" | ").map((item, i, arr) => (
                            <React.Fragment key={i}>
                              {item}
                              {i < arr.length - 1 && (
                                <span style={{ color: "var(--amber)", margin: "0 8px", fontWeight: 400 }}>|</span>
                              )}
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}


            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
            <div>
              <div className="mono-label mb-3" style={{ color: "var(--bone-dim)" }}>Contact</div>
              <a href="mailto:info@akvyre.com" className="link-amber" style={{ fontSize: 18 }}>info@akvyre.com</a>
            </div>
            <div className="md:text-right">
              <button onClick={() => nav("people")} className="text-arrow">
                Other counsel <span className="arrow">→</span>
              </button>
            </div>
          </div>
          <hr className="hairline" />
        </div>
      </section>
    </PageShell>
  );
}

window.PeopleIndexPage = PeopleIndexPage;
window.PersonPage = PersonPage;
