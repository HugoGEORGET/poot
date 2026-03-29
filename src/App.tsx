import React, { useEffect } from "react";
import "./App.css";

const addImageToCanvas = (event: MouseEvent, canvasContext: CanvasRenderingContext2D) => {
  let x = event.clientX;
  let y = event.clientY;

  let pootImage = new Image();
  pootImage.src = "./pootis.png";
  pootImage.onload = () => {
    canvasContext?.drawImage(pootImage, x - 50, y - 50);
  };
};

const pootSound = new Audio("./poot.mp3");
const onMouseDownFunc = (event: MouseEvent, canvasContext: CanvasRenderingContext2D) => {
  addImageToCanvas(event, canvasContext);
  pootSound.play();
};

const App = () => {
  const canvas = document.getElementById("canvas");

  useEffect(() => {
    if (canvas instanceof HTMLCanvasElement) {
      const canvasContext = canvas.getContext("2d");

      if (canvasContext instanceof CanvasRenderingContext2D) {
        canvasContext.canvas.width = window.innerWidth;
        canvasContext.canvas.height = window.innerHeight;

        canvas.addEventListener("mousedown", (event) => onMouseDownFunc(event, canvasContext));
        window.addEventListener("resize", () => {
          if (canvasContext instanceof CanvasRenderingContext2D) {
            canvasContext.canvas.width = window.innerWidth;
            canvasContext.canvas.height = window.innerHeight;
          }
        });
      }
    }
  }, [canvas]);

  return (
    <div className="App">
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default App;
