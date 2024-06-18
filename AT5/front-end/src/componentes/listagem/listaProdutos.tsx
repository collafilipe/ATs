import { useState, useEffect } from "react";
import '../produto/produto.css'
import IProduto from "../../types/IProduto";
import axios from "axios";
import Produto from "../produto/produto";

interface Props {
    tema: string;
}

const ListaProdutos: React.FC<Props> = ({ tema }) => {
    const [produto, setProduto] = useState<IProduto[]>([]);

    useEffect(() => {
        try {
            const fetchData = async ()  => {
                const response = await axios.get<IProduto[]>(`http://localhost:5555/produtos/listar`);
                setProduto(response.data);
            }
            fetchData();
        } catch (error) {
            console.error('Erro ao buscar produtos', error);
        }
    }, []);

    return (
        <>
            <h5 className='center-align'>Lista de Produtos: </h5><br/>
            <div className='collection'>
                {produto.map((produto, index) => (
                    <div key={index}>
                        <Produto key={produto.produtoID}
                            produtoID={produto.produtoID}
                            nome={produto.nome}
                            valor={produto.valor}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
    

export default ListaProdutos;