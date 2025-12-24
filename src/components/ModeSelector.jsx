function ModeSelector({ onSelect }) {
  return (
    <div>
      <h2 style={{ marginBottom: "10px" }}>Oyun Modunu Seç</h2>
      <p style={{ color: "#777", marginBottom: "30px" }}>Sana en uygun zorluk seviyesini belirle.</p>
      
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        <div onClick={() => onSelect("Klasik Mod")} style={modeCard("#28a745")}>
          <div style={{ fontSize: "30px" }}>🎮</div>
          <h3 style={{ margin: "10px 0" }}>Klasik Mod</h3>
          <p style={{ fontSize: "12px" }}>Süre sınırı yok. İpucu verilir.</p>
        </div>

        <div onClick={() => onSelect("Zamana Karşı")} style={modeCard("#dc3545")}>
          <div style={{ fontSize: "30px" }}>⏱️</div>
          <h3 style={{ margin: "10px 0" }}>Zamana Karşı</h3>
          <p style={{ fontSize: "12px" }}>20 saniyen var! Hızlı ol.</p>
        </div>
      </div>
    </div>
  );
}

const modeCard = (color) => ({
  background: color,
  color: "white",
  padding: "20px",
  width: "180px",
  borderRadius: "15px",
  cursor: "pointer",
  transition: "0.3s",
  textAlign: "center",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
});

export default ModeSelector;