import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, Briefcase, Award, Laptop, 
  ExternalLink, Calendar, MapPin 
} from "lucide-react";
import "./compAbout.css";

const EASE_OUT = [0.4, 0, 0.2, 1];

const TABS = [
  { id: "about", label: "About", icon: Laptop },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code }
];

const EXPERIENCE = [
  {
    role: "Lead Frontend Developer",
    company: "TurnUp Nigeria",
    location: "Lagos, Nigeria",
    period: "2024 — Present",
    description: "Architecting React applications with focus on performance and 3D visualization. Reduced bundle size by 40% through code splitting and lazy loading.",
    technologies: ["React", "Three.js", "TypeScript", "Node.js"],
    link: null
  },
  {
    role: "Software Engineer Intern",
    company: "Edulight Technologies",
    location: "Ibadan, Nigeria",
    period: "2023 — 2024",
    description: "Built interactive learning platforms and mentored 50+ students in modern web development practices.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    link: null
  }
];

const SKILLS = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Three.js", "WebGL"] },
  { category: "Styling", items: ["CSS Modules", "Tailwind CSS", "Styled Components", "Framer Motion"] },
  { category: "Tools", items: ["Git", "Webpack", "Vite", "Figma", "Jest"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] }
];

export default function CompAbout() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">
            Frontend developer with 3 years of experience building 
            production web applications.
          </p>
        </motion.div>

        <div className="about-layout">
          {/* Sidebar Navigation */}
          <nav className="about-nav">
            {TABS.map((tab, i) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <motion.button
                  key={tab.id}
                  className={`nav-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div 
                      className="tab-indicator"
                      layoutId="tab-indicator"
                      transition={{ duration: 0.3, ease: EASE_OUT }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Content Area */}
          <div className="about-content">
            <AnimatePresence mode="wait">
              {activeTab === "about" && (
                <motion.div
                  key="about"
                  className="content-panel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                >
                  <div className="about-text">
                    <p>
                      I specialize in building fast, accessible web applications 
                      with React and modern frontend architecture. My work focuses 
                      on performance optimization, 3D web experiences, and 
                      component-driven development.
                    </p>
                    <p>
                      Currently exploring WebGL and Three.js for immersive web 
                      experiences. Previously taught frontend development to 
                      students in the 3MTT program.
                    </p>
                    <p>
                      When not coding, I play basketball and contribute to 
                      open-source projects.
                    </p>
                  </div>
                  
                  <div className="about-stats">
                    <div className="stat">
                      <span className="stat-value">3+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">15+</span>
                      <span className="stat-label">Projects Shipped</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">50+</span>
                      <span className="stat-label">Students Mentored</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "experience" && (
                <motion.div
                  key="experience"
                  className="content-panel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                >
                  <div className="experience-list">
                    {EXPERIENCE.map((job, i) => (
                      <motion.div 
                        key={job.company}
                        className="experience-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <div className="experience-header">
                          <div>
                            <h3 className="experience-role">{job.role}</h3>
                            <div className="experience-company">
                              {job.company}
                              {job.link && (
                                <a 
                                  href={job.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="company-link"
                                >
                                  <ExternalLink size={14} />
                                </a>
                              )}
                            </div>
                          </div>
                          <span className="experience-period">{job.period}</span>
                        </div>
                        
                        <p className="experience-description">{job.description}</p>
                        
                        <div className="experience-meta">
                          <span className="meta-item">
                            <MapPin size={14} />
                            {job.location}
                          </span>
                        </div>
                        
                        <div className="tech-list">
                          {job.technologies.map(tech => (
                            <span key={tech} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  className="content-panel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                >
                  <div className="skills-grid">
                    {SKILLS.map((group, i) => (
                      <motion.div 
                        key={group.category}
                        className="skill-group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <h4 className="skill-category">{group.category}</h4>
                        <div className="skill-items">
                          {group.items.map(skill => (
                            <span key={skill} className="skill-item">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}