import { render, screen } from '@testing-library/react';
import { Nav } from '../../components/Nav';

describe('Nav.tsx', () => {
  it('renders a nav component', () => {
    render(<Nav />);

    const navBar = screen.getByTestId('nav-bar');

    expect(navBar).toBeInTheDocument();
  });
});
