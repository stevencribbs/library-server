import 'reflect-metadata';
import express from 'express';
import setupRoutes from './routes';
import cors from 'cors';

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // 'Access-Control-Allow-Credentials',
    origin: [
      // 'https://studio.apollographql.com',
      // 'https://sandbox.embed.apollographql.com',
      // 'http://localhost:4000/graphql',
      'http://localhost:3000',
    ], // 'Access-Control-Allow-Origin',,
    // origin: '*',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  })
);

// setup routes for the application
setupRoutes(app);

// set port, listen for requests
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
