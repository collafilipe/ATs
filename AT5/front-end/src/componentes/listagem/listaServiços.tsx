import { useState, useEffect } from "react";
import '../serviço/servico.css'
import axios from "axios";
import IServico from "../../types/IServico";
import Servico from "../serviço/servico";

interface Props {
    tema: string;
}

const ListaServicos: React.FC<Props> = ({ tema }) => {
    const [servico, setServico] = useState<IServico[]>([]);

    useEffect(() => {
        try {
            const fetchData = async ()  => {
                const response = await axios.get<IServico[]>(`http://localhost:5555/servicos/listar`);
                setServico(response.data);
            }
            fetchData();
        } catch (error) {
            console.error('Erro ao buscar serviço', error);
        }
    }, []);

    return (
        <>
            <h5 className='center-align'>Lista de Serviços: </h5><br/>
            <div className='collection'>
                {servico.map((servico, index) => (
                    <div key={index}>
                        <Servico key={servico.servicoID}
                            servicoID={servico.servicoID}
                            nome={servico.nome}
                            valor={servico.valor}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
    

export default ListaServicos;