function GameScreen({ mode }) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fafafa",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Ana Oyun Ekranı</h2>

      <p style={{ color: "#555", marginTop: 10 }}>
        Burada 3 görsel gösterilecek (2 gerçek, 1 AI)
      </p>

      <div
        style={{
          marginTop: 30,
          padding: 20,
          border: "2px dashed #ccc",
          borderRadius: 10,
        }}
      >
        Görseller yakında eklenecek
      </div>
    </div>
  );
}

export default GameScreen;
