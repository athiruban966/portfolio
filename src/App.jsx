import { useState } from "react";

const SKILLS = [
  { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design"] },
  { category: "Backend", items: ["Core Java", "OOP", "JDBC", "Exception Handling", "Collections","Spring Boot"] },
  { category: "Database", items: ["MySQL", "SQL Joins", "CRUD", "RDBMS", "MySQL Workbench"] },
  { category: "Tools", items: ["VS Code", "Git", "GitHub", "Chrome DevTools", "MS Office"] },
];

const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    type: "Frontend",
    desc: "A fully responsive portfolio built with a mobile-first approach, smooth transitions, and clean UI using vanilla JavaScript.",
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "React Task Manager App",
    type: "Frontend",
    desc: "A task management app built with React Hooks. Supports task creation, editing, deletion with real-time state updates.",
    tech: ["React", "Hooks", "Tailwind CSS"],
  },
  {
    title: "Food Delivery System Backend",
    type: "Full Stack Web Application",
    desc: "A web application that allows users to order food online, manage orders, and view restaurant menus with secure and efficient backend processing.",
    tech: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Bookstore Management System",
    type: "Full Stack Web Application",
    desc: "A web-based application that allows users to manage books by adding, viewing, updating, and deleting book details with efficient backend processing.",
    tech: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
   title: "Hospital Management System",
    type: "Database",
    desc: "A relational database project for managing patients, doctors, and appointments using normalized tables and SQL.",
    tech: ["MySQL", "SQL", "RDBMS"],
  },
];

const EDUCATION = [
  {
    year: "2022 – 2025",
    title: "Bachelor of Computer Applications (BCA)",
    place: "EGS Pillay Arts & Science College — Bharathidasan University",
    note: "CGPA: 7.4",
  },
  {
    year: "2022",
    title: "Higher Secondary Certificate (HSC)",
    place: "Veludayar Higher Secondary School, Thiruvarur",
    note: null,
  },
  {
    year: "2020",
    title: "Secondary School Leaving Certificate (SSLC)",
    place: "Veludayar Higher Secondary School, Thiruvarur",
    note: null,
  },
];

