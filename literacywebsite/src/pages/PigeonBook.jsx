import { useState, useEffect, useMemo } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Diff from '../TextDiff.js';
import "./reading.css";
import IconButton from '@mui/material/IconButton';
import pigeonBanner from '../images/pigeonbanner.jpg';

import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MicOffIcon from '@mui/icons-material/MicOff';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FlagIcon from '@mui/icons-material/Flag';

const pigStory = "Once upon a time there lived a lion in a forest. One day after a heavy meal. It was sleeping under a tree. After a while, there came a mouse and it started to play on the lion. Suddenly the lion got up with anger and looked for those who disturbed its nice sleep. Then it saw a small mouse standing trembling with fear. The lion jumped on it and started to kill it. The mouse requested the lion to forgive it. The lion felt pity and left it. The mouse ran away. On another day, the lion was caught in a net by a hunter. The mouse came there and cut the net. Thus it escaped. There after, the mouse and the lion became friends. They lived happily in the forest afterwards.";
const chunks = pigStory.split(/(?<=[.?!])/);

const Reading = () => {
    const [userText, setUserText] = useState('');
    const [correctText, setCorrectText] = useState('');

    const [index, setIndex] = useState(0);
    const [outputText, setOutputText] = useState('Click the arrow to begin!');
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [firstClick, completeFirstClick] = useState(true);
    const [secondClick, completeSecondClick] = useState(true);
    const [finishedFlag, setFinishedFlag] = useState(false);

    const [wrongWordsMap, setWrongWordsMap] = useState(new Map());

    const [numDiff, setNumDiff] = useState(1);

    const [diffFlag, setDiffFlag] = useState(false);
    const [readingFlag, setReadingFlag] = useState(false);
    const memoizedElement = useMemo(() => {
      return <Diff text1={correctText} text2={userText} wrongWordsMap={wrongWordsMap} addToMap={addToMap} secondClick={secondClick} time={time/1000} numDiff={numDiff} setNumDiff={setNumDiff}/>;
    }, [diffFlag]);

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

    const [disableSubmit, setDisableSubmit] = useState(true);

function addToMap(tempMap) {
  for (let [word, frequency] of tempMap) {
    if(wrongWordsMap.has(word))
          {
            setWrongWordsMap(wrongWordsMap => new Map(wrongWordsMap.set(word, wrongWordsMap.get(word) + frequency)));
          }
          else
          {
            setWrongWordsMap(wrongWordsMap => new Map(wrongWordsMap.set(word, frequency)));
          }
  }
}

function undisableSubmit() {
  setDisableSubmit(false);
  SpeechRecognition.stopListening();
}

function handleText() {
  if (index < chunks.length) {
    setOutputText(chunks[index]);
  } else {
    setFinishedFlag(true);
    setOutputText('The End.');
    console.log(wrongWordsMap);
  }
}

    function listenContinuously() {
        SpeechRecognition.startListening({
          continuous: true,
          language: 'en-GB',
        });
    };

    const [micOn, setMic] = useState(false);

    useEffect(() => {
      if (micOn) {
        listenContinuously();
      } else {
        SpeechRecognition.stopListening();
      }
    }, [micOn]);

    function handleChange() {
      setMic(!micOn);
    }

    function updateReadingPage() {
        if (finishedFlag) {
          undisableSubmit();
          return;
        }


        if (!firstClick) {
          completeSecondClick(false);
        }

        completeFirstClick(false);

        // analyze user text
        setCorrectText(outputText.replace(/[^\w\s\']|_/g, "").trim());
        setUserText(transcript.trim());

        // update displayed text, transcript, and microphone after next arrow is clicked
        if (!readingFlag) {
          setTime(0);
          handleIndex();
          handleText();
          resetTranscript();
          listenContinuously();
  
          setRunning(true);
        } else { // when submit button is clicked
          setDiffFlag(!diffFlag);
          SpeechRecognition.stopListening();
          setRunning(false);
        }
        setReadingFlag(!readingFlag);
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
  
    return (
      <div>

<div className="banner"> <img src={pigeonBanner} width="100%"/> </div>
<div className='reading-page'>
        <div>

              <div className='readingBox'>
                {outputText}
              </div>
              <br></br>

            <div className='microphoneButtons'>
            <IconButton onClick={handleChange} disabled={!disableSubmit}> {listening ? <KeyboardVoiceIcon/> : <MicOffIcon/>} </IconButton>
            </div>

            <IconButton 
                onClick={resetTranscript} disabled={!disableSubmit}> <RestartAltIcon/> </IconButton>

            <div className='submitButtons'> 
            <IconButton
                onClick = {updateReadingPage} disabled={!disableSubmit}> {finishedFlag? "Finished" : readingFlag? "Submit" : <ArrowForwardIosIcon/>} </IconButton>
            </div>

        </div>

        <br></br>
        
        <div className='speakingBox'>{transcript}</div>
      
        <div className='resultBox'> <div> {readingFlag? "" : memoizedElement} </div></div>
        </div>
      </div>
    );
  };
  export default Reading;