// Shared components: Nav, Footer, Wordmark, Monogram, Reveal, Modal, Layout helpers

const { useState, useEffect, useRef, useMemo } = React;

// ---------- Routing helper ----------
const nav = (page, opts = {}) => {
  window.dispatchEvent(new CustomEvent("akvyr:navigate", { detail: { page, ...opts } }));
};

// ---------- Theme (dark default, light toggle) ----------
const THEME_KEY = "akvyre.theme";
function getTheme() {
  try { return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark"; } catch (e) { return "dark"; }
}
function applyTheme(t) {
  const el = document.documentElement;
  if (t === "light") el.setAttribute("data-theme", "light");
  else el.removeAttribute("data-theme");
}
// apply as soon as this script loads, before content paints
applyTheme(getTheme());

// inject the light palette as a stylesheet (kept here so the template stays untouched)
(function injectThemeCSS() {
  if (typeof document === "undefined" || document.getElementById("akvyre-theme-css")) return;
  const s = document.createElement("style");
  s.id = "akvyre-theme-css";
  s.textContent =
    '[data-theme="light"]{' +
    '--ink:#F5F2EA;--bone:#1E1B16;--bone-dim:#6B655B;' +
    '--bone-faint:rgba(30,27,22,0.07);--hairline:rgba(30,27,22,0.16);' +
    '--amber:#C59B27;--amber-soft:rgba(197,155,39,0.08);' +
    '--hero-vignette-start:rgba(245,242,234,0.15);--hero-vignette-mid:rgba(245,242,234,0.78);' +
    '--hero-bg-opacity:0.32;--hero-bg-filter:brightness(1.2) contrast(1.05) grayscale(10%);}' +
    '[data-theme="light"] .nav-surface{background:rgba(245,242,234,0.82);}' +
    'html,body{transition:background-color .35s ease,color .35s ease;}';
  document.head.appendChild(s);
})();

function ThemeToggle({ mobile }) {
  const [theme, setTheme] = useState(getTheme());
  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) { }
  };
  return (
    <button
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      title={theme === "light" ? "Dark mode" : "Light mode"}
      className="link-amber theme-toggle-btn"
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: mobile ? 44 : 30, height: mobile ? 44 : 30, color: "var(--bone)", background: "transparent", border: 0, cursor: "pointer" }}
    >
      {theme === "light" ? (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
      ) : (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4.2" /><path d="M12 2v2.2M12 19.8V22M22 12h-2.2M4.2 12H2M18.7 5.3l-1.55 1.55M6.85 17.15L5.3 18.7M18.7 18.7l-1.55-1.55M6.85 6.85L5.3 5.3" /></svg>
      )}
    </button>
  );
}

function Link({ to, className = "", children, ariaLabel, onClick, ...rest }) {
  const handle = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return; // let new tab work if held
    e.preventDefault();
    if (onClick) onClick(e);
    nav(to);
  };
  return (
    <a href={`#${to}`} onClick={handle} aria-label={ariaLabel} className={className} {...rest}>
      {children}
    </a>
  );
}

// ---------- Wordmark ----------
function Wordmark({ size = 28, className = "" }) {
  return (
    <span
      className={`wordmark ${className}`}
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: size,
        fontWeight: 400,
        letterSpacing: "-0.01em",
        lineHeight: 1,
        color: "var(--bone)",
        display: "inline-block",
      }}
    >
      Akvyre<span style={{ color: "var(--amber)" }}>.</span>
    </span>
  );
}

// ---------- Reveal on scroll ----------
function Reveal({ children, as: As = "div", delay = 0, className = "", ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("is-in"), delay);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <As ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </As>
  );
}

// ---------- Nav ----------
const NAV_ITEMS = [
  { label: "Practice Areas", page: "practice" },
  { label: "Industries", page: "industries" },
  { label: "Cases", page: "cases" },
  { label: "People", page: "people" },
  { label: "Blog", page: "blog" },
  { label: "Free Consultation", page: "contact" },
];

