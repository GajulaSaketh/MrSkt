import React, { useState, useEffect } from 'react';
import "../styles/Blog.css";


const Blog = () => {
    

  return (
    <section className="blog-section" id="blog">
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
    </section>
  );
};

export default Blog;
