import { render, screen } from '@testing-library/react';
import DeckList from './DeckList';

test('renders learn react link', () => {
  render(<DeckList />);
  const linkElement = screen.getByText(/Deck List/i);
  expect(linkElement).toBeInTheDocument();
});
