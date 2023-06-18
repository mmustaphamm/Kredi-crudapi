import "reflect-metadata"
import { DataSource } from "typeorm"
import { Employee } from "./entity/Employee"
import * as dotenv from 'dotenv'

dotenv.config()


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "crudapi",
    synchronize: true,
    logging: false,
    entities: [Employee],
    migrations: [],
    subscribers: [],
})
