import React from 'react';

function Tutorials() {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     axios.get('https://your-api-url.com/api/tutorials')
//       .then(response => setVideos(response.data))
//       .catch(err => console.error(err));
//   }, []);

  return (
    <section className="tutorial-section" id="tutorial">
    {/* // <div className="p-4">
    //   <h2 className="text-2xl font-bold mb-4">My Technical Tutorials</h2>
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //     {videos.map(video => (
    //       <div key={video.id} className="p-4 border rounded shadow">
    //         <h3 className="font-semibold">{video.title}</h3>
    //         <p>{video.description}</p>
    //         <video width="100%" controls>
    //           <source src={video.videoUrl} type="video/mp4" />
    //         </video>
    //       </div>
    //     ))}
    //   </div>
    // </div> */}
    </section>
  );
}

export default Tutorials;
