import { render, screen, fireEvent } from '@testing-library/react';
import ModeSelector from '../components/ModeSelector';

test('Kategoriler dogru render edilir ve secilebilir', () => {
  const mockOnSelect = jest.fn();
  render(<ModeSelector onSelect={mockOnSelect} />);

  // Doğa Ana kategorisini bul
  const natureCard = screen.getByText(/Doğa Ana/i);
  expect(natureCard).toBeInTheDocument();

  // Karta tıkla
  fireEvent.click(natureCard);

  // onSelect fonksiyonunun "nature" id'si ile çağrıldığını kontrol et
  expect(mockOnSelect).toHaveBeenCalledWith(
    expect.objectContaining({ id: 'nature' })
  );
});