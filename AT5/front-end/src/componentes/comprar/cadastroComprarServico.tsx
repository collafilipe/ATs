import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import './comprar.css';
import ICliente from '../../types/Icliente';
import IServico from '../../types/IServico';

type Props = {
    tema: string
}

// eslint-disable-next-line no-empty-pattern
function FormularioCadastroCompraServico({ }: Props) {
    const [clientes, setClientes] = useState<ICliente[]>([]);
    const [clienteSelecionado, setClienteSelecionado] = useState('');
    const [servicoSelecionado, setServicoSelecionado] = useState('');
    const [valorServico, setValorServico] = useState(''); // State to hold value
    const [quantidadeServico, setQuantidadeServico] = useState<number>(1); // State to hold quantity
    const [servicos, setServicos] = useState<IServico[]>([]);

    useEffect(() => {
        const fetchCompra = async () => {
            try {
                const clientesResponse = await axios.get('http://localhost:5555/clientes/listar');
                setClientes(clientesResponse.data);

                const servicosResponse = await axios.get('http://localhost:5555/servicos/listar');
                setServicos(servicosResponse.data);
            } catch (error) {
                console.error('Erro ao buscar clientes', error);
            }
        };
        
        fetchCompra();
    }, []);

    const cadastrar = async () => {
        if (!clienteSelecionado || !servicoSelecionado) {
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
                servicoID: servicoSelecionado,
                quantidadeServico,
                valorServico,
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
                <label htmlFor="servico">Selecione o serviço:</label>
                <div className="servico-list">
                    <select onChange={(e) => setServicoSelecionado(e.target.value)} name="servico" id="servico" style={{ display: 'block' }}>
                        <option>Selecione o serviço</option>
                    {servicos.map((servico) => (
                        <option key={servico.servicoID} value={servico.servicoID}>{servico.nome}</option>
                    ))}
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="valor">Selecione o valor:</label>
                <div className="servico-list">
                    <select onChange={(e) => setValorServico(e.target.value)} name="valor" id="valor" style={{ display: 'block' }}>
                        <option>Selecione um valor</option>
                    {servicos.map((servico) => (
                        <option key={servico.servicoID} value={servico.valor}>{servico.valor}</option>
                    ))}
                    </select>
                </div>
            </div>
            <label htmlFor='quantidade'>Quantidade de serviço: </label>
            <input
                type="number"
                value={quantidadeServico}
                onChange={(e) => setQuantidadeServico(parseInt(e.target.value))}
            />
            <button className="btn btn-primary" onClick={cadastrar}>Cadastrar</button>
        </div>
    );
}

export default FormularioCadastroCompraServico;