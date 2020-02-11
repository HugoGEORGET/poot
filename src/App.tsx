import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    let canvas = document.getElementById("canvas");

    if (canvas instanceof HTMLCanvasElement) {
      let canvasContext = canvas.getContext("2d");

      if (canvasContext instanceof CanvasRenderingContext2D) {
        canvasContext.canvas.width = window.innerWidth;
        canvasContext.canvas.height = window.innerHeight;

        let addImage = (event: MouseEvent) => {
          console.log("addImage");
          let x = event.clientX;
          let y = event.clientY;

          let pootImage = new Image();
          pootImage.src = "./pootis.png";
          pootImage.onload = () => {
            canvasContext?.drawImage(pootImage, x, y);
          };
        };

        canvas.addEventListener("mousedown", addImage);
      }
    }
  }, []);

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
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default App;
