import React, { useState, useEffect} from "react";
import "./Card.css";
import Book from '@mui/icons-material/AutoStories';
import Video from '@mui/icons-material/OndemandVideo';
import Analyze from '@mui/icons-material/Insights';

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
          setTimeout(() => setIsFlipped(true), 2000); // delay for 5 seconds before flipping
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
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
         <Book sx={{ color: "#FFF", fontSize: "250px"}}/>
          <br></br>
          <p className="card-text"> Read</p>
        </div>
        <div className="card-back">
          <p className="card-text"> Info about Reading </p>
        </div>
      </div>
    );
  }
  
  function Card2({ frontText, backText }) {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 500) {
          setTimeout(() => setIsFlipped(true), 2000); // delay for 5 seconds before flipping
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
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
          <Video sx={{ color: "#FFF", fontSize: "250px"}}/>
          <br></br>
          <p className="card-text"> Write </p>
        </div>
        <div className="card-back">
          <p className="card-text"> Info about Writing </p>
        </div>
      </div>
    );
  }
  
  function Card3({ frontText, backText }) {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 500) {
          setTimeout(() => setIsFlipped(true), 2000); // delay for 5 seconds before flipping
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
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
          <Analyze sx={{ color: "#FFF", fontSize: "250px"}}/>
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