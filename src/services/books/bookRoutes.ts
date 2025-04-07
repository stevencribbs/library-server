import { Express } from 'express';
import { BookService } from './BookService';

// This file sets up the routes for the book service in the library application.
function setupBookRoutes(app: Express) {
  app.get('/books', async (req, res) => {
    const bookService = new BookService(); // Create an instance of BookService
    const books = await bookService.getBooks(); // Assuming this method returns a promise
    res.send(books);
  });
  app.get('/books/:id', async (req, res) => {
    const bookService = new BookService();
    const bookId = parseInt(req.params.id);
    const book = await bookService.getBookById(bookId);
    res.send(book);
  });
  app.post('/books', async (req, res) => {
    // Logic to create a new book
    const bookService = new BookService();
    const bookData = req.body; // Assuming the book data is sent in the request body
    const book = await bookService.createBook(bookData);
    res.send(book);
  });
  app.get('/books/meta/authors', async (req, res) => {
    // Logic to get all authors
    const bookService = new BookService(); // Create an instance of BookService
    const authors = await bookService.getAuthors(); // Assuming this method returns a promise
    res.send(authors);
  });
}

export default setupBookRoutes;
