import { app } from './app.js';

const { PORT = 4000 } = process.env;

app.listen(PORT, () => {
  console.log(`GraphQL API located at http://localhost:${PORT}/graphql`);
});
