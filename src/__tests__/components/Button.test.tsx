import { render, screen } from '@testing-library/react';
import { Button } from '../../components/Button';

describe('Nav.tsx', () => {
  it('renders a nav component', () => {
    render(<Button>Button</Button>);

    const button = screen.getByText('Button');

    expect(button).toBeInTheDocument();
  });
});
