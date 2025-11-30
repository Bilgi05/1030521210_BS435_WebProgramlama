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
        <h1 style={{ marginBottom: 10 }}>AI Image Detector Game</h1>

        <p style={{ marginBottom: 20, color: "#555" }}>
          Gerçek mi, yapay zeka ürünü mü? Hadi test edelim!
        </p>

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
            transition: "0.25s ease",     // ✨ Yeni özellik: hover transition
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#0056c7";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.transform = "scale(1)";
          }}
        >
          Başla
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
