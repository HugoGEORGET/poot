import React from "react";
import "./App.css";

const App = () => {
  function playAudio() {
    if (document.getElementById("poot")) {
      let pootAudio = document.getElementById("poot");

      if (pootAudio instanceof HTMLMediaElement) {
        pootAudio.play();
      }
    }
  }

  return (
    <div className="App" onClick={() => playAudio()}>
      <audio id="poot" preload="auto" src="./poot.mp3"></audio>
    </div>
  );
};

export default App;
