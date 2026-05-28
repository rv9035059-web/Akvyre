// Practice index + 5 practice area pages (copy: Lawselor "Scope of Work", verbatim)

const PRACTICE_DETAILS = {
  "practice-disputes": {
    num: "01",
    eyebrow: "Disputes & Litigation",
    name: "Disputes and Litigation Management",
    lead: "Resolving legal conflicts with clarity, confidence, and control.",
    body: [
      "Legal disputes are inevitable, but how they're handled determines their impact on your business. At Akvyre, we approach dispute resolution as a strategic, client-driven process. Whether you're facing a contractual conflict, commercial claim, recovery issue, or regulatory allegation, our litigation team brings tactical insight, procedural precision, and courtroom experience to the table.",
    ],
    blocks: [
      {
        label: "Our Litigation & Dispute Services",
        sub: "Comprehensive dispute resolution services across all legal domains",
        items: [
          { t: "Civil and Commercial Litigation", s: "Before District Courts, High Courts, Tribunals" },
          { t: "Pre-litigation Advisory", s: "Strategic Settlement Negotiation" },
          { t: "Urgent Relief Applications", s: "Fast-track legal remedies" },
          { t: "Recovery Proceedings", s: "Execution Petitions & Debt Recovery" },
          { t: "Criminal Litigation Support", s: "Defense and prosecution assistance" },
          { t: "Consumer & Deficiency Disputes", s: "Consumer protection and remedies" },
          { t: "Property & Title Disputes", s: "Real estate and property rights" },
          { t: "Alternative Dispute Resolution", s: "Arbitration, Mediation & ADR" },
        ],
      },
      {
        label: "Our Disputes Edge",
        items: [
          { t: "Courtroom-tested lawyers", s: "With a business-first mindset" },
          { t: "Deep Industry Experience", s: "Real estate, health, tech, finance, manufacturing" },
          { t: "Transparent Strategy", s: "Risk assessment and updates at every stage" },
        ],
      },
    ],
    cta: {
      title: "Ready to Resolve Your Legal Dispute?",
      body: "Get expert legal consultation and strategic dispute resolution support from our experienced litigation team.",
    },
  },
  "practice-contracts": {
    num: "02",
    eyebrow: "Contracts & Transactions",
    name: "Transactional Support",
    lead: "Every word matters. Every clause protects. We get your contracts right.",
    body: [
      "In business, your contracts are your first line of defense and the foundation of every relationship. At Akvyre, we don't just draft documents, we structure clarity, reduce ambiguity, and safeguard your commercial intent. Whether you're onboarding a vendor, licensing software, engaging employees, or signing a strategic partnership, we help you close deals with confidence.",
    ],
    blocks: [
      {
        label: "Business & Commercial Contracts",
        sub: "Comprehensive contract solutions for modern businesses",
        items: [
          { t: "Subscription Agreements", s: "B2B, SaaS, Retainer-based Models" },
          { t: "Share Subscription & SSHA", s: "Shareholders' Agreements" },
          { t: "Equity Transfer Agreements", s: "Business Takeover Documentation" },
          { t: "Master Service Agreements", s: "MSAs & Statements of Work (SoWs)" },
          { t: "Franchise & Distribution", s: "Channel partnership agreements" },
          { t: "Lease & Sale Agreements", s: "Conveyance and property contracts" },
          { t: "Non-Disclosure Agreements", s: "NDAs & Confidentiality Terms" },
        ],
      },
      {
        label: "Technology & IP Contracts",
        sub: "Specialized contracts for the digital age",
        items: [
          { t: "SaaS Agreements & Cloud Licensing", s: "Software-as-a-Service and cloud computing contracts" },
          { t: "Software Development & Maintenance", s: "Custom software development agreements" },
          { t: "IP Assignment & Licensing", s: "Intellectual Property transfer and licensing" },
          { t: "Data Protection & Privacy Clauses", s: "IT Act, GDPR-ready privacy frameworks" },
        ],
      },
    ],
    cta: {
      title: "Need Expert Contract Support?",
      body: "Get comprehensive contract drafting, review, and negotiation services from our expert legal team.",
    },
  },
  "practice-compliance": {
    num: "03",
    eyebrow: "Compliance & Regulatory",
    name: "Compliance & Regulatory",
    lead: "Proactive compliance for businesses that prefer peace of mind over penalties.",
    body: [
      "Today's regulatory landscape is complex, dynamic, and unforgiving. Akvyre's compliance practice helps Indian businesses navigate it with certainty. From routine filings to sensitive regulatory notices, we help you stay ahead of the law. We act as your legal backbone, ensuring your operations are aligned, your filings are timely, and your exposure is minimized.",
    ],
    blocks: [
      {
        label: "Company Law & MCA Compliance",
        sub: "Complete corporate compliance and regulatory filing services",
        items: [
          { t: "Director KYC, DIN Activation" },
          { t: "Board & Shareholder Resolutions" },
          { t: "Share Allotments & Transfers" },
          { t: "Company Incorporation", s: "Companies, LLPs & Startups (SPICe+, RUN)" },
          { t: "Maintenance of Minutes & Records" },
          { t: "Compliance Checklists & MCA Representation" },
        ],
      },
      {
        label: "IPR Filings & Registrations",
        sub: "Comprehensive intellectual property protection services",
        items: [
          { t: "Trademark Registration", s: "Name, Logo, Slogan protection" },
          { t: "Copyright", s: "Literary, Artistic, Digital Content" },
          { t: "Design & Patent Advisory", s: "Coordinated filing support" },
          { t: "Opposition, Renewal, Assignment" },
        ],
      },
      {
        label: "Sector-Specific Regulatory Compliance",
        sub: "Industry-focused compliance solutions",
        items: [
          { t: "Financial regulatory disclosures" },
          { t: "Packaging, Weight & Measurement" },
          { t: "Food business compliance" },
          { t: "Real estate regulations" },
          { t: "UGC, AICTE, State Guidelines" },
          { t: "GDPR, DPDP, IT Act compliance" },
        ],
      },
    ],
    cta: {
      title: "Stay Ahead of Regulatory Changes",
      body: "Get proactive compliance management and regulatory filing services to keep your business legally protected.",
    },
  },
};

