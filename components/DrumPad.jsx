import React from 'react';

const DrumPad = () => {
    return (
        <div>
            <div id="Q" className="drum-pad">Q <audio id="Q" className="clip" src=""></audio></div>
            <div id="W" className="drum-pad">W <audio id="W" className="clip" src=""></audio></div>
            <div id="E" className="drum-pad">E <audio id="E" className="clip" src=""></audio></div>
            <div id="A" className="drum-pad">A <audio id="A" className="clip" src=""></audio></div>
            <div id="S" className="drum-pad">S <audio id="S" className="clip" src=""></audio></div>
            <div id="D" className="drum-pad">D <audio id="D" className="clip" src=""></audio></div>
            <div id="Z" className="drum-pad">Z <audio id="Z" className="clip" src=""></audio></div>
            <div id="X" className="drum-pad">X <audio id="X" className="clip" src=""></audio></div>
            <div id="C" className="drum-pad">C <audio id="C" className="clip" src=""></audio></div>
        </div>
    );
};

export default DrumPad