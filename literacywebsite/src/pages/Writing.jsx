import React from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Arthur from "../images/arthur.jpg";
import CatInTheHat from "../images/catinthehat.jpg";
import CuriousGeorge from "../images/curiousgeorge.jpg";
import MickeyMouse from "../images/mickeymouse.jpg";
import SofiaTheFirst from "../images/sofiathefirst.jpg";
import WildKratts from "../images/wildkratts.jpg";
import WordGirl from "../images/wordgirl.jpg";
import PeppaPig from "../images/peppapig.jpg";
import MyLittlePony from "../images/mylittlepony.jpg";
import Button from '@mui/material/Button';
import "./menuGrid.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '##FFF',
  padding: theme.spacing(3),
  textAlign: 'center',
}));

export default function Writing() {
  return (
    <div>
    <div className="top-section">
        <h1> Parrot Writing</h1>  
        <h4> Click on any show to start watching! </h4> 
        <p> Discover captivating stories, intriguing characters, and endless possibilities. </p>
      </div>

      <div class="middle-section">
  <h5>Choose a Grade Level</h5>
  <br></br>
  <div class="button-group">
  <Button variant="contained" sx={{ backgroundColor: '#f6bbaa', '&:hover': { backgroundColor: '#f6bbaa' }, boxShadow: "none" }}>All Grades</Button>
  <Button variant="contained" sx={{ backgroundColor: '#f6bbaa', '&:hover': { backgroundColor: '#f6bbaa' }, boxShadow: "none" }}>Pre-K</Button>
  <Button variant="contained" sx={{ backgroundColor: '#f6bbaa', '&:hover': { backgroundColor: '#f6bbaa' }, boxShadow: "none" }}>K-1st</Button>
  <Button variant="contained" sx={{ backgroundColor: '#f6bbaa', '&:hover': { backgroundColor: '#f6bbaa' }, boxShadow: "none" }}>2nd-3rd</Button>
</div>
</div>

    <div className="menugrid">
      <Box sx={{ flexGrow: 1 }} className="box">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0" style={{ color: 'white', backgroundColor: '#f9f9f9' }}><a href="./PeppaPigVideo"> <img src={PeppaPig} width="100%"/> </a></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0" style={{ color: 'white', backgroundColor: '#f9f9f9' }}><img src={CatInTheHat} width="100%"/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0" style={{ color: 'white', backgroundColor: '#f9f9f9' }}><img src={WildKratts} width="100%"/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0" style={{ color: 'white', backgroundColor: '#f9f9f9' }}><img src={SofiaTheFirst} width="100%"/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0" style={{ color: 'white', backgroundColor: '#f9f9f9' }}><img src={MyLittlePony} width="100%"/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0" style={{ color: 'white', backgroundColor: '#f9f9f9' }}><img src={Arthur} width="100%"/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0" style={{ color: 'white', backgroundColor: '#f9f9f9' }}><img src={MickeyMouse} width="100%"/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0" style={{ color: 'white', backgroundColor: '#f9f9f9' }}><img src={CuriousGeorge} width="100%"/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0" style={{ color: 'white', backgroundColor: '#f9f9f9' }}><img src={WordGirl} width="100%"/></Item>
          </Grid>
<<<<<<< HEAD
      </Grid> 
    </Box>
=======
      </Grid>
      </Box>
      <br></br>
      <br></br>
    </div>
    </div>
>>>>>>> 18e3f9101bd95e89263bb56bd580a944f2d6afc7
  );
}