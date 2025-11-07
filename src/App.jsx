import { useState } from "react";
import StartScreen from "./components/StartScreen";

function App() {
  const [started, setStarted] = useState(false);
  const [images, setImages] = useState([]); // yeni state

  // oyun başlangıcında fake 3 img ID üret
  function initializeGameImages() {
    const tempImages = ["img1", "img2", "img3"]; // şimdilik placeholder
    setImages(tempImages);
  }

  return (
    <>
      {!started ? (
        <StartScreen
          onStart={() => {
            initializeGameImages(); // <- işlev ekleme
            setStarted(true);
          }}
        />
      ) : (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            fontFamily: "sans-serif",
          }}
        >
          <h2>Oyun ekranı yakında eklenecek...</h2>
        </div>
      )}
    </>
  );
}

export default App;
