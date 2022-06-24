import { render } from '@testing-library/react';

import IFrame from './i-frame';

describe('IFrame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IFrame />);
    expect(baseElement).toBeTruthy();
  });
});
