// ============================================================================
//  BLOG — manually edited.
//  To publish a new post: copy any object in BLOG_POSTS below, paste it at the
//  TOP of the array (newest first), and edit the fields. That's the whole flow.
//    slug        unique, must start with "blog-"  (becomes the URL: #blog-...)
//    date        human date shown in the feed       e.g. "22 May 2026"
//    dateMono    uppercase date for mono labels      e.g. "22 MAY 2026"
//    sortKey     YYYYMMDD number, used for ordering   e.g. 20260522
//    category    one short tag (drives the filter)   e.g. "Corporate"
//    title       the headline
//    dek         one-line summary shown in the feed
//    author      byline
//    readingTime e.g. "4 min"
//    body        array of paragraphs (wrap emphasis in <em>…</em>)
// ============================================================================

const BLOG_POSTS = [
  {
    slug: "blog-dpdp-saas-clauses",
    date: "20 May 2026",
    dateMono: "20 MAY 2026",
    sortKey: 20260520,
    category: "Data & Privacy",
    title: "Navigating the DPDP Act, GDPR, and Cross-Border Data Transfers for Businesses",
    dek: "A practical roadmap for Indian startup founders on how digital borders work, which privacy laws apply at each stage of growth, and why data compliance is now a funding requirement - not just a legal one.",
    author: "Vaayu Goyal",
    readingTime: "4 min",
    image: "assets/blog_dpdp.jpg?v=1.1.2",
    body: [
      "If you are an Indian startup founder, you already know that scaling your business means dealing with data. But what most founders don't realize is that in the modern digital economy, your data is traveling the globe long before you ever open an international office. Here is your practical guide to understanding digital borders, and a roadmap for how laws apply to your startup at every stage of growth.",
      "<h3 style=\"font-size: clamp(20px, 2vw, 26px); font-weight: 300; line-height: 1.3; color: var(--bone); margin-top: 2em; margin-bottom: 0.5em; letter-spacing: -0.01em;\">1. What Does It Actually Mean to \"Cross Borders\" in the Digital Space?</h3>",
      "In the digital world, data crosses international borders in milliseconds, completely invisibly. Your startup has 'crossed a border' if any of the following apply:",
      "<ul style=\"list-style-type: none; padding-left: 0; margin-top: 1em; margin-bottom: 1.5em;\">\n  <li style=\"position: relative; padding-left: 1.5em; margin-bottom: 1em; color: var(--bone-dim);\">\n    <span style=\"position: absolute; left: 0; color: var(--amber);\">·</span>\n    <strong style=\"color: var(--bone);\">Your Infrastructure is Foreign:</strong> For example, your startup is based in Bangalore, and all your users are in India, but your app is hosted on Amazon Web Services (AWS) servers physically located in Virginia, USA.\n  </li>\n  <li style=\"position: relative; padding-left: 1.5em; margin-bottom: 1em; color: var(--bone-dim);\">\n    <span style=\"position: absolute; left: 0; color: var(--amber);\">·</span>\n    <strong style=\"color: var(--bone);\">Your Tools are Foreign:</strong> For example, you use a US-based tool like Mailchimp to send out your newsletters, Stripe to process your payments, or an API from OpenAI to power your chatbot. The moment your Indian user's email address is processed by those tools, that data has crossed a border.\n  </li>\n  <li style=\"position: relative; padding-left: 1.5em; margin-bottom: 1em; color: var(--bone-dim);\">\n    <span style=\"position: absolute; left: 0; color: var(--amber);\">·</span>\n    <strong style=\"color: var(--bone);\">Your Users are Foreign:</strong> For example, a college student in California downloads your app, or a small business in Berlin subscribes to your SaaS platform.\n  </li>\n</ul>",
      "<h3 style=\"font-size: clamp(20px, 2vw, 26px); font-weight: 300; line-height: 1.3; color: var(--bone); margin-top: 2em; margin-bottom: 0.5em; letter-spacing: -0.01em;\">2. Stage 1: The Local Builder</h3>",
      "<p style=\"color: var(--bone-dim); margin-bottom: 1em;\"><strong style=\"color: var(--bone);\">The Scenario:</strong> You are an Indian startup. All your users are in India. You use local servers, or you use global cloud providers but have strictly configured your data to be stored only in their Indian data centers (e.g., AWS Mumbai).</p>",
      "<p style=\"color: var(--bone-dim); margin-bottom: 1em;\"><strong style=\"color: var(--bone);\">What Applies:</strong> India's DPDP Act.</p>",
      "<p style=\"color: var(--bone-dim); margin-bottom: 1.5em;\"><strong style=\"color: var(--bone);\">What You Need to Do:</strong> You must focus on getting clear, explicit consent from your users before collecting their data. You must also build internal systems to ensure that if a user asks you to delete their data, you can actually do it quickly.</p>",
      "<h3 style=\"font-size: clamp(20px, 2vw, 26px); font-weight: 300; line-height: 1.3; color: var(--bone); margin-top: 2em; margin-bottom: 0.5em; letter-spacing: -0.01em;\">3. Stage 2: The Hybrid Tech Stack</h3>",
      "<p style=\"color: var(--bone-dim); margin-bottom: 1em;\"><strong style=\"color: var(--bone);\">The Scenario:</strong> You are an Indian startup with Indian users, but you plug into the global tech ecosystem. Your data is stored on US cloud servers, or you use US-based third-party software for analytics, marketing, or AI processing.</p>",
      "<p style=\"color: var(--bone-dim); margin-bottom: 1em;\"><strong style=\"color: var(--bone);\">What Applies:</strong> India's DPDP Act (specifically, the Cross-Border Transfer Rules).</p>",
      "<p style=\"color: var(--bone-dim); margin-bottom: 1em;\"><strong style=\"color: var(--bone);\">What You Need to Do:</strong> India currently uses a 'negative list' system. This means you are legally allowed to send Indian user data to US servers by default. However, you are still completely responsible for that data. If your US vendor gets hacked, you are the one in trouble in India.</p>",
      "<p style=\"color: var(--bone-dim); margin-bottom: 1.5em;\"><strong style=\"color: var(--bone);\">The Fix:</strong> You need ironclad contracts. You must ensure your Master Service Agreements (MSAs) force your foreign vendors to maintain adequate security standards.</p>",
      "<h3 style=\"font-size: clamp(20px, 2vw, 26px); font-weight: 300; line-height: 1.3; color: var(--bone); margin-top: 2em; margin-bottom: 0.5em; letter-spacing: -0.01em;\">4. Stage 3: The Global Exporter</h3>",
      "<p style=\"color: var(--bone-dim); margin-bottom: 1em;\"><strong style=\"color: var(--bone);\">The Scenario:</strong> You actively start marketing your product overseas, and you acquire users who are citizens of the US or the European Union.</p>",
      "<p style=\"color: var(--bone-dim); margin-bottom: 1em;\"><strong style=\"color: var(--bone);\">What Applies:</strong> US State Privacy Laws and the EU's GDPR.</p>",
      "If you get European users, the GDPR applies immediately. It is the strictest privacy law in the world. If you get US users, things are fragmented. There is no single US privacy law. Instead, by 2026, you have to navigate strict state-level laws in places like California, Indiana, Kentucky, and Rhode Island.",
      "<p style=\"color: var(--bone-dim); margin-bottom: 1.5em;\"><strong style=\"color: var(--bone);\">The Fix:</strong> Adopting GDPR standards as your baseline is the smartest operational move. If you build your software to meet European standards, you will automatically comply with about 80% of data privacy laws globally.</p>",
      "<h3 style=\"font-size: clamp(20px, 2vw, 26px); font-weight: 300; line-height: 1.3; color: var(--bone); margin-top: 2em; margin-bottom: 0.5em; letter-spacing: -0.01em;\">5. Why This Matters for Your Next Funding Round</h3>",
      "Investors hate regulatory risk. When you go out to raise money, venture capitalists will audit your data flows just as closely as your financial sheets.",
      "We have handled PE Rounds for Startups, starting from internal due diligence, investor agreements, MCA Compliances and financial restructuring. Startups that treat data compliance as an afterthought inevitably see their valuations drop during due diligence, or worse, see the deal fall apart entirely. Building privacy into your product from Stage 1 isn't just about avoiding fines; it is about building a mature, fundable, and globally scalable business.",
    ],
  },
  {
    slug: "blog-shadow-ai-aup",
    date: "6 May 2026",
    dateMono: "6 MAY 2026",
    sortKey: 20260506,
    category: "AI Governance & Employment Law",
    title: "The Legal Risks of AI at Work: How to Draft an Acceptable Use Policy",
    dek: "By the time you finish reading this article, it is highly probable that an employee within your organization has pasted sensitive company data into a public generative AI tool.",
    author: "Vayu Goyal",
    readingTime: "5 min",
    image: "assets/blog_shadow_ai.jpg?v=1.1.2",
    body: [
      "They did not do this with malicious intent. They did it to draft an email faster, debug a line of code, or summarize a dense client prospectus. This is Shadow AI i.e. the unauthorized, unmonitored use of artificial intelligence in the workplace. While your operations team praises the newfound efficiency and adoption of new tools, from a legal standpoint, Shadow AI is a ticking time bomb of unmitigated liability.",
      "Banning AI outright is a fool’s errand; the only legally sound defense is a proactive, strictly enforced AI Acceptable Use Policy (AUP).",
      "<h3 style=\"font-size: clamp(20px, 2vw, 26px); font-weight: 300; line-height: 1.3; color: var(--bone); margin-top: 2em; margin-bottom: 0.5em; letter-spacing: -0.01em;\">Part I: The Use of AI and Information Exposure</h3>",
      "When an employee inputs data into a public, consumer-grade LLM (Large Language Model), that data often leaves your controlled IT environment and is ingested by third-party servers to train future iterations of the model. This creates four distinct categories of legal exposure:",
      "<ul style=\"list-style-type: none; padding-left: 0; margin-top: 1em; margin-bottom: 1.5em;\">\n  <li style=\"position: relative; padding-left: 2em; margin-bottom: 1.5em; color: var(--bone-dim);\">\n    <span style=\"position: absolute; left: 0; color: var(--amber); font-family: var(--font-mono);\">01</span>\n    <strong style=\"color: var(--bone); font-size: 19px; display: block; margin-bottom: 0.25em;\">The Evisceration of Trade Secrets and IP</strong>A trade secret only enjoys legal protection if the company takes reasonable measures to keep it secret. If your lead developer feeds proprietary source code into a public AI to find a bug, that code is no longer secret. You have voluntarily transmitted it to a third party. If that code is later regurgitated to a competitor using the same AI, you have virtually zero legal recourse. You have waived your own IP rights.\n  </li>\n  <li style=\"position: relative; padding-left: 2em; margin-bottom: 1.5em; color: var(--bone-dim);\">\n    <span style=\"position: absolute; left: 0; color: var(--amber); font-family: var(--font-mono);\">02</span>\n    <strong style=\"color: var(--bone); font-size: 19px; display: block; margin-bottom: 0.25em;\">Breach of Fiduciary Duty and NDAs</strong>Your company is bound by Non-Disclosure Agreements (NDAs), Master Service Agreements (MSAs), and inherent fiduciary duties to your clients. An employee asking a public AI to \"summarize this Q3 financial report\" for a client fundamentally breaches confidentiality clauses. The transmission of that data to an unauthorized third-party server is a material breach of contract.\n  </li>\n  <li style=\"position: relative; padding-left: 2em; margin-bottom: 1.5em; color: var(--bone-dim);\">\n    <span style=\"position: absolute; left: 0; color: var(--amber); font-family: var(--font-mono);\">03</span>\n    <strong style=\"color: var(--bone); font-size: 19px; display: block; margin-bottom: 0.25em;\">Data Privacy</strong>Consumer privacy laws like the GDPR (Europe), CCPA (California), and sector-specific frameworks like HIPAA (Healthcare) or GLBA (Finance) require strict data processing agreements. Inputting Personally Identifiable Information or Protected Health Information into an unsanctioned AI tool is an unapproved data transfer. This triggers mandatory breach notification protocols and exposes the company to catastrophic regulatory fines.\n  </li>\n  <li style=\"position: relative; padding-left: 2em; margin-bottom: 1.5em; color: var(--bone-dim);\">\n    <span style=\"position: absolute; left: 0; color: var(--amber); font-family: var(--font-mono);\">04</span>\n    <strong style=\"color: var(--bone); font-size: 19px; display: block; margin-bottom: 0.25em;\">Vicarious Liability for \"Hallucinations\" and Infringement</strong>Employers are vicariously liable for the actions of their employees within the scope of their employment. If an employee uses AI to draft external marketing copy or a legal brief, and that AI generates fabricated facts (hallucinations) or plagiarizes copyrighted material, the company will be the named defendant in the ensuing defamation or copyright infringement lawsuit.\n  </li>\n</ul>",
      "<h3 style=\"font-size: clamp(20px, 2vw, 26px); font-weight: 300; line-height: 1.3; color: var(--bone); margin-top: 2em; margin-bottom: 0.5em; letter-spacing: -0.01em;\">Part II: Why an AI Acceptable Use Policy is Non-Negotiable</h3>",
      "Banning artificial intelligence outright is not a legal strategy; it is a corporate delusion. The only legally sound, commercially viable path forward is strict governance. An AI Acceptable Use Policy (AUP) is a vital corporate shield. Here is why implementing a formalized AI policy is an absolute necessity for mitigating catastrophic risk:",
      "<ul style=\"list-style-type: none; padding-left: 0; margin-top: 1em; margin-bottom: 1.5em;\">\n  <li style=\"position: relative; padding-left: 2em; margin-bottom: 1.5em; color: var(--bone-dim);\">\n    <span style=\"position: absolute; left: 0; color: var(--amber); font-family: var(--font-mono);\">01</span>\n    <strong style=\"color: var(--bone); font-size: 19px; display: block; margin-bottom: 0.25em;\">Establishing a Legal Safe Harbor (Severing Vicarious Liability)</strong>Under the legal doctrine of respondeat superior, an employer is broadly liable for the actions of its employees performed within the scope of their employment. If an employee uses AI to generate marketing copy that plagiarizes a competitor, your company will be named in the copyright infringement suit. A strictly enforced AI policy disrupts this liability chain. If an employee violates explicit, documented company policy by using an unauthorized AI tool, their actions can be legally classified as frolic and detour operating outside the scope of employment. This allows your legal counsel to argue that the liability rests with the rogue employee, not the enterprise.\n  </li>\n  <li style=\"position: relative; padding-left: 2em; margin-bottom: 1.5em; color: var(--bone-dim);\">\n    <span style=\"position: absolute; left: 0; color: var(--amber); font-family: var(--font-mono);\">02</span>\n    <strong style=\"color: var(--bone); font-size: 19px; display: block; margin-bottom: 0.25em;\">Passing the \"Reasonable Measures\" Test for Trade Secrets</strong>Intellectual property is only legally protected if you actively protect it. Under IP Protection Laws, a company must prove it took reasonable measures to keep its proprietary information confidential. If a disgruntled employee or a careless contractor leaks your source code into a public AI model, you lose your trade secret protections unless you can show the court a signed, dated AI Use Policy explicitly forbidding that action. The policy acts as your evidentiary proof that the company took reasonable security measures.\n  </li>\n  <li style=\"position: relative; padding-left: 2em; margin-bottom: 1.5em; color: var(--bone-dim);\">\n    <span style=\"position: absolute; left: 0; color: var(--amber); font-family: var(--font-mono);\">03</span>\n    <strong style=\"color: var(--bone); font-size: 19px; display: block; margin-bottom: 0.25em;\">Regulatory Defensibility and Mitigating Catastrophic Fines</strong>Regulators rarely expect operational perfection, but they demand rigorous preparedness. Demonstrating that your company had a proactive AI usage policy, coupled with employee training, often shifts a regulator’s assessment from \"willful negligence\" (which carries maximum, punitive fines) to a lower tier of administrative oversight.\n  </li>\n  <li style=\"position: relative; padding-left: 2em; margin-bottom: 1.5em; color: var(--bone-dim);\">\n    <span style=\"position: absolute; left: 0; color: var(--amber); font-family: var(--font-mono);\">04</span>\n    <strong style=\"color: var(--bone); font-size: 19px; display: block; margin-bottom: 0.25em;\">Fulfilling your Existing Obligations</strong>Look at the contracts you have signed with your largest clients. Your MSAs almost certainly contain strict data security and confidentiality covenants. Using unvetted AI tools fundamentally violates those existing contracts. Having an outward-facing or verifiable internal AI policy proves to your high-value clients that you take their data sovereignty seriously. It prevents breach-of-contract claims and becomes a competitive advantage.\n  </li>\n  <li style=\"position: relative; padding-left: 2em; margin-bottom: 1.5em; color: var(--bone-dim);\">\n    <span style=\"position: absolute; left: 0; color: var(--amber); font-family: var(--font-mono);\">05</span>\n    <strong style=\"color: var(--bone); font-size: 19px; display: block; margin-bottom: 0.25em;\">Empowering Sanctioned Innovation</strong>Finally, a policy is not just about mitigating risk; it is about enabling safe productivity. By clearly defining the \"red lines\" (what data cannot be used) and establishing an Approved Vendor Registry, you remove the guesswork for your team. You empower your workforce to leverage AI safely, boosting your company's efficiency without betting the farm in the process.\n  </li>\n</ul>",
      "<h3 style=\"font-size: clamp(20px, 2vw, 26px); font-weight: 300; line-height: 1.3; color: var(--bone); margin-top: 2em; margin-bottom: 0.5em; letter-spacing: -0.01em;\">Conclusion: Moving from Vulnerability to Governance</h3>",
      "Shadow AI is not a future-state problem; it is an active vulnerability currently operating on your company’s network. By implementing a strict, clear, and enforceable AI Acceptable Use Policy, you transition your organization from a posture of blind liability to one of governed innovation. You protect your clients, secure your IP, and establish a clear legal defense should an employee go rogue.",
    ],
  },
];

