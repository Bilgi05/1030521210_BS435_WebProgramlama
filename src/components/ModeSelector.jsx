function ModeSelector({ onSelect }) {
  const categories = [
    { id: "nature", title: "Doğa Ana", icon: "🏔️", desc: "Manzaralardaki kusurları bul.", color: "#2D5A27", badge: "Kaşif" },
    { id: "portrait", title: "İnsan Yüzleri", icon: "🎭", desc: "Gözler yalan söylemez mi?", color: "#8E44AD", badge: "Psikolog" },
    { id: "art", title: "Sanat Üstadı", icon: "🎨", desc: "Gerçek tabloları AI'dan ayırt et.", color: "#C0392B", badge: "Küratör" }
  ];

  return (
    <div>
      <h2 style={{ fontSize: "2rem", color: "#2c3e50", fontWeight: "800" }}>Kategori Seç ve Rozetini Kazan</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginTop: "30px" }}>
        {categories.map((cat) => (
          <div key={cat.id} onClick={() => onSelect(cat)} style={{ 
            background: "#fff", padding: "25px", width: "200px", borderRadius: "20px", 
            cursor: "pointer", boxShadow: "0 10px 20px rgba(0,0,0,0.05)", 
            borderTop: `6px solid ${cat.color}`, textAlign: "center" 
          }}>
            <div style={{ fontSize: "45px" }}>{cat.icon}</div>
            <h3 style={{ margin: "10px 0" }}>{cat.title}</h3>
            <p style={{ fontSize: "13px", color: "#666" }}>{cat.desc}</p>
            <div style={{ marginTop: "15px", backgroundColor: cat.color, color: "white", padding: "5px 12px", borderRadius: "15px", fontSize: "11px", fontWeight: "bold" }}>
              🎖️ {cat.badge} Rozeti
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModeSelector;