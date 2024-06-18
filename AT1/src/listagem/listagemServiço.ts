import Listagem from "./listagem";
import Servico from "../modelo/servico";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>;

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
    };

    public listar(): void {
        console.log(`\nLista de todos os Serviços: \n`);
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.nome);
            console.log(`Valor: ` + servico.valor);
            console.log(`ID: ` + servico.getId);
            console.log(`\n--------------------------------------\n`);
        });
    };
};