import { AppDataSource } from "./data-source";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import cliente from "./routes/cliente";
import produto from "./routes/produto";
import servico from "./routes/servico";
import compraCliente from "./routes/compraCliente";

const app = express();
const port = 5555;

AppDataSource.initialize().then(async () => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');

    app.use(express.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/clientes', cliente);
    app.use('/produtos', produto);
    app.use('/servicos', servico);
    app.use('/comprar', compraCliente);
    const server = http.createServer(app);
    const io = new Server(server, {
        cors: {
            origin: '*',
        }
    });

    io.on('connection', (socket) => {
        console.log('Novo cliente conectado');

        socket.on('joinRoom', (room) => {
            socket.join(room);

        });

        socket.on('sendMessage', (message, room, tipoUsuario, nome) => {
            io.to(room).emit('message', message, tipoUsuario, nome);
            console.log(nome, message, tipoUsuario, room);
            console.log('Mensagem enviada');
            
        });

        socket.on('disconnect', () => {
            console.log('Cliente desconectado');
        });
    });


    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error) => {
    console.error('Erro ao conectar com o banco de dados', error);
});