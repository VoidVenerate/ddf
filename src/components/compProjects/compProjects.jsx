import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import "./compProjects.css";

const EASE_OUT = [0.4, 0, 0.2, 1];

const PROJECTS = [
  {
    id: "turnup",
    title: "TurnUp Lagos",
    description: "Event management platform with real-time ticketing and 3D venue previews. Handles 10,000+ concurrent users.",
    technologies: ["React", "Three.js", "Node.js", "PostgreSQL"],
    live: "https://turnuplagos.com/",
    featured: true
  },
  {
    id: "daahub",
    title: "DaaHub News",
    description: "AI-curated news aggregator with dark mode and gesture navigation. 50,000+ monthly active users.",
    technologies: ["React", "TypeScript", "Framer Motion"],
    github: "https://github.com/VoidVenerate",
    live: "https://daahub.netlify.app/",
    featured: false
  },
  {
    id: "emr",
    title: "EMR Health System",
    description: "HIPAA-compliant medical records system with role-based access control and analytics dashboard.",
    technologies: ["React", "PostgreSQL", "Express", "Tailwind"],
    github: "https://github.com/VoidVenerate",
    live: null,
    featured: false
  },
  {
    id: "phoenix",
    title: "PhoenixPath Wellness",
    description: "Mental health platform with appointment booking and therapist matching algorithm.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/VoidVenerate",
    live: "https://phoenixpathmhs.com/",
    featured: false
  },
  {
    id: "emg",
    title: "Exodus Music Group",
    description: "Mental health platform with appointment booking and therapist matching algorithm.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/VoidVenerate",
    live: "https://exodusmg.com/",
    featured: false
  },
  {
    id: "coalition",
    title: "Coalition",
    description: "A singular page for showcasing the use of chart.js and react-chartjs-2 in a React application.",
    technologies: ["React", "Node.js", "cgart.js"],
    github: "https://github.com/VoidVenerate",
    live: "https://coal-ition.netlify.app/",
    featured: false
  }
];

export default function CompProjects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            Recent work in web applications, 3D experiences, and interactive systems.
          </p>
        </motion.div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: EASE_OUT }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="project-header">
                <div className="project-icon">
                  <Folder size={20} />
                </div>
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">
                <a 
                  href={project.live || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title-link"
                >
                  {project.title}
                </a>
              </h3>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              {project.featured && (
                <span className="featured-badge">Featured</span>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="projects-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a 
            href="https://github.com/VoidVenerate"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            View all projects on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}