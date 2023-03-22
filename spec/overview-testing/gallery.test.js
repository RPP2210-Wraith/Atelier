import Gallery from '../../client/src/components/overview/Gallery.jsx';
import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

describe('AddToCGallery', () => {
  test('renders Gallery component', () => {
    const { getByRole } = render(<Gallery />);
    const image = getByRole('img');
    expect(image).toBeInTheDocument()
  });
});
