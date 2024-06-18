import React, { useState, useEffect } from "react";
import '../comprar/comprar.css';
import axios from "axios";

interface Props {
    tema: string;
}

interface ClienteFeminino {
    clienteID: number;
    nome: string;
    sexo: string;
}

const ListaClientesFemininos: React.FC<Props> = ({ tema }) => {
    const [clientesFemininos, setClientesFeminino] = useState<ClienteFeminino[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ClienteFeminino[]>(`http://localhost:5555/clientes/clientesFemininos`);
                setClientesFeminino(response.data);
            } catch (error) {
                console.error('Erro ao buscar clientes femininos', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h5 className='center-align'>Lista de Clientes Femininos: </h5><br />
            <div className='collection'>
                {clientesFemininos.map((cliente, index) => (
                    <div key={index} className='collection-item'>
                        Cliente: {cliente.nome} - Sexo: {cliente.sexo}
                    </div>
                ))}
            </div>
        </>
    );
}

export default ListaClientesFemininos;
