import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza el título del hero', () => {
  render(<App />);
  const titulo = screen.getByRole('heading', { level: 1, name: /Couchsurfing/i });
  expect(titulo).toBeInTheDocument();
});

test('renderiza el botón de WhatsApp en la sección contacto', () => {
  render(<App />);
  const boton = screen.getByText(/Chatear por WhatsApp/i);
  expect(boton).toBeInTheDocument();
});
