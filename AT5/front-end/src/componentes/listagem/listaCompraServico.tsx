// components/listaCompra/ListaCompra.tsx
import { useState, useEffect } from "react";
import '../comprar/comprar.css';
import axios from "axios";
import { CompraServico } from "../comprar/comprar";
import { IcompraClienteServico } from "../../types/IcompraCliente";

interface Props {
    tema: string;
}

const ListaCompra2: React.FC<Props> = ({ tema }) => {
    const [compra, setCompra] = useState<IcompraClienteServico[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<IcompraClienteServico[]>(`http://localhost:5555/comprar/listarServico`);
                setCompra(response.data);
            } catch (error) {
                console.error('Erro ao buscar compras', error);
            }
        };
        fetchData();
    }, []);

    const comprasComServicosNulos = compra.filter(compra => compra.servico === null);

    if (comprasComServicosNulos.length === compra.length) {
        return (
            <div>
                <h5 className='center-align'>Lista de Serviços: </h5><br />
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
                        <CompraServico
                            key={compra.compraID}
                            compraID={compra.compraID}
                            cliente={compra.cliente}
                            servico={compra.servico}
                            quantidadeServico={compra.quantidadeServico}
                            valorServico={compra.valorServico}             
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ListaCompra2;