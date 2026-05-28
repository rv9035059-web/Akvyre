// App entry — routing + disclaimer modal + floating scheduler

function CalendlyModal({ onClose }) {
  const [isLight, setIsLight] = React.useState(document.documentElement.getAttribute("data-theme") === "light");

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute("data-theme") === "light");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 md:px-6 md:py-10"
      style={{ background: "rgba(10,10,11,0.92)", backdropFilter: "blur(10px)" }}
    >
      <div 
        className="w-full flex flex-col relative" 
        style={{ 
          background: isLight ? "#FFFFFF" : "var(--ink)", 
          border: isLight ? "0.5px solid rgba(0, 0, 0, 0.08)" : "0.5px solid var(--hairline)", 
          borderRadius: "12px", 
          boxShadow: "0 30px 70px rgba(0,0,0,0.3)",
          maxWidth: "960px",
          height: "80vh",
          maxHeight: "620px"
        }}
      >
        {/* Floating Close button absolutely positioned */}
        <button 
          onClick={onClose} 
          className="font-mono hover:text-[var(--amber)] transition-colors" 
          style={{ 
            position: "absolute",
            top: "20px",
            right: "24px",
            zIndex: 10,
            background: "transparent", 
            border: 0, 
            fontSize: "12.5px", 
            letterSpacing: "0.12em",
            cursor: "pointer", 
            color: isLight ? "#1E1B16" : "var(--bone)",
            fontWeight: 600
          }}
        >
          CLOSE [×]
        </button>
        
        {/* Full-width Iframe container */}
        <div className="flex-1 w-full h-full overflow-hidden relative" style={{ borderRadius: "12px" }}>
          <iframe
            key={isLight ? "light" : "dark"}
            title="Schedule a free consultation"
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3N5mf7Da6bpn8otQX8Zb35gk_-rC8ziPDn32RAOrdVhyA5x0CygoUwmVZyKmB2HdC9tsKJsjW9?gv=true"
            style={{ width: "100%", height: "100%", border: "none", display: "block", colorScheme: isLight ? "light" : "dark" }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState(() => {
    const hash = window.location.hash.replace(/^#/, "");
    return hash || "home";
  });
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    window.openCalendly = () => setShowCalendly(true);
    return () => {
      try { delete window.openCalendly; } catch (e) { window.openCalendly = undefined; }
    };
  }, []);

  useEffect(() => {
    // Disclaimer modal on first visit (sessionStorage)
    try {
      if (!sessionStorage.getItem("akvyr.disclaimer.seen")) {
        setShowDisclaimer(true);
      }
    } catch (e) {
      setShowDisclaimer(true);
    }
  }, []);

  useEffect(() => {
    const onNav = (e) => {
      const next = e.detail?.page || "home";
      setPage(next);
      window.location.hash = next;
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("akvyr:navigate", onNav);

    const onHash = () => {
      const h = window.location.hash.replace(/^#/, "");
      setPage(h || "home");
    };
    window.addEventListener("hashchange", onHash);

    return () => {
      window.removeEventListener("akvyr:navigate", onNav);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  const dismissDisclaimer = () => {
    try { sessionStorage.setItem("akvyr.disclaimer.seen", "1"); } catch (e) {}
    setShowDisclaimer(false);
  };

  let view;
  if (page === "home") view = <HomePage />;
  else if (page === "about") view = <AboutPage />;
  else if (page === "people") view = <PeopleIndexPage />;
  else if (page.startsWith("people-")) view = <PersonPage slug={page} />;
  else if (page === "practice") view = <PracticeIndexPage />;
  else if (page.startsWith("practice-")) view = <PracticePage slug={page} />;
  else if (page === "industries") view = <IndustriesPage />;
  else if (page.startsWith("industry-")) view = <IndustriesPage targetSlug={page.replace("industry-", "")} />;
  else if (page === "cases") view = <CasesPage />;
  else if (page.startsWith("case-")) view = <CasesPage targetSlug={page.replace("case-", "")} />;
  else if (page === "blog") view = <BlogIndexPage />;
  else if (page.startsWith("blog-")) view = <BlogPostPage slug={page} />;
  else if (page === "contact") view = <ContactPage />;
  else if (page === "agritech-checklist") view = <AgritechChecklistPage />;
  else if (page === "posh-checklist") view = <PoshChecklistPage />;
  else if (page === "disclaimer") view = <DisclaimerPage />;
  else if (page === "terms") view = <TermsPage />;
  else if (page === "privacy") view = <PrivacyPage />;
  else view = <NotFoundPage />;

  return (
    <>
      <Nav currentPage={page} />
      <main>{view}</main>
      <Footer />
      {showDisclaimer && <DisclaimerModal onClose={dismissDisclaimer} />}
      

      {/* Calendly Scheduler Modal */}
      {showCalendly && <CalendlyModal onClose={() => setShowCalendly(false)} />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
