import express, { Request, Response} from "express";
import { criarCompraCliente, alterarCompraCliente, excluirCompraCliente, listarComprasClienteProduto, listarComprasClienteServico, listarTop10Clientes, listarProdutosServicosMaisConsumidos, listarProdutosServicosMaisConsumidosMasculinos, listarProdutosServicosMaisConsumidosFemininos, listarTop10ClientesMenosConsumiram, listarTop5ClientesMaisConsumiramValor } from "../controllers/compraCliente";

const router = express.Router();

router.post('/cadastrar', async (req: Request, res: Response) => {
    const { clienteID, produtoID, servicoID, quantidadeProduto, quantidadeServico, valorServico, valorProduto } = req.body;
    if (clienteID === '') {
        return res.status(400).json({ error: "Preencha o ClienteID" });
    }
    try {
        const compraCliente = await criarCompraCliente(clienteID, produtoID, servicoID, quantidadeProduto, quantidadeServico, valorServico, valorProduto);
        res.json(compraCliente);
    } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar compra de cliente" });
    }
});

router.delete('/excluir/:compraClienteID', async (req: Request, res: Response) => {
    const compraClienteID = req.params.compraClienteID;
    if (compraClienteID === '') {
        return res.status(400).json({ error: "Informe o ID da compra do cliente" });
    }
    res.json(await excluirCompraCliente(Number(compraClienteID)));
});

router.get('/listarProduto', async (req: Request, res: Response) => {
    try {
        const comprasCliente = await listarComprasClienteProduto();
        res.json(comprasCliente);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar compras de cliente" });
    }
});

router.get('/listarServico', async (req: Request, res: Response) => {
    try {
        const comprasCliente = await listarComprasClienteServico();
        res.json(comprasCliente);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar compras de cliente" });
    }
});

router.put('/alterar/:compraClienteID', async (req: Request, res: Response) => {
    const compraClienteID = req.params.compraClienteID;
    let { clienteID, produtoID, servicoID, quantidadeProduto, quantidadeServico, valorProduto, valorServico } = req.body;
    if (compraClienteID === '' || clienteID === '') {
        return res.status(400).json({ error: "Preencha todos os campos" });
    }
    res.json(await alterarCompraCliente(Number(compraClienteID), clienteID, produtoID, servicoID, quantidadeProduto, quantidadeServico, valorProduto, valorServico));
});

router.get('/listarTop10Clientes', async (req: Request, res: Response) => {
    try {
        const top10Clientes = await listarTop10Clientes();
        res.json(top10Clientes);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar top 10 clientes" });
    }
});

router.get('/listarMaisConsumidos', async (req: Request, res: Response) => {
    try {
        const topsMaisConsumidos = await listarProdutosServicosMaisConsumidos();
        res.json(topsMaisConsumidos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar mais consumidos" });
    }
});

router.get('/listarMaisConsumidosMasculino', async (req, res) => {
    try {
        const masculinoMaisConsumido = await listarProdutosServicosMaisConsumidosMasculinos();
        res.status(200).json(masculinoMaisConsumido);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar mais consumidos masculino' });
    }
});

router.get('/listarMaisConsumidosFeminino', async (req, res) => {
    try {
        const femininoMaisConsumido = await listarProdutosServicosMaisConsumidosFemininos();
        res.status(200).json(femininoMaisConsumido);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar mais consumidos feminino' });
    }
});

router.get('/listarMenosConsumiram', async (req, res) => {
    try {
        const listarMenosConsumiram = await listarTop10ClientesMenosConsumiram();
        res.status(200).json(listarMenosConsumiram);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar mais consumidos feminino' });
    }
});

router.get('/listarConsumidoValor', async (req, res) => {
    try {
        const listarConsumidoValor = await listarTop5ClientesMaisConsumiramValor();
        res.status(200).json(listarConsumidoValor);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar top 5 valor' });
    }
});

export default router;