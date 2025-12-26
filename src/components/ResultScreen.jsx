import React from "react";

function ResultScreen({ result, onRestart }) {
  const { success, message, modeInfo } = result;

  return (
    <div>
      <h1 style={{ color: success ? "#27ae60" : "#e74c3c", fontSize: "2.5rem" }}>
        {success ? "🏆 Kazandın!" : "😔 Kaybettin!"}
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>{message}</p>

      {success && modeInfo && (
        <div style={{ marginTop: "20px", padding: "20px", background: "#f1f8f5", borderRadius: "15px", border: `2px solid ${modeInfo.color}` }}>
          <div style={{ fontSize: "50px" }}>🎖️</div>
          <h3>Yeni Rozet: {modeInfo.badge}</h3>
          <p>Tebrikler, bu alanda ne kadar iyi olduğunu kanıtladın!</p>
        </div>
      )}

      <button 
        onClick={onRestart} 
        style={{ 
          marginTop: "30px", 
          padding: "12px 30px", 
          background: "#333", 
          color: "#fff", 
          border: "none", 
          borderRadius: "10px", 
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Ana Menüye Dön
      </button>
    </div>
  );
}

export default ResultScreen;