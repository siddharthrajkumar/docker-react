import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Gomu Gomu Noooooooo! link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Gomu Gomu Noooooo!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Gomu Gomu Noooooooo! link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Gomu Gomu Noooooo!/i);
  expect(linkElement).toBeInTheDocument();
});