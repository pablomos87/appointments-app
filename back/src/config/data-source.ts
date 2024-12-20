import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Appointment } from '../entities/Appointment';
import {DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE} from './envs';
import Credential from '../entities/Credential';

export const AppDataSource = new DataSource({
    type:  "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    /* dropSchema: true,  */
    synchronize: true,
    logging: false,
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
});




