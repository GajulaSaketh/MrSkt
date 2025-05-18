import React, { useState } from 'react';
import axios from 'axios';

function UploadVideo() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type === 'video/mp4') {
      setFile(selected);
      setError('');
    } else {
      setError('Only MP4 files are allowed');
      setFile(null);
    }
  };

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token"); 
    e.preventDefault();

    if (!file || !name || !description) {
      setError('Please fill all fields and select a .mp4 file.');
      return;
    }

    const formData = new FormData();
    formData.append('File', file);
    formData.append('Name', name);
    formData.append('Description', description);

    try {
      const res = await axios.post('/api/Tutorials/upload', formData, {
        headers: {
            "Authorization": `Bearer ${token}`, 
          'Content-Type': 'multipart/form-data',
        },
      });

      setShowPopup(true);
      setError('');
      setFile(null);
      setName('');
      setDescription('');
    } catch (err) {
      const backendMsg = err?.response?.data || 'Upload failed. Please try again.';
      setError(backendMsg);
      setShowPopup(false);
    }
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows="4"
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />

        <input
          type="file"
          accept="video/mp4"
          onChange={handleFileChange}
          required
          style={{ marginBottom: '10px' }}
        />

        <button type="submit" style={{ padding: '10px 20px' }}>Upload</button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

      {showPopup && (
        <div style={{
          background: 'rgba(0,0,0,0.6)',
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            background: '#fff',
            padding: '20px 30px',
            borderRadius: '10px',
            textAlign: 'center',
            maxWidth: '300px'
          }}>
            <h3>Upload Successful!</h3>
            <button onClick={closePopup} style={{ marginTop: '15px' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadVideo;
