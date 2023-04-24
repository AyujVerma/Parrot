import { useState, useEffect, useLayoutEffect } from 'react';
import PageOne from './Analytics_Reading';
import PageTwo from './Analytics_Writing';
import { createTheme, Switch, FormControlLabel, ThemeProvider, Typography } from "@material-ui/core";
import { fontSize } from '@mui/system';
import danny from "../images/danny.png"
import { getDatabase, set, ref, child, get } from "firebase/database";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fae0a7",
    },
  },
});

function Analytics() {
  const[DBAccuracy, setDBAccuracy] = new useState();
  const[DBWords, setDBWords] = new useState();
  const[mostMissed, setMostMissed] = new useState([]);

  useEffect(() => {
    // Load the map from Firebase when the component mounts
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'user/wrongWordsMap')).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setMostMissed(data);
      }
    });
  }, [DBAccuracy, DBWords]);


async function readToDb() {
    const dbRef = ref(getDatabase());
    await get(child(dbRef, 'user/accuracy')).then((snapshot) => {
      if(snapshot.exists()) {
        setDBAccuracy(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  
    await get(child(dbRef, 'user/wordsPerMinute')).then((snapshot) => {
      if(snapshot.exists()) {
        setDBWords(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  async function getVals() {
    await readToDb();
  }

  useLayoutEffect(() => {
    getVals();
  }, []);

  const [showPageOne, setShowPageOne] = useState(true);

  const handleSwitchChange = () => {
    setShowPageOne(!showPageOne);
  };

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
      const fullText = "Welcome, Danny Perille";
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(intervalId);
        }
      }, 100);
    }, []);


  return (
    <div>
      <div className="top-section">
        <img src={danny} style={{ width: "150px", height: "150px"}}/>
        <h1> {displayText} </h1>
        <FormControlLabel
      style={{ marginLeft: "20px" }}
      control={
        <Switch
          checked = {!showPageOne}
          onChange = {handleSwitchChange}
          color = "primary"
          size = "large"
        />
      }
      label={
        <Typography variant="h5">
          {showPageOne ? "Reading" : "Writing"}
        </Typography>
      }
      labelPlacement="end"
    />
      </div>
    {(typeof DBAccuracy != "undefined") && (typeof DBWords != "undefined") && (typeof mostMissed != "undefined") && showPageOne ? <PageOne DBAccuracy={DBAccuracy} DBWords={DBWords} mostMissed={mostMissed}/> : <PageTwo />}
      {/* <PageOne DBAccuracy={DBAccuracy} DBWords={DBWords} mostMissed={mostMissed}/> */}
    </div>
  );
}

export default Analytics;
