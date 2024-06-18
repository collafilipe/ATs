import CPF from "./cpf"
import Produto from "./produto"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: string
    private cpf: CPF
    private dataCadastro: Date
    private telefones: Telefone
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string, telefone: Telefone) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.genero = genero
        this.dataCadastro = new Date()
        this.telefones = telefone
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    };

    public get getGenero(): string {
        return this.genero;
    };

    public get getCpf(): CPF {
        return this.cpf;
    };

    public get getDataCadastro(): Date {
        return this.dataCadastro;
    };

    public get getTelefones(): Telefone {
        return this.telefones;
    };

    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos;
    };

    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos;
    };

    public adicionarProdutoConsumido(produto: Produto): void {
        this.produtosConsumidos.push(produto);
    };

    public adicionarServicoConsumido(servico: Servico): void {
        this.servicosConsumidos.push(servico);
    };
};