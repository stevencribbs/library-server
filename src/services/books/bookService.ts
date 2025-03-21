import DBService from '../database/DBService';

class BookService {
  private dbService: DBService;

  constructor() {
    this.dbService = new DBService();
  }

  public async getBooks(): Promise<any[]> {
    const query = 'SELECT * FROM books';
    try {
      const result = await this.dbService.runQuery(query);
      console.log('Books retrieved successfully:', result);
      return result;
    } catch (error) {
      console.error('Error retrieving books:', error);
      throw error;
    }
  }
}

export { BookService };
