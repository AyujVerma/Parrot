import { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Typography, CssBaseline, Button } from '@mui/material';
import Diff from '../TextDiff.js'

const pigStory = "Once upon a time there lived a lion in a forest. One day after a heavy meal. It was sleeping under a tree. After a while, there came a mouse and it started to play on the lion. Suddenly the lion got up with anger and looked for those who disturbed its nice sleep. Then it saw a small mouse standing trembling with fear. The lion jumped on it and started to kill it. The mouse requested the lion to forgive it. The lion felt pity and left it. The mouse ran away. On another day, the lion was caught in a net by a hunter. The mouse came there and cut the net. Thus it escaped. There after, the mouse and the lion became friends. They lived happily in the forest afterwards.";
const chunks = pigStory.split(/(?<=[.?!])/);

const Dictaphone = () => {

    const [userText, setUserText] = useState('');
    const [correctText, setCorrectText] = useState('');

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
        // analyze user text
        setCorrectText(outputText.replace(/[^\w\s\']|_/g, "").trim());
        setUserText(transcript.trim());

        // update displayed text, transcript, and microphone
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
        </div>
        <div style={{float:'left', maxWidth: 900, marginLeft: 95}}>
            <p 
                style={{fontSize:30, marginBottom:50}}
            >{transcript}</p>
            <div>
              {correctText}
            </div>
            <div>
              {userText}
            </div>
            <div>
              <Diff text1={correctText} text2={userText} />
            </div>
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
    );
  };
  export default Dictaphone;