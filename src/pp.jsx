// pp.jsx
import React, { useState } from "react";
import "./portfolio.css";

const aboutTags = [
  { icon: "⚛️", label: "Frontend", value: "React.js / JavaScript / HTML / CSS" },
  { icon: "⚙️", label: "Backend", value: "PHP / Laravel / MySQL" },
  { icon: "📱", label: "Mobile", value: "Flutter / Dart / Kotlin" },
  { icon: "🛒", label: "CMS & Tools", value: "PrestaShop / WordPress / Canva" },
];

const services = [
  {
    icon: "🛒",
    title: "PrestaShop Development",
    desc: "Custom modules and theme customization for PrestaShop stores — from backend logic to smooth back-office integration.",
  },
  {
    icon: "🖥️",
    title: "Web Development",
    desc: "Modern, responsive websites and full-stack web apps built with React, Laravel, MySQL and clean, maintainable code.",
  },
  {
    icon: "📱",
    title: "Mobile Development",
    desc: "Cross-platform mobile apps with Flutter and native Android apps with Kotlin, published-ready and user-friendly.",
  },
  {
    icon: "🎨",
    title: "Branding & Design",
    desc: "Logo design, business cards and WordPress sites that make brands look professional and memorable.",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const filters = ["All", "Web Design", "Web App", "Branding"];

  const projects = [
    {
      category: "Web Design",
      icon: "🌐",
      title: "Modern Business Bareface",
      subtitle: "WordPress Business Website",
      description:
        "A complete business website built from scratch on WordPress for a local company. I designed and developed a custom theme, integrated an online booking system with availability management, and added a blog with an easy-to-use admin panel. The site is fully responsive, SEO-friendly and optimized for fast loading — turning visitors into real bookings.",
      tech: ["WordPress", "PHP", "CSS", "JavaScript"],
    },
    {
      category: "Web App",
      icon: "📊",
      title: "Public Procurement Management",
      subtitle: "Full-Stack Web Application",
      description:
        "A complete platform that digitizes the management of public contracts and tenders. I built a secure back office with role-based access (administrators, buyers, suppliers), tender publishing and application workflows, automated notifications, document management, and an analytics dashboard with real-time statistics. Developed with React on the front, a Laravel REST API on the back, and a MySQL database.",
      tech: ["React.js", "Laravel", "REST API", "MySQL"],
    },
    {
      category: "Branding",
      icon: "✒️",
      title: "Brand Identity Projects",
      subtitle: "Logo & Visual Identity Design",
      description:
        "A collection of brand identities created for tech and eco-friendly businesses. Highlights include Lian Tech, a modern and versatile identity for a store selling phones, laptops and accessories; EcoLife, a nature-inspired design for a sustainable products brand; and NovaTech, a clean corporate identity for an innovative startup. Each project covers logo design, color palette and brand guidelines.",
      tech: ["Logo Design", "Brand Identity", "Canva"],
    },
  ];

  const visibleProjects = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Portfolio Inquiry from ${name}`;
    const body = `Hello Lina,\n\n${message}\n\nFrom: ${name} (${email})`;
    window.open(
      `mailto:djadilina56@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
  };

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">Lina<span>.</span></h2>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About</a></li>
            <li><a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Services</a></li>
            <li><a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>Portfolio</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a></li>
          </ul>
          <button className="btn btn-primary nav-cta" onClick={() => scrollToSection("contact")}>
            Let's Talk
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero-section">
        <div className="section-container hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Lina</span>
            </h1>
            <h1 className="hero-title gradient-text">Full Stack Developer</h1>
            <p className="hero-description">
              Full Stack Developer specializing in PHP, PrestaShop modules, Laravel, React.js
              and Flutter. I build modern web platforms, custom e-commerce modules and mobile
              apps — with clean code, intuitive interfaces and a focus on real business needs.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection("projects")}>
                View My Work →
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection("contact")}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-blob blob-1"></div>
            <div className="hero-blob blob-2"></div>
            <div className="hero-card">
              <span className="hero-card-icon">👩‍💻</span>
              <p className="hero-card-text">Code Creates<br />Value</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="section-container about-grid">
          <div className="about-visual">
            <div className="about-card">
              <span className="about-card-icon">🖥️</span>
              <p className="about-card-text">Good Code<br />Good Mood</p>
              <span className="about-play">▶</span>
            </div>
          </div>
          <div className="about-content">
            <span className="badge-pill">About Me</span>
            <h2 className="section-title left">Turning Ideas Into Working Products</h2>
            <p className="section-subtitle left">
              I'm a full stack developer who enjoys building complete digital products — from
              PrestaShop modules and Laravel back offices to React interfaces and Flutter mobile
              apps. I care about clean architecture, meaningful details and solutions that are
              easy for real users to love.
            </p>
            <div className="about-tags">
              {aboutTags.map((t, i) => (
                <div className="about-tag" key={i}>
                  <span className="about-tag-icon">{t.icon}</span>
                  <div>
                    <small>{t.label}</small>
                    <strong>{t.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services-section">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <span className="badge-pill">My Services</span>
              <h2 className="section-title left">What I Do</h2>
              <p className="section-subtitle left">
                I offer a range of creative and technical services to help your brand look great and work better.
              </p>
            </div>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <span className="badge-pill">My Portfolio</span>
              <h2 className="section-title left">My Recent Projects</h2>
              <p className="section-subtitle left">
                Here are some of my latest works. Each project is a unique story of creativity and purpose.
              </p>
            </div>
            <div className="filter-tabs">
              {filters.map((f) => (
                <button
                  key={f}
                  className={`filter-tab ${activeFilter === f ? "active" : ""}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {visibleProjects.map((p, i) => (
              <div className="project-card" key={i}>
                <div className="project-banner">
                  <span className="project-banner-icon">{p.icon}</span>
                  <span className="project-category-tag">{p.category}</span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-subtitle">{p.subtitle}</p>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-tech">
                    {p.tech.map((tag, j) => (
                      <span key={j} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="section-container contact-grid">
          <div className="contact-info">
            <span className="badge-pill">Get In Touch</span>
            <h2 className="section-title left">Let's Work Together</h2>
            <p className="section-subtitle left">
              Have a project in mind or just want to say hello? Feel free to reach out — I'd love to hear from you.
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div><small>Email</small><p>djadilina56@gmail.com</p></div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <div>
                  <small>LinkedIn</small>
                  <a href="https://www.linkedin.com/in/lina-djadi-257b2a2a6/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    Connect on LinkedIn →
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div><small>Location</small><p>Available for remote work</p></div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleFormSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFormChange} required />
            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleFormChange} required />
            <button type="submit" className="btn btn-primary">Send Message →</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container footer-grid">
          <div>
            <h2 className="logo">Lina<span>.</span></h2>
            <p className="footer-tag">Design • Code • Inspire</p>
          </div>
          <div className="footer-links">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}>Services</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>Portfolio</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a>
          </div>
          <a href="https://www.linkedin.com/in/lina-djadi-257b2a2a6/" target="_blank" rel="noopener noreferrer" className="footer-social">in</a>
        </div>
        <div className="footer-bottom">
          {/* <p>© 2026 Lina. All rights reserved.</p> */}
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;