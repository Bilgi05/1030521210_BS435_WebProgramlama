import { useState } from "react";
import StartScreen from "./components/StartScreen";
import ModeSelector from "./components/ModeSelector";
import GameScreen from "./components/GameScreen";
import ResultScreen from "./components/ResultScreen";

function App() {
  const [started, setStarted] = useState(false);
  const [mode, setMode] = useState(null);
  const [result, setResult] = useState(null);

  if (!started) {
    return <StartScreen onStart={() => setStarted(true)} />;
  }

  if (!mode) {
    return <ModeSelector onSelect={setMode} />;
  }

  if (result !== null) {
    return (
      <ResultScreen
        result={result}
        onRestart={() => {
          setStarted(false);
          setMode(null);
          setResult(null);
        }}
      />
    );
  }

  return <GameScreen mode={mode} onFinish={setResult} />;
}

export default App;
