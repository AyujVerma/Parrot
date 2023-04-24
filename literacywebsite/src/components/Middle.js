import React, { useState, useEffect} from "react";
import "./Card.css";
import Book from '../images/reading.png';
import Video from '../images/writing.png';
import Analyze from '../images/analytics.png';

const Middle = () => {
  return (
      <div className="grid">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
  );
};

function Card1({ frontText, backText }) {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 500) {
          setTimeout(() => setIsFlipped(true), 1000); // delay for 5 seconds before flipping
        } else {
          setIsFlipped(false);
        }
      };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <div className={`card ${isFlipped ? "flipped" : "notFlipped"}`}>
        <div className="card-front">
        <img src={Book} width='300px'/>
          <p style={{color: '#A25A44', fontSize: '35px'}}> Read</p>
        </div>
        <div className="card-back">
        <div className="card-text"> 
            <p style={{color: '#A25A44', fontSize: '35px'}}>Reading</p>
            <p>Talk along to your favorite shows and movies! Walk through a video and get real-time feedback on speech fluency, grammar, and accuracy.</p>
         </div>
        </div>
      </div>
    );
  }
  
  function Card2({ frontText, backText }) {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 500) {
          setTimeout(() => setIsFlipped(true), 1000); // delay for 5 seconds before flipping
        } else {
          setIsFlipped(false);
        }
      };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <div className={`card ${isFlipped ? "flipped" : "notFlipped"}`}>
        <div className="card-front">
        <img src={Video} width='300px'/>
          <p style={{color: '#A25A44', fontSize: '35px'}}> Write </p>
        </div>
        
        <div className="card-back">
        <div className="card-text"> 
            <p style={{color: '#A25A44', fontSize: '35px'}}>Writing</p>
            <p>Type along to your favorite shows and movies! Walk through a video and get real-time feedback on spelling, grammar, and vocabulary.</p>
         </div>
        </div>
      </div>
    );
  }
  
  function Card3({ frontText, backText }) {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 500) {
          setTimeout(() => setIsFlipped(true), 1000); // delay for 5 seconds before flipping
        } else {
          setIsFlipped(false);
        }
      };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <div className={`card ${isFlipped ? "flipped" : "notFlipped"}`}>
        <div className="card-front">
          <img src={Analyze} width='300px'/>
          <p style={{color: '#A25A44', fontSize: '35px'}}> Analyze </p>
        </div>
        <div className="card-back">
          <div className="card-text"> 
            <p style={{color: '#A25A44', fontSize: '35px'}}>Analytics</p>
            <p>Track and review your performance over time in both reading and writing. Get specific feedback to help you improve!</p>
         </div>
        </div>
      </div>
    );
  }

export default Middle;