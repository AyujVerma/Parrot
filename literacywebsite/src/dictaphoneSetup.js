import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button } from '@mui/material';

const Dictaphone = ({listenContinuously}) => {
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