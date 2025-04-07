import Container from 'typedi';
import DBService from '../database/DBService';

class BookService {
  private dbService: DBService;

  constructor() {
    this.dbService = Container.get(DBService);
  }

  public async getBooks(): Promise<any[]> {
    const query = 'SELECT * FROM books';
    const result = await this.dbService.runQuery(query);
    console.log('Books retrieved successfully:', result);
    return result;
  }

  public async getBookById(id: number): Promise<any> {
    const query = 'SELECT * FROM books WHERE id = ?';
    const result = await this.dbService.runQuery(query, [id]);
    console.log('Book retrieved successfully:', result);
    return result;
  }

  public async getAuthors(): Promise<any[]> {
    const query = 'SELECT distinct author FROM books';
    const result = await this.dbService.runQuery(query);
    console.log('Authors retrieved successfully:', result);
    return result;
  }

  public async createBook(book: any): Promise<any> {
    if (!book || !book.title || !book.author) {
      throw new Error('Invalid book data');
    }
    const summary = book.summary || '';
    const query = 'INSERT INTO books (title, author, summary) VALUES (?, ?, ?)';
    const result = await this.dbService.runQuery(query, [book.title, book.author, summary]);
    console.log('Book created successfully:', { ...book, id: result.insertId });
    return { ...book, id: result.insertId };
  }
}

export { BookService };
