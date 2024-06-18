import { AppDataSource } from "../data-source";
import { Clientes } from "../entity/cliente";


export const clienteRepositorio = AppDataSource.getRepository(Clientes)

const validarCPF = (cpf: string) => {
    let soma = 0;
    let resto: number;
    if (cpf === "00000000000") return false;

    for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
}

export const criarCliente = async (nome: string, cpf: string, email: string, rua: string, cidade: string, estado: string, informacoesAdicionais: string, telefone: string | null, sexo: string) => {
    try {
        const novoCliente = new Clientes(nome, cpf, email, rua, cidade, estado, informacoesAdicionais, telefone, sexo);
        await clienteRepositorio.save(novoCliente);
        console.log("Cliente criado com sucesso");
        return novoCliente;
    } catch (error) {
        console.error("Erro na criação do cliente", error);
        return null;
    }
}

export const excluirCliente = async (clienteID: number) => {
    try {
        const cliente = await clienteRepositorio.findOneBy({ clienteID: clienteID});
        if (cliente) {
            await clienteRepositorio.remove(cliente);
            console.log("Cliente excluido com sucesso");
            return 1;
        } else {
            console.log("Cliente inexistente");
            return "Cliente inexistente";
        }
    } catch (error) {
        console.error("Erro na exclusão do cliente", error);
    }
}

export const listarClientes = async () => {
    try {
        const clientes = await clienteRepositorio.find();
        console.log("Clientes listados com sucesso");
        return clientes;
    } catch (error) {
        console.error("Erro na listagem dos clientes", error);
        return "Erro na listagem dos clientes";
    }
}

export const alterarCliente = async (clienteID: number, nome: string, cpf: string, email: string, rua: string, cidade: string, estado: string, telefone: string | null, sexo: string) => {
    try {
        const cliente = await clienteRepositorio.findOneBy({ clienteID: clienteID });

        if (cliente) {
            cliente.nome = nome;
            cliente.cpf = cpf;
            cliente.email = email;
            cliente.rua = rua;
            cliente.cidade = cidade;
            cliente.estado = estado;
            cliente.telefone = telefone;
            cliente.sexo = sexo;

            await clienteRepositorio.save(cliente);
            console.log("Cliente alterado com sucesso");
            return cliente;
        } else {
            console.log("Cliente inexistente");
            return "Cliente inexistente";
        }
    } catch (error) {
        console.error("Erro na alteração do cliente", error);
        return "Erro na alteração do cliente";
    }
}

export const listarClientesMasculinos = async () => {
    try {
        const clientesMasculinos = await clienteRepositorio.find({ where: { sexo: 'Masculino' } });
        console.log("Lista de clientes masculinos obtida com sucesso:");
        console.log(clientesMasculinos);
        return clientesMasculinos;
    } catch (error) {
        console.error("Erro na listagem dos clientes masculinos", error);
        throw error;
    }
};

export const listarClientesFemininos = async () => {
    try {
        const clientesFemininos = await clienteRepositorio.find({ where: { sexo: 'Feminino' } });
        console.log("Lista de clientes femininos obtida com sucesso:");
        console.log(clientesFemininos);
        return clientesFemininos;
    } catch (error) {
        console.error("Erro na listagem dos clientes femininos", error);
        throw error;
    }
};