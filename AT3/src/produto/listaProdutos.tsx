import 'materialize-css/dist/css/materialize.min.css'
import Produto from './produto'


type props = {
    tema: string
}

function ListaProdutos(props: props) {
    let produtos = [
        {id: 1, nome: 'Produto 1', valor: 20.00, quantidade: 2},
        {id: 2, nome: 'Produto 2', valor: 30.00, quantidade: 3}
    ]

    return (
        <>
            <h5 className='center-align'>Lista de Produtos: </h5><br/>
            <div className='collection'>
                {produtos.map(p => {
                    return (
                        <Produto key={p.id}
                            id={p.id}
                            nome={p.nome}
                            valor={p.valor}
                            quantidade={p.quantidade}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default ListaProdutos;