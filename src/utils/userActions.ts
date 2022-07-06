import { JsonDB } from "node-json-db";
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
import { IUserInfo } from "../interfaces";

const db = new JsonDB(new Config('database', true, false, '/'));

export function getUserByEmail(email: string) {
    return db.getData(`/${email}`);
}

export function registerUserByProvidedData(email: string, userInfo: IUserInfo) {
    return db.push(`/${email}`, userInfo);
}
