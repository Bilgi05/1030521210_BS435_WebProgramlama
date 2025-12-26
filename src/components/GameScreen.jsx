import { useState } from "react";

const CATEGORY_DATA = {
  nature: {
    images: [
      { id: "n1", url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=400&h=400&fit=crop", isAI: false },
      { id: "n2", url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=400&h=400&fit=crop", isAI: true },
      { id: "n3", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&h=400&fit=crop", isAI: false },
    ],
    hint: "Doğa fotoğraflarında suyun akışındaki pürüzsüzlüğe ve ışık kırılmalarına bak!"
  },
  portrait: {
    images: [
      { id: "p1", url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&fit=crop", isAI: false },
      { id: "p2", url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400&fit=crop", isAI: true },
      { id: "p3", url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&h=400&fit=crop", isAI: false },
    ],
    hint: "Yüz hatlarındaki aşırı simetriye ve saç tellerinin arka planla birleştiği noktalara odaklan!"
  },
  art: {
    images: [
      { id: "a1", url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=400&h=400&fit=crop", isAI: false },
      { id: "a2", url: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=400&h=400&fit=crop", isAI: false },
      { id: "a3", url: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=400&h=400&fit=crop", isAI: true },
    ],
    hint: "Fırça darbelerinin dokusuna ve boya katmanlarının derinliğine dikkat et!"
  }
};

function GameScreen({ mode, onFinish }) {
  const [disabledImages, setDisabledImages] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const level = CATEGORY_DATA[mode.id];

  const handleImageClick = (image) => {
    if (disabledImages.includes(image.id)) return;
    if (image.isAI) {
      onFinish({ success: true, message: `Harika! ${mode.badge} olmayı hak ettin.` });
    } else {
      if (attempts === 0) {
        setAttempts(1);
        setShowHint(true);
        setDisabledImages([...disabledImages, image.id]);
      } else {
        onFinish({ success: false, message: "İkinci şansını da kaybettin. AI kazandı!" });
      }
    }
  };

  return (
    <div>
      <h2 style={{ color: mode.color }}>{mode.title}</h2>
      <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "20px" }}>
        {level.images.map((img) => (
          <div key={img.id} onClick={() => handleImageClick(img)} style={{
            opacity: disabledImages.includes(img.id) ? 0.4 : 1,
            filter: disabledImages.includes(img.id) ? "grayscale(100%)" : "none",
            cursor: disabledImages.includes(img.id) ? "not-allowed" : "pointer",
            transition: "0.3s", borderRadius: "15px", overflow: "hidden", border: "4px solid #fff"
          }}>
            <img src={img.url} alt="Seçenek" style={{ width: "180px", height: "180px", objectFit: "cover" }} />
          </div>
        ))}
      </div>
      {showHint && (
        <div style={{ backgroundColor: "#fff3cd", padding: "15px", marginTop: "20px", borderRadius: "10px", color: "#856404" }}>
          💡 <b>İkinci Şans!</b> {level.hint}
        </div>
      )}
    </div>
  );
}

export default GameScreen;