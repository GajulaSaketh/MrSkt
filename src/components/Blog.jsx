import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Blog.css";

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="bits-card">
      <h2 className="bits-title">Quick Facts</h2>
      <ul className="bits-list">
        <li className="bits-item">
          <span role="img" aria-label="home">🏡</span>{" "}
          <strong>Hometown:</strong> Somewhere between <em>cozy cafés</em> and <em>wanderlust</em>.
        </li>
        <li className="bits-item">
          <span role="img" aria-label="music">🎵</span>{" "}
          <strong>Currently Obsessed With:</strong> <em>Something that hits different at 2 AM — soft when I’m thinking, loud when I’m feeling.</em>
        </li>
        <li className="bits-item">
          <span role="img" aria-label="quote">💬</span>{" "}
          <strong>Life Motto (for now):</strong> <em>Do it scared.</em>
        </li>
      </ul>
    </div>
    <div className="ed-wrapper">
      <div className="ed-card">
        <h1 className="ed-title">⚙️ This Page is Under Development</h1>
        <p className="ed-text">
          Stay tuned for more updates!
        </p>
        <p className="ed-subtext">
          Coming soon... Please check back later.
        </p>
        <div className="ed-wave" />
      </div>
    </div>
    <Link to="/">← Back to Home</Link>
    </section>
  );
};

export default Blog;
