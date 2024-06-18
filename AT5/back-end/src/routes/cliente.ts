import express, { Request, Response } from "express";
import { alterarCliente, criarCliente, excluirCliente, listarClientes, listarClientesFemininos, listarClientesMasculinos } from "../controllers/clientes";

const router = express.Router();

router.post('/cadastrar', async (req: Request, res: Response) => {
    const { nome, cpf, email, rua, cidade, estado, informacoesAdicionais, telefone, sexo } = req.body;
    if (nome === '' || cpf === '' || email === '' || rua === '' || cidade === '' || estado === '' || sexo === '') {
        return res.status(400).json({ error: "Preencha todos os campos" });
    }
    try {
        const cliente = await criarCliente(nome, cpf, email, rua, cidade, estado, informacoesAdicionais, telefone, sexo);
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar cliente" });
    }
});

router.delete('/excluir/:clienteID', async (req: Request, res: Response) => {
    const clienteID = req.params.clienteID;
    if (clienteID === '') {
        return res.status(400).json({ error: "Informe o ID do cliente" })
    }
    res.json(await excluirCliente(Number(clienteID)));
});

router.get('/listar', async (req: Request, res: Response) => {
    try {
        const clientes = await listarClientes();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar clientes" });
    }
});

router.put('/alterar/:clienteID', async (req: Request, res: Response) => {
    const clienteID = req.params.clienteID;
    let { nome, cpf, email, rua, cidade, estado, telefone, sexo } = req.body;
    if (clienteID === '' || nome === '' || cpf === '' || email === '' || rua === '' || cidade === '' || estado === '' || sexo === '') {
        return res.status(400).json({ error: "Preencha todos os campos" })
    }
    res.json(await alterarCliente(Number(clienteID), nome, cpf, email, rua, cidade, estado, telefone, sexo));
});

router.get('/clientesMasculinos', async (req, res) => {
    try {
        const clientesMasculinos = await listarClientesMasculinos();
        res.status(200).json(clientesMasculinos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar clientes masculinos' });
    }
});

router.get('/clientesFemininos', async (req, res) => {
    try {
        const clientesFemininos = await listarClientesFemininos();
        res.status(200).json(clientesFemininos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar clientes femininos' });
    }
});

export default router;