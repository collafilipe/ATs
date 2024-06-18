import { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

type Props = {
    tema: string
}

// eslint-disable-next-line no-empty-pattern
function FormularioCadastroCliente({ }: Props) {
    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [rua, setRua] = useState('')
    const [cpf, setCpf] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [info, setInfo] = useState('')
    const [telefone, setTelefone] = useState('')
    const [sexo, setSexo] = useState('')

    const cadastrar = async (e: React.FormEvent) => {
        try {
            e.preventDefault()

            await axios.post('http://localhost:5555/clientes/cadastrar', {
                nome,
                email,
                cpf,
                rua,
                cidade,
                estado,
                sexo,
                informacoesAdicionais: info,
                telefone
            })

            Swal.fire({
                title: "Cliente cadastrado com sucesso!",
                icon: "success",
                confirmButtonColor: 'green'
            }).then(() => {
                window.location.reload()
            })
        } catch (error) {
            console.error('Erro ao cadastrar cliente', error);
        }
    }

    return (
        <div className="container-fluid">
            <h3 className="cadastro-title">Cadastrar cliente</h3>
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
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rua">Rua:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="rua"
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cpf">CPF:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cpf"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sexo">Genero:</label>
                    <select
                        className="form-control"
                        id="sexo"
                        value={sexo}
                        style={{ display: 'block' }}
                        onChange={(e) => setSexo(e.target.value)}
                    >
                        <option>Selecione o genero</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="cidade">Cidade:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cidade"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="estado">Estado:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="estado"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="info">Informações adicionais:</label>
                    <textarea
                        className="form-control"
                        id="info"
                        value={info}
                        onChange={(e) => setInfo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="telefone">Telefone:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
            <br/>
        </div>
    )
}

export default FormularioCadastroCliente;
