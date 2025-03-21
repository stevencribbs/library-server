import { Express } from 'express';
import { QuoteService } from './QuoteService';

function setupQuoteRoutes(app: Express) {
  app.get('/quotes', async (req, res) => {
    const quoteService = new QuoteService();
    const books = await quoteService.getQuotes();
    res.send(books);
  });
  app.get('/quotes/:id', async (req, res) => {
    const quoteService = new QuoteService();
    const quoteId = parseInt(req.params.id);
    const quote = await quoteService.getQuoteById(quoteId);
    res.send(quote);
  });
  app.get('/quotes/meta/authors', async (req, res) => {
    const quoteService = new QuoteService();
    const authors = await quoteService.getAuthors();
    res.send(authors);
  });
}

export default setupQuoteRoutes;
