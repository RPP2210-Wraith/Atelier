import Style from '../../client/src/components/overview/Style.jsx';
import {render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

describe('Style', () => {
  test('renders Style component', () => {
    const { getByTestId } = render(<Style />);
    const styleButton = getByTestId('styleButton-img');
    expect(styleButton).toBeInTheDocument()
  });
});
