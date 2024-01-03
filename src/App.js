import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";


const App = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className="container" id="all">
                <div id="one">
                  <h2>Voice to Text</h2>
                </div>
                <br/>

                <div id="m">
                <div id="main" className="main-content" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>
                </div>

                <div className="btn-style">

                    <button onClick={setCopied} className="btn btn-primary m-3">
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button onClick={startListening} className="btn btn-success m-3">Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening} className="btn m-3 btn-danger">Stop Listening</button>

                </div>

            </div>

        </>
    );
};

export default App;