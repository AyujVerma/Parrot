import React, { useState } from "react";
import "./Card.css";
import Book from '../images/Book.png';
import Video from '../images/Video.png';
import Analyze from '../images/Analyze.png';

const Middle = () => {
  return (
    <>
      <h2 className="card-title" style={{fontFamily: "dbippo serif", animation: "fade-up 1s"}}>
        Title of the cards
      </h2>
      <div className="grid">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </>
  );
};

function Card1 ({ frontText, backText }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleMouseEnter = () => {
    setIsFlipped(true);
  };
  const handleMouseLeave = () => {
    setIsFlipped(false);
  };
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-front">
      <img src={Book} alt="Book" className="card-image" />
      <br></br>
        <p className="card-text"> Read</p>
      </div>
      <div className="card-back">
        <p className="card-text"> Info about Reading </p>
      </div>
    </div>
    
  );
}

function Card2 ({ frontText, backText }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleMouseEnter = () => {
      setIsFlipped(true);
    };
    const handleMouseLeave = () => {
      setIsFlipped(false);
    };
    return (
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-front">
        <img src={Video} alt="Book" className="card-image" />
        <br></br>
          <p className="card-text"> Write </p>
        </div>
        <div className="card-back">
          <p className="card-text"> Info about Writing </p>
        </div>
      </div> 
      
    );
  }

  function Card3 ({ frontText, backText }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleMouseEnter = () => {
      setIsFlipped(true);
    };
    const handleMouseLeave = () => {
      setIsFlipped(false);
    };
    return (
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-front">
        <img src={Analyze} alt="Book" className="card-image" />
        <br></br>
          <p className="card-text"> Analyze </p>
        </div>
        <div className="card-back">
          <p className="card-text"> Info about Analyze </p>
        </div>
      </div>
      
    );
  }

export default Middle;