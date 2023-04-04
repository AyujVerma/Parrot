import { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Typography, CssBaseline, Button } from '@mui/material';

const pigStory = "Once upon a time there was an old Sow with three little Pigs, and as she had not enough to keep them, she sent them out to seek their fortune. The first that went off met a Man with a bundle of straw, and said to him, \"Please, Man, give me that straw to build me a house\"; which the Man did, and the little Pig built a house with it. Presently came along a Wolf, and knocked at the door, and said, \"Little Pig, little Pig, let me come in.\" To which the Pig answered, \"No, no, by the hair of my chinny chin chin.";
const chunks = pigStory.split(/(?<=[.?!])/);

const Dictaphone = () => {

    const [index, setIndex] = useState(0);
    const [outputText, setOutputText] = useState('Click \'Change Text\' to begin!');
    const [time, setTime] = useState(0);
    const [firstClock, startClock] = useState(false);
    const [running, setRunning] = useState(false);

    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);

    function handleIndex() {
        setIndex(index + 1);
    }

    function handleText() {
        if (index < chunks.length) {
            setOutputText(chunks[index]);
        } else {
            setOutputText('finished');
        }
    }

    function listenContinuously() {
        SpeechRecognition.startListening({
          continuous: true,
          language: 'en-GB',
        });
    };

    function updateReadingPage() {
        handleIndex();
        handleText();
        resetTranscript();
        listenContinuously();

        // control clock
        if (!firstClock) {
          startClock(true);
          setRunning(true);
        } else {
          setTime(0);

        }
        console.log(time/1000);
      }

    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();
  
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }

    const log = () => {
        console.log({transcript});
    }
  
    return (
      <div>
        <div>
            <div>
            <Typography 
                variant="h3"
                align='center'
            >Hello Reading World </Typography>
            </div>
            <div> 
            <CssBaseline />
            <Typography 
                style={{backgroundColor:'skyblue', marginTop: 50, marginLeft: 95, fontSize: 40, maxHeight: 300}}
                maxWidth="lg"
                height={500}
            >{outputText} </Typography>
            <Button
                style={{marginLeft: 1155, marginTop: 10}}
                variant='contained'
                onClick = {updateReadingPage}
            >Change Text!</Button>
            </div>
        </div>
        <div style={{float:'left', maxWidth: 900, marginLeft: 95}}>
            <p 
                style={{fontSize:30, marginBottom:50}}
            >{transcript}</p>
        </div>
        <div style={{float:'right', marginRight:140}}>
            <Button
                style={{marginLeft:140, marginTop: 10}}
                variant='contained'
                onClick={log}
            >Submit</Button>
            <div style={{marginTop: 180}}>
                <p 
                >Microphone: {listening ? 'on' : 'off'}</p>
                <Button 
                    variant='contained'
                    color='success'
                    onClick={listenContinuously}
                >Start</Button>
                <Button
                    variant='contained'
                    onClick={SpeechRecognition.stopListening}
                >Stop</Button>
                <Button 
                    variant='contained'
                    color='error'
                    onClick={resetTranscript}
                >Reset</Button>
            </div>
        </div>
      </div>
    );
  };
  export default Dictaphone;