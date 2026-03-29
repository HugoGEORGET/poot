import { useEffect } from "react";
import "./App.css";

const addImageToCanvas = (event: MouseEvent, canvasContext: CanvasRenderingContext2D) => {
  const x = event.clientX;
  const y = event.clientY;

  const pootImage = new Image();
  pootImage.src = "pootis.png";
  pootImage.onload = () => {
    canvasContext?.drawImage(pootImage, x - 50, y - 50);
  };
};

const pootSound = new Audio("poot.mp3");
const onMouseDownFunc = (event: MouseEvent, canvasContext: CanvasRenderingContext2D) => {
  addImageToCanvas(event, canvasContext);
  pootSound.play();
};

const App = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    let canvasContext: CanvasRenderingContext2D;

    if (canvas instanceof HTMLCanvasElement) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        canvasContext = ctx // non-null assignment

        if (canvasContext && canvasContext !== null) {
          canvasContext.canvas.width = window.innerWidth;
          canvasContext.canvas.height = window.innerHeight;

          canvas.addEventListener("mousedown", (event) => onMouseDownFunc(event, canvasContext));

          // Handle window resize (change canvas width to window width)
          window.addEventListener("resize", () => {
            canvasContext.canvas.width = window.innerWidth;
            canvasContext.canvas.height = window.innerHeight;
          });
        }
      }
    }

    return () => {
      if (canvasContext) {
        canvas?.removeEventListener('mousedown', (event) => onMouseDownFunc(event, canvasContext))

        window.removeEventListener("resize", () => {
          canvasContext.canvas.width = window.innerWidth;
          canvasContext.canvas.height = window.innerHeight;
        });
      }
    }
  }, []);

  return (
    <div className="App">
      <canvas id="canvas" />
    </div>
  );
};

export default App;
