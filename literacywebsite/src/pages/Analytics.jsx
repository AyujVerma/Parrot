import { useState } from 'react';
import PageOne from './Analytics_Reading';
import PageTwo from './Analytics_Writing';
import { createTheme, Switch, FormControlLabel, ThemeProvider, Typography } from "@material-ui/core";

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
      {showPageOne ? <PageOne /> : <PageTwo />}
    </ThemeProvider>
  );
}

export default Analytics;
