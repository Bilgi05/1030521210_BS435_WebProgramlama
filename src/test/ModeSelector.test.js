import { render, screen, fireEvent } from '@testing-library/react';
import ModeSelector from '../components/ModeSelector';

test('Kategoriler dogru render edilir ve secilebilir', () => {
  const mockOnSelect = jest.fn();
  // Boş bir rozet dizisi göndererek bileşeni test ediyoruz
  render(<ModeSelector onSelect={mockOnSelect} earnedBadges={[]} />);

  const natureCard = screen.getByText(/Doğa Ana/i);
  expect(natureCard).toBeInTheDocument();

  fireEvent.click(natureCard);
  expect(mockOnSelect).toHaveBeenCalledWith(
    expect.objectContaining({ id: 'nature' })
  );
});