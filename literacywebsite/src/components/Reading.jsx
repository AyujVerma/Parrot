import React, { Component } from 'react';
import { Typography, CssBaseline, Button } from '@mui/material';
import Dictaphone from '../dictaphoneSetup.js'
import Diff from '../TextDiff'

const pigStory = "This is a test. second sentence, this is a very long one just to see how it turns out? hello third! Wow this is four.";
const chunks = pigStory.split(/(?<=[.?!])/);
const text1 = 'One day after a heavy meal';
const text2 = 'one day after a heavy meal';
class Reading extends Component {

  state = { 
    index: 0,
    outputText: 'Let\'s Begin!'
  };

  handleIndex = () => {
    this.setState({index: this.state.index + 1});
  }

  handleText = () => {
    if (this.state.index < chunks.length) {
      this.setState({outputText: chunks[this.state.index]})
    } else {
      this.setState({outputText: 'finished'})
    }
  }

  getText = () => {
    this.handleIndex();
    this.handleText();
    this.props.listenContinuously();
  }

  render() { 
    return (
      <div>
        <div>
          <Typography 
            variant="h3"
            align='center'
          >Reading </Typography>
        </div>
        <div> 
          <CssBaseline />
          <Typography 
            style={{backgroundColor:'skyblue', marginTop: 50, marginLeft: 95, fontSize: 40, maxHeight: 300}}
            maxWidth="lg"
            height={500}
          >{this.state.outputText} </Typography>
          <Button
            style={{marginLeft: 1155, marginTop: 10}}
            variant='contained'
            onClick = {this.getText}
          >Change Text!</Button>
        </div>
        <div>
          <Dictaphone />
        </div>
        <div>
          {text1}
        </div>
        <div>
          {text2}
        </div>
        <div>
          <Diff text1={text1} text2={text2} />
        </div>
      </div>
    ) ; 
  }
}
 
export default Reading;