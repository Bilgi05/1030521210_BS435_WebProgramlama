function StartScreen({ onStart }) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#f5f5f5",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ marginBottom: 20 }}>AI Image Detector Game</h1>
        <button
          onClick={onStart}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "12px 28px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Başla
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
