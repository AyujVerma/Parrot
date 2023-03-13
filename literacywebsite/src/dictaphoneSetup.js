import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button } from '@mui/material';
import Reading from "./components/Reading.jsx";

const Dictaphone = () => {
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const listenContinuously = () => {
        SpeechRecognition.startListening({
          continuous: true,
          language: 'en-GB',
        });
      };
  
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
  
    return (
      <div>
        <div style={{float:'left', maxWidth: 900, marginLeft: 95}}>
            <p 
                style={{fontSize:30, marginBottom:200}}
            >{transcript}</p>
        </div>
        <div style={{float:'right', marginRight: 140, marginTop: 250}}>
            <p 
                style={{marginLeft:165}}
            >Microphone: {listening ? 'on' : 'off'}</p>
            <Button 
                style={{marginLeft:50}}
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
    );
  };
  export default Dictaphone;