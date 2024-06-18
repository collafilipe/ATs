import { AppDataSource } from "../data-source";
import { Servicos } from "../entity/servico";

export const servicosRepositorio = AppDataSource.getRepository(Servicos);

export const criarServico = async (nome: string, valor: string) => {
    try {
        const novoServico = new Servicos(nome, valor);
        await servicosRepositorio.save(novoServico);
        console.log("Serviço criado com sucesso");
        return novoServico;
    } catch (error) {
        console.error("Erro na criação do servico", error);
        return null;
    }
}

export const excluirServico = async (servicoID: number) => {
    try {
        const servico = await servicosRepositorio.findOneBy({ servicoID: servicoID });
        if (servico) {
            await servicosRepositorio.remove(servico);
            console.log("serviço excluido com sucesso");
            return 1;
        } else {
            console.log("serviço inexistente");
            return "serviço inexistente";
        }
    } catch (error) {
        console.error("Erro na exclusão do serviço", error);
    }
}

export const listarServico = async () => {
    try {
        const servico = await servicosRepositorio.find();
        console.log("Serviços listados com sucesso");
        return servico;
    } catch (error) {
        console.error("Erro na listagem dos servicos", error);
        return "Erro na listagem dos clientes";
    }
}
export const alterarServico = async (servicoID: number, nome: string, valor: string) => {
    try {
        const servico = await servicosRepositorio.findOneBy({ servicoID: servicoID });

        if (servico) {
            servico.nome = nome;
            servico.valor = valor;

            await servicosRepositorio.save(servico);
            console.log("serviço alterado com sucesso");
            return servico;
        } else {
            console.log("serviço inexistente");
            return "serviço inexistente";
        }
    } catch (error) {
        console.error("Erro na alteração do serviço", error);
    }
}