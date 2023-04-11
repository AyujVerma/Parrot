import React from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Arthur from "../images/arthur.jpg";
import CatInTheHat from "../images/catinthehat.jpg";
import CuriousGeorge from "../images/curiousgeorge.jpg";
import PawPatrol from "../images/pawpatrol.jpg";
import SofiaTheFirst from "../images/sofiathefirst.jpg";
import WildKratts from "../images/wildkratts.jpg";
import {Link} from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Writing() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <Item><a href="./CatInTheHatVideo"> <img src={CatInTheHat}/> </a></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item><img src={CuriousGeorge}/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item><img src={SofiaTheFirst}/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item><img src={WildKratts}/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item><img src={PawPatrol}/></Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item><img src={Arthur}/></Item>
          </Grid>
      </Grid> 
    </Box>
  );
}