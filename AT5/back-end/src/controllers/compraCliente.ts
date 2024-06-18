import { IsNull, Not } from "typeorm";
import { AppDataSource } from "../data-source";
import { Clientes } from "../entity/cliente";
import { Compra } from "../entity/compraCliente";
import { Produtos } from "../entity/produto";
import { Servicos } from "../entity/servico";
import { clienteRepositorio } from "./clientes";

export const compraClienteRepositorio = AppDataSource.getRepository(Compra)

export const criarCompraCliente = async (clienteID: Clientes , produtoID: Produtos | null, servicoID: Servicos | null, quantidadeProduto: number | null, quantidadeServico: number | null, valorServico: number | null, valorProduto: number | null) => {
    try {
        const valorServicoTotal = valorServico ? valorServico * quantidadeServico : 0;
        const valorProdutoTotal = valorProduto ? valorProduto * quantidadeProduto : 0;
        const compraCliente = new Compra(clienteID, produtoID, servicoID, quantidadeProduto, quantidadeServico, valorServicoTotal, valorProdutoTotal);
        await compraClienteRepositorio.save(compraCliente);
        console.log("Compra de cliente criada com sucesso");
        return compraCliente;
    } catch (error) {
        console.error("Erro na criação da compra de cliente", error);
        throw error;
    }
};

export const excluirCompraCliente = async (compraID: number) => {
    try {
        const compraCliente = await compraClienteRepositorio.findOneBy({ compraID: compraID});
        if (compraCliente) {
            await compraClienteRepositorio.remove(compraCliente);
            console.log("Compra de cliente excluida com sucesso");
            return 1;
        } else {
            console.log("Compra de cliente inexistente");
            return "Compra de cliente inexistente";
        }
    } catch (error) {
        console.error("Erro na exclusão da compra de cliente", error);
    }
}

export const listarComprasClienteProduto = async () => {
    try {
        const compraClientes = await compraClienteRepositorio.find({
            relations: ["cliente", "produto"],
            where: {
                produto: Not(IsNull())
            }
        });
        console.log("Compras de cliente com produto listadas com sucesso");
        return compraClientes;
    } catch (error) {
        console.error("Erro na listagem das compras de cliente com produto", error);
        throw error;
    }
};

export const listarComprasClienteServico = async () => {
    try {
        const compraClientes = await compraClienteRepositorio.find({
            relations: ["cliente", "servico"],
            where: {
                servico: Not(IsNull())
            }
        });
        console.log("Compras de cliente com serviço listadas com sucesso");
        return compraClientes;
    } catch (error) {
        console.error("Erro na listagem das compras de cliente com serviço", error);
        throw error;
    }
};

export const alterarCompraCliente = async (compraID: number, clienteID: Clientes | null, produtoID: Produtos | null, servicoID: Servicos | null, quantidadeProduto: number | null, quantidadeServico: number | null, valorProduto: number | null, valorServico: number| null) => {
    try {
        const compraCliente = await compraClienteRepositorio.findOneBy({ compraID: compraID });

        if (compraCliente) {
            compraCliente.cliente = clienteID;
            compraCliente.produto = produtoID;
            compraCliente.servico = servicoID;
            compraCliente.quantidadeProduto = quantidadeProduto;
            compraCliente.quantidadeServico = quantidadeServico;
            compraCliente.valorProduto = valorProduto;
            compraCliente.valorServico = valorServico;

            await compraClienteRepositorio.save(compraCliente);
            console.log("Compra de cliente alterada com sucesso");
            return compraCliente;
        } else {
            console.log("Compra de cliente inexistente");
            return "Compra de cliente inexistente";
        }
    } catch (error) {
        console.error("Erro na alteração da compra de cliente", error);
        return "Erro na alteração da compra de cliente";
    }
}

export const listarTop10Clientes = async () => {
    try {
        const top10Clientes = await compraClienteRepositorio.createQueryBuilder("compraCliente")
            .select("clienteID")
            .addSelect("SUM(COALESCE(compraCliente.quantidadeProduto, 0)) + SUM(COALESCE(compraCliente.quantidadeServico, 0))", "totalConsumido")
            .groupBy("clienteID")
            .orderBy("totalConsumido", "DESC")
            .limit(10)
            .getRawMany();

        console.log("Top 10 clientes que mais consumiram produtos ou serviços:");
        console.log(top10Clientes);

        return top10Clientes;
    } catch (error) {
        console.error("Erro na listagem dos top 10 clientes", error);
        throw error;
    }
};

