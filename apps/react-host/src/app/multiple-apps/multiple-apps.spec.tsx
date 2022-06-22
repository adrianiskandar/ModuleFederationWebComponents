import { render } from '@testing-library/react';

import MultipleApps from './multiple-apps';

describe('MultipleApps', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MultipleApps />);
    expect(baseElement).toBeTruthy();
  });
});
