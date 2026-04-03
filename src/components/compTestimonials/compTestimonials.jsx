import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Briefcase, GraduationCap, Users } from "lucide-react";
import "./compTestimonials.css";

const EASE_OUT = [0.4, 0, 0.2, 1];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mrs Chinenye",
    role: "Product Manager",
    company: "TurnUp Nigeria",
    text: "Emmanuel was instrumental in bringing our event platform to life. His attention to detail and ability to translate design concepts into pixel-perfect interfaces is exceptional. He consistently delivered high-quality code and was always proactive in suggesting improvements to enhance user experience.",
    category: "professional"
  },
  {
    id: 2,
    name: "Dr. Michael Okonkwo",
    role: "Senior Developer",
    company: "Healthcare Tech Solutions",
    text: "Working with Emmanuel on the EMR system was a pleasure. His understanding of React.js and state management is impressive. He built a complex role-based system that handles sensitive healthcare data with security and usability in mind. His code is clean, well-documented, and maintainable.",
    category: "academic"
  },
  {
    id: 3,
    name: "Olufunke Adebayo",
    role: "Healthcare Administrator",
    company: "HealthyLife Clinics",
    text: "The HMO EMR system developed by Emmanuel has transformed our clinic operations. It is intuitive, secure, and allows us to manage patient records, appointments, and plans seamlessly. Our staff adapted quickly, and patient data management has never been smoother.",
    category: "professional"
  },
  {
    id: 4,
    name: "Tunde Adeyemi",
    role: "Team Lead",
    company: "Edulight Technologies",
    text: "Emmanuel brings passion and precision to every project. His attention to detail and problem-solving skills are outstanding. He consistently delivered beyond expectations.",
    category: "mentor"
  },
  {
    id: 5,
    name: "PhoenixPath Wellness",
    role: "Mental Health Practice",
    company: "PhoenixPath Wellness",
    text: "Working with Emmanuel was an exceptional experience from start to finish. He transformed our scattered content into a professional, compassionate, and beautifully structured website. He captured our vision for accessible mental health care and presented it in a way that feels warm and trustworthy. His attention to detail and communication made this project seamless.",
    category: "professional"
  }
];

const CATEGORIES = [
  { id: "all", label: "All", icon: Users },
  { id: "professional", label: "Professional", icon: Briefcase },
  { id: "academic", label: "Academic", icon: GraduationCap },
  { id: "mentor", label: "Mentorship", icon: Users }
];

export default function CompTestimonials() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredTestimonials = activeCategory === "all"
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === activeCategory);

  const currentTestimonial = filteredTestimonials[currentIndex];

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentIndex(0);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">
            Feedback from colleagues, mentors, and clients I have worked with.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="filter-bar">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`filter-pill ${isActive ? "active" : ""}`}
              >
                <Icon size={16} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Testimonial Card */}
        <div className="testimonial-wrapper">
          <AnimatePresence mode="wait">
            <motion.article
              key={`${activeCategory}-${currentIndex}`}
              className="testimonial-card"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
            >
              <Quote size={32} className="quote-icon" />
              
              <blockquote className="testimonial-text">
                {currentTestimonial.text}
              </blockquote>

              <footer className="testimonial-footer">
                <div className="testimonial-author">
                  <span className="author-name">{currentTestimonial.name}</span>
                  <span className="author-role">{currentTestimonial.role}</span>
                  <span className="author-company">{currentTestimonial.company}</span>
                </div>
              </footer>
            </motion.article>
          </AnimatePresence>

          {/* Navigation */}
          <div className="testimonial-nav">
            <button 
              className="nav-btn"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="testimonial-dots">
              {filteredTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => goToTestimonial(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              className="nav-btn"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="testimonial-stats">
          <div className="stat-item">
            <span className="stat-number">{TESTIMONIALS.length}</span>
            <span className="stat-label">Testimonials</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Response Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}