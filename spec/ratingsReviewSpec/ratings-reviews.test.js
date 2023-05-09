import { render, screen } from '@testing-library/react';
import RatingsReviews from '../../client/src/components/ratings-reviews/RatingsReviews.jsx';
import React from 'react';
import '@testing-library/jest-dom';

//when user clicks 'more reviews', more reviews will render

//when sort button is clicked, reviews re-render
//when a new product is clicked, reviews lists rerenders(to show new reviews associated with new product)

const product = {
  name: 'dummy_product'
}

const reviews = [
  {
    review_id: 1277930,
    rating: 2,
    summary: 'testing, testing',
    recommend: true,
    response: null,
    body: 'testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing',
    date: '2022-12-13T00:00:00.000Z',
    reviewer_name: 'Tony Vo',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1277929,
    rating: 2,
    summary: 'testing, testing',
    recommend: true,
    response: null,
    body: 'testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing',
    date: '2022-12-13T00:00:00.000Z',
    reviewer_name: 'Tony Vo',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1277955,
    rating: 1,
    summary: 'Example: Best Purchase Ever!',
    recommend: true,
    response: null,
    body: 'Why did you like the product or not?',
    date: '2022-12-15T00:00:00.000Z',
    reviewer_name: 'tvo',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1277952,
    rating: 3,
    summary: 'Example: Best Purchase Ever!',
    recommend: true,
    response: null,
    body: 'Why did you like the product or not?',
    date: '2022-12-15T00:00:00.000Z',
    reviewer_name: 'tvo',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1277175,
    rating: 4,
    summary: 'Some comfy sneaks',
    recommend: true,
    response: null,
    body: "These are pretty darn comfy. They don't seem like they'll last long, but comfy while they do.",
    date: '2022-10-25T00:00:00.000Z',
    reviewer_name: 'bailey',
    helpfulness: 0,
    photos: [Array]
  },
  {
    review_id: 1277930,
    rating: 2,
    summary: 'testing, testing',
    recommend: true,
    response: null,
    body: 'testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing',
    date: '2022-12-13T00:00:00.000Z',
    reviewer_name: 'Tony Vo',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1277929,
    rating: 2,
    summary: 'testing, testing',
    recommend: true,
    response: null,
    body: 'testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing',
    date: '2022-12-13T00:00:00.000Z',
    reviewer_name: 'Tony Vo',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1277955,
    rating: 1,
    summary: 'Example: Best Purchase Ever!',
    recommend: true,
    response: null,
    body: 'Why did you like the product or not?',
    date: '2022-12-15T00:00:00.000Z',
    reviewer_name: 'tvo',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1277952,
    rating: 3,
    summary: 'Example: Best Purchase Ever!',
    recommend: true,
    response: null,
    body: 'Why did you like the product or not?',
    date: '2022-12-15T00:00:00.000Z',
    reviewer_name: 'tvo',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1277175,
    rating: 4,
    summary: 'Some comfy sneaks',
    recommend: true,
    response: null,
    body: "These are pretty darn comfy. They don't seem like they'll last long, but comfy while they do.",
    date: '2022-10-25T00:00:00.000Z',
    reviewer_name: 'bailey',
    helpfulness: 0,
    photos: [Array]
  },

  {
    review_id: 1276432,
    rating: 4,
    summary: 'some',
    recommend: true,
    response: null,
    body: 'erfectly',
    date: '2022-09-06T00:00:00.000Z',
    reviewer_name: 'haha',
    helpfulness: 9,
    photos: []
  },
  {
    review_id: 1279187,
    rating: 1,
    summary: 'bad product',
    recommend: false,
    response: null,
    body: 'the product is bad',
    date: '2023-03-15T00:00:00.000Z',
    reviewer_name: 'reviewer',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1279186,
    rating: 1,
    summary: 'bad product',
    recommend: false,
    response: null,
    body: 'the product is bad',
    date: '2023-03-15T00:00:00.000Z',
    reviewer_name: 'reviewer',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1279185,
    rating: 1,
    summary: 'bad product',
    recommend: false,
    response: null,
    body: 'the product is bad',
    date: '2023-03-15T00:00:00.000Z',
    reviewer_name: 'reviewer',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1279184,
    rating: 1,
    summary: 'bad product',
    recommend: false,
    response: null,
    body: 'the product is bad',
    date: '2023-03-15T00:00:00.000Z',
    reviewer_name: 'reviewer',
    helpfulness: 0,
    photos: [Array]
  },
  {
    review_id: 1277930,
    rating: 2,
    summary: 'testing, testing',
    recommend: true,
    response: null,
    body: 'testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing',
    date: '2022-12-13T00:00:00.000Z',
    reviewer_name: 'Tony Vo',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1277929,
    rating: 2,
    summary: 'testing, testing',
    recommend: true,
    response: null,
    body: 'testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing',
    date: '2022-12-13T00:00:00.000Z',
    reviewer_name: 'Tony Vo',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1277955,
    rating: 1,
    summary: 'Example: Best Purchase Ever!',
    recommend: true,
    response: null,
    body: 'Why did you like the product or not?',
    date: '2022-12-15T00:00:00.000Z',
    reviewer_name: 'tvo',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1277952,
    rating: 3,
    summary: 'Example: Best Purchase Ever!',
    recommend: true,
    response: null,
    body: 'Why did you like the product or not?',
    date: '2022-12-15T00:00:00.000Z',
    reviewer_name: 'tvo',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1277175,
    rating: 4,
    summary: 'Some comfy sneaks',
    recommend: true,
    response: null,
    body: "These are pretty darn comfy. They don't seem like they'll last long, but comfy while they do.",
    date: '2022-10-25T00:00:00.000Z',
    reviewer_name: 'bailey',
    helpfulness: 0,
    photos: [Array]
  },
  {
    review_id: 1276432,
    rating: 4,
    summary: 'some',
    recommend: true,
    response: null,
    body: 'erfectly',
    date: '2022-09-06T00:00:00.000Z',
    reviewer_name: 'haha',
    helpfulness: 9,
    photos: []
  },
  {
    review_id: 1279187,
    rating: 1,
    summary: 'bad product',
    recommend: false,
    response: null,
    body: 'the product is bad',
    date: '2023-03-15T00:00:00.000Z',
    reviewer_name: 'reviewer',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1279186,
    rating: 1,
    summary: 'bad product',
    recommend: false,
    response: null,
    body: 'the product is bad',
    date: '2023-03-15T00:00:00.000Z',
    reviewer_name: 'reviewer',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1279185,
    rating: 1,
    summary: 'bad product',
    recommend: false,
    response: null,
    body: 'the product is bad',
    date: '2023-03-15T00:00:00.000Z',
    reviewer_name: 'reviewer',
    helpfulness: 0,
    photos: []
  },
  {
    review_id: 1279184,
    rating: 1,
    summary: 'bad product',
    recommend: false,
    response: null,
    body: 'the product is bad',
    date: '2023-03-15T00:00:00.000Z',
    reviewer_name: 'reviewer',
    helpfulness: 0,
    photos: [Array]
  }
];

const productID = 71704;

describe('RatingsReviews', () => {

  test('More Reviews button renders properly', () => {
    render(<RatingsReviews productID={productID} reviews={reviews} product={product} />);
    //screen.getByRole('');
    expect(screen.getByRole('button', { name: /More Reviews/i })).toBeInTheDocument();
  });

  test('Upon initial load, render a list of 5 reviews ', () => {
    render(<RatingsReviews productID={productID} reviews={reviews} product={product} />);
    const reviews = screen.getAllByRole('list');
    //console.log('LIST LENGTH ', reviews.length);
    expect(reviews.length).toBe(5);
  });

});

