import Outfit from '../../client/src/components/related-items-comparison/Outfit.jsx';
import OutfitCard from '../../client/src/components/related-items-comparison/OutfitCard.jsx';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import axios from 'axios';
const outfitHandler = require('../../server/outfit.js')

describe('Outfit', () => {
  test('renders Outfit component', () => {
    const { getByText } = render(<Outfit />);
    const titleElement = getByText(/Your Outfit/i);
    expect(titleElement).toBeInTheDocument();
  });
});

describe('OutfitCard', () => {
  test('renders outfit card component', () => {
    const { getByTestId } = render(<OutfitCard />);
    const outfitCardElement = getByTestId('outfit-card');
    expect(outfitCardElement).toBeInTheDocument();
  });
});

describe('Outfit Server Handler', () => {
  test('renders one item', () => {
    const outfitObj = outfitHandler([{"product": 71699, "style": 444228 }])
    expect(outfitObj).toBeDefined();
  });
});

const fakeOutfit = {
  query: {
    outfit:[{"product": 71699, "style": 444228 }]
  }
}