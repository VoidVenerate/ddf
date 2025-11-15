import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Briefcase, GraduationCap, Users, Heart } from 'lucide-react';
import './compTestimonials.css';

export default function compTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Adeyemi',
      role: 'Product Manager',
      company: 'TurnUp Nigeria',
      rating: 5,
      text: "Emmanuel was instrumental in bringing our event platform to life. His attention to detail and ability to translate design concepts into pixel-perfect interfaces is exceptional. He consistently delivered high-quality code and was always proactive in suggesting improvements to enhance user experience.",
      category: 'professional',
      highlight: 'Technical Excellence & Collaboration'
    },
    {
      id: 2,
      name: 'Dr. Michael Okonkwo',
      role: 'Senior Developer',
      company: 'Healthcare Tech Solutions',
      rating: 5,
      text: "Working with Emmanuel on the EMR system was a pleasure. His understanding of React.js and state management is impressive. He built a complex role-based system that handles sensitive healthcare data with security and usability in mind. His code is clean, well-documented, and maintainable.",
      category: 'professional',
      highlight: 'Clean Code & Security Focus'
    },
    {
        id: 3,
        name: 'Olufunke Adebayo',
        role: 'Healthcare Administrator',
        company: 'HealthyLife Clinics',
        rating: 5,
        text: "The HMO EMR system developed by Emmanuel has transformed our clinic operations. It's intuitive, secure, and allows us to manage patient records, appointments, and plans seamlessly. Our staff adapted quickly, and patient data management has never been smoother.",
        category: 'professional',
        highlight: 'Efficient Healthcare Management'
    }
    // Add other testimonials here...
  ];

  const categories = [
    { id: 'all', label: 'All', icon: Users },
    { id: 'professional', label: 'Professional', icon: Briefcase },
    { id: 'academic', label: 'Academic', icon: GraduationCap },
    { id: 'mentor', label: 'Mentorship', icon: Users }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTestimonials = activeCategory === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === activeCategory);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const currentTestimonial = filteredTestimonials[currentIndex];

  return (
    <div className="testimonials-container">
      {/* Header */}
      <div className="testimonials-header">
        <div className="header-badge">
          <Quote size={20} className="quote-icon" />
          <span>What People Say</span>
        </div>
        <h1 className="header-title">Testimonials</h1>
        <p className="header-subtitle">Feedback from colleagues, mentors, and students I've worked with</p>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map(category => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentIndex(0);
              }}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            >
              <Icon size={16} />
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Carousel */}
      <div className="carousel">
        <div className="carousel-card">
          <Quote className="carousel-quote" size={48} />
          <div className="carousel-stars">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="star" size={24} />
            ))}
          </div>
          <p className="carousel-text">"{currentTestimonial.text}"</p>
          <div className="carousel-highlight">✨ {currentTestimonial.highlight}</div>
          <div className="carousel-author">
            <div>
              <h3>{currentTestimonial.name}</h3>
              <p>{currentTestimonial.role}</p>
              <p>{currentTestimonial.company}</p>
            </div>
          </div>
        </div>
        <button className="carousel-nav prev" onClick={prevTestimonial}><ChevronLeft size={24} /></button>
        <button className="carousel-nav next" onClick={nextTestimonial}><ChevronRight size={24} /></button>
        <div className="carousel-dots">
          {filteredTestimonials.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
      {/* Stats Section */}
        {/* Stats Section */}
        <div className="stats-section">
        <div className="stats-container">
            <div className="stat">
            <Users size={36} className="stat-icon" />
            <div className="stat-value">3+</div>
            <div className="stat-label">Testimonials</div>
            </div>
            <div className="stat">
            <Star size={36} className="stat-icon" />
            <div className="stat-value">5.0</div>
            <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat">
            <Briefcase size={36} className="stat-icon" />
            <div className="stat-value">1</div>
            <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat">
            <Heart size={36} className="stat-icon" />
            <div className="stat-value">100%</div>
            <div className="stat-label">Client Satisfaction</div>
            </div>
        </div>
        </div>
    </div>
  );
}
