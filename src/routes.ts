import { Express } from 'express';
import setupBookRoutes from './services/books/bookRoutes';
import setupVerseRoutes from './services/verses/verseRoutes';
import setupQuoteRoutes from './services/quotes/quoteRoutes';
import setupFactRoutes from './services/facts/factRoutes';

function setupRoutes(app: Express) {
  // simple route
  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to library server.' });
  });

  setupBookRoutes(app);
  setupVerseRoutes(app);
  setupQuoteRoutes(app);
  setupFactRoutes(app);
}

export default setupRoutes;
