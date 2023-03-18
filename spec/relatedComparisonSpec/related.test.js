import Related from '../../client/src/components/related-items-comparison/Related.jsx';
import RelatedCard from '../../client/src/components/related-items-comparison/Related.jsx';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('Related', () => {
  it('renders', () => {
    render(<Related />);
    const related = screen.getByText(/Loading Related Items.../i);
    expect(related).toBeInTheDocument()
  })
});

