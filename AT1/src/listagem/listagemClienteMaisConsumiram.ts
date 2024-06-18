import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class listagemClienteMaisConsumiram extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    };

    public listar(): void {
        console.log(`\nLista dos 10 clientes que mais consumiram produtos ou serviços, em quantidade: \n`);

        const topConsumidores = this.clientes.sort((a, b) => {
            const totalA = a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
            const totalB = b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
            return totalB - totalA;
        }).slice(0, 10);

        topConsumidores.forEach((cliente, index) => {
            const totalConsumido = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            console.log(`${index + 1}. Nome: ${cliente.nome}, Total Consumido: ${totalConsumido}`);
        });
    };
};