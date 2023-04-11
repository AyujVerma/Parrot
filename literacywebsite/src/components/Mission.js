import React, { useRef, useEffect } from 'react';
import './Mission.css';

const Mission = () => {
  const missionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          missionRef.current.classList.add('expand');
        } else {
          missionRef.current.classList.remove('expand');
        }
      });
    });

    observer.observe(missionRef.current);

    return () => {
      observer.unobserve(missionRef.current);
    };
  }, []);

  return (
    <div className="mission" ref={missionRef}>
      <div className="mission-text">
        <h1>Our Mission</h1>
        <p>
          Add info about mission statement blah blah blah.
        </p>
      </div>
    </div>
  );
};

export default Mission;



// import React, { useState, useEffect } from 'react';
// import './Mission.css';

// const Mission = () => {
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setExpanded(true);
//     }, 500);
//   }, []);

//   return (
//     <div className={`mission ${expanded ? "expanded" : ""}`}>
//       <div className="mission-content">
//         <h1>Our Mission</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum felis id sem condimentum consectetur. Suspendisse aliquet vestibulum ante, in efficitur libero maximus eget. Maecenas suscipit lectus sit amet dolor pretium, ut egestas ex tincidunt. Sed sit amet enim sagittis, tincidunt purus vitae, eleifend turpis. Fusce vulputate bibendum lectus, id dictum leo aliquet at. Donec ac hendrerit justo. Praesent ullamcorper turpis a pharetra tristique. Nam vitae nunc orci. Sed vestibulum porttitor velit sed ultricies. </p>
//       </div>
//     </div>
//   );
// };

// export default Mission;