import { useState, useEffect } from "react";
import '../comprar/comprar.css';
import axios from "axios";

interface Props {
    tema: string;
}

interface ILista5MaisGasto {
    clienteID: string;
    totalConsumido: number;
}

const Lista5MaisGasto: React.FC<Props> = ({ tema }) => {
    const [lista, setLista] = useState<ILista5MaisGasto[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5555/comprar/listarConsumidoValor`);
                setLista(response.data);
            } catch (error) {
                console.error('Erro ao buscar compras', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h5 className='center-align'>Lista dos 10 mais gasto: </h5><br />
            <div className='collection'>
                {lista.map((item, index) => (
                    <div key={index} className='collection-item'>
                        Cliente ID: {item.clienteID} - Total Gasto: {item.totalConsumido}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Lista5MaisGasto;