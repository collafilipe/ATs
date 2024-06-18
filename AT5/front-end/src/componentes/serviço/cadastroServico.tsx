import Swal from 'sweetalert2'
import './servico.css'
import { useState } from 'react'
import axios from 'axios'

type props = {
    tema: string
}

function FormularioCadastroServico({ tema }: props) {

    const [nome, setNome] = useState('')
    const [valor, setValor] = useState('')

    const cadastrar = async (e: React.FormEvent) => {
        try {
            e.preventDefault()
            await axios.post('http://localhost:5555/servicos/cadastrar', {
                    nome,
                    valor,
                })
                Swal.fire({
                    title: "Serviço cadastrado com sucesso!",
                    icon: "success",
                    confirmButtonColor: 'green'
                }).then(() => {
                    window.location.reload()
                })
        } catch (error) {
            console.error('Erro ao cadastrar serviço', error);
        }
    }

    return (
        <div className="container-fluid">
            <h3 className="cadastro-title">Cadastrar Serviço</h3>
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


export default FormularioCadastroServico;