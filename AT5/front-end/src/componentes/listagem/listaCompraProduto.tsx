import { useState, useEffect } from "react";
import '../comprar/comprar.css';
import axios from "axios";
import { CompraProduto } from "../comprar/comprar";
import { IcompraClienteProduto } from "../../types/IcompraCliente";

interface Props {
    tema: string;
}

const ListaCompra: React.FC<Props> = ({ tema }) => {
    const [compra, setCompra] = useState<IcompraClienteProduto[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<IcompraClienteProduto[]>(`http://localhost:5555/comprar/listarProduto`);
                setCompra(response.data);
            } catch (error) {
                console.error('Erro ao buscar compras', error);
            }
        };
        fetchData();
    }, []);

    // Verifica se há compras com produtos nulos
    const comprasComProdutosNulos = compra.filter(compra => compra.produto === null);

    if (comprasComProdutosNulos.length === compra.length) {
        return (
            <div>
                <h5 className='center-align'>Lista de Compras: </h5><br />
                <div className='center-align'>
                    <h6>Não há compras cadastradas!</h6>
                </div>
            </div>
        );
    }

    return (
        <>
            <h5 className='center-align'>Lista de Compras: </h5><br />
            <div className='collection'>
                {compra.map((compra, index) => (
                    <div key={index}>
                        <CompraProduto
                            key={compra.compraID}
                            compraID={compra.compraID}
                            cliente={compra.cliente}
                            produto={compra.produto}
                            quantidadeProduto={compra.quantidadeProduto}
                            valorProduto={compra.valorProduto}              
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ListaCompra;