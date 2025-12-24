import { useState } from "react";
import StartScreen from "./components/StartScreen";
import ModeSelector from "./components/ModeSelector";
import GameScreen from "./components/GameScreen";
import ResultScreen from "./components/ResultScreen";

function App() {
  const [step, setStep] = useState("START");
  const [mode, setMode] = useState(null);
  const [result, setResult] = useState(null);

  // Sayfayı tam ortalayan ana stil
  const mainLayout = {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Estetik mor-mavi gradyan
    margin: 0,
    padding: "20px",
    boxSizing: "border-box",
    overflowX: "hidden"
  };

  // İçerik kartı
  const glassCard = {
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "24px",
    padding: "40px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "600px", // Kartın çok yayılmasını önler
    textAlign: "center"
  };

  return (
    <div style={mainLayout}>
      <div style={glassCard}>
        {step === "START" && (
          <StartScreen onStart={() => setStep("MODE")} />
        )}
        
        {step === "MODE" && (
          <ModeSelector onSelect={(selectedMode) => {
            setMode(selectedMode);
            setStep("GAME");
          }} />
        )}
        
        {step === "GAME" && (
          <GameScreen mode={mode} onFinish={(res) => {
            setResult(res);
            setStep("RESULT");
          }} />
        )}
        
        {step === "RESULT" && (
          <ResultScreen result={result} onRestart={() => {
            setStep("START");
            setMode(null);
            setResult(null);
          }} />
        )}
      </div>
    </div>
  );
}

export default App;