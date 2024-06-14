import { DatabaseService } from './database.service';
export class Database {
  private readonly dbService: DatabaseService;
  constructor() {
    this.dbService = new DatabaseService();
  }

  async query(request: string, params): Promise<any> {
    return this.dbService.query(request, params);
  }
}
