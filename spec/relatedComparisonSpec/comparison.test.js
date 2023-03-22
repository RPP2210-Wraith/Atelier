import React from 'react';
import { render } from '@testing-library/react';
import Comparison from '../../client/src/components/related-items-comparison/Comparison.jsx';

describe('Comparison component', () => {
  test('renders component correctly', () => {
    const { getByText, getAllByRole } = render(<Comparison />);

    // check if the component renders the header
    // const header = getByText('Comparison');
    // expect(header).toBeInTheDocument();

    // check if the component renders the table rows
    const tableRows = getAllByRole('row');
    expect(tableRows.length).toBe(10); // including the header row
  });
});