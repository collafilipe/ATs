import { AppDataSource } from "../data-source";
import { Produtos } from "../entity/produto";

export const produtosRepositorio = AppDataSource.getRepository(Produtos);

export const criarProduto = async (nome: string, valor: string) => {
    try {
        const novoProduto = new Produtos(nome, valor);
        await produtosRepositorio.save(novoProduto);
        console.log("Produto criado com sucesso");
        return novoProduto;
    } catch (error) {
        console.error("Erro na criação do produto", error);
        return null;
    }
}

export const excluirProduto = async (produtoID: number) => {
    try {
        const produto = await produtosRepositorio.findOneBy({ produtoID: produtoID});
        if (produto) {
            await produtosRepositorio.remove(produto);
            console.log("produto excluido com sucesso");
            return 1;
        } else {
            console.log("produto inexistente");
            return "produto inexistente";
        }
    } catch (error) {
        console.error("Erro na exclusão do produto", error);
    }
}

export const listarProdutos = async () => {
    try {
        const produtos = await produtosRepositorio.find();
        console.log("Produtos listados com sucesso");
        return produtos;
    } catch (error) {
        console.error("Erro na listagem dos produtos", error);
        return "Erro na listagem dos produtos";
    }
}

export const alterarProduto = async (produtoID: number, nome: string, valor: string) => {
    try {
        const produto = await produtosRepositorio.findOneBy({ produtoID: produtoID });

        if (produto) {
            produto.nome = nome;
            produto.valor = valor;

            await produtosRepositorio.save(produto);
            console.log("produto alterado com sucesso");
            return produto;
        } else {
            console.log("Produto inexistente");
            return "Produto inexistente";
        }
    } catch (error) {
        console.error("Erro na alteração do produto", error);
        return "Erro na alteração do produto";
    }
}