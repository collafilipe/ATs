export default class CPF {
    private valor: string
    private dataEmissão: Date
    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor
        this.dataEmissão = dataEmissao
    };

    public get getValor(): string {
        return this.valor;
    };

    public get getDataEmissao(): Date {
        return this.dataEmissão;
    };
};