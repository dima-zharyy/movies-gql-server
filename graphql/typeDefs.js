// You can add all fields from third party API and use in queries only necessary fields

export const typeDefs = `
type Movie {
  id: Int!
  poster_path: String
  title: String!
}

type Genre {
  id: Int!
  name: String!
}

type Details {
  title: String!
  overview: String!
  vote_average: Float
  genres: [Genre]
  poster_path: String
}

type Credits {
  id: Int!
  profile_path: String
  name: String!
  character: String!
}

type Reviews {
  id: Int
  author: String!
  updated_at: String
  content: String
}

type Query {
  movies: [Movie]!
  searchMovies(query: String!): [Movie]!
  details(id: Int!): Details!
  credits(id: Int!): [Credits]
  reviews(id: Int!): [Reviews]
}
`;
