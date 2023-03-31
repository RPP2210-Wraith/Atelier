import StyleSelector from '../../client/src/components/overview/StyleSelector.jsx';
import {render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

describe('StyleSelector', () => {
  test('renders StyleSelector component', () => {
    const { getByTestId } = render(<StyleSelector />);
    const checkmark = getByTestId('checkmark');
    expect(checkmark).toBeInTheDocument()
  });
});
