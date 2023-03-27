
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

  
  return (
    <div className="CatInTheHatPage">

      <Carousel wrap = {false} interval={null} indicators={false} prevIcon="" prevLabel="">
        {vidList.map((vidObj) => {
          return (
            <Carousel.Item key={vidObj.id}>
              <ReactPlayer
                url={vidObj.src}
                width="100%"
                pip={true}
                controls={true}
                playing={false}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div className="textBox">
        <TextField id="outlined-basic" label="Enter Text Here" variant="outlined" fullWidth/>
      </div>

    </div>
  );
};
  
export default CatInTheHatVideo;

{/* npm i react-player react-bootstrap bootstrap@5.1.3 react-router-dom@6.3.0

*/}
