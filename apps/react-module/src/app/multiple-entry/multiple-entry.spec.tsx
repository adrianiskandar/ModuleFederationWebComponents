import { render } from '@testing-library/react';

import MultipleEntry from './multiple-entry';

describe('MultipleEntry', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MultipleEntry />);
    expect(baseElement).toBeTruthy();
  });
});
