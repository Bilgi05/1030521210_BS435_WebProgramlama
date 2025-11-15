import { useState } from "react";
import StartScreen from "./components/StartScreen";

function App() {
  const [started, setStarted] = useState(false);
  const [images, setImages] = useState([]);

  function initializeGameImages() {
    setImages(["img1", "img2", "img3"]);
  }

  function restartGame() {
    setStarted(false);
    setImages([]);
  }

  return (
    <>
      {!started ? (
        <StartScreen
          onStart={() => {
            initializeGameImages();
            setStarted(true);
          }}
        />
      ) : (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            fontFamily: "sans-serif",
          }}
        >
          <h2>Oyun ekranı yakında eklenecek...</h2>
          <button
            onClick={restartGame}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Yeni Tur Başlat
          </button>
        </div>
      )}
    </>
  );
}

export default App;
