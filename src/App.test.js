import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page text', () => {
  render(<App />);
  const element = screen.getByText(/Home page/i);
  expect(element).toBeInTheDocument();
});
