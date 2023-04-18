import { useState } from 'react';
import PageOne from './Analytics_Reading';
import PageTwo from './Analytics_Writing';
import { createTheme, Switch, FormControlLabel, ThemeProvider, Typography } from "@material-ui/core";
import AnalyticsWelcome from '../components/AnalyticsWelcome'
import { fontSize } from '@mui/system';

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

  return (
    <div>
      <div className="top-section">
        <h1> Welcome, Danny Perille </h1>
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
    <AnalyticsWelcome/>
      </div>
    {showPageOne ? <PageOne /> : <PageTwo />}
    </div>
  );
}

export default Analytics;
