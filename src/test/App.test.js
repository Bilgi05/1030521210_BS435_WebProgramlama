import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('Uygulama baslar ve basla butonu calisir', () => {
  render(<App />);
  // Başlangıç ekranındaki başlığı kontrol et
  const titleElement = screen.getByText(/AI mı Gerçek mi/i);
  expect(titleElement).toBeInTheDocument();

  // Başla butonunu bul ve tıkla
  const startBtn = screen.getByText(/Oyuna Başla/i);
  fireEvent.click(startBtn);

  // Kategori seçme ekranının geldiğini doğrula
  const categoryTitle = screen.getByText(/Kategori Seç/i);
  expect(categoryTitle).toBeInTheDocument();
});