import Related from '../../client/src/components/related-items-comparison/Related.jsx';
import RelatedCard from '../../client/src/components/related-items-comparison/Related.jsx';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import axios from 'axios';

// describe('Related', () => {
//   it('renders', () => {
//     render(<Related />);
//     const related = screen.getByText(/Loading Related Items.../i);
//     expect(related).toBeInTheDocument()
//   });
//   it('fetches related items', async () => {
//     const mockData = [{ id: 1 }, { id: 2 }, { id: 3 }];
//     axios.get.mockResolvedValueOnce({ data: mockData });
//     render(<Related productID={1} />);
//     await waitFor(() => expect(screen.getByText(/Related Items:/i)).toBeInTheDocument());
//     expect(axios.get).toHaveBeenCalledWith('/relatedItems', { params: { productID: 1 } });
//     expect(screen.getByText(/Loading Related Items.../i)).not.toBeInTheDocument();
//     expect(screen.getByText(/1/)).toBeInTheDocument();
//     expect(screen.getByText(/2/)).toBeInTheDocument();
//     expect(screen.getByText(/3/)).toBeInTheDocument();
//   });
// });

jest.mock('axios');

// Sample related items data
const mockRelatedItems = [
  { id: 1, name: 'Related Item 1' },
  { id: 2, name: 'Related Item 2' },
  { id: 3, name: 'Related Item 3' },
  { id: 4, name: 'Related Item 4' },
  { id: 5, name: 'Related Item 5' },
];

describe('Related', () => {
  it('displays a loading message when data is still loading', async () => {
    axios.get.mockResolvedValueOnce({ data: mockRelatedItems });
    render(<Related productID={123} />);
    expect(screen.getByText('Loading Related Items...')).toBeInTheDocument();
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    expect(screen.getByText('Related Items:')).toBeInTheDocument();
  });

  it('displays related items when data is loaded', async () => {
    axios.get.mockResolvedValueOnce({ data: mockRelatedItems });
    render(<Related productID={123} />);
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    expect(screen.getByText('Related Items:')).toBeInTheDocument();
    expect(screen.getByText('Related Item 1')).toBeInTheDocument();
    expect(screen.getByText('Related Item 2')).toBeInTheDocument();
    expect(screen.getByText('Related Item 3')).toBeInTheDocument();
    expect(screen.getByText('Related Item 4')).toBeInTheDocument();
    expect(screen.queryByText('Related Item 5')).not.toBeInTheDocument();
  });

  it('disables the left arrow button when the first set of related items is displayed', async () => {
    axios.get.mockResolvedValueOnce({ data: mockRelatedItems });
    render(<Related productID={123} />);
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    const leftArrowButton = screen.getByText('<');
    expect(leftArrowButton).toHaveAttribute('disabled');
  });

  it('disables the right arrow button when the last set of related items is displayed', async () => {
    axios.get.mockResolvedValueOnce({ data: mockRelatedItems });
    render(<Related productID={123} />);
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    const rightArrowButton = screen.getByText('>');
    fireEvent.click(rightArrowButton);
    fireEvent.click(rightArrowButton);
    fireEvent.click(rightArrowButton);
    expect(rightArrowButton).toHaveAttribute('disabled');
  });

  it('clicking a related item updates the product ID', async () => {
    axios.get.mockResolvedValueOnce({ data: mockRelatedItems });
    const setProductID = jest.fn();
    render(<Related productID={123} setProductID={setProductID} />);
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    const relatedItem = screen.getByText('Related Item 1');
    fireEvent.click(relatedItem);
    expect(setProductID).toHaveBeenCalledWith(1);
  });
});