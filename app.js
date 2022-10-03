import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { createServer } from '@graphql-yoga/node';
import { schema } from './graphql/schema.js';

dotenv.config();

export const buildApp = app => {
  const server = createServer({
    schema,
    logging: true,
  });

  app.use('/graphql', server);

  return app;
};

export const app = express();

buildApp(app);

app.use(cors());
