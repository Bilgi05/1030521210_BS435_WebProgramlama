import { useState } from "react";
import StartScreen from "./components/StartScreen";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {!started ? (
        <StartScreen onStart={() => setStarted(true)} />
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