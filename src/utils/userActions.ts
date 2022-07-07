import { IUserInfo } from '../interfaces';
import { Database } from '../database';

export function getUserByEmail(email: string) {
  return Database.getInstance().database.getData(`/${email}`);
}

export function registerUserByProvidedData(email: string, userInfo: IUserInfo) {
  return Database.getInstance().database.push(`/${email}`, userInfo);
}
