import mysql from 'mysql2/promise';

class DBService {
  private connection: mysql.Connection | undefined;

  constructor() {
    this.connectToDatabase();
  }

  private async connectToDatabase() {
    try {
      this.connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'stickers',
        database: 'library',
      });
      console.log('Successfully connected to the database.');
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  }

  public async runQuery(query: string, params: any[] = []): Promise<any> {
    try {
      if (!this.connection) {
        await this.connectToDatabase();
      }
      const [results] = await this.connection!.execute(query, params);
      return results;
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    }
  }
}

export default DBService;
