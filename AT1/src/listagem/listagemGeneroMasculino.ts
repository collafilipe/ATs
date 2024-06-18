import Listagem from "./listagem";
import Cliente from "../modelo/cliente";

export default class listagemGeneroMasculino extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    };

    public listar(): void {
        console.log(`\nAqui está a listagem de todos os clientes do gênero Masculino: \n`);
        const clientesMasculinos = this.clientes.filter(cliente => cliente.getGenero.toLowerCase() === 'masculino');
        clientesMasculinos.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}\n`);
            console.log(`Genêro: ${cliente.getGenero}\n`);
            console.log(`--------------------------------------\n`);
        });
    };
};