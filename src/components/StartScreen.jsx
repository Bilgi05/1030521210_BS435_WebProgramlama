import { useState } from "react";

function StartScreen({ onStart }) {
  const [showRules, setShowRules] = useState(false);

  return (
    <div>
      <h1 style={{ fontSize: "2.5rem", color: "#222", marginBottom: "10px" }}>🤖 AI mı Gerçek mi?</h1>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        Modern dünyada yapay zeka içerikleri her yerde! Bakalım ayırt edebilecek misin?
      </p>

      <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
        <button onClick={onStart} style={primaryBtn}>Oyuna Başla</button>
        <button onClick={() => setShowRules(true)} style={secondaryBtn}>Nasıl Oynanır?</button>
      </div>

      {showRules && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>🎯 Oyun Kuralları</h3>
            <ul style={{ textAlign: "left", fontSize: "14px", lineHeight: "1.8" }}>
              <li>Sana aynı anda 3 farklı görsel sunulacak.</li>
              <li>2'si gerçek, 1'i yapay zeka ürünüdür.</li>
              <li>Yanlış tahminde ipucu verilir ve 2. şans tanınır.</li>
            </ul>
            <button onClick={() => setShowRules(false)} style={closeBtn}>Anladım</button>
          </div>
        </div>
      )}
    </div>
  );
}

// Buton ve Modal Stilleri
const primaryBtn = { background: "#007bff", color: "#fff", border: "none", padding: "12px 25px", borderRadius: "10px", cursor: "pointer", fontWeight: "bold" };
const secondaryBtn = { background: "#6c757d", color: "#fff", border: "none", padding: "12px 25px", borderRadius: "10px", cursor: "pointer" };
const modalOverlay = { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 100 };
const modalContent = { background: "#fff", padding: "30px", borderRadius: "15px", width: "300px", textAlign: "center" };
const closeBtn = { marginTop: "15px", background: "#333", color: "#fff", border: "none", padding: "8px 20px", borderRadius: "5px", cursor: "pointer" };

export default StartScreen;