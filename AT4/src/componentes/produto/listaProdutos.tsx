import 'materialize-css/dist/css/materialize.min.css'
import Produto from './produto'
import { useEffect, useState } from 'react'


type props = {
    tema: string
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
type Produto = {
    id: number;
    nome: string;
    valor: string;
    quantidade: string;
}

function ListaProdutos(props: props) {
    const [produto, setProduto] = useState([])
    const produtos: Produto[] = produto

    useEffect(() => {
        fetch('http://localhost:32832/produtos', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json().then(data => {
                setProduto(data)
                console.log(data)
            })
        })
    }, [])

    return (
        <>
            <h5 className='center-align'>Lista de Produtos: </h5><br/>
            <div className='collection'>
                {produtos.map(p => {
                    return (
                        <div key={p.id}>
                            <Produto key={p.id}
                                id={p.id}
                                nome={p.nome}
                                valor={p.valor}
                                quantidade={p.quantidade}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ListaProdutos;