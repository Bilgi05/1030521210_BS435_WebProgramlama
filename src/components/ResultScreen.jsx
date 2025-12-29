import React from "react";

function ResultScreen({ result, onRestart }) {
  const { success, message, modeInfo } = result;

  // Sadece ana menüye döner, rozetleri silmez
  const handleContinue = () => {
    onRestart(); // App.jsx'teki restart'ı tetikler
  };

  // Tüm verileri siler ve sıfırdan başlatır
  const handleFullReset = () => {
    if (window.confirm("Tüm rozetlerin silinecek. Emin misin?")) {
      localStorage.clear();
      onRestart();
    }
  };

  // Buton Stilleri
  const btnStyle = {
    padding: "12px 25px", borderRadius: "10px", border: "none",
    cursor: "pointer", fontWeight: "bold", width: "220px", marginBottom: "10px"
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: success ? "#27ae60" : "#e74c3c", fontSize: "2.5rem" }}>
        {success ? "🏆 Başarılı!" : "😔 Olmadı..."}
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>{message}</p>

      {success && modeInfo && (
        <div style={{ 
          marginTop: "10px", padding: "15px", background: "#f1f8f5", 
          borderRadius: "15px", border: `2px solid ${modeInfo.color}`, marginBottom: "25px" 
        }}>
          <div style={{ fontSize: "40px" }}>🎖️</div>
          <h3>{modeInfo.badge} Rozeti Alındı!</h3>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
        {/* DÖKÜMAN GEREKLİLİĞİ: Yeni tur / Devam et butonu */}
        <button onClick={handleContinue} style={{ ...btnStyle, background: "#28a745", color: "#fff" }}>
          🔄 Devam Et / Yeni Kategori
        </button>

        {/* Ekstra Seçenek: Tam Sıfırlama */}
        <button onClick={handleFullReset} style={{ ...btnStyle, background: "#6c757d", color: "#fff", fontSize: "0.8rem" }}>
          🗑️ Tüm Rozetleri Sıfırla
        </button>
      </div>
    </div>
  );
}

export default ResultScreen;