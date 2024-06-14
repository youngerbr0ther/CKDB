import { Pool } from 'pg';

export class DatabaseService {
  private pool: Pool;
  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'activecity',
      password: 'postgres',
      port: 5433,
    });
  }

  async query(sql: string, params: any[] = []): Promise<any> {
    const client = await this.pool.connect();
    try {
      const result = await client.query(sql, params);
      return result.rows;
    } finally {
      client.release();
    }
  }
}