// sort newest-first by sortKey so feed order is automatic
BLOG_POSTS.sort((a, b) => (b.sortKey || 0) - (a.sortKey || 0));
window.BLOG_POSTS = BLOG_POSTS;

const BLOG_CATEGORIES = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

function BlogIndexPage() {
  const [cat, setCat] = useState("All");
  const posts = cat === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === cat);

  return (
    <PageShell>
      <HeroBlock
        eyebrow="Blog"
        headline="Insights That Shape Legal Strategy"
        smallHeadline={true}
        sub="Notes, updates, and short analysis on Indian commercial law — published as and when there is something worth saying."
      />

      {/* Category filter */}
      <section className="pb-8">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
          <div
            className="pt-8"
            style={{
              display: "flex",
              flexWrap: "wrap",
              columnGap: "12px",
              rowGap: "12px",
            }}
          >
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className="mono-cap"
                style={{
                  padding: "7px 16px",
                  borderRadius: 999,
                  border: "0.5px solid var(--hairline)",
                  color: cat === c ? "var(--ink)" : "var(--bone-dim)",
                  background: cat === c ? "var(--amber)" : "transparent",
                  transition: "all 180ms ease",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Feed */}
      <section className="py-8 md:py-16">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <div className="magazine-layout">
            
            {/* 1. Feature Billboard Slot (For the absolute newest briefing) */}
            {posts.length > 0 && (
              <Reveal key={posts[0].slug} delay={60}>
                <div
                  onClick={() => nav(posts[0].slug)}
                  className="feature-billboard group"
                >
                  {posts[0].image && (
                    <div className="billboard-img-frame">
                      <img
                        src={posts[0].image}
                        alt={posts[0].title}
                        className="billboard-img"
                      />
                    </div>
                  )}
                  <div className="billboard-text mt-6 lg:mt-0">
                    <div className="mono-cap" style={{ color: "var(--amber)" }}>
                      ✦ FEATURED BRIEFING · {posts[0].category}
                    </div>
                    <div className="mono-label mt-2 mb-4" style={{ color: "var(--bone-dim)" }}>
                      {posts[0].dateMono} · {posts[0].readingTime} READ
                    </div>
                    <h2 className="billboard-title">
                      {posts[0].title}
                    </h2>
                    <p className="billboard-excerpt">
                      {posts[0].dek}
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="mono-label" style={{ color: "var(--bone)", fontSize: 11 }}>By {posts[0].author}</span>
                      <span className="text-arrow group-hover:text-[color:var(--amber)] inline-flex items-center" style={{ fontSize: 14 }}>
                        Read Analysis <span className="arrow" style={{ marginLeft: 6 }}>→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            {/* 2. Asymmetric Bottom Grid Slot (For remaining briefings) */}
            {posts.length > 1 && (
              <div className="magazine-grid">
                {posts.slice(1).map((n, i) => (
                  <Reveal key={n.slug} delay={Math.min(i * 60 + 120, 360)}>
                    <div
                      onClick={() => nav(n.slug)}
                      className="magazine-card group"
                    >
                      {n.image && (
                        <div className="card-img-frame">
                          <img
                            src={n.image}
                            alt={n.title}
                            className="card-img"
                          />
                        </div>
                      )}
                      
                      <div className="mono-cap" style={{ color: "var(--amber)", fontSize: 10 }}>
                        {n.category}
                      </div>
                      <div className="mono-label mt-1.5 mb-3" style={{ color: "var(--bone-dim)", fontSize: 10 }}>
                        {n.dateMono} · {n.readingTime}
                      </div>
                      
                      <h3 className="card-title">
                        {n.title}
                      </h3>
                      
                      <p className="card-excerpt">
                        {n.dek}
                      </p>
                      
                      <div className="card-footer">
                        <span className="mono-label" style={{ color: "var(--bone)", fontSize: 10 }}>By {n.author}</span>
                        <span className="text-arrow group-hover:text-[color:var(--amber)]" style={{ fontSize: 13 }}>
                          Read <span className="arrow">→</span>
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
            
          </div>
        </div>
      </section>

      {/* Newsletter — copy: Lawselor "Stay Informed with Legal Updates", verbatim */}
      <section className="py-12 md:py-16">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pt-16">
            <div className="md:col-span-5">
              <h2 className="font-display" style={{ fontSize: "clamp(26px, 2.8vw, 34px)", fontWeight: 300, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
                Stay Informed with Legal Updates
              </h2>
              <p className="mt-6 max-w-md" style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--bone-dim)" }}>
                Subscribe to our newsletter for the latest legal insights, case studies, and industry updates.
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-end">
              <div className="w-full">
                <label className="mono-label block mb-4" style={{ color: "var(--bone-dim)" }}>Your email address</label>
                <div className="flex items-center gap-4" style={{ borderBottom: "0.5px solid var(--hairline)", paddingBottom: 12 }}>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="flex-1 bg-transparent outline-none font-display"
                    style={{ fontSize: 17, fontWeight: 300 }}
                  />
                  <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className="text-arrow underline-amber whitespace-nowrap"
                    style={{ fontSize: 15 }}
                  >
                    Subscribe <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="hairline mt-16" />
        </div>
      </section>
    </PageShell>
  );
}

function BlogPostPage({ slug }) {
  const n = BLOG_POSTS.find((x) => x.slug === slug);
  if (!n) return <NotFoundPage />;
  const idx = BLOG_POSTS.findIndex((x) => x.slug === slug);
  const others = BLOG_POSTS.filter((x) => x.slug !== slug).slice(0, 2);

  return (
    <PageShell>
      <section className="pt-16 md:pt-24 pb-8">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          {/* Back button */}
          <button onClick={() => nav("blog")} className="text-arrow-right mb-10 md:mb-14">
            <span style={{ display: "inline-block", transform: "rotate(180deg)" }} className="arrow">→</span> All briefings
          </button>
          
          {/* 12-Column Editorial Header Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left Column (7 cols): Article Titles & Metadata */}
            <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
              <div className="mono-label mb-6" style={{ color: "var(--amber)", fontSize: "11px", letterSpacing: "0.1em" }}>
                {n.category}
              </div>
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(26px, 3.2vw, 42px)",
                  fontWeight: 300,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.2,
                  textWrap: "balance",
                  color: "var(--bone)"
                }}
              >
                {n.title}
              </h1>
              <p className="mt-6 font-display" style={{ fontSize: "clamp(15px, 1.5vw, 17.5px)", lineHeight: 1.6, color: "var(--bone-dim)", fontWeight: 300 }}>
                {n.dek}
              </p>
              <div
                className="mt-8 mono-label"
                style={{
                  color: "var(--bone-dim)",
                  display: "flex",
                  flexWrap: "wrap",
                  columnGap: "24px",
                  rowGap: "8px",
                  fontSize: "11px",
                  letterSpacing: "0.08em"
                }}
              >
                <span>BY {n.author.toUpperCase()}</span>
                <span>{n.dateMono}</span>
                <span>{n.readingTime.toUpperCase()} READ</span>
              </div>
            </div>

            {/* Right Column (5 cols): Cinematic Cover Crop */}
            {n.image && (
              <div className="col-span-12 md:col-span-5 flex justify-end items-center mt-6 md:mt-0">
                <div 
                  className="w-full aspect-[16/10] overflow-hidden" 
                  style={{ 
                    border: "0.5px solid var(--hairline)", 
                    borderRadius: "3px",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.5)"
                  }}
                >
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
          <div className="pt-14 mx-auto" style={{ maxWidth: 720 }}>
            <div className="prose-akvyr" style={{ fontSize: 16.5, lineHeight: 1.7 }}>
              {n.body.map((para, i) =>
                para.includes("<")
                  ? <div key={i} style={{ marginBottom: "1.5em" }} dangerouslySetInnerHTML={{ __html: para }} />
                  : <p key={i} style={{ marginBottom: "1.5em" }}>{para}</p>
              )}
            </div>
          </div>
        </div>
      </section>
 
      <section className="py-12 md:py-16">
        <div className="max-w-shell mx-auto px-6 md:px-12">
          <hr className="hairline" />
          <div className="pt-16">
            <div className="mono-label mb-10" style={{ color: "var(--bone-dim)" }}>
              More from the blog
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {others.map((o) => (
                <button key={o.slug} onClick={() => nav(o.slug)} className="text-left group block py-2">
                  <div className="mono-cap" style={{ color: "var(--amber)" }}>{o.category}</div>
                  <h3
                    className="mt-4 font-display group-hover:text-[color:var(--amber)] transition-colors duration-200"
                    style={{ fontSize: "clamp(18px, 1.8vw, 22px)", fontWeight: 300, letterSpacing: "-0.015em", lineHeight: 1.25 }}
                  >
                    {o.title}
                  </h3>
                  <div className="mt-4 mono-label" style={{ color: "var(--bone-dim)" }}>{o.author} · {o.dateMono}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

// expose under both names so any older references keep working
window.BlogIndexPage = BlogIndexPage;
window.BlogPostPage = BlogPostPage;
window.NotesIndexPage = BlogIndexPage;
window.NotePage = BlogPostPage;
