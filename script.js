/* ===== RESET ===== */
* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --black: #0d0d0d;
  --white: #ffffff;
  --grey: #f7f7f7;
  --muted: #6b6b6b;
  --border: #e8e8e8;
  --radius: 16px;
}

html { scroll-behavior: smooth; }

/* ✅ Amharic + English font stack */
body {
  font-family: 'Noto Sans Ethiopic', 'Inter', -apple-system, 
               BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  color: var(--black);
  background: var(--white);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }

.container { max-width: 1140px; margin: 0 auto; padding: 0 20px; }

/* ===== HEADER ===== */
.header {
  position: sticky; top: 0; z-index: 100;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}
.nav-wrap {
  display: flex; align-items: center; justify-content: space-between;
  height: 68px;
}
.logo { display: flex; align-items: center; gap: 10px; font-weight: 800; }
.logo-mark { border-radius: 10px; flex-shrink: 0; }
.logo-text { 
  font-size: 1.1rem; 
  letter-spacing: -0.3px;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
}

.nav { display: flex; gap: 26px; align-items: center; }
.nav a { 
  font-weight: 500; 
  font-size: 0.92rem; 
  transition: opacity .2s;
  font-family: 'Noto Sans Ethiopic', 'Inter', sans-serif;
}
.nav a:hover { opacity: .55; }
.nav-cta {
  background: var(--black) !important;
  color: var(--white) !important;
  padding: 8px 18px;
  border-radius: 100px;
  font-weight: 600 !important;
  font-size: 0.88rem !important;
  transition: transform .2s !important;
}
.nav-cta:hover { transform: translateY(-1px); opacity: 1 !important; }

/* ===== HAMBURGER (compact) ===== */
.menu-btn {
  display: none;
  background: none; border: none;
  cursor: pointer;
  width: 40px; height: 40px;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  border-radius: 10px;
}
.menu-btn span {
  display: block;
  height: 2px;
  background: var(--black);
  border-radius: 2px;
  transition: transform .25s, opacity .25s;
}
.menu-btn span:nth-child(1) { width: 22px; }
.menu-btn span:nth-child(2) { width: 16px; }
.menu-btn span:nth-child(3) { width: 22px; }

.menu-btn.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); width: 22px; }
.menu-btn.active span:nth-child(2) { opacity: 0; }
.menu-btn.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); width: 22px; }

/* ===== HERO ===== */
.hero { 
  position: relative;
  padding: 80px 0 90px; 
  background: linear-gradient(180deg, #f7f7f7 0%, #ffffff 100%);
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  top: -200px; right: -200px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(0,0,0,0.05) 0%, transparent 70%);
  pointer-events: none;
}
.hero-grid {
  display: grid; 
  grid-template-columns: 1.05fr 1fr;
  gap: 60px; 
  align-items: center;
  position: relative;
  z-index: 1;
}
.tag {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 14px;
  background: var(--white); 
  color: var(--black);
  border: 1px solid var(--border);
  border-radius: 100px; 
  font-size: 0.8rem; 
  font-weight: 600;
  margin-bottom: 22px;
  font-family: 'Inter', sans-serif;
}
.tag .dot {
  width: 6px; height: 6px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 3.4rem);
  line-height: 1.15; 
  font-weight: 900; 
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}
.hero h1 .accent { 
  color: var(--muted); 
  font-weight: 700;
}
.hero p { 
  color: var(--muted); 
  font-size: 1.05rem; 
  margin-bottom: 32px; 
  max-width: 520px; 
}
.hero-btns { 
  display: flex; 
  gap: 12px; 
  flex-wrap: wrap; 
  margin-bottom: 40px;
}

.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 14px 26px; 
  border-radius: 100px;
  font-weight: 600; 
  font-size: 0.95rem; 
  cursor: pointer;
  border: 2px solid transparent; 
  transition: all .25s;
  font-family: 'Inter', 'Noto Sans Ethiopic', sans-serif;
  white-space: nowrap;
}
.btn-primary { background: var(--black); color: var(--white); }
.btn-primary:hover { 
  background: #222; 
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}
.btn-ghost { 
  background: transparent; 
  color: var(--black); 
  border-color: var(--border); 
}
.btn-ghost:hover { 
  background: var(--black); 
  color: var(--white); 
  border-color: var(--black);
}
.btn-full { width: 100%; }

/* Hero stats */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}
.hero-stats > div:not(.divider) {
  display: flex; flex-direction: column;
}
.hero-stats strong {
  font-size: 1.3rem;
  font-weight: 800;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.5px;
}
.hero-stats span {
  font-size: 0.78rem;
  color: var(--muted);
  font-weight: 500;
}
.hero-stats .divider {
  width: 1px; height: 32px;
  background: var(--border);
}

