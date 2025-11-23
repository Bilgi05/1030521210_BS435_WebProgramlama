const ModeSelector = ({ selectedMode, setSelectedMode }) => {
  return (
    <div style={{ display: "inline-block", textAlign: "center" }}>
      <div style={{ marginBottom: 8, fontWeight: 600 }}>Oyun Modu:</div>
      <button
        onClick={() => setSelectedMode("easy")}
        style={{
          marginRight: 8,
          padding: "8px 12px",
          borderRadius: 6,
          border: selectedMode === "easy" ? "2px solid #007bff" : "1px solid #ccc",
          background: selectedMode === "easy" ? "#e6f0ff" : "#fff",
          cursor: "pointer",
        }}
      >
        Kolay
      </button>

      <button
        onClick={() => setSelectedMode("hard")}
        style={{
          padding: "8px 12px",
          borderRadius: 6,
          border: selectedMode === "hard" ? "2px solid #007bff" : "1px solid #ccc",
          background: selectedMode === "hard" ? "#e6f0ff" : "#fff",
          cursor: "pointer",
        }}
      >
        Zor
      </button>

      <div style={{ marginTop: 8, fontSize: 13, opacity: 0.8 }}>
        Seçili mod: {selectedMode === "easy" ? "Kolay" : "Zor"}
      </div>
    </div>
  );
};

export default ModeSelector;
