import { useState, useEffect} from 'react';
import PageOne from './Analytics_Reading';
import PageTwo from './Analytics_Writing';
import { createTheme, Switch, FormControlLabel, ThemeProvider, Typography } from "@material-ui/core";
import { fontSize } from '@mui/system';
import danny from "../images/danny.png"

const theme = createTheme({
  palette: {
    primary: {
      main: "#fae0a7",
    },
  },
});

function Analytics() {
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
    {showPageOne ? <PageOne /> : <PageTwo />}
    </div>
  );
}

export default Analytics;
