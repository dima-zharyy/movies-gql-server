import { createServer } from '@graphql-yoga/node';
import { schema } from './graphql/schema.js';

const server = createServer({
  schema,
});

server.start();
