import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdqRTziAfx5cJwUYe-uVAdvGUowzAUL8k9DogRAKwi57ikA7g/formResponse";

    const data = new FormData();
    data.append("entry.1571931725", formData.name);
    data.append("entry.487371493", formData.email);
    data.append("entry.748304682", formData.message);

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: data,
    }).then(() => {
      setShowPopup(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Hide after 3 seconds
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-title">
          <p className="section-subtitle">Get in Touch</p>
          <h2 className="section-heading">Contact Me</h2>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="info-heading">Let's talk about everything!</h3>
            <p className="info-description">
              Don’t like forms? Send me an email 👋
            </p>
            <div className="info-email">📩 sakethgajula19@gmail.com</div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="form-input"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="form-input"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Enter your message"
              className="form-textarea"
            ></textarea>
            <button type="submit" className="form-button">
              Send Message
            </button>
          </form>
        </div>

        {/* Thank You Popup */}
        {showPopup && (
          <div className="thankyou-popup">
            Thank you! Your message has been sent.<span role="img" aria-label="smiley">😊</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
