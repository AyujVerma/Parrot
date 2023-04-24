import { useState, useEffect, useLayoutEffect } from 'react';
import PageOne from './Analytics_Reading';
import PageTwo from './Analytics_Writing';
import { createTheme, Switch, FormControlLabel, ThemeProvider, Typography } from "@material-ui/core";
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

  return (
    <ThemeProvider theme={theme}>
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
          <Typography style={{ fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif'" }}>
            Writing
          </Typography>
        }
        labelPlacement="end"
      />
      {(typeof DBAccuracy != "undefined") && (typeof DBWords != "undefined") && (typeof mostMissed != "undefined") && showPageOne ? <PageOne DBAccuracy={DBAccuracy} DBWords={DBWords} mostMissed={mostMissed}/> : <PageTwo />}
      {/* <PageOne DBAccuracy={DBAccuracy} DBWords={DBWords} mostMissed={mostMissed}/> */}
    </ThemeProvider>
  );
}

export default Analytics;
