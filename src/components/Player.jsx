import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Player() {
  const { videoUrl } = useParams();
  const navigate = useNavigate();

  // Decode the video URL from the route
  const decodedUrl = decodeURIComponent(videoUrl);

  // Validate the URL
  const isValidUrl = decodedUrl && (decodedUrl.startsWith('http://') || decodedUrl.startsWith('https://'));

  if (!isValidUrl) {
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h2>Invalid or Missing Video URL</h2>
        <button onClick={() => navigate(-1)} style={{ marginTop: '10px' }}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Video Player</h2>
      <video
        src={decodedUrl}
        controls
        autoPlay
        style={{ width: '100%', maxWidth: '800px', border: '1px solid #ccc', borderRadius: '8px' }}
      >
        Your browser does not support the video tag.
      </video>
      <br />
      <button onClick={() => navigate(-1)} style={{ marginTop: '15px' }}>
        Back to Videos
      </button>
    </div>
  );
}

export default Player;
