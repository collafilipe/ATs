import express, { Request, Response } from "express";
import { alterarServico, criarServico, excluirServico, listarServico } from "../controllers/servicos";

const router = express.Router();

router.post('/cadastrar', async (req: Request, res: Response) => {
    const { nome, valor} = req.body;
    if (nome === '' || valor === '') {
        return res.status(400).json({ error: "Preencha todos os campos" });
    }
    try {
        const servico = await criarServico(nome, valor);
        res.json(servico);
    } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar serviço" });
    }
});

router.delete('/excluir/:servicoID', async (req: Request, res: Response) => {
    const servicoID = req.params.servicoID;
    if (servicoID === '') {
        return res.status(400).json({ error: "Informe o ID do serviço" })
    }
    res.json(await excluirServico(Number(servicoID)));
});

router.get('/listar', async (req: Request, res: Response) => {
    try {
        const clientes = await listarServico();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar clientes" });
    }
});
router.put('/alterar/:servicoID', async (req: Request, res: Response) => {
    const servicoID = req.params.servicoID;
    let { nome, valor } = req.body;
    if (servicoID === '' || nome === '' || valor === '') {
        return res.status(400).json({ error: "Preencha todos os campos" })
    }
    res.json(await alterarServico(Number(servicoID), nome, valor));
});

export default router;