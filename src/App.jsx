import { useState } from "react";
import StartScreen from "./components/StartScreen";
import ModeSelector from "./components/ModeSelector";
import GameScreen from "./components/GameScreen";

function App() {
  const [started, setStarted] = useState(false);
  const [mode, setMode] = useState(null);

  if (!started) {
    return <StartScreen onStart={() => setStarted(true)} />;
  }

  if (!mode) {
    return <ModeSelector onSelect={setMode} />;
  }

  return <GameScreen mode={mode} />;
}

export default App;
