import { useState, useEffect } from "react";
import '../comprar/comprar.css';
import axios from "axios";

interface Props {
    tema: string;
}

interface ILista10Consumidos {
    clienteID: string;
    totalConsumido: number;
}

const Lista10Consumidos: React.FC<Props> = ({ tema }) => {
    const [lista, setLista] = useState<ILista10Consumidos[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5555/comprar/listarTop10Clientes`);
                setLista(response.data);
            } catch (error) {
                console.error('Erro ao buscar compras', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h5 className='center-align'>Lista dos 10 mais consumidos: </h5><br />
            <div className='collection'>
                {lista.map((item, index) => (
                    <div key={index} className='collection-item'>
                        Cliente ID: {item.clienteID} - Total Consumido: {item.totalConsumido}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Lista10Consumidos;