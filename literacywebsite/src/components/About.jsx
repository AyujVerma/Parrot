
import React from "react";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
  
const About = () => {
  return (
    <div>
      <h1>Trying to embed a video</h1>

      <li>
		{/* Endpoint to route to Home component */}
		<Link to="/">Home</Link>
		</li>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/MtN1YnoL46Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     

        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    
    </div>
  );
};
  
export default About;