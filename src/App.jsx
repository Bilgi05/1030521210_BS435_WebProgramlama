import { useState } from "react";
import StartScreen from "./components/StartScreen";
import ModeSelector from "./components/ModeSelector";
import GameScreen from "./components/GameScreen";
import ResultScreen from "./components/ResultScreen";

function App() {
  const [step, setStep] = useState("START");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [result, setResult] = useState(null);

  const mainLayout = {
    minHeight: "100vh", width: "100vw", display: "flex",
    justifyContent: "center", alignItems: "center",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    margin: 0, padding: "20px", boxSizing: "border-box"
  };

  const glassCard = {
    background: "rgba(255, 255, 255, 0.95)", borderRadius: "24px",
    padding: "40px", boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
    width: "100%", maxWidth: "800px", textAlign: "center"
  };

  return (
    <div style={mainLayout}>
      <div style={glassCard}>
        {step === "START" && <StartScreen onStart={() => setStep("MODE")} />}
        {step === "MODE" && <ModeSelector onSelect={(cat) => { setSelectedCategory(cat); setStep("GAME"); }} />}
        {step === "GAME" && (
          <GameScreen
            mode={selectedCategory}
            onFinish={(res) => {
              setResult({ ...res, modeInfo: selectedCategory });

              if (res.success) {
                const currentBadges = JSON.parse(localStorage.getItem("user_badges") || "[]");
                if (!currentBadges.includes(selectedCategory.badge)) {
                  currentBadges.push(selectedCategory.badge);
                  localStorage.setItem("user_badges", JSON.stringify(currentBadges));
                }
              }
              setStep("RESULT");
            }}
          />
        )}
        {step === "RESULT" && <ResultScreen result={result} onRestart={() => { setStep("START"); setSelectedCategory(null); setResult(null); }} />}
      </div>
    </div>
  );
}

export default App;