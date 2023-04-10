import React from "react";
import { Carousel } from "react-bootstrap";
import vid1 from "../videos/vid1.mp4";
import vid2 from "../videos/vid2.mp4";
import vid3 from "../videos/vid3.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import "./videoplayer.css";
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Diff from '../TextDiff.js';
import thumbnail from '../images/peppapigthumbnail.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PeppaPigVideo = () => {
  
  return (
    <Box className="page">
      <div className="video"><Video/></div>
      <div className="writing"><WritingBox/></div>
    </Box>

  )
}

const Video = () => {
  const vidList = [
    {
      id: 0,
      src: thumbnail,
    },
    {
      id: 1,
      src: vid1,
    },
    {
      id: 2,
      src: vid2,
    },
    {
      id: 3,
      src: vid3,
    },
  ];
  
  return (
    <div className="PeppaPigPage">

      <br></br>
      <br></br>

      <Carousel wrap={false} interval={null} indicators={false} prevIcon="" prevLabel=""  nextIcon={<ArrowForwardIcon sx={{ color: "#FF7F50", fontSize: "80px"}}/>}>
  {vidList.map((vidObj, index) => {
    if (index === 0) {
      // Render an image for the first slide
      return (
        <Carousel.Item key={vidObj.id}>
          <img src={vidObj.src} alt="First slide" width="100%" height="100%" />
        </Carousel.Item>
      );
    } else {
      // Render a video for all other slides
      return (
        <Carousel.Item key={vidObj.id}>
          <ReactPlayer
            url={vidObj.src}
            width="100%"
            height="100%"
            controls={true}
          />
        </Carousel.Item>
      );
    }
  })}
</Carousel>

    </div>
  );
};

const WritingBox = () => {
  
  const chunks = ["It is tea time, and mummy pig has a surprise for everyone.", "Today is a day for pancakes.", "Pancakes. Delicious."];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(''); 
  const [correctText, setCorrectText] = useState(chunks[index]);
  const [userText, setUserText] = useState(text);
 
  function handleIndex() {
    setIndex(index + 1);
  }

  function handleText() {
    if (index < chunks.length) {
      setCorrectText(chunks[index]);
    } 
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(text);
    setText('');
    setUserText(text);
    setIndex(index => index + 1);
    setCorrectText(chunks[index]);
  }

  return (

    <Box component="form" onSubmit={onSubmit}>
      
    <br></br>
    <br></br>
      <TextField
        id="outlined-multiline-flexible"
        multiline
        maxRows={4} fullWidth size="large"
        placeholder="Listen to the video and type what you hear!"
        variant="filled"
        rows={17}
        value={text}
        onInput={(e) => {setText(e.target.value)}}
        sx={{
          '.MuiInputBase-input': { fontSize: '1.5rem' },
        }}
      />
      <Button type="submit">Submit</Button>

      <div className='resultBox'> <div> {correctText} </div>
        <div> {userText} </div> <Diff text1={correctText} text2={userText} /> </div>
    </Box>
  );
}


  
export default PeppaPigVideo;

