import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders contact', () => {
  render(<App />, {wrapper: BrowserRouter});
  const linkElement = screen.getByText(/contact/i);
  expect(linkElement).toBeInTheDocument();
});