export const listarProdutosServicosMaisConsumidos = async () => {
    try {
        const produtosServicosMaisConsumidos = await compraClienteRepositorio.createQueryBuilder("compraCliente")
            .select("produtoID")
            .addSelect("servicoID")
            .addSelect("SUM(COALESCE(compraCliente.quantidadeProduto, 0)) + SUM(COALESCE(compraCliente.quantidadeServico, 0))", "totalConsumido")
            .groupBy("produtoID")
            .addGroupBy("servicoID")
            .orderBy("totalConsumido", "DESC")
            .getRawMany();

        console.log("Produtos e serviços mais consumidos:");
        console.log(produtosServicosMaisConsumidos);

        return produtosServicosMaisConsumidos;
    } catch (error) {
        console.error("Erro na listagem dos produtos e serviços mais consumidos", error);
        throw error;
    }
};

export const listarProdutosServicosMaisConsumidosMasculinos = async () => {
    try {
        const produtosServicosMaisConsumidos = await compraClienteRepositorio.createQueryBuilder("compraCliente")
            .innerJoin("compraCliente.cliente", "cliente")
            .select("produtoID")
            .addSelect("servicoID")
            .addSelect("SUM(COALESCE(compraCliente.quantidadeProduto, 0)) + SUM(COALESCE(compraCliente.quantidadeServico, 0))", "totalConsumido")
            .where("cliente.sexo = :sexo", { sexo: "Masculino" })
            .groupBy("produtoID")
            .addGroupBy("servicoID")
            .orderBy("totalConsumido", "DESC")
            .getRawMany();

        console.log("Produtos e serviços mais consumidos por clientes masculinos:");
        console.log(produtosServicosMaisConsumidos);

        return produtosServicosMaisConsumidos;
    } catch (error) {
        console.error("Erro na listagem dos produtos e serviços mais consumidos por clientes masculinos", error);
        throw error;
    }
};

export const listarProdutosServicosMaisConsumidosFemininos = async () => {
    try {
        const produtosServicosMaisConsumidos = await compraClienteRepositorio.createQueryBuilder("compraCliente")
            .innerJoin("compraCliente.cliente", "cliente")
            .select("produtoID")
            .addSelect("servicoID")
            .addSelect("SUM(COALESCE(compraCliente.quantidadeProduto, 0)) + SUM(COALESCE(compraCliente.quantidadeServico, 0))", "totalConsumido")
            .where("cliente.sexo = :sexo", { sexo: "Feminino" })
            .groupBy("produtoID")
            .addGroupBy("servicoID")
            .orderBy("totalConsumido", "DESC")
            .getRawMany();

        console.log("Produtos e serviços mais consumidos por clientes femininos:");
        console.log(produtosServicosMaisConsumidos);

        return produtosServicosMaisConsumidos;
    } catch (error) {
        console.error("Erro na listagem dos produtos e serviços mais consumidos por clientes femininos", error);
        throw error;
    }
};

export const listarTop10ClientesMenosConsumiram = async () => {
    try {
        const top10Clientes = await compraClienteRepositorio.createQueryBuilder("compraCliente")
            .select("clienteID")
            .addSelect("SUM(COALESCE(compraCliente.quantidadeProduto, 0)) + SUM(COALESCE(compraCliente.quantidadeServico, 0))", "totalConsumido")
            .groupBy("clienteID")
            .orderBy("totalConsumido", "ASC")
            .limit(10)
            .getRawMany();

        console.log("Top 10 clientes que menos consumiram produtos ou serviços:");
        console.log(top10Clientes);

        return top10Clientes;
    } catch (error) {
        console.error("Erro na listagem dos top 10 clientes que menos consumiram", error);
        throw error;
    }
};

export const listarTop5ClientesMaisConsumiramValor = async () => {
    try {
        const top5Clientes = await compraClienteRepositorio.createQueryBuilder("compraCliente")
            .select("clienteID")
            .addSelect("SUM(compraCliente.valorServico) + SUM(compraCliente.valorProduto)", "totalConsumido")
            .groupBy("clienteID")
            .orderBy("totalConsumido", "DESC")
            .limit(5)
            .getRawMany();

        console.log("Top 5 clientes que mais consumiram em valor:");
        console.log(top5Clientes);

        return top5Clientes;
    } catch (error) {
        console.error("Erro na listagem dos top 5 clientes que mais consumiram em valor", error);
        throw error;
    }
};