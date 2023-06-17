import "reflect-metadata"
import { DataSource } from "typeorm"
import { Resource } from "./entity/Resource"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root123",
    database: "crudapi",
    synchronize: true,
    logging: false,
    entities: [Resource],
    migrations: [],
    subscribers: [],
})
