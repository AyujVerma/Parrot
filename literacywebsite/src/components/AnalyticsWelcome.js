import React from "react";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GradeIcon from '@mui/icons-material/Grade';

const AnalyticsWelcome = () => {
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
        alignItems: "center", 
        color: "#5b5b5b", 
        height: 100, 
        borderRadius: 25, 
        border: "2px solid #2f2f2f", 
        backgroundColor: "#f6bbaa" }}>
          <LocalFireDepartmentIcon style={{fontSize: 40}}/>
          <span style={{ fontSize: 24, marginTop: 10 }}>6 Day Streak!</span>
      </div>
      <div style={{ 
        width: "30%", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        color: "#5b5b5b", 
        height: 100, 
        borderRadius: 25, 
        border: "2px solid #2f2f2f", 
        backgroundColor: "#9bd0c3" }}>
          <EmojiEventsIcon style={{fontSize: 40}}/>
          <span style={{ fontSize: 24, marginTop: 10 }}>17 Books Read!</span>
      </div>
      <div style={{ 
        width: "30%", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        color: "#5b5b5b", 
        height: 100, 
        borderRadius: 25, 
        border: "2px solid #2f2f2f", 
        backgroundColor: 'rgb(250, 224, 167)' }}>
          <GradeIcon style={{fontSize: 40}}/>
          <span style={{ fontSize: 24, marginTop: 10 }}>7 Points till next level!</span>
      </div>
  </div>
</div>
    );
}

export default AnalyticsWelcome;