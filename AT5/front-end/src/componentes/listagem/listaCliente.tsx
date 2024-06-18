import { useState, useEffect } from "react";
import '../cliente/cliente.css'
import ICliente from "../../types/Icliente";
import axios from "axios";
import Cliente from "../cliente/cliente";

interface Props {
    tema: string;
}

const ListaCliente: React.FC<Props> = ({ tema }) => {
    const [cliente, setCliente] = useState<ICliente[]>([]);

    useEffect(() => {
        try {
            const fetchData = async ()  => {
                const response = await axios.get<ICliente[]>(`http://localhost:5555/clientes/listar`);
                setCliente(response.data);
            }
            fetchData();
        } catch (error) {
            console.error('Erro ao buscar clientes', error);
        }
    }, []);

    return (
        <>
            <h5 className='center-align'>Lista de Clientes: </h5><br/>
            <div className='collection'>
                {cliente.map((cliente, index) => (
                    <div key={index}>
                        <Cliente key={cliente.clienteID}
                            clienteID={cliente.clienteID}
                            nome={cliente.nome}
                            email={cliente.email}
                            cpf={cliente.cpf}
                            sexo={cliente.sexo}
                            rua={cliente.rua}
                            cidade={cliente.cidade}
                            estado={cliente.estado}
                            informacoesAdicionais={cliente.informacoesAdicionais}
                            telefone={cliente.telefone}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
    

export default ListaCliente;