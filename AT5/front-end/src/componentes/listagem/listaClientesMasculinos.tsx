import React, { useState, useEffect } from "react";
import '../comprar/comprar.css';
import axios from "axios";

interface Props {
    tema: string;
}

interface ClienteMasculino {
    clienteID: number;
    nome: string;
    sexo: string;
}

const ListaClientesMasculinos: React.FC<Props> = ({ tema }) => {
    const [clientesMasculinos, setClientesMasculinos] = useState<ClienteMasculino[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ClienteMasculino[]>(`http://localhost:5555/clientes/clientesMasculinos`);
                setClientesMasculinos(response.data);
            } catch (error) {
                console.error('Erro ao buscar clientes masculinos', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h5 className='center-align'>Lista de Clientes Masculinos: </h5><br />
            <div className='collection'>
                {clientesMasculinos.map((cliente, index) => (
                    <div key={index} className='collection-item'>
                        Cliente: {cliente.nome} - Sexo: {cliente.sexo}
                    </div>
                ))}
            </div>
        </>
    );
}

export default ListaClientesMasculinos;
