import React from "react"; 
import { Link } from "react-router-dom";
import "../styles/Portfolio.css"; // import CSS as needed

// const portfolioItems = [
//   { src: "./MobileUi.jpg", label: "ui/ux design" },
//   { src: "./WebApp.jpg", label: "web development" },
//   { src: "./AzureDataFactory.png", label: "Azure Data Factory" },
// ];

// const Portfolio = () => {
//   return (
//     <section id="portfolio" className="portfolio">
//       <div className="portfolio-details">
//         <div className="section-heading">
//           <h2>portfolio</h2>
//         </div>
//         <div className="container">
//           <div className="portfolio-content">
//             <div className="isotope">
//               <div className="row">
//                 {[0, 1, 2].map((colIndex) => (
//                   <div className="col-sm-4" key={colIndex}>
//                     {portfolioItems
//                       .filter((_, index) => index % 3 === colIndex)
//                       .map((item, i) => (
//                         <div className="item" key={i}>
//                           <img src={item.src} alt="portfolio" />
//                           <div className="isotope-overlay">
//                             <a href="#">{item.label}</a>
//                           </div>
//                         </div>
//                       ))}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;


const PortfolioGrid = () => {
  const portfolioItems = [
    { id: 1, src: "/MobileUi.jpg", label: "ui/ux design", route: "/mobile-ui"},
    { id: 2, src: "/WebApp.jpg", label: "web development", route: "/web-app" },
    { id: 3, src: "/AzureDataFactory.png", label: "Azure Data Factory", route: "/data-factory" },
  ];

  return (
    <section id='portfolio'>
    <div className="portfolio-container">
    <div className="section-heading">
         <h2 className="section-title">portfolio</h2>
    </div>
      <div className="portfolio-grid">
        {/* Left column - two stacked items */}
        <div className="portfolio-left">
          {/* First portfolio item */}
          <div className="portfolio-item"> 
          <Link to={portfolioItems[0].route}>
           <img 
             src={portfolioItems[0].src} 
             alt={portfolioItems[0].label}
           />
            <div className="portfolio-overlay">
            <p>{portfolioItems[0].label}</p>
            </div>
          </Link>
          </div>
          {/* Second portfolio item */}
          <div className="portfolio-item">
          <Link to={portfolioItems[1].route}>
            <img 
              src={portfolioItems[1].src} 
              alt={portfolioItems[1].label}
            />
            <div className="portfolio-overlay">
              <p>{portfolioItems[1].label}</p>
            </div>
          </Link>
          </div>
         
        </div>
        
        {/* Right column - one tall item */}
        <div className="portfolio-right">
          <div className="portfolio-item">
          <Link to={portfolioItems[2].route}>
            <img 
              src={portfolioItems[2].src} 
              alt={portfolioItems[2].label}
            />
            <div className="portfolio-overlay">
              <p>{portfolioItems[2].label}</p>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default PortfolioGrid;
