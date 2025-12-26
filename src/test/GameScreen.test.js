import { render, screen, fireEvent } from '@testing-library/react';
import GameScreen from '../components/GameScreen';

const mockMode = { id: 'nature', title: 'Doğa Ana', badge: 'Kaşif' };

test('Yanlis tahminde ipucu kutusu gorunur hale gelir', () => {
  render(<GameScreen mode={mockMode} onFinish={() => {}} />);
  
  // Tüm görselleri (img rollerini) al
  const images = screen.getAllByRole('img');
  
  // İlk (varsayılan olarak yanlış olan) görsele tıkla
  fireEvent.click(images[0]);

  // İpucu metninin veya "İkinci Şans" uyarısının göründüğünü doğrula
  const hintText = screen.getByText(/İkinci Şans/i);
  expect(hintText).toBeInTheDocument();
});