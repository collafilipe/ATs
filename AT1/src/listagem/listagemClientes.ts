import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    };
    public listar(): void {
        console.log(`\nLista de todos os clientes:\n`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Gênero: ` + cliente.genero);
            console.log(`Telefone: (` + cliente.getTelefones.getDdd + `) ` + cliente.getTelefones.getNumero);
            console.log(`\n--------------------------------------\n`);
        });
    };
};