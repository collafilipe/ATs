export default interface ICliente {
    clienteID: string;
    nome: string;
    email: string;
    cpf: string;
    rua: string;
    cidade: string;
    estado: string;
    sexo: string;
    informacoesAdicionais: string | null;
    telefone: string;
}