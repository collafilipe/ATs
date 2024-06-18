import Swal from 'sweetalert2'
import './produto.css'
import { useState } from 'react'
import axios from 'axios'

type props = {
    tema: string
}

function FormularioCadastroProduto({ tema }: props) {

    const [nome, setNome] = useState('')
    const [valor, setValor] = useState('')

    const cadastrar = async (e: React.FormEvent) => {
        try {
            e.preventDefault()
            await axios.post('http://localhost:5555/produtos/cadastrar', {
                    nome,
                    valor,
                })
                Swal.fire({
                    title: "Produto cadastrado com sucesso!",
                    icon: "success",
                    confirmButtonColor: 'green'
                }).then(() => {
                    window.location.reload()
                })
        } catch (error) {
            console.error('Erro ao cadastrar produto', error);
        }
    }

    return (
        <div className="container-fluid">
            <h3 className="cadastro-title">Cadastrar Produto</h3>
            <form onSubmit={cadastrar}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="valor">Valor:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="valor"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    )
}


export default FormularioCadastroProduto;