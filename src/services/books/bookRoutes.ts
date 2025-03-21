import { Express } from 'express';
import { BookService } from './bookService';

// This file sets up the routes for the book service in the library application.
function setupBookRoutes(app: Express) {
  app.get('/books', async (req, res) => {
    const bookService = new BookService(); // Create an instance of BookService
    const books = await bookService.getBooks(); // Assuming this method returns a promise
    res.send(books);
  });
  // app.post('/books', (req, res) => {
  //   // Logic to create a new book
  //   res.send('Create a new book');
  // });
  app.get('/authors', async (req, res) => {
    // Logic to get all authors
    const bookService = new BookService(); // Create an instance of BookService
    const authors = await bookService.getAuthors(); // Assuming this method returns a promise
    res.send(authors);
  });
}

export default setupBookRoutes;
