import React, { useState, useEffect } from 'react';
import { UseApiService } from '../services/UseApiService'; // Adjust path as needed
import { useNavigate } from 'react-router-dom';

function Videos() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const apiService = UseApiService();

  useEffect(() => {
    async function getPosts() {
      try {
        const data = await apiService.get('api/Tutorials/getall');
        setPosts(data);
      } catch (err) {
        console.error('Failed to fetch posts', err);
      }
    }
    getPosts();
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleClick = (videoUrl) => {
    const encodedUrl = encodeURIComponent(videoUrl);
    navigate(`/player/${encodedUrl}`);
  };

  if (posts.length === 0) return <h1>Fetching data...</h1>;
return (
  <div className="post-list">
    {/* Sticky Search Bar */}
    <div
      style={{
        position: 'sticky',
        top: 0,
        backgroundColor: '#fff',
        padding: '10px 0',
        zIndex: 1000,
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '8px',
          width: '50%',
          marginLeft: '25%',
        }}
      />
    </div>

    {/* Video Posts */}
    {filteredPosts.length === 0 ? (
      <h1>No videos found.</h1>
    ) : (
      filteredPosts.map((post) => (
        <div
          key={post.id}
          className="post-card"
          style={{
            border: '1px solid #ccc',
            padding: '5px',
            marginBottom: '6px',
            marginLeft: '5px',
            cursor: 'pointer',
            backgroundColor: '#f9f9f9',
          }}
          onClick={() => handleClick(post.videoUrl)}
        >
          <h3>Topic: {post.title}</h3>
          <p>Summary: {post.description}</p>
        </div>
      ))
    )}
  </div>
);

//   return (
//     <div className="post-list">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ padding: '8px', margin: '10px 0', width: '50%' , marginLeft: '25%'}}
//       />

//       {filteredPosts.length === 0 ? (
//         <h1>No videos found.</h1>
//       ) : (
//         filteredPosts.map((post) => (
//           <div
//             key={post.id}
//             className="post-card"
//             style={{
//               border: '1px solid #ccc',
//               padding: '5px',
//               marginBottom: '6px',
//               marginLeft: '5px',
//               cursor: 'pointer',
//               backgroundColor: '#f9f9f9',
//             }}
//             onClick={() => handleClick(post.videoUrl)}
//           >
//             <h3>Topic: {post.title}</h3>
//             <p>Summary: {post.description}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
}

export default Videos;
