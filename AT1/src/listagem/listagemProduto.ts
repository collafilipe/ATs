import Listagem from "./listagem";
import Produto from "../modelo/produto";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>

    constructor(produto: Array<Produto>) {
        super();
        this.produtos = produto;
    };

    public listar(): void {
        console.log(`\nLista de todos os produtos: \n`);
        this.produtos.forEach(produto => {
            console.log(`Nome: ` + produto.nome);
            console.log(`Valor: ` + produto.valor);
            console.log(`ID: ` + produto.getId);
            console.log(`\n--------------------------------------\n`);
        });
    };
};