import React from "react";
import { Github, ExternalLink, Code } from "lucide-react";
import "./compProjects.css";

export default function compProjects() {
  const projects = [
    {
      name: "TurnUp Lagos",
      tech: ["React.js", "CSS3", "HTML5"],
      desc: "Fully responsive platform for scheduling and managing events, including user registration and ticketing.",
      github: "https://github.com/VoidVenerate",
      live: "#",
    },
    {
      name: "DaaHub - News Website",
      tech: ["React.js", "UI/UX"],
      desc: "A modern news website providing updates on global events with light/dark theme.",
      github: "https://github.com/VoidVenerate",
      live: "#",
    },
    {
      name: "Electronic Medical Records (HMO)",
      tech: ["React.js", "UI/UX", "Responsive Design"],
      desc: "Web-based EMR system for Admin, Hospital Staff, and Patients with dark-themed UI.",
      github: "https://github.com/VoidVenerate",
      live: "#",
    },
    {
      name: "Edusity University Website",
      tech: ["React.js", "HTML5", "CSS3"],
      desc: "Responsive informational website with course listings, campus info, and admission details.",
      github: "https://github.com/VoidVenerate",
      live: "#",
    },
    {
      name: "Barbershop Website",
      tech: ["HTML", "CSS", "JavaScript"],
      desc: "Landing page for a barbershop with interactive appointment booking features.",
      github: "https://github.com/VoidVenerate",
      live: "#",
    },
    {
      name: "Password Generator",
      tech: ["HTML", "CSS", "JavaScript"],
      desc: "Web app to generate secure passwords with copy-to-clipboard functionality.",
      github: "https://github.com/VoidVenerate",
      live: "#",
    },
    {
      name: "To-Do List App",
      tech: ["HTML", "CSS", "JavaScript"],
      desc: "Dynamic to-do list app with add/edit/delete tasks and interactive UI.",
      github: "https://github.com/VoidVenerate",
      live: "#",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-hero">
        <h1 className="gradient-text">My Projects</h1>
        <p className="intro-text">
          A collection of my recent work showcasing clean, responsive, and
          user-friendly web applications built with modern technologies.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card fade-in">
            <h2 className="project-name">{proj.name}</h2>
            <p className="project-desc">{proj.desc}</p>
            <div className="tech-stack">
              {proj.tech.map((t, i) => (
                <span key={i} className="tech-item">
                  {t}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer">
                <Github size={20} /> GitHub
              </a>
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
