import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class listagemGeneroFemenino extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    };

    public listar(): void {
        console.log(`\nAqui está a listagem de todos os clientes do gênero Feminino: \n`)
        const clientesFemeninos = this.clientes.filter(cliente => cliente.getGenero.toLowerCase() === 'feminino');
        clientesFemeninos.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}\n`);
            console.log(`Gênero: ${cliente.getGenero}\n`);
            console.log(`--------------------------------------\n`);
        });
    };
};