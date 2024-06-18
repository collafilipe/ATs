import express, { Request, Response } from "express";
import { alterarProduto, criarProduto, excluirProduto, listarProdutos } from "../controllers/produtos";

const router = express.Router();

router.post('/cadastrar', async (req: Request, res: Response) => {
    const { nome, valor} = req.body;
    if (nome === '' || valor === '') {
        return res.status(400).json({ error: "Preencha todos os campos" });
    }
    try {
        const produto = await criarProduto(nome, valor);
        res.json(produto);
    } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar produto" });
    }
});

router.delete('/excluir/:produtoID', async (req: Request, res: Response) => {
    const produtoID = req.params.produtoID;
    if (produtoID === '') {
        return res.status(400).json({ error: "Informe o ID do produto" })
    }
    res.json(await excluirProduto(Number(produtoID)));
});

router.get('/listar', async (req: Request, res: Response) => {
    try {
        const produtos = await listarProdutos();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar produtos" });
    }
});

router.put('/alterar/:produtoID', async (req: Request, res: Response) => {
    const produtoID = req.params.produtoID;
    let { nome, valor} = req.body;
    if (produtoID === '' || nome === '' || valor === '') {
        return res.status(400).json({ error: "Preencha todos os campos" })
    }
    res.json(await alterarProduto(Number(produtoID), nome, valor));
});

export default router;