function Nav({ currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Determine which top-level nav item is active
  const activeFor = (page) => {
    if (page === "practice") return currentPage.startsWith("practice");
    if (page === "industries") return currentPage === "industries";
    if (page === "cases") return currentPage === "cases";
    if (page === "people") return currentPage.startsWith("people");
    if (page === "blog") return currentPage.startsWith("blog");
    if (page === "contact") return currentPage === "contact";
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${scrolled ? "nav-surface" : ""
        }`}
    >
      <div className="max-w-shell mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-[72px] md:h-[84px]">
          <Link to="home" ariaLabel="Akvyre home" className="link-amber">
            <Wordmark size={26} />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.filter(item => item.page !== "contact").map((item) => (
              <Link
                key={item.page}
                to={item.page}
                className={`mono-label nav-link-premium link-amber ${activeFor(item.page) ? 'active' : ''}`}
                style={{
                  color: activeFor(item.page) ? "var(--amber)" : "var(--bone)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <span style={{ width: "1px", height: "20px", background: "linear-gradient(to bottom, transparent, var(--hairline), transparent)", opacity: 0.8 }} aria-hidden="true" />
            <Link
              to="contact"
              className="btn-gold"
            >
              Free Consultation <span style={{ transition: 'transform 200ms ease', display: 'inline-block' }} className="btn-gold-arrow">→</span>
            </Link>
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle mobile />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                color: "var(--bone)",
                background: "transparent",
                border: 0,
                cursor: "pointer",
                padding: 0,
              }}
            >
              {open ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden nav-surface">
          <div className="max-w-shell mx-auto px-6 py-6 flex flex-col gap-5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.page}
                to={item.page}
                onClick={() => setOpen(false)}
                className="font-display text-3xl link-amber"
                style={{
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  color: activeFor(item.page) ? "var(--amber)" : "var(--bone)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="about" onClick={() => setOpen(false)} className="mono-label link-amber" style={{ color: "var(--bone-dim)" }}>
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="mt-12 md:mt-16">
      <div className="max-w-shell mx-auto px-6 md:px-12">
        <hr className="hairline" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pt-20 pb-16">
          <div className="md:col-span-4">
            <Link to="home" className="link-amber inline-block">
              <Wordmark size={56} />
            </Link>
            <p className="font-display mt-6 max-w-xs" style={{ fontSize: 18, color: "var(--bone-dim)", lineHeight: 1.45, fontWeight: 300 }}>
              A commercial law firm built for the next decade of Indian business.
            </p>
            <div className="flex gap-5 items-center mt-10">
              <a
                href="https://www.linkedin.com/company/lawselor/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
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
              <a
                href="https://www.instagram.com/akvyre_legal"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="Instagram"
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
                  <defs>
                    <radialGradient id="rg-insta-brand" r="150%" cx="30%" cy="107%">
                      <stop stopColor="#fdf497" offset="0%" />
                      <stop stopColor="#fdf497" offset="5%" />
                      <stop stopColor="#fd5949" offset="45%" />
                      <stop stopColor="#d6249f" offset="60%" />
                      <stop stopColor="#285AEB" offset="90%" />
                    </radialGradient>
                  </defs>
                  <rect width="24" height="24" rx="5" fill="url(#rg-insta-brand)" />
                  <rect x="5" y="5" width="14" height="14" rx="3" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="15.5" cy="8.5" r="0.75" fill="#ffffff" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="mono-label mb-5" style={{ color: "var(--bone-dim)" }}>Contact</div>
            <a href="mailto:info@akvyre.com" className="block link-amber mb-2">info@akvyre.com</a>
          </div>

          <div className="md:col-span-2">
            <div className="mono-label mb-5" style={{ color: "var(--bone-dim)" }}>Firm</div>
            <Link to="about" className="block link-amber mb-2">About the firm</Link>
            <Link to="contact" className="block link-amber">Free consultation</Link>
          </div>

          <div className="md:col-span-4">
            <div className="mono-label mb-5" style={{ color: "var(--bone-dim)" }}>Company</div>
            <Link to="about" className="block link-amber mb-2">About Us</Link>
            <Link to="cases" className="block link-amber mb-2">Cases</Link>
            <Link to="blog" className="block link-amber mb-2">Blogs</Link>
            <Link to="contact" className="block link-amber mb-2">Contact</Link>
            <Link to="terms" className="block link-amber mb-2">Terms of Use</Link>
            <Link to="privacy" className="block link-amber mb-2">Privacy Policy</Link>
            <Link to="agritech-checklist" className="block link-amber mb-2">Agritech Compliance Checklist</Link>
            <Link to="posh-checklist" className="block link-amber">POSH Compliance Checklist</Link>
          </div>
        </div>

        <hr className="hairline" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-7">
          <div className="mono-label" style={{ color: "var(--bone-dim)" }}>© 2026 Akvyre · All rights reserved</div>
          <div className="mono-label flex gap-6" style={{ color: "var(--bone-dim)" }}>
            <Link to="disclaimer" className="link-amber">Bar Council Disclaimer</Link>
            <Link to="terms" className="link-amber">Terms of Use</Link>
            <Link to="privacy" className="link-amber">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------- Monogram portrait ----------
function Monogram({ initials, name, ratio = "3 / 4", size = "100%", image }) {
  return (
    <div
      className="monogram"
      style={{ aspectRatio: ratio, width: size }}
      aria-label={`Monogram portrait of ${name}`}
      role="img"
    >
      {image ? (
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            position: "absolute",
            inset: 0,
            zIndex: 1,
          }}
        />
      ) : (
        <span className="glyph">{initials}</span>
      )}
    </div>
  );
}

// ---------- Section label ----------
function SectionLabel({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="mono-label" style={{ color: "var(--bone-dim)" }}>{children}</span>
      <span className="flex-1 h-px" style={{ background: "var(--hairline)" }} />
    </div>
  );
}

// ---------- Disclaimer Modal ----------
function DisclaimerModal({ onClose }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center px-6 py-10 overflow-y-auto"
      style={{ background: "rgba(10,10,11,0.95)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-[640px] w-full my-auto py-6" style={{ background: "transparent" }}>
        <div className="mono-label mb-5" style={{ color: "var(--bone-dim)", fontSize: 11, letterSpacing: "0.22em" }}>DISCLAIMER & CONFIRMATION</div>
        <h2 className="font-display italic mb-6" style={{ fontSize: "clamp(32px, 4vw, 42px)", fontWeight: 300, lineHeight: 1.15, color: "var(--bone)", letterSpacing: "-0.025em" }}>
          Legal Compliance Notice
        </h2>
        
        <div style={{ fontSize: 15, lineHeight: 1.6, color: "var(--bone-dim)" }}>
          <p>
            Under the rules of the Bar Council of India, Law Sellential Solutions (the "Firm") is prohibited from soliciting work or advertising. By clicking, “I AGREE” below, the user acknowledges that:
          </p>
        </div>
        <div 
          className="mt-6 pr-2" 
          style={{ 
            maxHeight: "250px", 
            overflowY: "auto",
            overflowX: "hidden",
            border: "0.5px solid var(--hairline)", 
            borderRadius: "6px", 
            padding: "20px 16px 20px 20px",
            background: "rgba(0, 0, 0, 0.25)"
          }}
        >
          <ol className="space-y-4 pl-0" style={{ listStyle: "none", margin: 0 }}>
            {[
              "There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from the Firm or any of its members to solicit any work or advertise through this website;",
              "The purpose of this website is to provide the user with information about the Firm, its practice areas, its advocates and solicitors;",
              "The user wishes to gain more information about the Firm for his/her own information and personal/ professional use; and",
              "The information about the Firm is provided to the user only on his/her specific request and any information obtained or materials downloaded from this website are completely at the user's volition and any form of transmission, receipt or use of this website would not create any lawyer-client relationship.",
              "This website is not intended to be a source of advertising or solicitation and the contents here of should not be construed as legal advice in any manner whatsoever.",
              "The Firm is not liable for any consequence of any action taken by the user relying on material/ information provided under this website. In cases where the user requires any assistance, he/she must seek independent legal advice.",
              "The content of this website is Intellectual Property of the Firm."
            ].map((text, idx) => (
              <li key={idx} className="flex gap-4 items-start" style={{ fontSize: 14, lineHeight: 1.65 }}>
                <span className="mono-cap shrink-0 font-mono" style={{ color: "#8E8A82", paddingTop: 2, fontSize: 12 }}>
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <span style={{ color: "#EAE5DC" }}>{text}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 pt-6" style={{ borderTop: "0.5px solid var(--hairline)" }}>
          <div className="mono-label" style={{ color: "var(--bone-dim)", fontSize: 11, letterSpacing: "0.15em" }}>Important Legal Documents</div>
          <p className="mt-2" style={{ fontSize: 13, color: "var(--bone-dim)", lineHeight: 1.55 }}>
            Please read and accept our website's <a href="#terms" target="_blank" rel="noopener noreferrer" className="underline link-amber" style={{ color: "var(--bone)" }}>Terms of Use</a> and our <a href="#privacy" target="_blank" rel="noopener noreferrer" className="underline link-amber" style={{ color: "var(--bone)" }}>Privacy Policy</a>.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <button onClick={onClose} className="btn-gold" style={{ outline: "none" }}>
            I AGREE & CONTINUE <span style={{ transition: 'transform 200ms ease', display: 'inline-block' }} className="btn-gold-arrow">→</span>
          </button>
          <a
            href="https://www.google.com"
            className="link-amber font-mono text-xs"
            style={{
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            I Disagree
          </a>
        </div>
      </div>
    </div>
  );
}

// ---------- Page shell (top spacing for fixed nav) ----------
function PageShell({ children }) {
  return <div className="pt-[72px] md:pt-[84px]">{children}</div>;
}

// ---------- Hero block (display headline + eyebrow) ----------
function HeroParticles() {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    
    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.4,
        speedX: Math.random() * 0.15 - 0.075,
        speedY: -(Math.random() * 0.25 + 0.08),
        alpha: Math.random() * 0.45 + 0.15,
        baseAlpha: Math.random() * 0.45 + 0.15
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const mousemove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const mouseleave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    window.addEventListener("mousemove", mousemove);
    document.addEventListener("mouseleave", mouseleave);

    const draw = () => {
      if (canvas.width === 0 || canvas.height === 0) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw cursor spotlight halo
      if (mouse.x > -500 && mouse.y > -500) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 180);
        grad.addColorStop(0, 'rgba(212, 175, 55, 0.045)');
        grad.addColorStop(0.5, 'rgba(212, 175, 55, 0.015)');
        grad.addColorStop(1, 'rgba(212, 175, 55, 0)');
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.fill();
        
        // Mouse interact
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.x += (dx / dist) * force * 1.5;
          p.y += (dy / dist) * force * 1.5;
        }

        p.x += p.speedX;
        p.y += p.speedY;
        
        // Fade in/out slightly to look natural
        p.alpha = p.baseAlpha + Math.sin(Date.now() * 0.001 + p.x) * 0.05;
        if (p.alpha < 0.05) p.alpha = 0.05;
        
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0 || p.x > canvas.width) {
          p.x = Math.random() * canvas.width;
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", mousemove);
      document.removeEventListener("mouseleave", mouseleave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: "absolute", 
        inset: 0, 
        zIndex: 1, 
        pointerEvents: "none", 
        opacity: 0.85 
      }} 
    />
  );
}

function HeroBlock({ eyebrow, headline, sub, ambient = false, italicWord = null, smallHeadline = false, bgImage = null }) {
  const [activeTab, setActiveTab] = React.useState("mandate");
  
  // 3D Parallax Tilt state for the executive widget card (uses theme-aware --widget-shadow)
  const [tiltStyle, setTiltStyle] = React.useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
    boxShadow: "0 20px 40px var(--widget-shadow), 0 0 15px rgba(212, 175, 55, 0.05)",
    backgroundImage: "none",
    transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease, background-image 0.4s ease"
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Smooth 3D rotation based on mouse coordinates relative to card center (max 8 degrees)
    const rotateX = -(y / rect.height) * 8;
    const rotateY = (x / rect.width) * 8;
    
    // Dynamic light reflection highlight center point
    const glowX = (x / rect.width) * 100 + 50;
    const glowY = (y / rect.height) * 100 + 50;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.018)`,
      boxShadow: "0 30px 60px var(--widget-shadow), 0 0 30px rgba(212, 175, 55, 0.08)",
      backgroundImage: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(212, 175, 55, 0.05) 0%, transparent 60%)`,
      transition: "transform 0.1s ease, box-shadow 0.2s ease"
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      boxShadow: "0 20px 40px var(--widget-shadow), 0 0 15px rgba(212, 175, 55, 0.05)",
      backgroundImage: "none",
      transition: "transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.5s ease"
    });
  };

  // Optionally split headline to italicise one word with gold foil metallic shimmer
  const renderHeadline = () => {
    if (!italicWord || typeof headline !== "string") return headline;
    const parts = headline.split(italicWord);
    return (
      <>
        {parts[0]}
        <em className="italic gold-foil-shimmer" style={{ fontStyle: "italic" }}>{italicWord}</em>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--ink)", minHeight: ambient ? "88vh" : "auto" }}>
      <style>{`
        :root {
          --widget-bg: rgba(10, 10, 11, 0.45);
          --widget-border: rgba(212, 175, 55, 0.2);
          --widget-shadow: rgba(0, 0, 0, 0.6);
          --ticker-bg: rgba(10, 10, 11, 0.65);
          --stats-blend: lighten;
        }
        [data-theme="light"] {
          --widget-bg: rgba(255, 255, 255, 0.6);
          --widget-border: rgba(197, 155, 39, 0.25);
          --widget-shadow: rgba(30, 27, 22, 0.08);
          --ticker-bg: rgba(245, 242, 234, 0.72);
          --stats-blend: multiply;
        }
        @keyframes hero-img-drift {
          0% { transform: scale(1.02) translate(0, 0); }
          100% { transform: scale(1.08) translate(-0.5%, -0.5%); }
        }
        @keyframes hero-pulse-glow {
          0% { opacity: 0.15; filter: blur(70px); }
          100% { opacity: 0.28; filter: blur(90px); }
        }
        @keyframes status-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes dot-pulse {
          0% { transform: scale(0.9); opacity: 0.4; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.4; }
        }
        .gold-foil-shimmer {
          background: linear-gradient(120deg, var(--amber) 30%, #FFF5D0 48%, #FFF 50%, #FFF5D0 52%, var(--amber) 70%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: foil-shine 6s linear infinite;
          display: inline-block;
        }
        @keyframes foil-shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .compliance-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(212, 175, 55, 0.025) 1.5px, transparent 1.5px);
          background-size: 36px 36px;
          mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 85%);
          -webkit-mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 85%);
          pointer-events: none;
          z-index: 1;
        }
        .hero-frame-overlay {
          position: absolute;
          inset: 18px;
          border: 0.5px solid rgba(212, 175, 55, 0.05);
          pointer-events: none;
          z-index: 15;
        }
        .hero-frame-corner {
          position: absolute;
          width: 8px;
          height: 8px;
          border: 0.75px solid var(--amber);
          opacity: 0.7;
        }
        .corner-tl { top: -1px; left: -1px; border-right: none; border-bottom: none; }
        .corner-tr { top: -1px; right: -1px; border-left: none; border-bottom: none; }
        .corner-bl { bottom: -1px; left: -1px; border-right: none; border-top: none; }
        .corner-br { bottom: -1px; right: -1px; border-left: none; border-top: none; }
      `}</style>

      {bgImage && (
        <div
          className="hero-bg-container"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <img
            src={bgImage}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 40%",
              opacity: "var(--hero-bg-opacity, 0.25)",
              filter: "var(--hero-bg-filter, brightness(0.5) contrast(1.1))",
              animation: "hero-img-drift 30s ease-in-out infinite alternate"
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at 50% 50%, var(--hero-vignette-start, rgba(10, 10, 11, 0.1)) 0%, var(--hero-vignette-mid, rgba(10, 10, 11, 0.8)) 75%, var(--ink) 100%)",
            }}
          />
        </div>
      )}
      
      {ambient && <div className="compliance-grid-overlay" />}
      
      {ambient && (
        <div className="hero-frame-overlay">
          <div className="hero-frame-corner corner-tl" />
          <div className="hero-frame-corner corner-tr" />
          <div className="hero-frame-corner corner-bl" />
          <div className="hero-frame-corner corner-br" />
        </div>
      )}

      {ambient && <HeroParticles />}

      {ambient && (
        <div 
          className="ambient-glow" 
          style={{
            position: "absolute",
            right: "15%",
            top: "10%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0) 70%)",
            zIndex: 0,
            pointerEvents: "none",
            animation: "hero-pulse-glow 8s ease-in-out infinite alternate"
          }} 
          aria-hidden="true" 
        />
      )}

      <div className={`max-w-shell mx-auto px-6 md:px-12 relative z-10 pt-32 md:pt-40 ${ambient ? "pb-36 md:pb-48" : "pb-16 md:pb-24"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {eyebrow && (
              <div className="hero-in-eyebrow mono-label mb-8 md:mb-10" style={{ color: "var(--bone-dim)" }}>
                {eyebrow}
              </div>
            )}
            <h1
              className="hero-in-head font-display"
              style={{
                fontSize: smallHeadline ? "clamp(28px, 5vw, 64px)" : "clamp(34px, 6.2vw, 92px)",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                lineHeight: 1.06,
                color: "var(--bone)",
                textWrap: "balance",
              }}
            >
              {renderHeadline()}
            </h1>
            {sub && (
              <p className="hero-in-body mt-8 max-w-xl" style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--bone-dim)", fontWeight: 300 }}>
                {sub}
              </p>
            )}

            {/* Premium CTA Buttons */}
            {ambient && (
              <div className="hero-ctas mt-10 flex flex-wrap gap-4 items-center">
                <button 
                  type="button"
                  onClick={() => {
                    if (window.openCalendly) window.openCalendly();
                  }}
                  className="btn-gold-filled"
                >
                  Schedule Consultation <span style={{ transition: 'transform 200ms ease', display: 'inline-block' }} className="btn-gold-arrow">→</span>
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    const el = document.querySelector(".cases-container");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "transparent",
                    color: "var(--bone)",
                    padding: "12px 28px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    borderRadius: "3px",
                    transition: "all 220ms ease",
                    border: "1px solid var(--hairline)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                    cursor: "pointer",
                    lineHeight: "1.2",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "var(--amber)";
                    e.currentTarget.style.color = "var(--amber)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(212, 175, 55, 0.08)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "var(--hairline)";
                    e.currentTarget.style.color = "var(--bone)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.05)";
                  }}
                >
                  Active Mandates
                </button>
              </div>
            )}

          </div>

          {/* Right Column: Premium Dashboard Widget */}
          {ambient && (
            <div className="hidden lg:block lg:col-span-5 relative z-20">
              <div 
                style={{
                  background: "var(--widget-bg)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "0.5px solid var(--widget-border)",
                  borderRadius: "4px",
                  padding: "30px",
                  ...tiltStyle
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Tabs */}
                <div className="flex border-b border-[var(--hairline)] pb-3 mb-5 gap-6">
                  <button 
                    type="button" 
                    onClick={() => setActiveTab("mandate")}
                    className="mono-label focus:outline-none"
                    style={{ 
                      fontSize: "10.5px", 
                      letterSpacing: "0.1em",
                      color: activeTab === "mandate" ? "var(--amber)" : "var(--bone-dim)",
                      borderBottom: activeTab === "mandate" ? "1px solid var(--amber)" : "none",
                      paddingBottom: "4px"
                    }}
                  >
                    ✦ Active Mandate
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setActiveTab("sectors")}
                    className="mono-label focus:outline-none"
                    style={{ 
                      fontSize: "10.5px", 
                      letterSpacing: "0.1em",
                      color: activeTab === "sectors" ? "var(--amber)" : "var(--bone-dim)",
                      borderBottom: activeTab === "sectors" ? "1px solid var(--amber)" : "none",
                      paddingBottom: "4px"
                    }}
                  >
                    ✦ Sector Focus
                  </button>
                </div>

                {/* Tab content 1: Mandates Stepper */}
                {activeTab === "mandate" && (
                  <div>
                    <h3 className="font-display mb-2" style={{ fontSize: "21px", fontWeight: 300, lineHeight: 1.25, color: "var(--bone)" }}>Agritech Unicorn Merger</h3>
                    <p style={{ fontSize: "13.5px", color: "var(--bone-dim)", lineHeight: 1.55, fontWeight: 300, marginBottom: "20px" }}>
                      Structural regulatory compliance and transaction strategy for premier national AgTech aggregates.
                    </p>
                    
                    {/* Stepper block */}
                    <div className="flex flex-col gap-4 mt-4 pl-1 border-l border-[rgba(212,175,55,0.15)] ml-1">
                      <div className="flex items-center gap-3 relative">
                        <span className="absolute -left-[9.5px] w-[9px] h-[9px] rounded-full" style={{ background: "var(--amber)" }} />
                        <span className="mono-label text-[10px] pl-3" style={{ color: "var(--bone)", fontSize: "11px" }}>01. Regulatory Audit <span style={{ color: "var(--amber)", marginLeft: "4px" }}>✔</span></span>
                      </div>
                      <div className="flex items-center gap-3 relative">
                        <span className="absolute -left-[9.5px] w-[9px] h-[9px] rounded-full" 
                          style={{ 
                            background: "var(--amber)",
                            boxShadow: "0 0 8px var(--amber)",
                            animation: "dot-pulse 1.8s infinite"
                          }} 
                        />
                        <span className="mono-label text-[10px] pl-3" style={{ color: "var(--amber)", fontSize: "11px", fontWeight: 500 }}>02. Schema Approval <span style={{ color: "var(--amber)", fontSize: "9px", verticalAlign: "middle" }}>● LIVE</span></span>
                      </div>
                      <div className="flex items-center gap-3 relative">
                        <span className="absolute -left-[9.5px] w-[9px] h-[9px] rounded-full bg-[var(--bone-faint)]" />
                        <span className="mono-label text-[10px] pl-3" style={{ color: "var(--bone-dim)", fontSize: "11px" }}>03. Execution Sanctions</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[var(--hairline)] flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2 overflow-hidden select-none">
                          <img className="inline-block h-6 w-6 rounded-full ring-1 ring-[rgba(212,175,55,0.3)] object-cover object-top" src="assets/vaayu_goyal.jpg" alt="Vaayu Goyal" />
                          <img className="inline-block h-6 w-6 rounded-full ring-1 ring-[rgba(212,175,55,0.3)] object-cover object-top" src="assets/akshay_tyagi.jpg" alt="Akshay Tyagi" />
                        </div>
                        <span className="mono-label" style={{ fontSize: "9px", color: "var(--bone-dim)" }}>PARTNERS IN CHARGE</span>
                      </div>
                      <span style={{ fontSize: "10.5px", color: "var(--amber)", fontWeight: 500 }}>V. GOYAL · A. TYAGI</span>
                    </div>
                  </div>
                )}
 
                {/* Tab content 2: Sector focus */}
                {activeTab === "sectors" && (
                  <div className="flex flex-col gap-4">
                    <div className="group border-b border-[var(--hairline)] pb-2">
                      <div className="mono-label" style={{ color: "var(--amber)", fontSize: "10px" }}>01 · FINANCIAL COMPLIANCE</div>
                      <div style={{ fontSize: "13px", color: "var(--bone)", marginTop: "2px", fontWeight: 300 }}>Risk governance matrices & regulatory filings.</div>
                    </div>
                    <div className="group border-b border-[var(--hairline)] pb-2">
                      <div className="mono-label" style={{ color: "var(--amber)", fontSize: "10px" }}>02 · SAAS PLATFORMS & IPR</div>
                      <div style={{ fontSize: "13px", color: "var(--bone)", marginTop: "2px", fontWeight: 300 }}>Cross-border licensing & global data privacy policies.</div>
                    </div>
                    <div className="group">
                      <div className="mono-label" style={{ color: "var(--amber)", fontSize: "10px" }}>03 · ARBITRATION & MATTERS</div>
                      <div style={{ fontSize: "13px", color: "var(--bone)", marginTop: "2px", fontWeight: 300 }}>High-stake corporate recovery and fast dispute resolution.</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
 
        </div>
      </div>
 
      {/* stats_bar.png floating performance overlay */}
      {ambient && (
        <div 
          className="hidden xl:block absolute left-24 bottom-24 z-20 select-none"
          style={{
            background: "var(--widget-bg)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "0.5px solid var(--widget-border)",
            borderRadius: "3px",
            padding: "10px",
            boxShadow: "0 10px 30px var(--widget-shadow)",
            transition: "transform 0.3s ease"
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; }}
        >
          <div className="mono-label mb-1.5" style={{ color: "var(--amber)", fontSize: "8.5px", letterSpacing: "0.08em" }}>✦ FIRM PERFORMANCE</div>
          <img 
            src="assets/stats_bar.png" 
            alt="Performance Statistics" 
            style={{
              height: "44px",
              opacity: 0.9,
              mixBlendMode: "var(--stats-blend)"
            }}
          />
        </div>
      )}

      {/* Firm Identity Strip — full-width cinematic bottom overlay */}
      {ambient && (
        <div
          className="absolute bottom-0 left-0 right-0 z-20 hidden lg:flex items-stretch"
          style={{
            background: "var(--widget-bg)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            borderTop: "0.5px solid var(--widget-border)",
            animation: "hero-in-body 0.9s ease both",
            animationDelay: "0.7s"
          }}
        >
          {/* Left: firm data cells */}
          <div className="flex items-stretch flex-1">
            {[
              { label: "Firm", value: "Akvyre Legal LLP" },
              { label: "Offices", value: "Delhi · Haryana" },
              { label: "Founded", value: "2024" },
            ].map((item, i) => (
              <div
                key={item.label}
                style={{
                  padding: "13px 28px",
                  borderRight: "0.5px solid var(--widget-border)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "2px",
                }}
              >
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "7.5px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--amber)",
                  fontWeight: 500,
                }}>
                  {item.label}
                </span>
                <span style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "var(--bone)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                  whiteSpace: "nowrap",
                }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Right: subtle tagline */}
          <div
            style={{
              padding: "13px 28px",
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "8.5px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--bone-dim)",
            }}>
              ✦ Senior Counsel · Every Matter
            </span>
          </div>
        </div>
      )}

    </section>
  );
}

// Expose globally to other Babel scripts
Object.assign(window, {
  nav, Link, Wordmark, Reveal, Nav, Footer, Monogram, SectionLabel,
  DisclaimerModal, PageShell, HeroBlock,
});
