export default interface IcompraCliente {
    compraID: string;
    cliente: {
        clienteID: string;
        nome: string;
        email: string;
        cpf: string;
        rua: string;
        cidade: string;
        estado: string;
        informacoesAdicionais: string;
        telefone: string;
    };
    produto: {
        produtoID: string;
        nome: string;
        valor: string;
    };
    servico: {
        servicoID: string;
        nome: string;
        valor: string;
    }
    quantidadeProduto: string;
    quantidadeServico: string;
    valorProduto: string;
    valorServico: string;
}

export interface IcompraClienteProduto {
    compraID: string;
    cliente: {
        clienteID: string;
        nome: string;
        email: string;
        cpf: string;
        rua: string;
        cidade: string;
        estado: string;
        informacoesAdicionais: string;
        telefone: string;
    };
    produto: {
        produtoID: string;
        nome: string;
        valor: string;
    };
    quantidadeProduto: string;
    valorProduto: string;
}

export interface IcompraClienteServico {
    compraID: string;
    cliente: {
        clienteID: string;
        nome: string;
        email: string;
        cpf: string;
        rua: string;
        cidade: string;
        estado: string;
        informacoesAdicionais: string;
        telefone: string;
    };
    servico: {
        servicoID: string;
        nome: string;
        valor: string;
    };
    quantidadeServico: string;
    valorServico: string;
}