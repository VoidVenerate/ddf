import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./compHome.css";
import profileImage from "../../assets/profile-pic.jpg";

const CompHome = () => {
  const texts = [
    { text: "Hi, I’m Emmanuel Dada", type: "h1" },
    { text: "Front-End Developer", type: "h2" },
    { text: "I build fast, modern, and responsive web applications that solve real-world problems.", type: "p" },
  ];

  const [lines, setLines] = useState([]); // store typed lines
  const [currentText, setCurrentText] = useState(""); // currently typing line
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (textIndex < texts.length) {
      if (charIndex < texts[textIndex].text.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + texts[textIndex].text[charIndex]);
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setLines((prev) => [...prev, texts[textIndex]]); // keep finished line
          setCurrentText("");
          setTextIndex(textIndex + 1);
          setCharIndex(0);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, textIndex, texts]);

  const renderLine = (line, idx) => {
    const Tag = line.type;
    const className = line.type === "h1" ? "line-h1" : line.type === "h2" ? "line-h2" : "line-p";
    return <Tag key={idx} className={className}>{line.text}</Tag>;
  };

  const renderCurrentLine = () => {
    if (textIndex >= texts.length) return null;
    const Tag = texts[textIndex].type;
    const className = texts[textIndex].type === "h1" ? "line-h1" : texts[textIndex].type === "h2" ? "line-h2" : "line-p";
    return <Tag className={className}>{currentText}<span className="cursor">|</span></Tag>;
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Render finished lines */}
        {lines.map(renderLine)}

        {/* Render currently typing line */}
        {renderCurrentLine()}

        {/* CTA buttons */}
        {textIndex >= texts.length && (
          <div className="cta-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        )}
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profileImage} alt="Emmanuel Dada" />
      </motion.div>
    </section>
  );
};

export default CompHome;
