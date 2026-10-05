const portfolio = {
  highlights: [
    { number: "03", label: "Professional internships", note: "Across software, AI & web" },
    { number: "05+", label: "Software & AI projects", note: "Academic and applied work" },
    { number: "07", label: "Professional certifications", note: "Technology & security" },
    { number: "3rd", label: "BUECS Open House 2026", note: "Project recognition" },
  ],
  profile: [
    ["LOCATION", "Islamabad, Pakistan"], ["DEGREE", "BS Information Technology"],
    ["UNIVERSITY", "Bahria University"], ["FOCUS", "Software, AI/ML & cybersecurity"],
  ],
  skills: [
    { title: "Programming", icon: "{ }", items: ["Python", "JavaScript", "C++", "SQL"] },
    { title: "AI & machine learning", icon: "✳", items: ["Machine Learning", "Artificial Intelligence", "TensorFlow", "Keras", "Deep Learning", "Model Evaluation", "Transfer Learning"] },
    { title: "Backend & APIs", icon: "⌘", items: ["FastAPI", "Flask", "REST APIs", "JWT Authentication", "RBAC"] },
    { title: "Frontend", icon: "▧", items: ["React", "HTML5", "CSS3"] },
    { title: "Databases", icon: "▤", items: ["PostgreSQL", "SQL Server", "Firebase"] },
    { title: "Cybersecurity", icon: "◇", items: ["Nmap", "OpenVAS", "Vulnerability Assessment", "Security Risk Evaluation", "Linux"] },
    { title: "DevOps & tools", icon: "⌥", items: ["Docker", "Docker Compose", "Git", "GitHub", "Linux", "Jira", "VS Code"] },
    { title: "Computer science", icon: "∑", items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Problem Solving"] },
  ],
  experience: [
    { role: "Python Intern", company: "Evosoft", location: "Remote", dates: "October 2025 — December 2025", points: ["Developed Python applications and backend services.", "Worked with REST APIs, databases and data-processing workflows.", "Assisted in debugging, testing and application performance optimization.", "Collaborated using version control and software documentation practices."], tags: ["Python", "REST APIs", "Databases", "Git"] },
    { role: "AI/ML Intern", company: "DataCompass — Bahria Incubation Center", location: "Islamabad", dates: "June 2025 — September 2025", points: ["Developed AI-powered healthcare solutions using Python, TensorFlow and Keras.", "Built and optimized a chest X-ray disease-detection system using transfer learning.", "Evaluated models with precision, recall, F1-score and confusion matrices.", "Integrated trained models with Flask REST APIs; worked on class imbalance, testing and deployment preparation."], tags: ["Python", "TensorFlow", "Keras", "Flask", "Machine Learning"] },
    { role: "Web Development Intern", company: "Insaafdaar", location: "Remote", dates: "June 2024 — September 2024", points: ["Built and enhanced responsive web interfaces using HTML, CSS, JavaScript and React.", "Integrated frontend components with backend APIs.", "Participated in debugging, testing and code reviews.", "Collaborated using Git and Agile development practices."], tags: ["React", "JavaScript", "HTML", "CSS", "Git"] },
  ],
  projects: [
    { title: "Dynamic Risk Posture Evaluation Using Automated Threat Intelligence", subtitle: "Final Year Project", description: "A cybersecurity platform designed to automate vulnerability assessment, endpoint discovery and security risk evaluation across networked systems.", tags: ["FastAPI", "PostgreSQL", "OpenVAS", "Nmap", "JWT", "Docker"], features: ["Automated vulnerability scanning", "Network asset discovery", "Secure REST APIs", "JWT authentication & RBAC", "Security-risk monitoring", "Centralized dashboard"], featured: true, visual: "risk" },
    { title: "MediScan AI", subtitle: "AI-Based Chest X-Ray Disease Detection", description: "An AI-powered healthcare solution designed to detect diseases from chest X-ray images using deep-learning models.", tags: ["Python", "TensorFlow", "Keras", "Flask", "VGG16", "Grad-CAM"], features: ["Transfer learning", "Medical image classification", "Flask inference API", "Model evaluation", "Grad-CAM visualization"], visual: "med" },
    { title: "Task Management System", subtitle: "Full-stack productivity platform", description: "A productivity platform providing secure authentication and CRUD-based task-management functionality.", tags: ["React", "ASP.NET Core Web API", "SQL Server"], features: ["Secure authentication", "Task create, edit & delete", "REST API integration", "Responsive interface"], visual: "task" },
    { title: "SavorySync", subtitle: "Recipe Management Application", description: "A cross-platform mobile application for discovering, saving and organizing recipes.", tags: ["Flutter", "Dart", "Firebase"], features: ["Authentication", "Real-time storage", "Meal planning", "Shopping lists", "Recipe organization"], visual: "savory" },
    { title: "Car Racing Game", subtitle: "C++ · 2D desktop game", description: "A desktop 2D racing game developed using C++ and SFML.", tags: ["C++", "SFML"], features: ["Player controls", "Obstacle detection", "Collision handling", "Score tracking", "Object-oriented programming"], visual: "racing" },
  ],
  certifications: [
    ["Foundations of Cybersecurity", "Google · Coursera", "SEC"], ["Play It Safe: Manage Security Risks", "Google · Coursera", "RISK"],
    ["Google AI Essentials", "Google · Coursera", "AI"], ["Data Science Foundations", "IBM", "DATA"],
    ["Advanced Python Programming", "NETSOL Technologies", "PY"], ["Advanced Commands in Linux", "Coursera", "CLI"],
    ["Certified LLM Security Expert (CLLMSE)", "Red Team Leaders", "LLM"],
  ],
};

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const tagList = (items, className = "tag") => items.map((item) => `<span class="${className}">${escapeHTML(item)}</span>`).join("");

document.querySelector("#highlights").innerHTML = portfolio.highlights.map((item) => `<article class="highlight-card"><strong>${escapeHTML(item.number)}</strong><div><b>${escapeHTML(item.label)}</b><span>${escapeHTML(item.note)}</span></div><i aria-hidden="true">↗</i></article>`).join("");
document.querySelector("#profile-info").innerHTML = portfolio.profile.map(([label, value]) => `<div class="info-item"><span class="meta-label">${escapeHTML(label)}</span><strong>${escapeHTML(value)}</strong></div>`).join("");
document.querySelector("#skills-grid").innerHTML = portfolio.skills.map((group, index) => `<article class="skill-card"><div class="skill-title"><span class="skill-icon" aria-hidden="true">${escapeHTML(group.icon)}</span><h3>${escapeHTML(group.title)}</h3><span class="skill-index">0${index + 1}</span></div><div class="tag-list">${tagList(group.items)}</div></article>`).join("");
document.querySelector("#experience-list").innerHTML = portfolio.experience.map((job) => `<article class="timeline-entry"><div class="timeline-marker" aria-hidden="true"></div><div class="timeline-date">${escapeHTML(job.dates)}</div><div class="experience-card"><div class="experience-head"><div><h3>${escapeHTML(job.role)}</h3><p class="company">${escapeHTML(job.company)} <span>·</span> ${escapeHTML(job.location)}</p></div><span class="experience-arrow" aria-hidden="true">↗</span></div><ul>${job.points.map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ul><div class="tag-list">${tagList(job.tags)}</div></div></article>`).join("");

function projectVisual(project) {
  if (project.featured) return `<div class="project-art art-risk" role="img" aria-label="Illustrative cybersecurity assessment workflow"><div class="art-window"><div class="art-window-head"><span>THREAT INTELLIGENCE / OVERVIEW</span><span>ASSESSMENT WORKFLOW</span></div><div class="art-overview"><span>SECURITY POSTURE</span><b>Discover and assess network risk</b><p>Asset discovery · Vulnerability scanning · Risk monitoring</p></div><div class="art-chart"><div class="chart-label">ASSESSMENT PIPELINE</div><div class="workflow-steps"><span>Discover assets</span><i></i><span>Scan exposure</span><i></i><span>Review risk</span></div></div><div class="art-controls"><span>API access · JWT</span><span>Authorization · RBAC</span><span>PostgreSQL</span></div></div><div class="art-side-note"><span class="art-note-dot"></span>Security assessment <b>›</b></div><div class="art-stamp">PROJECT / 01</div></div>`;
  const visual = { med: ["MODEL INFERENCE", "AI", "X-ray classification", "Python · TensorFlow"], task: ["WORKSPACE", "TS", "Task management", "React · ASP.NET"], savory: ["YOUR RECIPES", "SS", "Recipe collection", "Flutter · Firebase"], racing: ["RACING GAME", "SF", "2D racing game", "C++ · SFML"] }[project.visual];
  return `<div class="project-art art-${escapeHTML(project.visual)}" role="img" aria-label="Illustrative ${escapeHTML(project.title)} project interface"><div class="mini-window"><div class="mini-window-bar"><span>${escapeHTML(visual[0])}</span><i></i><i></i><i></i></div><div class="mini-content"><div class="mini-symbol">${escapeHTML(visual[1])}</div><div><b>${escapeHTML(visual[2])}</b><span>${escapeHTML(visual[3])}</span></div><span class="mini-arrow">↗</span></div><div class="mini-bottom"><i></i><i></i><i></i><i></i></div></div><span class="project-art-index">PROJECT / ${String(portfolio.projects.indexOf(project) + 1).padStart(2, "0")}</span></div>`;
}
function projectLinks(project) {
  const links = [];
  if (project.githubUrl) links.push(`<a class="project-link" href="${escapeHTML(project.githubUrl)}" target="_blank" rel="noreferrer">GitHub ↗</a>`);
  if (project.liveDemoUrl) links.push(`<a class="project-link" href="${escapeHTML(project.liveDemoUrl)}" target="_blank" rel="noreferrer">Live demo ↗</a>`);
  if (project.caseStudyUrl) links.push(`<a class="project-link" href="${escapeHTML(project.caseStudyUrl)}">Case study ↗</a>`);
  return links.length ? `<div class="project-links">${links.join("")}</div>` : "";
}
document.querySelector("#projects-grid").innerHTML = portfolio.projects.map((project) => `<article class="project-card ${project.featured ? "project-featured" : ""}">${projectVisual(project)}<div class="project-body">${project.featured ? `<span class="project-label"><span></span> FINAL YEAR PROJECT</span>` : ""}<p class="project-subtitle">${escapeHTML(project.subtitle)}</p><h3>${escapeHTML(project.title)}</h3><p class="project-description">${escapeHTML(project.description)}</p><div class="tag-list project-tags">${tagList(project.tags)}</div><div class="project-features">${project.features.map((feature) => `<span><i aria-hidden="true">✓</i>${escapeHTML(feature)}</span>`).join("")}</div>${project.featured ? `<details class="project-assets"><summary>Project media &amp; documentation <span>+</span></summary><p>Dashboard screenshots, architecture diagram, repository and project documentation can be added here when available.</p></details>` : ""}${projectLinks(project)}</div></article>`).join("");
document.querySelector("#cert-list").innerHTML = portfolio.certifications.map(([title, issuer, icon]) => `<article class="cert-card"><span class="cert-icon" aria-hidden="true">${escapeHTML(icon)}</span><div><h3>${escapeHTML(title)}</h3><p>${escapeHTML(issuer)}</p></div><span class="cert-arrow" aria-hidden="true">↗</span></article>`).join("");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  navLinks.classList.toggle("is-open", open);
});
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("is-open"); menuToggle.setAttribute("aria-expanded", "false"); menuToggle.setAttribute("aria-label", "Open navigation menu");
}));
window.addEventListener("scroll", () => document.querySelector(".site-header").classList.toggle("is-scrolled", window.scrollY > 12), { passive: true });
document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const subject = encodeURIComponent(String(values.get("subject")).trim());
  const body = encodeURIComponent(`From: ${String(values.get("name")).trim()} (${String(values.get("email")).trim()})\n\n${String(values.get("message")).trim()}`);
  document.querySelector("#form-note").textContent = "Opening your email app with the message details…";
  window.location.href = `mailto:zkhawar515@gmail.com?subject=${subject}&body=${body}`;
});

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
  document.querySelectorAll(".section, .highlight-card, .project-card, .achievement-card").forEach((item) => { item.classList.add("reveal"); observer.observe(item); });
}
