import {
  getCredits,
  getDetails,
  getMovies,
  getReviews,
  getTrending,
} from '../services/movies-api.js';

export const resolvers = {
  Query: {
    movies: () => getTrending(),
    searchMovies: (_, { query }) => getMovies(query),
    details: (_, { id }) => getDetails(id),
    credits: (_, { id }) => getCredits(id),
    reviews: (_, { id }) => getReviews(id),
  },
};
