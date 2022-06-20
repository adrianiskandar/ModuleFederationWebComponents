import { render } from '@testing-library/react';

import Mui from './mui';

describe('Mui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mui />);
    expect(baseElement).toBeTruthy();
  });
});
