function ResultScreen({ result, onRestart }) {
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
      <h1 style={{ marginBottom: 20 }}>
        {result ? "🎉 Kazandın!" : "❌ Kaybettin"}
      </h1>

      <button
        onClick={onRestart}
        style={{
          padding: "12px 24px",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#007bff",
          color: "#fff",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Yeniden Oyna
      </button>
    </div>
  );
}

export default ResultScreen;
