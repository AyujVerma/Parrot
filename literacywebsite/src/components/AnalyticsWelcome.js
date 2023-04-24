import React from "react";
import fire from '../images/fire.png';
import book from '../images/bookicon.png';
import coin from '../images/coin.png';

const AnalyticsWelcome = (props) => {
const streak = props.streak;
const num= props.num; 
const content= props.content;
const verb= props.verb;
const points = props.points;
    return (
        
<div>
  <div style={{ 
    flex: 1, 
    padding: 10, 
    display: "flex", 
    justifyContent: "space-between", 
    marginTop: 20, 
    marginBottom: 20, 
    marginLeft: 10, 
    marginRight: 10 }}>
      <div style={{ 
        width: "30%", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center"}}>
          <img src={fire} style={{width: '100px', height: '100px'}}/>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: 30, fontWeight: "3px" }}>{streak}</div>
          <span style={{ fontSize: 25, fontWeight: "2px"}}>DAY STREAK </span>
      </div>
      <div style={{ width: "30%", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center"}}>
          <img src={book} style={{width: '100px', height: '100px'}}/>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: 30, fontWeight: "3px" }}>{num}</div>
          <span style={{ fontSize: 25, fontWeight: "2px"}}>{content} {verb} </span>
      </div>
      <div style={{ width: "30%", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center"}}>
          <img src={coin} style={{width: '100px', height: '100px'}}/>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: 30, fontWeight: "3px" }}>{points}</div>
          <span style={{ fontSize: 25, fontWeight: "2px"}}> POINTS UNTIL NEXT LEVEL </span>
      </div>
  </div>
</div>
    );
}

export default AnalyticsWelcome;