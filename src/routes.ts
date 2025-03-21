import { Express } from 'express';
import setupBookRoutes from './services/books/bookRoutes';

function setupRoutes(app: Express) {
  // simple route
  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to library server.' });
  });

  // Route for books
  setupBookRoutes(app);

  // Route for quotes
  app.get('/quotes', (req, res) => {
    // Logic to get all quotes
    res.send('Get all quotes');
  });
  app.post('/quotes', (req, res) => {
    // Logic to create a new quote
    res.send('Create a new quote');
  });

  // Route for facts
  app.get('/facts', (req, res) => {
    // Logic to get all facts
    res.send('Get all facts');
  });
  app.post('/facts', (req, res) => {
    // Logic to create a new fact
    res.send('Create a new fact');
  });
}

export default setupRoutes;
