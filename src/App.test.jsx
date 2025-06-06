import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a text in the App', () => {
  render(<App />);
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});
