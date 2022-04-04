import { render, fireEvent } from '@testing-library/react';
import { InputSearch } from '../../components/InputSearch';

describe('InputSearch.tsx', () => {
  const setup = () => {
    const utils = render(<InputSearch />);
    const input = utils.getByPlaceholderText('Search') as HTMLInputElement;
    return {
      input,
      ...utils,
    };
  };

  it('It should keep a in front of the input', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: '23' } });
    expect(input.value).toBe('23');
  });
});
