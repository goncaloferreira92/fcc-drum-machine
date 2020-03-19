import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'

const audioBank = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];




function App() {

  let audioElement = useRef(null);
  const [keyDescription, setKeyDescription] = useState(null);

  const keyDownHandler = ({ key }) => {

    const keyCaps = key.toUpperCase();
    console.log(keyCaps);

    const indexKey = audioBank.findIndex(x => x.keyTrigger === keyCaps);
    if (indexKey >= 0) {
      // The console.log's are for debugging purposes.
      console.log(indexKey);
      console.log(audioBank[indexKey].url);
      const audioKey = new Audio(audioBank[indexKey].url);
      audioKey.play();

      displayHandler(indexKey);

    } else {
      console.log(indexKey);
      return;
    }

    
    

  };

  const keyUpHandler = () => {
    return;
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };
  }, []);

  const displayHandler = (refIndex) => {
    setKeyDescription(audioBank[refIndex].id);
  }


  const DrumPad = ({ showLetter, description, url }) => {

    const playAudioHandler = (url) => {
      let audio = new Audio(url);
      audio.play();

      console.log(url) // Foda-se, consegui caralho!! :) Fiz uma Async assim do nada.

      const indexKey = audioBank.findIndex(x => x.url === url)
      displayHandler(indexKey)

    }

    
    return (
      <button type="button" className="drum-pad btn btn-light" id={description} onClick={async () => await playAudioHandler(url)}>
        <p> {showLetter} </p>
        <audio
        className="clip"
        id={showLetter}
        src={url}
        ref={ref => audioElement = ref}        
        />
      </button>
      
    )
  }
  
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
        
          {audioBank.map(i => (
            <DrumPad
              className="drum-pad"
              id={i.keyTrigger}
              showLetter={i.keyTrigger}
              description={i.id}
              url={i.url}
              keyCode={i.keyCode}
            />
          ))}
          {keyDescription}
        </div>
      </div>
    </div>
    
  );
}

export default App;
