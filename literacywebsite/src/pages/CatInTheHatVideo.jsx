
import React from "react";
import { Carousel } from "react-bootstrap";
import vid1 from "../videos/video_1.mp4";
import vid2 from "../videos/video_2.mp4";
import vid3 from "../videos/video_3.mp4";
import vid4 from "../videos/video_4.mp4";
import vid5 from "../videos/video_5.mp4";
import vid6 from "../videos/video_6.mp4";
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

const CatInTheHatVideo = () => {
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
    {
      id: 4,
      src: vid4,
    },
    {
      id: 5,
      src: vid5,
    },
    {
      id: 6,
      src: vid6,
    },
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '##FFF',
    padding: theme.spacing(0),
    textAlign: 'center',
  }));
  
  return (
    <div className="CatInTheHatPage">

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
              />
            </Carousel.Item>
          );
        })}
      </Carousel></Item>
          </Grid>
          <Grid item xs={4}>
            <Item elevation = "0"> <div className="textBox">
            <TextField
          id="outlined-multiline-flexible"
          multiline
          maxRows={4} fullWidth size="large"
        />
      </div> 
      <button  style={{ margin: "16px" }}>
        Submit
      </button>
      </Item>
          </Grid>
      </Grid>
      </Box>

    </div>
  );
};


  
export default CatInTheHatVideo;

{/* npm i react-player react-bootstrap bootstrap@5.1.3 react-router-dom@6.3.0

<Carousel wrap = {false} interval={null} indicators={false} prevIcon="" prevLabel="">
        {vidList.map((vidObj) => {
          return (
            <Carousel.Item key={vidObj.id}>
              <ReactPlayer
                url={vidObj.src}
                pip={true}
                width='80%'
                height='80%'
                controls={true}
                playing={false}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>

      <br></br>
      <br></br>

      <div className="textBox">
        <TextField id="outlined-basic" label="Enter Text Here" variant="outlined" width="100%"/>
      </div>

*/}
