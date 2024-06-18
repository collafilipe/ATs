import { useState, useEffect } from "react";
import '../comprar/comprar.css';
import axios from "axios";

interface Props {
    tema: string;
}

interface IListaMaisConsumidosFeminino {
    servicoID: string;
    totalConsumido: number;
}

const ListaMaisConsumidosFeminino: React.FC<Props> = ({ tema }) => {
    const [lista, setLista] = useState<IListaMaisConsumidosFeminino[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5555/comprar/listarMaisConsumidosFeminino`);
                setLista(response.data);
            } catch (error) {
                console.error('Erro ao buscar compras', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h5 className='center-align'>Lista dos mais consumidos clientes feminino: </h5><br />
            <div className='collection'>
                {lista.map((item, index) => (
                    <div key={index} className='collection-item'>
                        ID: {item.servicoID}<br></br>
                        Total Consumido: {item.totalConsumido}
                    </div>
                ))}
            </div>
        </>
    );
}

export default ListaMaisConsumidosFeminino;
