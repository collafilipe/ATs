export default class Produto {
    public nome: string;
    public valor: string;
    private id: string;
    
    constructor(nome: string, valor: string, id: string) {
        this.nome = nome;
        this.valor = valor;
        this.id = id;
    };

    public getNome(): string {
        return this.nome;
    };

    public get getId(): string {
        return this.id;
    };
};