/* Hero image */
.hero-img { position: relative; }
.hero-img-wrap {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 30px 60px -20px rgba(0,0,0,0.25);
  aspect-ratio: 4/5;
  background: #f0f0f0;
}
.hero-img-wrap img {
  width: 100%; height: 100%; 
  object-fit: cover;
  transition: transform .6s;
}
.hero-img-wrap:hover img { transform: scale(1.04); }

.floating-badge {
  position: absolute;
  bottom: 24px; left: -20px;
  background: var(--white);
  padding: 12px 18px;
  border-radius: 14px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.12);
  display: flex; align-items: center; gap: 12px;
  animation: float 3s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.badge-icon {
  width: 32px; height: 32px;
  background: #22c55e;
  color: white;
  border-radius: 50%;
  display: grid; place-items: center;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
}
.floating-badge strong {
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
}
.floating-badge small {
  display: block;
  font-size: 0.72rem;
  color: var(--muted);
}

/* ===== SECTIONS ===== */
.section { padding: 90px 0; }
.section-alt { background: var(--grey); }

.section-head { 
  text-align: center; 
  margin-bottom: 56px; 
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}
.section-tag {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 10px;
}
.section-head h2 { 
  font-size: clamp(1.7rem, 4vw, 2.4rem); 
  margin-bottom: 12px; 
  font-weight: 800;
  letter-spacing: -0.02em;
  font-family: 'Inter', sans-serif;
}
.section-head p { color: var(--muted); font-size: 1rem; }

/* ===== PRODUCTS ===== */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 26px;
}
.product-card {
  background: var(--white); 
  border: 1px solid var(--border);
  border-radius: 20px; 
  overflow: hidden;
  transition: transform .3s, box-shadow .3s, border-color .3s;
  display: flex; flex-direction: column;
}
.product-card:hover { 
  transform: translateY(-6px); 
  box-shadow: 0 20px 45px -15px rgba(0,0,0,0.15);
  border-color: transparent;
}

/* ✅ Product image: smaller, controlled */
.product-img {
  aspect-ratio: 4/5;
  background: #f7f7f7;
  overflow: hidden;
  position: relative;
}
.product-img img { 
  width: 100%; height: 100%; 
  object-fit: cover;
  transition: transform .5s;
}
.product-card:hover .product-img img { transform: scale(1.05); }

.product-body { 
  padding: 20px; 
  display: flex; flex-direction: column; 
  gap: 10px; 
  flex: 1; 
}
.product-body h3 { 
  font-size: 1.1rem; 
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.3px;
}
.price { 
  font-size: 1.2rem; 
  font-weight: 800; 
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.5px;
}

.meta { 
  display: flex; flex-wrap: wrap; gap: 6px; 
  font-size: 0.82rem; 
  color: var(--muted); 
  margin-bottom: 6px;
}
.chip {
  padding: 4px 10px; 
  background: var(--grey);
  border-radius: 100px; 
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
}

