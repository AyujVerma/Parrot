import React, { useRef, useEffect, useState } from 'react';
import './Mission.css';
import children from '../images/children.png'

const Mission = () => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementTop = document.querySelector('.mission').getBoundingClientRect().top;
  
      if (elementTop - windowHeight <= -100) { // adjust the threshold to determine when to expand the section
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const missionStyles = {
      height: isExpanded ? '450px' : '100px', // change height on scroll
      overflow: 'hidden', // hide overflow content when collapsed
      transition: 'all 1s ease', // add smooth transition on scroll
      padding: '30px', // add some padding to make the section more visually appealing
      background: "#9bd0c3"
    };
  
    const missionTextStyles = {
      opacity: isExpanded ? 1 : 0, // fade in/out mission text on scroll
      transition: 'all 0.3s ease', // add smooth transition on scroll
    };
  
    return (
      <div className={'mission'} style={missionStyles}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <div className="mission-text">
          <h1>Parrot's Mission</h1>
          <p>
          Parrot integrates modern <span style={{color: '#406c6c'}}>streaming</span> and <span style={{color: '#406c6c'}}>e-reading</span> with education to create content for kids to learn using their favorite videos and books. <span style={{fontsize: '60px', color: '#406c6c'}}>Where learning takes flight!</span>
          </p>
        </div>
        {/* this is the right side image */}
        <img src={children} height='300px'/>
      </div>
      </div>
    );
  };
  
  export default Mission;
  
  

// const Mission = () => {

//   return (
//     <div className={'mission'}>
//       <div className="mission-text">
//         <h1>Our Mission</h1>
//         <p>
//           Add info about mission statement blah blah blah.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Mission;

// const Mission = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleMouseEnter = () => {
//     setIsExpanded(true);
//   };

//   const handleMouseLeave = () => {
//     setIsExpanded(false);
//   };

//   const missionStyles = {
//     height: isExpanded ? '300px' : '100px', // change height on hover
//     overflow: 'hidden', // hide overflow content when collapsed
//     transition: 'all 0.3s ease', // add smooth transition on hover
//     padding: '30px', // add some padding to make the section more visually appealing
//   };

//   const missionTextStyles = {
//     opacity: isExpanded ? 1 : 0, // fade in/out mission text on hover
//     transition: 'all 0.3s ease', // add smooth transition on hover
//   };

//   return (
//     <div
//       className={'mission'}
//       style={missionStyles}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="mission-text" style={missionTextStyles}>
//         <h1>Our Mission</h1>
//         <p>
//           Add info about mission statement blah blah blah.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Mission;

