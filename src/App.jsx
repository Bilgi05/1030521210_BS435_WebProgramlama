import { useState } from "react";
import StartScreen from "./components/StartScreen";
import ModeSelector from "./components/ModeSelector"; // create this file if you haven't yet

function App() {
  const [started, setStarted] = useState(false);
  const [images, setImages] = useState([]);
  const [selectedMode, setSelectedMode] = useState("easy");

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
        // show StartScreen and ModeSelector together (centered)
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "grid",
            placeItems: "center",
            backgroundColor: "#f5f5f5",
            fontFamily: "sans-serif",
            textAlign: "center",
            padding: 16,
          }}
        >
          <div>
            <StartScreen
              onStart={() => {
                initializeGameImages();
                setStarted(true);
              }}
            />
            {/* Mode selector shown on the start screen so user can pick before starting */}
            <div style={{ marginTop: 18 }}>
              <ModeSelector
                selectedMode={selectedMode}
                setSelectedMode={setSelectedMode}
              />
            </div>
          </div>
        </div>
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
          <p style={{ marginTop: 10, opacity: 0.7 }}>
            Selected mode: {selectedMode === "easy" ? "Kolay" : "Zor"}
          </p>

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
