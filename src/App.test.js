import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza el nombre de la comunidad', () => {
  render(<App />);
  const brandOccurrences = screen.getAllByText(/Couchsurfing Pereira/i);
  expect(brandOccurrences.length).toBeGreaterThan(0);
});
