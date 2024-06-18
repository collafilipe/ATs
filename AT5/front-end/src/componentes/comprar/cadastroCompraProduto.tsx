import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import './comprar.css';
import ICliente from '../../types/Icliente';
import IProduto from '../../types/IProduto';

type Props = {
    tema: string
}

// eslint-disable-next-line no-empty-pattern
function FormularioCadastroCompraProduto({ }: Props) {
    const [clientes, setClientes] = useState<ICliente[]>([]);
    const [clienteSelecionado, setClienteSelecionado] = useState('');
    const [produtoSelecionado, setProdutoSelecionado] = useState('');
    const [valorProduto, setValorProduto] = useState(''); // State to hold value
    const [quantidadeProduto, setQuantidadeProduto] = useState<number>(1); // State to hold quantity
    const [produtos, setProdutos] = useState<IProduto[]>([]);

    useEffect(() => {
        const fetchCompra = async () => {
            try {
                const clientesResponse = await axios.get('http://localhost:5555/clientes/listar');
                setClientes(clientesResponse.data);

                const produtosResponse = await axios.get('http://localhost:5555/produtos/listar');
                setProdutos(produtosResponse.data);
            } catch (error) {
                console.error('Erro ao buscar clientes', error);
            }
        };
        
        fetchCompra();
    }, []);

    const cadastrar = async () => {
        if (!clienteSelecionado || !produtoSelecionado) {
            Swal.fire({
                title: "Erro!",
                text: "Selecione um cliente e um serviço antes de cadastrar!",
                icon: "error",
                confirmButtonColor: 'red'
            });
            return;
        }

        try {
            await axios.post('http://localhost:5555/comprar/cadastrar', {
                clienteID: clienteSelecionado,
                produtoID: produtoSelecionado,
                quantidadeProduto,
                valorProduto,
            });

            Swal.fire({
                title: "Compra cadastrada com sucesso!",
                icon: "success",
                confirmButtonColor: 'green'
            }).then(() => {
                window.location.reload();
            });
        } catch (error) {
            console.error('Erro ao cadastrar compra', error);
        }
    };

    return (
        <div className="container-fluid">
        <div className="form-group">
                <label htmlFor="servico">Selecione o cliente:</label>
                <div className="servico-list">
                    <select onChange={(e) => setClienteSelecionado(e.target.value)} name="cliente" id="cliente" style={{ display: 'block' }}>
                        <option>Selecione o cliente</option>
                    {clientes.map((cliente) => (
                        <option value={cliente.clienteID}>{cliente.nome}</option>
                    ))}
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="produto">Selecione o produto:</label>
                <div className="servico-list">
                    <select onChange={(e) => setProdutoSelecionado(e.target.value)} name="produto" id="produto" style={{ display: 'block' }}>
                        <option>Selecione o produto</option>
                    {produtos.map((produto) => (
                        <option key={produto.produtoID} value={produto.produtoID}>{produto.nome}</option>
                    ))}
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="valor">Selecione o valor:</label>
                <div className="servico-list">
                    <select onChange={(e) => setValorProduto(e.target.value)} name="valor" id="valor" style={{ display: 'block' }}>
                        <option>Selecione um valor</option>
                    {produtos.map((produto) => (
                        <option key={produto.produtoID} value={produto.valor}>{produto.valor}</option>
                    ))}
                    </select>
                </div>
            </div>
            <label htmlFor='quantidade'>Quantidade de produto: </label>
            <input
                type="number"
                value={quantidadeProduto}
                onChange={(e) => setQuantidadeProduto(parseInt(e.target.value))}
            />
            <button className="btn btn-primary" onClick={cadastrar}>Cadastrar</button>
        </div>
    );
}

export default FormularioCadastroCompraProduto;