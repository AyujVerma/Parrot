import React from "react";
import { Carousel } from "react-bootstrap";
import vid1 from "../videos/vid1.mp4";
import vid2 from "../videos/vid2.mp4";
import vid3 from "../videos/vid3.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import "./videoplayer.css";
import { useState } from "react";
import { useRef } from "react";
import Button from '@mui/material/Button';

const PeppaPigVideo = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
      <Video/>
      <WritingBox/>
    </Box>

  )
}

const Video = () => {
  const vidList = [
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '##FFF',
    padding: theme.spacing(0),
    textAlign: 'center',
  }));
  
  return (
    <div className="PeppaPigPage">

      <br></br>
      <br></br>

      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item elevation = "0" > <Carousel wrap = {false} interval={null} indicators={false} prevIcon="" prevLabel="">
        {vidList.map((vidObj) => {
          return (
            <Carousel.Item key={vidObj.id}>
              <ReactPlayer
                url={vidObj.src}
                width='100%'
                height='100%'
                controls={true}
                playing={true} 
                //loop={true} 
                //muted={true}
              />
            </Carousel.Item>
          );
        })}
      </Carousel></Item>
          </Grid>
        
      </Grid>
      </Box>

    </div>
  );
};

const WritingBox = () => {
  const [text, setText] = useState();

  function onSubmit(event) {
    event.preventDefault();
    console.log(text);
    setText('');
  }

  return (

    <Box component="form" onSubmit={onSubmit}>
      
    <br></br>
    <br></br>
      <TextField
        id="outlined-multiline-flexible"
        multiline
        maxRows={4} fullWidth size="large"
        value={text}
        onInput={(e) => {setText(e.target.value)}}
      />
      <Button type="submit">Submit</Button>
    </Box>
  );
}


  
export default PeppaPigVideo;

