function ModeSelector({ onSelect }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <h2>Oyun Modunu Seç</h2>

      <div style={{ marginTop: 30, display: "flex", gap: 20 }}>
        <button
          onClick={() => onSelect("easy")}
          style={buttonStyle}
        >
          Easy Mode
          <p style={descStyle}>İpucu verilir</p>
        </button>

        <button
          onClick={() => onSelect("hard")}
          style={buttonStyle}
        >
          Hard Mode
          <p style={descStyle}>İpucu yok</p>
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "20px",
  width: "160px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  backgroundColor: "#007bff",
  color: "#fff",
};

const descStyle = {
  fontSize: "12px",
  marginTop: 8,
  opacity: 0.9,
};

export default ModeSelector;