.order-btn {
  margin-top: auto; 
  width: 100%; 
  text-align: center;
  background: var(--black); 
  color: var(--white);
  padding: 12px; 
  border-radius: 100px; 
  font-weight: 600;
  cursor: pointer; 
  border: none; 
  transition: all .25s;
  font-size: 0.92rem; 
  font-family: 'Inter', 'Noto Sans Ethiopic', sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.order-btn:hover { 
  background: #222; 
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

/* ===== ABOUT ===== */
.about-grid {
  display: grid; 
  grid-template-columns: 1.1fr 1fr;
  gap: 60px; 
  align-items: center;
}
.about-text h2 { 
  font-size: clamp(1.7rem, 4vw, 2.3rem); 
  margin-bottom: 16px; 
  font-weight: 800;
  letter-spacing: -0.02em;
  font-family: 'Inter', sans-serif;
}
.about-text p { 
  color: var(--muted); 
  margin-bottom: 32px; 
  font-size: 1rem;
  max-width: 520px;
}

.why-list { 
  display: grid; 
  gap: 16px;
}
.why-list li {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 14px 16px;
  background: var(--white);
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: transform .2s;
}
.why-list li:hover { transform: translateX(4px); }
.why-icon {
  width: 28px; height: 28px;
  background: var(--black);
  color: var(--white);
  border-radius: 50%;
  display: grid; place-items: center;
  font-size: 0.8rem;
  flex-shrink: 0;
}
.why-list strong {
  display: block;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: 'Inter', 'Noto Sans Ethiopic', sans-serif;
}
.why-list small {
  display: block;
  font-size: 0.82rem;
  color: var(--muted);
}

.about-img { position: relative; }
.about-img img {
  border-radius: 20px;
  aspect-ratio: 4/5;
  object-fit: cover;
  width: 100%;
  box-shadow: 0 25px 50px -20px rgba(0,0,0,0.2);
}
.about-img-accent {
  position: absolute;
  top: -20px; right: -20px;
  width: 100px; height: 100px;
  background: var(--black);
  border-radius: 20px;
  z-index: -1;
}

/* ===== CONTACT ===== */
.contact-grid {
  display: grid; 
  grid-template-columns: 1fr 1.3fr; 
  gap: 40px;
  align-items: start;
}
.contact-info { 
  display: flex; flex-direction: column; 
  gap: 14px; 
}
.info-item { 
  display: flex; gap: 14px; 
  align-items: flex-start;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid var(--border);
  transition: all .2s;
}
.info-item:hover {
  border-color: var(--black);
  transform: translateY(-2px);
}
a.info-item:hover { cursor: pointer; }
.info-icon { 
  font-size: 1.3rem;
  flex-shrink: 0;
  width: 40px; height: 40px;
  display: grid; place-items: center;
  background: var(--grey);
  border-radius: 10px;
}
.info-item h4 { 
  font-size: 0.75rem; 
  text-transform: uppercase; 
  color: var(--muted); 
  letter-spacing: .8px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  margin-bottom: 2px;
}
.info-item p { 
  font-weight: 600; 
  font-size: 0.98rem;
}

.map-wrap iframe {
  width: 100%; height: 400px; border: 0;
  border-radius: 20px; 
  box-shadow: 0 15px 40px -15px rgba(0,0,0,0.15);
  filter: grayscale(20%);
}

/* ===== FOOTER ===== */
.footer { 
  background: var(--black); 
  color: var(--white); 
  padding: 70px 0 24px; 
}
.footer-grid {
  display: grid; 
  grid-template-columns: 2fr 1fr 1fr;
  gap: 50px; 
  padding-bottom: 40px;
}
.footer-logo { 
  display: flex; align-items: center; gap: 12px; 
  margin-bottom: 16px; 
}
.footer h3 { 
  font-size: 1.2rem; 
  font-weight: 800;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.3px;
}
.footer h4 { 
  margin-bottom: 16px; 
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #999;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
}
.footer-desc { 
  color: #aaa; 
  font-size: 0.92rem; 
  max-width: 320px;
  line-height: 1.7;
}
.footer a { 
  display: block; 
  color: #ccc; 
  font-size: 0.92rem; 
  padding: 6px 0; 
  transition: color .2s, transform .2s;
}
.footer a:hover { 
  color: var(--white); 
  transform: translateX(3px);
}
.copyright {
  text-align: center; 
  padding-top: 24px;
  border-top: 1px solid #1f1f1f; 
  color: #666; 
  font-size: 0.82rem;
  font-family: 'Inter', 'Noto Sans Ethiopic', sans-serif;
}

/* ===== MOBILE ===== */
@media (max-width: 900px) {
  /* ✅ Compact mobile menu */
  .nav {
    position: fixed; 
    top: 68px; left: 0; right: 0;
    background: var(--white); 
    flex-direction: column;
    padding: 16px 20px 20px; 
    gap: 4px;
    border-bottom: 1px solid var(--border);
    box-shadow: 0 12px 30px -10px rgba(0,0,0,0.1);
    transform: translateY(-110%);
    transition: transform .3s ease;
    max-height: calc(100vh - 68px);
    overflow-y: auto;
  }
  .nav.open { transform: translateY(0); }
  .nav a { 
    padding: 12px 14px; 
    border-radius: 10px;
    font-size: 0.95rem;
    width: 100%;
  }
  .nav a:hover { background: var(--grey); opacity: 1; }
  .nav-cta {
    margin-top: 8px;
    text-align: center;
    padding: 12px 18px !important;
  }

  .menu-btn { display: flex; }

  .hero-grid, .about-grid, .contact-grid, .footer-grid {
    grid-template-columns: 1fr;
  }
  .hero { padding: 40px 0 60px; }
  .section { padding: 60px 0; }
  .hero-img { order: -1; }
  .hero-img-wrap { aspect-ratio: 1/1; }
  .floating-badge { left: 12px; bottom: 12px; }
  .about-img-accent { display: none; }
  .map-wrap iframe { height: 300px; }
  .footer-grid { gap: 32px; }
  .hero-stats { gap: 16px; }
  .hero-stats strong { font-size: 1.1rem; }
}

@media (max-width: 480px) {
  .container { padding: 0 16px; }
  .hero h1 { font-size: 1.9rem; }
  .hero-btns { flex-direction: column; align-items: stretch; }
  .hero-btns .btn { width: 100%; }
  .product-grid { grid-template-columns: 1fr; }
  .hero-stats { flex-wrap: wrap; gap: 12px; }
  .hero-stats .divider { display: none; }
      }
