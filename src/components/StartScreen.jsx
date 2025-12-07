import { useState } from "react";

function StartScreen({ onStart }) {
  const [showRules, setShowRules] = useState(false);

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
            transition: "0.25s ease",
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

        {/* Kurallar Butonu */}
        <button
          onClick={() => setShowRules(true)}
          style={{
            marginLeft: "10px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Kurallar
        </button>

        {/* Modal */}
        {showRules && (
          <div
            style={{
              marginTop: "25px",
              padding: "18px",
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "8px",
              width: "280px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h3 style={{ marginBottom: 10 }}>Oyun Kuralları</h3>

            <p style={{ fontSize: "14px", color: "#444", marginBottom: 15 }}>
              • Gösterilen görüntünün gerçek mi yoksa yapay zeka üretimi mi olduğunu tahmin et.<br />
              • Doğru tahmin puan kazandırır.<br />
              • Yanlış tahmin puan kaybettirir.<br />
              • Hedef: En yüksek puanı yapmak.
            </p>

            <button
              onClick={() => setShowRules(false)}
              style={{
                backgroundColor: "#dc3545",
                color: "#fff",
                padding: "8px 16px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Kapat
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default StartScreen;
