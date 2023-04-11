import React from 'react';
import Header from "../components/Header.js";
import Middle from "../components/Middle.js";
import Mission from "../components/Mission.js";

import Footer from "../components/Footer.js"; // import the Footer component



function Home() {
  return (
    <div>
      <Header />
      <br></br>
      <Mission />
      <br></br>
      <Middle />
      <br></br>
      <Footer />
    </div>
     
  );
  
}

export default Home;

