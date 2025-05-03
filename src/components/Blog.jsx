import React, { useEffect, useState } from 'react';
import '../styles/Blog.css'; 

const Blog = () => {
    const [showGlitch, setShowGlitch] = useState(false);

  useEffect(() => {
    const glitchShown = sessionStorage.getItem('glitchShown');

    if (!glitchShown) {
      setShowGlitch(true);

      const audio = new Audio('/public/glitch-sound.mp3');
      audio.volume = 0.4;
      audio.play();

      // Mark glitch as shown in sessionStorage
      sessionStorage.setItem('glitchShown', 'true');

      const timer = setTimeout(() => setShowGlitch(false), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className="blog-section blog-root" id="blog">
        {showGlitch && (
        <div className="glitch-overlay">
          <img
            src="https://media.tenor.com/Mw__tI1Xe1YAAAAC/glitch-error.gif"
            alt="Glitch"
          />
        </div>
      )}
    <div className="blog-content"> 
    <div className="gallery">
      <div className="grid-item large">
        <img src="https://via.placeholder.com/300x200" alt="Image 1" />
      </div>
      <div className="grid-item medium">
        <img src="https://via.placeholder.com/300x200" alt="Image 2" />
      </div>
      <div className="grid-item small">
        <img src="https://via.placeholder.com/150x150" alt="Image 3" />
      </div>
      <div className="grid-item medium">
        <img src="https://via.placeholder.com/300x200" alt="Image 4" />
      </div>
      <div className="grid-item small">
        <img src="https://via.placeholder.com/150x150" alt="Image 5" />
      </div>
      <div className="grid-item large">
        <img src="https://via.placeholder.com/300x200" alt="Image 6" />
      </div>
      <div className="grid-item medium">
        <img src="https://via.placeholder.com/300x200" alt="Image 7" />
      </div>
      <div className="grid-item small">
        <img src="https://via.placeholder.com/150x150" alt="Image 8" />
      </div>
      <div className="grid-item medium">
        <img src="https://via.placeholder.com/300x200" alt="Image 9" />
      </div>
    </div>
    </div>
    </section>
  );
};

export default Blog;
