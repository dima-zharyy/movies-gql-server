import { createServer } from '@graphql-yoga/node';
import { schema } from './graphql/schema.js';

export const buildApp = app => {
  const server = createServer({
    schema,
    logging: true,
  });

  app.use('/graphql', server);

  return app;
};
