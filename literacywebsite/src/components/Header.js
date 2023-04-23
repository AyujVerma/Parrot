import React, { Component } from "react";
import final from '../images/final.png';
import Button from '@mui/material/Button';

class Header extends Component {
    state = {
      title: "",
      subtitle: "",
      isTypingTitle: true,
      isTypingSubtitle: true,
    };
    componentDidMount() {
      const titleText = "Parrot.";
      const subtitleText = "Learn to read and write!!";
      let count = 0;
      let subtitleCount = 0;
      this.setState({ showCursor: false });
      setTimeout(() => {
        const intervalId = setInterval(() => {
          if (count === titleText.length) {
            clearInterval(intervalId);
            this.setState({ isTypingTitle: false });
            setTimeout(() => {
              this.setState({ showCursor: false });
            }, 500);
          } else {
            this.setState({ title: titleText.slice(0, count) });
            count++;
          }
        }, 200);
      }, 1000);
      setTimeout(() => {
        const subtitleIntervalId = setInterval(() => {
          if (subtitleCount === subtitleText.length) {
            clearInterval(subtitleIntervalId);
            this.setState({ isTypingSubtitle: false });
          } else {
            this.setState({ subtitle: subtitleText.slice(0, subtitleCount) });
            subtitleCount++;
          }
        }, 100);
      }, 1000);
      const finalImage = document.querySelector('.final-image');
      finalImage.style.transform = 'translateX(-100%)';
      finalImage.style.opacity = 0;
      setTimeout(() => {
        finalImage.style.transition = 'all 1s';
        finalImage.style.transform = 'translateX(0%)';
        finalImage.style.opacity = 1;
      }, 200);
    }
    render() {
      const { title, subtitle, isTypingTitle, isTypingSubtitle } = this.state;
      return (
        <header style={{backgroundImage: 'radial-gradient(circle at left, #FFFFFF, #9BD0C3)',
         height: '100vh', margin: '0', padding: '0', display: 'flex', justifyContent: 'center',
          alignItems: 'left', flexDirection: 'column', textAlign: 'left' }}>
          <img src={final} alt="ParrotLogo" style={{ width: '70%', height: 'auto' , paddingLeft: 150, position: 'absolute', zIndex: '1', opacity: 0}} className="final-image"/>
          <h1 style={{ margin: '0', padding: '0', paddingBottom: 230, paddingLeft: 550, letterSpacing: '0.1em', fontSize: 100,
          fontWeight: 350, color: 'BLACK', position: 'absolute', zIndex: '2' }}>
            {isTypingTitle ? `${title}|` : title}
          </h1>
          <h2 style={{ margin: '0', padding: '0', paddingBottom: 230, paddingLeft: 550, paddingTop: 145, fontSize: 30, fontWeight: 50, color: 'BLACK',
          position: 'absolute', fontStyle: 'italic', zIndex: '3' }}>
            {!isTypingTitle && isTypingSubtitle ? `${subtitle}|` : subtitle}
          </h2>
          <div style={{ display: 'flex', justifyContent: 'left' }}>
            <button style={{ marginTop: 210 , marginLeft: 560, backgroundColor: '9bd0c3', outlineColor: 'black'}}>
              Get Started
            </button>
            <button style={{ marginTop: 210 , marginLeft: 30, backgroundColor: '9bd0c3', outlineColor: 'black'}}>
              Login
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'right', flexDirection: 'column', alignItems: 'flex-end', position: 'absolute', top: '27%', right: '7%', width: '20%', height: '70%', padding: '50px', backgroundColor: '#F1F1F1', color: 'black', borderRadius: '25px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

            <h3 style={{fontSize: '35px'}}>Why Parrot?</h3>
            <p style={{fontSize: '20px', paddingTop: '20px'}}>Who said reading had to be boring? Parrot combines popular video and text content with data analytics to create fun, interactive lessons on reading and writing for kids 5-10. </p>
            {/* <Button variant="contained" sx={{backgroundColor: '#f6bbaa', boxShadow: "none", outlineColor: '#2f2f2f', '&:hover': { backgroundColor: '#f6bbaa', boxShadow: "none" }}}>Learn More</Button> */}
            <button style={{ marginTop: '2%' , backgroundColor: '#f6bbaa'}}>
              Learn More
            </button>
          </div>
          </div>

          <style>
            {`
            button {
              background-color: #9BD0C3;
              color: white;
              border: none;
              border: 2px solid #2f2f2f;
              border-radius: 4px;
              width: 130px;
              height: 40px;
              outlineColor: 'black';
            }
            `}
          </style>
</header>
      );
    }
  }
  export default Header;