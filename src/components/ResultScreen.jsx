import React from "react";

function ResultScreen({ result, onRestart }) {
  const isSuccess = result?.success;
  const message = result?.message || (isSuccess ? "Tebrikler!" : "Maalesef olmadı.");

  return (
    <div>
      <div style={resultScreenStyles.icon}>
        {isSuccess ? '🏆' : '😔'}
      </div>
      <h1 style={{ ...resultScreenStyles.title, color: isSuccess ? '#27ae60' : '#e74c3c' }}>
        {isSuccess ? 'Kazandın!' : 'Kaybettin!'}
      </h1>
      <p style={resultScreenStyles.message}>{message}</p>

      {!isSuccess && (
        <div style={resultScreenStyles.hintBox}>
          <p><strong>İpucu:</strong> Yapay zeka görsellerinde özellikle insan ellerinde, dişlerde veya arka plan detaylarında garip kusurlar bulunabilir. Ayrıca ışıklandırmaya da dikkat edin!</p>
        </div>
      )}

      <button onClick={onRestart} style={resultScreenStyles.restartButton}>
        Yeniden Oyna
      </button>
    </div>
  );
}

const resultScreenStyles = {
  icon: { fontSize: '4rem', marginBottom: '20px' },
  title: { fontSize: '2.8rem', marginBottom: '15px', fontWeight: '700' },
  message: { fontSize: '1.2rem', color: '#555', marginBottom: '30px' },
  hintBox: {
    backgroundColor: '#f8d7da', // Hata için açık kırmızı
    border: '1px solid #f5c6cb',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '20px',
    marginBottom: '30px',
    color: '#721c24',
    textAlign: 'left',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  restartButton: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '15px 30px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1.2rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s, transform 0.2s',
    boxShadow: '0 4px 12px rgba(52, 152, 219, 0.3)',
    '&:hover': { backgroundColor: '#2980b9', transform: 'translateY(-2px)' }
  },
};

export default ResultScreen;