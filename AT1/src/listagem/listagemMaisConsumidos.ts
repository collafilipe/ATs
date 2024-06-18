import Listagem from "./listagem";
import Cliente from "../modelo/cliente";

export default class ListagemProdutosServicosMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    };

    public listar(): void {
        console.log(`\nLista dos produtos e serviços mais consumidos: \n`);
        const contador: { [key: string]: number } = {};

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                contador[produto.nome] = (contador[produto.nome] || 0) + 1;
            });

            cliente.getServicosConsumidos.forEach(servico => {
                contador[servico.nome] = (contador[servico.nome] || 0) + 1;
            });
        });

        const itensMaisConsumidos = Object.keys(contador).sort((a, b) => contador[b] - contador[a]);

        itensMaisConsumidos.forEach((item, index) => {
            console.log(`${index + 1}. ${item}: ${contador[item]} vezes`);
        });
    };
};