import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard title', () => {
  render(<App />);
  const textElement = screen.getByText(/DevOps Pipeline Dashboard/i);
  expect(textElement).toBeInTheDocument();
});
