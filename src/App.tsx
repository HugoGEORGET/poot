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
          let x = event.clientX;
          let y = event.clientY;

          let pootImage = new Image();
          pootImage.src = "./pootis.png";
          pootImage.onload = () => {
            canvasContext?.drawImage(pootImage, x, y);
          };
        };

        let playPootSound = () => {
          let pootSound = new Audio('./poot.mp3');
          pootSound.play();
        }

        let mousedownEvent = (event: MouseEvent) => {
          addImage(event);
          playPootSound();
        }

        canvas.addEventListener("mousedown", mousedownEvent);
      }
    }
  }, []);

  return (
    <div className="App">
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default App;
