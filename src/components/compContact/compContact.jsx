import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, Check } from "lucide-react";
import "./compContact.css";

const EASE_OUT = [0.4, 0, 0.2, 1];

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "dadaoluwawamiri@gmail.com", href: "mailto:dadaoluwawamiri@gmail.com" },
  { icon: Phone, label: "Phone", value: "+234 901 434 5902", href: "tel:+2349014345902" },
  { icon: MapPin, label: "Location", value: "Ibadan, Nigeria", href: null }
];

export default function CompContact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const data = new FormData();
    data.append("access_key", "d210210f-eee4-4365-8956-e173e59eee07");
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const isLoading = status === "loading";

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Have a project or opportunity? Send a message.
          </p>
        </motion.div>

        <div className="contact-layout">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
          >
            {CONTACT_INFO.map((item, i) => (
              <motion.div
                key={item.label}
                className="info-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="info-icon">
                  <item.icon size={20} />
                </div>
                <div className="info-content">
                  <span className="info-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="info-value link">
                      {item.value}
                    </a>
                  ) : (
                    <span className="info-value">{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="form-input"
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                rows={5}
                className="form-input textarea"
                placeholder="Tell me about your project..."
              />
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary btn-full ${status}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <Check size={18} />
                  Message Sent
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {status === "error" && (
              <p className="form-error">
                Failed to send message. Please try again or email directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}