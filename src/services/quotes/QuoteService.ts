import Container from 'typedi';
import DBService from '../database/DBService';

class QuoteService {
  private dbService: DBService;

  constructor() {
    this.dbService = Container.get(DBService);
  }

  public async getQuotes(): Promise<any[]> {
    const query = 'SELECT * FROM quotes';
    const result = await this.dbService.runQuery(query);
    return result;
  }

  public async getQuoteById(id: number): Promise<any> {
    const query = 'SELECT * FROM quotes WHERE id = ?';
    const result = await this.dbService.runQuery(query, [id]);
    return result;
  }

  public async getAuthors(): Promise<any[]> {
    const query = 'SELECT distinct author FROM quotes';
    const result = await this.dbService.runQuery(query);
    return result;
  }
}

export { QuoteService };
