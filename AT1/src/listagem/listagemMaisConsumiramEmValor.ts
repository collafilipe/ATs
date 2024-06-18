import Listagem from "./listagem";
import Cliente from "../modelo/cliente";

export default class ListagemClientesMaisConsumiramValor extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    };

    public listar(): void {
        console.log(`\nLista dos 5 clientes que mais consumiram em valor: \n`);

        const clientesOrdenados = this.clientes.sort((a, b) => {
            const ValorTotalA = this.calcularValorTotalConsumido(a);
            const ValorTotalB = this.calcularValorTotalConsumido(b);
            return ValorTotalB - ValorTotalA;
        });

        clientesOrdenados.slice(0, 5).forEach((cliente, index) => {
            const ValorTotal = this.calcularValorTotalConsumido(cliente);
            console.log(`${index + 1}. Nome: ${cliente.nome}, Valor Total Consumido: ${ValorTotal}`);
        });
    };

    private calcularValorTotalConsumido(cliente: Cliente): number {
        let ValorTotal = 0;

        cliente.getProdutosConsumidos.forEach(produto => {
            ValorTotal += parseFloat(produto.valor);
        });

        cliente.getServicosConsumidos.forEach(servicos => {
            ValorTotal += parseFloat(servicos.valor);
        });

        return ValorTotal;
    };
};