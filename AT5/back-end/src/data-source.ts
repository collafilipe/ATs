import 'reflect-metadata';
import { DataSource } from "typeorm";
import { Clientes } from './entity/cliente';
import { Servicos } from './entity/servico';
import { Produtos } from './entity/produto';
import { Compra } from './entity/compraCliente';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "pebonito2",
    database: "atv",
    synchronize: true,
    logging: false,
    entities: [Clientes, Produtos, Servicos, Compra],
    migrations: [],
    subscribers: []
});