const CERTS = [
  "Frontend Web Development — Besant Technologies",
  "React JS — Besant Technologies",
  "Java Programming — Besant Technologies",
  "MySQL Fundamentals — Besant Technologies",
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#111", color: "#e2e2e2", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; }
        .nav-link { color: #999; font-size: 0.875rem; font-weight: 500; transition: color 0.2s; }
        .nav-link:hover { color: #fff; }
        .card { background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 10px; padding: 1.4rem; transition: border-color 0.2s; }
        .card:hover { border-color: #3b82f6; }
        .tag { background: #222; color: #999; font-size: 0.7rem; padding: 0.2rem 0.6rem; border-radius: 5px; font-weight: 500; }
        .btn-primary { background: #3b82f6; color: #fff; padding: 0.7rem 1.8rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; transition: background 0.2s, transform 0.15s; display: inline-block; }
        .btn-primary:hover { background: #2563eb; transform: translateY(-1px); }
        .btn-outline { border: 1px solid #333; color: #ccc; padding: 0.7rem 1.8rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; transition: all 0.2s; display: inline-block; }
        .btn-outline:hover { border-color: #3b82f6; color: #3b82f6; transform: translateY(-1px); }
        .divider { max-width: 960px; margin: 0 auto; height: 1px; background: #222; }
        .contact-row { display: flex; align-items: center; gap: 0.6rem; color: #999; font-size: 0.875rem; transition: color 0.2s; }
        .contact-row:hover { color: #3b82f6; }
        @media (max-width: 640px) {
          .two-col { grid-template-columns: 1fr !important; }
          .hero-btns { flex-direction: column !important; }
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(17,17,17,0.96)", borderBottom: "1px solid #222", backdropFilter: "blur(12px)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 1.5rem", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontWeight: 700, fontSize: "1rem", color: "#fff", letterSpacing: "-0.01em" }}>
            Athiruban <span style={{ color: "#3b82f6" }}>S.</span>
          </span>
          <div className="nav-desktop" style={{ display: "flex", gap: "2rem" }}>
            {["About", "Skills", "Projects", "Education", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
            ))}
          </div>
          <button
            className="nav-mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: "none", background: "none", border: "none", color: "#999", cursor: "pointer", fontSize: "1.2rem" }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div style={{ borderTop: "1px solid #222", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem", background: "#111" }}>
            {["About", "Skills", "Projects", "Education", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link" onClick={() => setMenuOpen(false)}>{l}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "5rem 1.5rem 4rem" }}>
        <p style={{ color: "#3b82f6", fontSize: "0.85rem", fontWeight: 600, marginBottom: "1rem", letterSpacing: "0.04em" }}>
          Hi, I'm
        </p>
        <h1 style={{ fontSize: "clamp(2.2rem,6vw,3.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
          Athiruban S
        </h1>
        <h2 style={{ fontSize: "clamp(1rem,2.5vw,1.25rem)", fontWeight: 400, color: "#777", marginBottom: "1.5rem" }}>
          Frontend Developer &amp; Backend Enthusiast
        </h2>
        <p style={{ color: "#888", lineHeight: 1.85, maxWidth: 500, fontSize: "0.925rem", marginBottom: "2.5rem" }}>
          I build clean, responsive web apps — pixel-perfect UIs with React and Tailwind, paired with solid backends using Java and MySQL. Currently open to entry-level developer roles.
        </p>
        <div className="hero-btns" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
        <div style={{ display: "flex", gap: "3rem", marginTop: "3.5rem", flexWrap: "wrap" }}>
          {[["5+", "Projects"], ["7.4", "BCA CGPA"], ["4", "Certifications"], ["2", "Domains"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff" }}>{n}</div>
              <div style={{ fontSize: "0.75rem", color: "#555", marginTop: "0.2rem", fontWeight: 500 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ABOUT */}
      <section id="about" style={{ maxWidth: 960, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: "1.75rem" }}>
          About <span style={{ color: "#3b82f6" }}>Me</span>
        </h3>
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <div>
            <p style={{ color: "#888", lineHeight: 1.85, fontSize: "0.9rem", marginBottom: "1rem" }}>
              I'm a BCA graduate from EGS Pillay Arts and Science College (Bharathidasan University), passionate about building real, functional web products. I enjoy the full spectrum — crafting clean UIs and engineering solid backends.
            </p>
            <p style={{ color: "#888", lineHeight: 1.85, fontSize: "0.9rem" }}>
              I'm a quick learner, detail-oriented, and always looking to build something useful. I'm currently seeking an entry-level developer role where I can grow and contribute.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {[
              ["🎓", "BCA Graduate, 2025"],
              ["📍", "Tamil Nadu, India"],
              ["💼", "Open to Work"],
              ["🛠️", "Frontend + Backend"],
            ].map(([icon, text]) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#bbb", fontSize: "0.875rem" }}>
                <span>{icon}</span> {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SKILLS */}
      <section id="skills" style={{ maxWidth: 960, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: "1.75rem" }}>
          My <span style={{ color: "#3b82f6" }}>Skills</span>
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "1rem" }}>
          {SKILLS.map((s) => (
            <div key={s.category} className="card">
              <div style={{ fontWeight: 600, color: "#fff", fontSize: "0.875rem", marginBottom: "0.9rem" }}>{s.category}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {s.items.map(item => <span key={item} className="tag">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* PROJECTS */}
      <section id="projects" style={{ maxWidth: 960, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: "1.75rem" }}>
          My <span style={{ color: "#3b82f6" }}>Projects</span>
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
          {PROJECTS.map((p) => (
            <div key={p.title} className="card" style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              <span style={{ fontSize: "0.7rem", color: "#3b82f6", fontWeight: 600, background: "rgba(59,130,246,0.1)", padding: "0.18rem 0.6rem", borderRadius: 5, width: "fit-content" }}>
                {p.type}
              </span>
              <h4 style={{ fontWeight: 600, color: "#fff", fontSize: "0.95rem", lineHeight: 1.4 }}>{p.title}</h4>
              <p style={{ color: "#777", fontSize: "0.825rem", lineHeight: 1.75, flex: 1 }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginTop: "0.4rem" }}>
                {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* EDUCATION */}
      <section id="education" style={{ maxWidth: 960, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: "1.75rem" }}>
          My <span style={{ color: "#3b82f6" }}>Education</span>
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
          {EDUCATION.map((e) => (
            <div key={e.title} style={{ display: "flex", gap: "1.5rem" }}>
              <div style={{ minWidth: 90, color: "#3b82f6", fontSize: "0.75rem", fontWeight: 600, paddingTop: "0.2rem" }}>{e.year}</div>
              <div style={{ borderLeft: "1px solid #2a2a2a", paddingLeft: "1.5rem" }}>
                <div style={{ fontWeight: 600, color: "#fff", fontSize: "0.95rem" }}>{e.title}</div>
                <div style={{ color: "#777", fontSize: "0.825rem", marginTop: "0.25rem" }}>{e.place}</div>
                {e.note && (
                  <span style={{ display: "inline-block", marginTop: "0.5rem", fontSize: "0.72rem", color: "#34d399", background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)", padding: "0.15rem 0.55rem", borderRadius: 5 }}>
                    {e.note}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <h4 style={{ fontWeight: 600, color: "#fff", fontSize: "0.95rem", marginBottom: "1rem" }}>Certifications</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {CERTS.map(c => (
            <div key={c} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#888", fontSize: "0.85rem" }}>
              <span style={{ color: "#3b82f6", fontWeight: 700 }}>✓</span> {c}
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section id="contact" style={{ maxWidth: 960, margin: "0 auto", padding: "4rem 1.5rem 5rem" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
          Get In <span style={{ color: "#3b82f6" }}>Touch</span>
        </h3>
        <p style={{ color: "#777", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: 480, marginBottom: "2rem" }}>
          I'm actively looking for frontend developer roles. If you have a project or opportunity, feel free to reach out!
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            ["📧", "athiruban966@gmail.com", "mailto:athiruban966@gmail.com"],
            ["📞", "+91 93446 61658", "tel:+91 93446 61658"],
            ["🐙", "https://github.com/athiruban966", "_blank"],
          ].map(([icon, label, href]) => (
            <a key={label} href={href} className="contact-row">
              <span>{icon}</span> {label}
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid #222", textAlign: "center", padding: "1.5rem", color: "#444", fontSize: "0.78rem" }}>
        Built by <span style={{ color: "#ccc", fontWeight: 500 }}>Athiruban S</span> · 2025
      </div>
    </div>
  );
}
