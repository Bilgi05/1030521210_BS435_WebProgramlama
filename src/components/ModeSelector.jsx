import React, { useState, useEffect } from "react";

function ModeSelector({ onSelect }) {
  const [earnedBadges, setEarnedBadges] = useState([]);

  // Backend'den (localStorage) verileri çekme
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("user_badges") || "[]");
    setEarnedBadges(saved);
  }, []);

  const categories = [
    { id: "nature", title: "Doğa Ana", icon: "🏔️", color: "#2D5A27", badge: "Kaşif" },
    { id: "portrait", title: "İnsan Yüzleri", icon: "🎭", color: "#8E44AD", badge: "Psikolog" },
    { id: "art", title: "Sanat Üstadı", icon: "🎨", color: "#C0392B", badge: "Küratör" }
  ];

  return (
    <div>
      <h2 style={{ fontSize: "2rem", color: "#2c3e50", fontWeight: "800" }}>Kategori Seç</h2>
      
      {/* Backend'den gelen toplam veri özeti */}
      <div style={{ marginBottom: "20px", padding: "10px", background: "#f1f8f5", borderRadius: "10px", border: "1px solid #d4edda" }}>
        <strong>🏆 Kazanılan Toplam Rozetler: {earnedBadges.length} / {categories.length}</strong>
      </div>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        {categories.map((cat) => {
          const isEarned = earnedBadges.includes(cat.badge);
          return (
            <div key={cat.id} onClick={() => onSelect(cat)} style={{ 
              background: "#fff", padding: "25px", width: "190px", borderRadius: "20px", 
              cursor: "pointer", boxShadow: isEarned ? `0 0 15px ${cat.color}` : "0 10px 20px rgba(0,0,0,0.05)", 
              borderTop: `6px solid ${cat.color}`, textAlign: "center", transition: "0.3s"
            }}>
              <div style={{ fontSize: "45px" }}>{cat.icon}</div>
              <h3>{cat.title}</h3>
              <div style={{ marginTop: "10px", backgroundColor: isEarned ? cat.color : "#ccc", color: "white", padding: "5px", borderRadius: "10px", fontSize: "11px" }}>
                {isEarned ? `✅ ${cat.badge} Sahibi` : `🎖️ ${cat.badge} Rozeti`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ModeSelector;