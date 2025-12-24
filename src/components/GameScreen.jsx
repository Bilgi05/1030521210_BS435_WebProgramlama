import { useState, useEffect } from "react";

// Statik örnek veri (Gerçek projede bir API'den veya ayrı bir JSON dosyasından gelmeli)
const GAME_LEVELS = [
  {
    id: 1,
    images: [
      { id: "img1", url: "https://picsum.photos/id/11/300/300", isAI: false },
      { id: "img2", url: "https://picsum.photos/id/10/300/300", isAI: true }, // Bu AI olsun
      { id: "img3", url: "https://picsum.photos/id/12/300/300", isAI: false },
    ],
    hint: "Yapay zeka görsellerinde genellikle arka plan detayları ve insan figürlerindeki küçük kusurlar dikkat çeker. Özellikle eller ve gözlere odaklanın!"
  },
  // İkinci bir seviye eklenebilir
  {
    id: 2,
    images: [
      { id: "img4", url: "https://picsum.photos/id/13/300/300", isAI: false },
      { id: "img5", url: "https://picsum.photos/id/14/300/300", isAI: false },
      { id: "img6", url: "https://picsum.photos/id/15/300/300", isAI: true }, // Bu AI olsun
    ],
    hint: "Simetri ve doğal olmayan desenler yapay zeka ipucu olabilir. Özellikle doğa ve hayvan fotoğraflarında beklenmedik kusurlar arayın."
  }
];

function GameScreen({ mode, onFinish }) {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0); // Çoklu seviye için
  const currentLevel = GAME_LEVELS[currentLevelIndex];

  const [attempts, setAttempts] = useState(0); // 0: hiç tahmin yok, 1: bir yanlış yapıldı (ipucu verildi)
  const [showHint, setShowHint] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20); // Zamana Karşı Modu için süre

  // Zamanlayıcı efekti (Zamana Karşı Modu için)
  useEffect(() => {
    if (mode === "Zamana Karşı" && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (mode === "Zamana Karşı" && timeLeft === 0) {
      onFinish({ success: false, message: "Süre doldu! Daha hızlı olmalısın." });
    }
  }, [timeLeft, mode, onFinish]);

  const handleImageClick = (image) => {
    if (image.isAI) {
      // Doğru Tahmin
      onFinish({ 
        success: true, 
        message: "Tebrikler! Yapay zeka tarafından üretilen görseli doğru tahmin ettin." 
      });
    } else {
      // Yanlış Tahmin
      if (attempts === 0) {
        setAttempts(1);
        setShowHint(true); // İlk yanlışta ipucu göster (Ödev kuralı)
      } else {
        // İkinci yanlışta oyun biter
        onFinish({ 
          success: false, 
          message: "Yanlış tahmin! İkinci şansını da kaybettin. AI seni kandırdı." 
        });
      }
    }
  };

  return (
    <div>
      <h2 style={gameScreenStyles.title}>{mode}</h2>
      {mode === "Zamana Karşı" && (
        <p style={gameScreenStyles.timer}>Kalan Süre: <span style={{ color: timeLeft <= 5 ? '#e74c3c' : '#2c3e50', fontWeight: 'bold' }}>{timeLeft}s</span></p>
      )}
      
      <p style={gameScreenStyles.instruction}>Hangi görsel **yapay zeka (AI)** tarafından üretilmiştir?</p>

      <div style={gameScreenStyles.imageGrid}>
        {currentLevel.images.map((img) => (
          <div 
            key={img.id} 
            onClick={() => handleImageClick(img)}
            style={gameScreenStyles.imageWrapper}
          >
            <img src={img.url} alt="Görsel Seçeneği" style={gameScreenStyles.image} />
          </div>
        ))}
      </div>

      {showHint && (
        <div style={gameScreenStyles.hintBox}>
          <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>💡 İpucu!</p>
          <p>{currentLevel.hint}</p>
          <small style={{ marginTop: '10px', display: 'block', color: '#555' }}>Bir hakkın daha var, dikkatli ol!</small>
        </div>
      )}
    </div>
  );
}

const gameScreenStyles = {
  title: { fontSize: '2rem', marginBottom: '10px', fontWeight: '700', color: '#2c3e50' },
  timer: { fontSize: '1.2rem', marginBottom: '20px', color: '#34495e' },
  instruction: { fontSize: '1.1rem', color: '#7f8c8d', marginBottom: '30px' },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', // Duyarlı ızgara
    gap: '20px',
    marginBottom: '30px',
  },
  imageWrapper: {
    cursor: 'pointer',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    border: '3px solid transparent',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      borderColor: '#3498db',
    },
  },
  image: {
    width: '100%',
    height: '180px', // Yüksekliği sabit tutalım
    objectFit: 'cover',
    display: 'block',
  },
  hintBox: {
    backgroundColor: '#fff3cd',
    border: '1px solid #ffeeba',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '20px',
    color: '#856404',
    textAlign: 'left',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
};

export default GameScreen;