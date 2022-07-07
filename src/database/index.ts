import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

export class Database {
  databaseInstance: JsonDB;

  private static instance: Database;

  private constructor() {
    this.databaseInstance = new JsonDB(new Config('database', true, false, '/'));
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  public get database() {
    return this.databaseInstance;
  }
}
