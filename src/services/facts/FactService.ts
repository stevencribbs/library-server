import Container from 'typedi';
import DBService from '../database/DBService';

class FactService {
  private dbService: DBService;

  constructor() {
    this.dbService = Container.get(DBService);
  }

  public async getFacts(): Promise<any[]> {
    const query = 'SELECT * FROM facts';
    const result = await this.dbService.runQuery(query);
    return result;
  }

  public async getFactById(id: number): Promise<any> {
    const query = 'SELECT * FROM facts WHERE id = ?';
    const result = await this.dbService.runQuery(query, [id]);
    return result;
  }
}

export { FactService };
