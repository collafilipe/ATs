import 'materialize-css/dist/css/materialize.min.css'
import Servico from "./servico";
import './servico.css';

type Props = {
    tema: string;
}

function ListaServicos(props: Props) {
    let servicos = [
        {id: 1, nome: 'Serviço 1', valor: 10.00, quantidade: 5},
        {id: 2, nome: 'Serviço 2', valor: 20.00, quantidade: 20}
    ]
    
    return (
        <>
            <h5 className="center-align">Lista de Serviços: </h5><br/>
            <div className="collection">
                {servicos.map(s => {
                    return (
                        <Servico key={s.id}
                            id={s.id}
                            nome={s.nome}
                            valor={s.valor}
                            quantidade={s.quantidade}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default ListaServicos;