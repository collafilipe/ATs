export default class Servico {
    public nome!: string;
    public valor!: string;
    private id!: string;

    constructor(nome: string, valor: string, id: string) {
        this.nome = nome;
        this.valor = valor;
        this.id = id;
    };

    public get getId(): string {
        return this.id;
    };
};