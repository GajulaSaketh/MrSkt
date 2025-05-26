import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const TechGate = () => {
  const [showForm, setShowForm] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', role: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const alreadySubmitted = localStorage.getItem('techUserInfoSubmitted');
    if (alreadySubmitted) {
      navigate('/videos', { replace: true });
    } else {
      setShowForm(true);
    }
  }, [navigate]);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_w7rck5d',     // Replace
        'template_zckqhg8',    // Replace
        userInfo,
        'ePwLp7EKFUchvKuoN'      // Replace
      );

    // Ask user for permission to store info in localStorage
    //const allowStorage = window.confirm("Do you allow us to store your info for a better experience?");

    // if (allowStorage) {
    //   localStorage.setItem('techUserInfoSubmitted', 'true');
    // }
      localStorage.setItem('techUserInfoSubmitted', 'true');
      setIsSubmitted(true);   
      navigate('/videos');
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Submission failed. Try again.');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div>
      {showForm && !isSubmitted && (
        <div style={modalStyles}>
          <form onSubmit={handleSubmit} style={formStyles}>
            <h2>Welcome! Let’s get to know you a little.</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              value={userInfo.name}
              style={inputStyles}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
              value={userInfo.email}
              style={inputStyles}
            />
            <select name="role" required onChange={handleChange} value={userInfo.role} style={inputStyles}>
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Recruiter">Recruiter</option>
              <option value="Developer">Developer</option>
              <option value="Other">Other</option>
            </select>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" onClick={handleBack} style={backButtonStyles}>Back</button>
              <button type="submit" style={buttonStyles}>Continue</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

// Styles
const modalStyles = {
  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
  backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center'
};

const formStyles = {
  backgroundColor: '#fff', padding: '30px', borderRadius: '10px', display: 'flex',
  flexDirection: 'column', width: '300px', gap: '10px'
};

const inputStyles = {
  padding: '10px', fontSize: '16px'
};

const buttonStyles = {
  padding: '10px 15px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer'
};

const backButtonStyles = {
  padding: '10px 15px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer'
};

export default TechGate;
