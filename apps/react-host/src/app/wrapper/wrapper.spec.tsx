import { render } from '@testing-library/react';

import Wrapper from './wrapper';

describe('Wrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Wrapper />);
    expect(baseElement).toBeTruthy();
  });
});
