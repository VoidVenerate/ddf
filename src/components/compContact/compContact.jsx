import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "./compContact.css";

export default function CompContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Success/Error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("access_key", "d210210f-eee4-4365-8956-e173e59eee07");
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully! ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error submitting the form. Try again later.");
    }

    // Remove status message after 5 seconds
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact Me</h2>
        <p>Have a project or question? Send me a message!</p>
      </div>

      <div className="contact-content">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <Mail className="info-icon" />
            <span>dadaoluwawamiri@gmail.com</span>
          </div>
          <div className="info-item">
            <Phone className="info-icon" />
            <span>+234 901 434 5902</span>
          </div>
          <div className="info-item">
            <MapPin className="info-icon" />
            <span>Ibadan, Oyo State, Nigeria</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <button type="submit" className="btn-submit">
            <Send size={18} /> Send Message
          </button>

          {status && <p className="success-msg">{status}</p>}
        </form>
      </div>
    </div>
  );
}
