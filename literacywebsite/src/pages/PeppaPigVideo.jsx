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
import Diff from '../WritingTextDiff.js';
import thumbnail from '../images/peppapigthumbnail.jpg';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

const PeppaPigVideo = () => {
  const [correcttext, setcorrecttext] = useState("");
  const [usertext, setusertext] = useState("");

  const pageHeader = () => {
    return (
      <div>
      <Box className="videoPageHeader">
        <h1>Now Watching: Peppa Pig</h1>
        <p> Click on the arrow to begin! </p>
      </Box>
      <div class="middlesection">
  <br></br>
  <div class="button-group">
<PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <React.Fragment>
      <Button variant="contained" sx={{ backgroundColor: '#F6BBAA', '&:hover': { backgroundColor: '#F6BBAA' }, boxShadow: "none" }}{...bindTrigger(popupState)}>
        Season 1
      </Button>
      <Menu PaperProps={{
    elevation: 0,
    sx: { boxShadow: 'none' },
  }} {...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Episode 1</MenuItem>
        <MenuItem onClick={popupState.close}>Episode 2</MenuItem>
      </Menu>
    </React.Fragment>
  )}
</PopupState>
<PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <React.Fragment>
      <Button variant="contained" sx={{ backgroundColor: '#F6BBAA', '&:hover': { backgroundColor: '#F6BBAA' }, boxShadow: "none" }}{...bindTrigger(popupState)}>
        Season 2
      </Button>
      <Menu PaperProps={{
    elevation: 0,
    sx: { boxShadow: 'none' },
  }}{...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Episode 1</MenuItem>
        <MenuItem onClick={popupState.close}>Episode 2</MenuItem>
      </Menu>
    </React.Fragment>
  )}
</PopupState>
<PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <React.Fragment>
      <Button variant="contained" sx={{ backgroundColor: '#F6BBAA', '&:hover': { backgroundColor: '#F6BBAA' }, boxShadow: "none" }}{...bindTrigger(popupState)}>
        Season 3
      </Button>
      <Menu PaperProps={{
    elevation: 0,
    sx: { boxShadow: 'none' },
  }}{...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Episode 1</MenuItem>
        <MenuItem onClick={popupState.close}>Episode 2</MenuItem>
      </Menu>
    </React.Fragment>
  )}
</PopupState>
<PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <React.Fragment>
      <Button variant="contained" sx={{ backgroundColor: '#F6BBAA', '&:hover': { backgroundColor: '#F6BBAA' }, boxShadow: "none" }}{...bindTrigger(popupState)}>
        Season 4
      </Button>
      <Menu PaperProps={{
    elevation: 0,
    sx: { boxShadow: 'none' },
  }}{...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Episode 1</MenuItem>
        <MenuItem onClick={popupState.close}>Episode 2</MenuItem>
      </Menu>
    </React.Fragment>
  )}
</PopupState>
<PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <React.Fragment>
      <Button variant="contained" sx={{ backgroundColor: '#F6BBAA', '&:hover': { backgroundColor: '#F6BBAA' }, boxShadow: "none" }}{...bindTrigger(popupState)}>
        Season 5
      </Button>
      <Menu PaperProps={{
    elevation: 0,
    sx: { boxShadow: 'none' },
  }}{...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Episode 1</MenuItem>
        <MenuItem onClick={popupState.close}>Episode 2</MenuItem>
      </Menu>
    </React.Fragment>
  )}
</PopupState>
</div>
</div>
</div>
    )
  }

  const WritingBox = () => {
    const chunks = ["It is tea time, and mummy pig has a surprise for everyone.", "Today is a day for pancakes.", "Pancakes. Delicious."];
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [correctText, setCorrectText] = useState(chunks[index]);
    const [userText, setUserText] = useState(text);
    function onSubmit(event) {
      event.preventDefault();
      console.log(text);
      setText('');
      setusertext(text);
      setIndex(index => index + 1);
      setcorrecttext(chunks[index]);
    }
    return (
      <div>
      <div className="textbox" style={{ display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <TextField
          id="outlined-multiline-flexible"
          multiline
          maxRows={4} fullWidth size="large"
          placeholder="Listen to the video and type what you hear!"
          rows={17}
          value={text}
          onInput={(e) => {setText(e.target.value)}}
          sx={{
            '.MuiInputBase-input': { fontSize: '1.5rem' },
          }}
        />
        <div  classname="textboxbutton">
        <button onClick={onSubmit} style={{ marginTop: '10%' , backgroundColor: '#f6bbaa'}}>
              Submit
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

      </div>

      
    );
  }
  
  const ResultBox = () => {
    return (
      <div className="bottomsection"><div className='resultbox'><Diff text1={correcttext} text2={usertext} /> </div> </div>
    );
  }

  return (
    <div>
      {pageHeader()}
    <Box className="page">
      <div className="video">{Video()}</div>
      <div className="writing">{WritingBox()}</div>
    </Box>
      <ResultBox/>
    </div>
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
      <Carousel wrap={false} interval={null} indicators={false} prevIcon="" prevLabel=""  nextIcon={<ArrowCircleRightIcon sx={{ color: "#000", fontSize: "80px"}}/>}>
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
          <video
            src={vidObj.src}
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
export default PeppaPigVideo;