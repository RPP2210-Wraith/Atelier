import Overview from '../client/src/components/overview/Overview.jsx';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('loads and displays overview', () => {
  it('renders', () => {
    render(<Overview url="/overview"/>);
    const overview = screen.getByText(/Overview/i);
    expect(overview).toBeInTheDocument()
    // expect(screen.getByRole('h3')).not.toBeDisabled()

  })
});
