import React, { Component } from "react";
<<<<<<< HEAD
import styles from "./styles.css";
import { withRouter } from 'react-router';
import { Container, Grid } from "semantic-ui-react";
import ParrotLogo from '../images/ParrotLogo.PNG';
import final from '../images/final.png';



=======
import final from '../images/final.png';
>>>>>>> 18e3f9101bd95e89263bb56bd580a944f2d6afc7
class Header extends Component {
    state = {
      title: "",
      subtitle: "",
      isTypingTitle: true,
      isTypingSubtitle: true,
    };
<<<<<<< HEAD
  
=======
>>>>>>> 18e3f9101bd95e89263bb56bd580a944f2d6afc7
    componentDidMount() {
      const titleText = "arrot.";
      const subtitleText = "Learn to read and write!!";
      let count = 0;
      let subtitleCount = 0;
      this.setState({ showCursor: false });
<<<<<<< HEAD
    
=======
>>>>>>> 18e3f9101bd95e89263bb56bd580a944f2d6afc7
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
<<<<<<< HEAD
    
=======
>>>>>>> 18e3f9101bd95e89263bb56bd580a944f2d6afc7
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
<<<<<<< HEAD
    


      const finalImage = document.querySelector('.final-image');
      finalImage.style.transform = 'translateX(-100%)';
      finalImage.style.opacity = 0;
  
=======
      const finalImage = document.querySelector('.final-image');
      finalImage.style.transform = 'translateX(-100%)';
      finalImage.style.opacity = 0;
>>>>>>> 18e3f9101bd95e89263bb56bd580a944f2d6afc7
      setTimeout(() => {
        finalImage.style.transition = 'all 1s';
        finalImage.style.transform = 'translateX(0%)';
        finalImage.style.opacity = 1;
      }, 200);
<<<<<<< HEAD

  
      // const book = document.createElement('div');
      // book.classList.add('book');
  
      // const frontCover = document.createElement('div');
      // frontCover.classList.add('cover', 'front');
      // book.appendChild(frontCover);
  
      // const backCover = document.createElement('div');
      // backCover.classList.add('cover', 'back');
      // book.appendChild(backCover);
  
      // document.querySelector('header').appendChild(book);
  
=======
      // const book = document.createElement('div');
      // book.classList.add('book');
      // const frontCover = document.createElement('div');
      // frontCover.classList.add('cover', 'front');
      // book.appendChild(frontCover);
      // const backCover = document.createElement('div');
      // backCover.classList.add('cover', 'back');
      // book.appendChild(backCover);
      // document.querySelector('header').appendChild(book);
>>>>>>> 18e3f9101bd95e89263bb56bd580a944f2d6afc7
      // book.addEventListener('click', () => {
      //   book.classList.add('open');
      //   setTimeout(() => {
      //     book.classList.remove('open');
      //   }, 2000);
      // });
    }
<<<<<<< HEAD
  
    render() {
      const { title, subtitle, isTypingTitle, isTypingSubtitle } = this.state;
  
=======
    render() {
      const { title, subtitle, isTypingTitle, isTypingSubtitle } = this.state;
>>>>>>> 18e3f9101bd95e89263bb56bd580a944f2d6afc7
      return (
        <header style={{ backgroundColor: 'pink',
         height: '100vh', margin: '0', padding: '0', display: 'flex', justifyContent: 'center',
          alignItems: 'left', flexDirection: 'column', textAlign: 'left' }}>
<<<<<<< HEAD
          <img src={final} alt="ParrotLogo" style={{ width: '80%', height: 'auto' , paddingLeft: 150, position: 'absolute', zIndex: '1', opacity: 0}} className="final-image"/> 

          <h1 style={{ margin: '0', padding: '0', paddingLeft: 550, letterSpacing: '0.1em', fontSize: 100, fontFamily: 'Didot, serif',  
=======
          <img src={final} alt="ParrotLogo" style={{ width: '80%', height: 'auto' , paddingLeft: 150, position: 'absolute', zIndex: '1', opacity: 0}} className="final-image"/>
          <h1 style={{ margin: '0', padding: '0', paddingLeft: 550, letterSpacing: '0.1em', fontSize: 100, fontFamily: 'Didot, serif',
>>>>>>> 18e3f9101bd95e89263bb56bd580a944f2d6afc7
          fontWeight: 350, color: 'BLACK', position: 'absolute', zIndex: '2' }}>
            {isTypingTitle ? `${title}|` : title}
          </h1>
          <h2 style={{ margin: '0', padding: '0', paddingLeft: 550, paddingTop: 145, fontSize: 30, fontWeight: 50, color: 'BLACK', fontFamily: 'Didot, sans-serif',
          position: 'absolute', fontStyle: 'italic', zIndex: '3' }}>
            {!isTypingTitle && isTypingSubtitle ? `${subtitle}|` : subtitle}
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button style={{ marginTop: 260 , marginLeft: 80, backgroundColor: '9bd0c3', fontFamily: 'Didot, sans-serif', outlineColor: 'black'}}>
              Get Started
            </button>
            <button style={{ marginTop: 260 , marginLeft: 50, backgroundColor: '9bd0c3', fontFamily: 'Didot, sans-serif', outlineColor: 'black'}}>
              Login
            </button>
          </div>
      <style>
        {`
<<<<<<< HEAD

        button {
          background-color: #9bd0c3;
=======
        button {
          background-color: #9BD0C3;
>>>>>>> 18e3f9101bd95e89263bb56bd580a944f2d6afc7
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
            width: 130px;
            height: 40px;
            paddingLeft: 100px;
<<<<<<< HEAD
            outlineColor: 'black';
    `}
  </style>

=======
            outlineColor: 'black'
    `}
  </style>
>>>>>>> 18e3f9101bd95e89263bb56bd580a944f2d6afc7
        </header>
      );
    }
  }
<<<<<<< HEAD
  
=======
>>>>>>> 18e3f9101bd95e89263bb56bd580a944f2d6afc7
  export default Header;