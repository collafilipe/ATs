import './produto.css'
import { SetStateAction, useState } from 'react'

type props = {
    tema: string
}

function FormularioCadastroProduto(props: props) {

    let tema = props.tema

    const [nome, setNome] = useState('')
    const [valor, setValor] = useState('')

    const cadastrar = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        fetch('http://localhost:32832/produto/cadastrar', {
            method: 'POST',
            body: JSON.stringify({
                nome: nome,
                valor: valor
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((data) => {
                setNome('')
                setValor('')
                console.log('Produto cadastrado com sucesso', data);
            })
    }

    return (
        <div className="container-fluid">
            <h3 className="cadastro-title">Cadastrar produto</h3>
            <form onSubmit={cadastrar}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" value={nome} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNome(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" value={valor} onChange={(e: { target: {value: SetStateAction<string>;}; }) => setValor(e.target.value)} />
                </div>    
    
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button><br/><br/>
                </div>
            </form>
        </div>
    )
}


export default FormularioCadastroProduto;