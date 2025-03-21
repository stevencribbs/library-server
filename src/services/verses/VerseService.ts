import Container from 'typedi';
import DBService from '../database/DBService';

class VerseService {
  private dbService: DBService;

  constructor() {
    this.dbService = Container.get(DBService);
  }

  public async getVerses(): Promise<any[]> {
    const query = 'SELECT * FROM verses';
    const result = await this.dbService.runQuery(query);
    return result;
  }

  public async getVerseById(id: number): Promise<any> {
    const query = 'SELECT * FROM verses WHERE id = ?';
    const result = await this.dbService.runQuery(query, [id]);
    return result;
  }
}

export { VerseService };
