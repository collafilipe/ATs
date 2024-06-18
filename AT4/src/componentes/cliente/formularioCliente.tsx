import { useState } from 'react'
import Swal from 'sweetalert2'

type Props = {
    tema: string
}

function FormularioCadastroCliente({ tema }: Props) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [cep, setCep] = useState('')
    const [info, setInfo] = useState('')
    const [telefone, setTelefone] = useState('')
    const [ddd, setDdd] = useState('')

    const cadastrar = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await fetch('http://localhost:32832/cliente/cadastrar', {
                method: 'POST',
                body: JSON.stringify({
                    nome,
                    email,
                    endereco: {
                        rua,
                        numero,
                        bairro,
                        cidade,
                        estado,
                        codigoPostal: cep,
                        informacoesAdicionais: info
                    },
                    telefones: [
                        {
                            numero: telefone,
                            ddd
                        }
                    ]
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then(() => {
                Swal.fire({
                    title: "Cliente atualizado com sucesso!",
                    icon: "success",
                    confirmButtonColor: 'green'
                }).then(() => {
                    window.location.reload()
                })
            })
        } catch (error) {
            console.error('Erro ao cadastrar cliente', error);
        }
    }

    return (
        <div className="container-fluid">
            <h3 className="cadastro-title">Cadastrar cliente</h3>
            <form onSubmit={cadastrar}>
            <div className="input-group mb-3">
                    <input
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                        aria-label="Nome"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Rua"
                        aria-label="Rua"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Número"
                        aria-label="Número"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Bairro"
                        aria-label="Bairro"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Cidade"
                        aria-label="Cidade"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Estado"
                        aria-label="Estado"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="CEP"
                        aria-label="CEP"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        value={info}
                        onChange={(e) => setInfo(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Informações Adicionais"
                        aria-label="Informações Adicionais"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Telefone"
                        aria-label="Telefone"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        value={ddd}
                        onChange={(e) => setDdd(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="DDD"
                        aria-label="DDD"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    )
}

export default FormularioCadastroCliente;