window.PRACTICE_DETAILS = PRACTICE_DETAILS;

function PracticeIndexPage() {
  return (
    <PageShell>
      <HeroBlock
        eyebrow="Practice Areas"
        headline="Comprehensive Legal
        Solutions for
        Every Challenge"
        smallHeadline={true}
        sub="Whether you're managing compliance, resolving a dispute, or need solid research and drafting support, we work as an extension of your team with tech-enabled workflows."
      />

      <section className="pb-32 md:pb-44">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          {PRACTICES.map((p, i) => (
            <Reveal key={p.slug} delay={i * 50}>
              <button
                type="button"
                onClick={() => nav(p.slug)}
                className="practice-row block w-full text-left"
                style={{ borderTop: "0.5px solid var(--hairline)", padding: "32px 0" }}
              >
                <div className="grid grid-cols-12 items-center gap-6">
                  <div className="col-span-2 md:col-span-1 num mono-cap" style={{ color: "var(--bone-dim)" }}>
                    {p.num}
                  </div>
                  <div
                    className="col-span-10 md:col-span-7 name font-display"
                    style={{
                      fontSize: "clamp(28px, 4.5vw, 64px)",
                      fontWeight: 300,
                      letterSpacing: "-0.025em",
                      lineHeight: 1.04,
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    className="hidden md:block md:col-span-3 desc"
                    style={{ color: "var(--bone-dim)", fontSize: 15, lineHeight: 1.55 }}
                  >
                    {p.desc}
                  </div>
                  <div className="hidden md:flex md:col-span-1 justify-end desc" style={{ color: "var(--amber)" }}>
                    →
                  </div>
                </div>
                <div className="md:hidden mt-3" style={{ color: "var(--bone-dim)", fontSize: 14 }}>
                  {p.desc}
                </div>
              </button>
            </Reveal>
          ))}
          <hr className="hairline" />
        </div>
      </section>
    </PageShell>
  );
}

function ServiceList({ items }) {
  return (
    <ul className="space-y-0">
      {items.map((s, i) => (
        <Reveal key={i} delay={Math.min(i * 40, 200)}>
          <li
            className="grid grid-cols-12 gap-6 py-6"
            style={{ borderTop: "0.5px solid var(--hairline)" }}
          >
            <span className="col-span-2 mono-cap" style={{ color: "var(--bone-dim)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="col-span-10">
              <span className="font-display block" style={{ fontSize: 22, fontWeight: 300, lineHeight: 1.35, letterSpacing: "-0.005em" }}>
                {typeof s === "string" ? s : s.t}
              </span>
              {typeof s !== "string" && s.s && (
                <span className="block mt-1" style={{ color: "var(--bone-dim)", fontSize: 15, lineHeight: 1.5 }}>
                  {s.s}
                </span>
              )}
            </span>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}

function PracticePage({ slug }) {
  const d = PRACTICE_DETAILS[slug];
  if (!d) return <NotFoundPage />;

  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="max-w-shell mx-auto px-6 md:px-12 relative z-10">
          <div className="pt-28 md:pt-40 pb-12">
            <button onClick={() => nav("practice")} className="text-arrow mono-label mb-14">
              <span style={{ display: "inline-block", transform: "rotate(180deg)" }} className="arrow">→</span> All practices
            </button>
            {d.eyebrow && (
              <div className="mono-label mb-6" style={{ color: "var(--bone-dim)" }}>{d.eyebrow}</div>
            )}
            <div className="grid grid-cols-12 items-end gap-6">
              <div className="col-span-2 md:col-span-1 mono-cap" style={{ color: "var(--bone-dim)" }}>
                {d.num}
              </div>
              <h1
                className="col-span-10 md:col-span-11 font-display"
                style={{
                  fontSize: "clamp(36px, 6vw, 96px)",
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.98,
                  textWrap: "balance",
                }}
              >
                {d.name}.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
          <Reveal>
            <p
              className="font-display italic mt-16 mb-16 max-w-4xl"
              style={{
                fontSize: "clamp(24px, 3vw, 38px)",
                fontWeight: 300,
                lineHeight: 1.3,
                letterSpacing: "-0.015em",
              }}
            >
              {d.lead}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-3">
              <div className="mono-label" style={{ color: "var(--bone-dim)" }}>Overview</div>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <div className="max-w-column" style={{ fontSize: 17, lineHeight: 1.7 }}>
                {d.body.map((p, i) => (
                  <p key={i} style={{ marginBottom: "1.4em", color: "var(--bone)" }}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {d.blocks.map((blk, bi) => (
        <section key={bi} className="py-16 md:py-24">
          <div className="max-w-shell mx-auto px-6 md:px-12">
            <hr className="hairline" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pt-16">
              <div className="md:col-span-3">
                <div className="mono-label" style={{ color: "var(--bone-dim)" }}>{blk.label}</div>
                {blk.sub && (
                  <p className="mt-4" style={{ fontSize: 14, lineHeight: 1.55, color: "var(--bone-dim)" }}>{blk.sub}</p>
                )}
              </div>
              <div className="md:col-span-8 md:col-start-5">
                <ServiceList items={blk.items} />
                <hr className="hairline" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {d.cta && (
        <section className="py-20 md:py-28">
          <div className="max-w-shell mx-auto px-6 md:px-12">
            <Reveal>
              <h2 className="font-display italic max-w-3xl" style={{ fontSize: "clamp(28px, 3.4vw, 48px)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                {d.cta.title}
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-6 max-w-2xl" style={{ fontSize: 17, lineHeight: 1.65, color: "var(--bone-dim)" }}>
                {d.cta.body}
              </p>
            </Reveal>
            <div className="mt-10">
              <button onClick={() => nav("contact")} className="text-arrow underline-amber" style={{ fontSize: 18 }}>
                Get Your Free Consultation <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Next practice */}
      <section className="pb-12 pt-4">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12 items-end">
            <div className="mono-label" style={{ color: "var(--bone-dim)" }}>
              Next practice
            </div>
            <div className="md:text-right">
              {(() => {
                const order = Object.keys(PRACTICE_DETAILS);
                const idx = order.indexOf(slug);
                const next = PRACTICE_DETAILS[order[(idx + 1) % order.length]];
                return (
                  <button
                    onClick={() => nav(order[(idx + 1) % order.length])}
                    className="text-arrow"
                    style={{ fontSize: "clamp(24px, 2.2vw, 34px)", fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, letterSpacing: "-0.015em" }}
                  >
                    {next.name} <span className="arrow">→</span>
                  </button>
                );
              })()}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

window.PracticeIndexPage = PracticeIndexPage;
window.PracticePage = PracticePage;
