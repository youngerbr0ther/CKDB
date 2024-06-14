import { Injectable } from '@nestjs/common';
import { Database } from 'src/DatabaseConnection/database';
import { User } from './User';

@Injectable()
export class AuthorizationService {
  private readonly db: Database;

  constructor(private readonly database: Database) {
    this.db = database;
  }

  async registration({ email, login, password }: User) {
    const isLogged = await this.db.query(
      `SELECT * FROM users WHERE email = $1 AND login = $2 AND password = $3`,
      [email, login, password],
    );

    if (isLogged.length > 0) {
      return 'This user has been registered.';
    } else {
      const newUser = await this.db.query(
        'INSERT INTO users (email, login, password) VALUES ($1, $2, $3) RETURNING *',
        [email, login, password],
      );

      // Возвращаем нового пользователя
      return newUser;
    }
  }
  async login({ email, login, password }: User) {
    const isLogged = await this.db.query(
      `SELECT * FROM users WHERE email = $1 AND login = $2 AND password = $3`,
      [email, login, password],
    );

    if (!isLogged.length) {
      return 'This user hasnt been registered.';
    }

    return isLogged;
  }
}
