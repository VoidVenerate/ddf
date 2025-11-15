import React, { useState } from "react";
import {
  User,
  Code,
  Briefcase,
  Award,
  Laptop,
  Heart,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import "./compAbout.css";

export default function CompAbout() {
  const [activeTab, setActiveTab] = useState("overview");

  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "HTML & CSS", level: 95 },
    { name: "UI/UX", level: 80 },
    { name: "Git & GitHub", level: 85 },
    { name: "Figma", level: 75 },
  ];

  const experiences = [
    {
      role: "Frontend Developer (Lead)",
      company: "TurnUp Nigeria",
      period: "Jul 2025 – Sept 2025",
      desc: "Built the event management web application using React.js and modern UI patterns.",
    },
    {
      role: "Computer Science Intern",
      company: "Edulight Technologies",
      period: "Jun 2024 – Feb 2025",
      desc: "Taught HTML/CSS and supported students in Cybersecurity & Frontend tracks.",
    },
  ];

  const achievements = [
    "Built multiple production-level web apps",
    "Mentored students in the 3MTT program",
    "Led my department basketball team to victory",
    "Maintained strong academic performance",
  ];

  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* HERO */}
      <motion.div
        className="about-hero"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="profile-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          DE
        </motion.div>

        <motion.h1
          className="gradient-text"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Dada Emmanuel
        </motion.h1>

        <motion.p
          className="subtext"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Frontend Developer • UI/UX Enthusiast
        </motion.p>

        <motion.p
          className="intro-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          I build smooth, modern and functional UIs with React. I enjoy creating
          clean interfaces people actually enjoy using. When I’m not coding, I’m
          learning something new or on the basketball court.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="mailto:dadaemmanuel251@gmail.com" className="btn-primary">
            Get In Touch
          </a>
          <a href="https://github.com/VoidVenerate" className="btn-outline">
            GitHub
          </a>
        </motion.div>
      </motion.div>

      {/* TABS */}
      <div className="tabs">
        {[
          { id: "overview", label: "Overview", icon: User },
          { id: "skills", label: "Skills", icon: Code },
          { id: "experience", label: "Experience", icon: Briefcase },
          { id: "achievements", label: "Achievements", icon: Award },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <motion.button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={18} />
              {tab.label}
            </motion.button>
          );
        })}
      </div>

      {/* TAB CONTENT */}
      <motion.div
        className="tab-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <motion.div
            className="box fade-in"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="section-title">
              <Laptop /> About Me
            </h2>

            <p>
              I'm a frontend developer who focuses on building smooth,
              responsive, user-centered web applications. I love turning design
              ideas into clean functional interfaces.
            </p>

            <p>
              Outside tech, I enjoy teaching beginners, playing basketball and
              working on personal projects that help me grow.
            </p>

            <div className="traits">
              {[
                { icon: Code, label: "Clean Code", class: "icon-purple" },
                { icon: Heart, label: "User Focused", class: "icon-pink" },
                { icon: Star, label: "Team Player", class: "icon-blue" },
              ].map((trait, i) => {
                const Icon = trait.icon;
                return (
                  <motion.div
                    key={i}
                    className="trait"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 * i }}
                    whileHover={{ scale: 1.06 }}
                  >
                    <Icon className={trait.class} />
                    <span>{trait.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* SKILLS */}
        {activeTab === "skills" && (
          <motion.div
            className="box fade-in"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="section-title">
              <Code /> Skills
            </h2>

            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="skill-item"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.08 * i }}
              >
                <div className="skill-top">
                  <span>{skill.name}</span>
                  <span className="percent">{skill.level}%</span>
                </div>
                <div className="progress">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* EXPERIENCE */}
        {activeTab === "experience" && (
          <motion.div
            className="box fade-in"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="section-title">
              <Briefcase /> Experience
            </h2>

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="experience-card"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
              >
                <h3>{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="period">{exp.period}</p>
                <p className="desc">{exp.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ACHIEVEMENTS */}
        {activeTab === "achievements" && (
          <motion.div
            className="box fade-in"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="section-title">
              <Award /> Achievements
            </h2>

            <ul className="achievements-list">
              {achievements.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.08 * i }}
                >
                  <Award size={16} className="award-icon" /> {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
