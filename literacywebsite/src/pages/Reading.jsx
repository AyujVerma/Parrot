import React from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bfg from "../images/bfg.jpg";
import dontletthepigeondrivethebus from "../images/dontletthepigeondrivethebus.jpg";
import givingtree from "../images/givingtree.jpg";
import humptydumpty from "../images/humptydumpty.jpg";
import ifyougiveamouseacookie from "../images/ifyougiveamouseacookie.jpg";
import rainbowfish from "../images/rainbowfish.jpg";
import runawaybunny from "../images/runawaybunny.jpg";
import snowyday from "../images/snowyday.jpg";
import veryhungrycaterpillar from "../images/veryhungrycaterpillar.jpg";
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
        <h1> Parrot Reading </h1>
        <h4> Click on any book to start reading! </h4> 
        <p> Discover captivating stories, intriguing characters, and endless possibilities. </p>
      </div>

      <div class="middle-section">
  <h5>Choose a Grade Level</h5>
  <br></br>
  <div class="button-group">
  <Button variant="contained" sx={{ backgroundColor: '#f6bbaa', '&:hover': { backgroundColor: '#f6bbaa' }, boxShadow: "none"}}>All Grades</Button>
  <Button variant="contained" sx={{ backgroundColor: '#f6bbaa', '&:hover': { backgroundColor: '#f6bbaa' }, boxShadow: "none" }}>Pre-K</Button>
  <Button variant="contained" sx={{ backgroundColor: '#f6bbaa', '&:hover': { backgroundColor: '#f6bbaa' }, boxShadow: "none" }}>K-1st</Button>
  <Button variant="contained" sx={{ backgroundColor: '#f6bbaa', '&:hover': { backgroundColor: '#f6bbaa' }, boxShadow: "none" }}>2nd-3rd</Button>
</div>
</div>
        
    <div className="menugrid">
      <Box sx={{ flexGrow: 1 }} className="box">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0" style={{ color: 'white', backgroundColor: '#f9f9f9' }}> <a href="./PigeonBook"> <img src={dontletthepigeondrivethebus} width="100%"/> </a> </Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0"style={{ color: 'white', backgroundColor: '#f9f9f9' }}><img src={veryhungrycaterpillar} width="100%"/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0"style={{ color: 'white', backgroundColor: '#f9f9f9' }}><img src={givingtree} width="100%"/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0"style={{ color: 'white', backgroundColor: '#f9f9f9' }}><img src={rainbowfish} width="100%"/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0"style={{ color: 'white', backgroundColor: '#f9f9f9' }}><img src={ifyougiveamouseacookie} width="100%"/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0"style={{ color: 'white', backgroundColor: '#f9f9f9' }}><img src={humptydumpty} width="100%"/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0"style={{ color: 'white', backgroundColor: '#f9f9f9' }}><img src={runawaybunny} width="100%"/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0"style={{ color: 'white', backgroundColor: '#f9f9f9' }}><img src={snowyday} width="100%"/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item elevation = "0"style={{ color: 'white', backgroundColor: '#f9f9f9' }}><img src={bfg} width="100%"/></Item>
          </Grid>
      </Grid>
      </Box>
      <br></br>
      <br></br>
    </div>
    </div>
  );
}