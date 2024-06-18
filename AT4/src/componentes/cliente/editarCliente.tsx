import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencil } from 'react-icons/bs';
import { IMaskInput } from "react-imask";
import axios from 'axios';
import Swal from 'sweetalert2';
import './cliente.css';

type props = {
    id: number,
    nome: string,
    email: string,
    rua: string,
    numero: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    info: string
    telefones: {
        id: number,
        numero: string,
        ddd: string,
        links: never[]
    }[]
}

function EditarCliente(props: props) {
    const [show, setShow] = useState(false)
    const [secaoForm, setSecaoForm] = useState('Informações Básicas')
    const [nome, setNome] = useState(props.nome)
    const [email, setEmail] = useState(props.email)
    const [rua, setRua] = useState(props.rua)
    const [numero, setNumero] = useState(props.numero)
    const [bairro, setBairro] = useState(props.bairro)
    const [cidade, setCidade] = useState(props.cidade)
    const [estado, setEstado] = useState(props.estado)
    const [cep, setCep] = useState(props.cep)
    const [info, setInfo] = useState(props.info)
    const [telefones, setTelefones] = useState(props.telefones)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleChange(event: any, setter: any) {
        const value = event.target.value
        setter(value)
    }

    function handleTelefoneChange(event: any, index: number) {
        const value = event.target.value;
        let tels = telefones.slice()
        tels[index].ddd = value.slice(1, 3)
        tels[index].numero = value.slice(5)
        setTelefones(tels)
    }

    function changeSecao(valor: string) {
        setSecaoForm(valor)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.put('http://localhost:32832/cliente/atualizar', {
            id: props.id,
            nome: nome,
            email: email,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            cep: cep,
            info: info,
            telefones: telefones
        }).then(() => {
            Swal.fire({
                title: "Cliente atualizado com sucesso!",
                icon: "success",
                confirmButtonColor: 'green'
            }).then(() => {
                window.location.reload()
            })
        })
    }

    return (
        <>
            <BsPencil onClick={handleShow} className="edit" />

            <Modal
                size='lg'
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editar cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='form-cliente container-fluid'>
                        <form id='editar-cliente' onSubmit={handleSubmit}>
                            <div className='seletor-secao'>
                                <div onClick={() => changeSecao('Informações Básicas')}>Informações</div>
                                <div onClick={() => changeSecao('Endereço')}>Endereço</div>
                                <div onClick={() => changeSecao('Telefones')}>Telefones</div>
                            </div>
                            <h4>{secaoForm}</h4>
                            {secaoForm === 'Informações Básicas' &&
                                <>
                                    <div>
                                        <label htmlFor="nome">Nome</label>
                                        <input className="form-control" id="nome" type="text" defaultValue={props.nome} onChange={(e) => handleChange(e, setNome)}></input>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input className="form-control" id="email" type="email" defaultValue={props.email} onChange={(e) => handleChange(e, setEmail)}></input>
                                    </div>
                                    <div className='teste'>
                                        <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                                        <Button variant="primary" type='submit'>Editar</Button>
                                    </div>
                                </>
                            }
                            {secaoForm === 'Endereço' &&
                                <>
                                    <div>
                                        <label htmlFor="nome">Rua</label>
                                        <input className="form-control" id="nome" type="text" defaultValue={props.rua} onChange={(e) => handleChange(e, setRua)}></input>
                                    </div>
                                    <div>
                                        <label htmlFor="nome">Número</label>
                                        <input className="form-control" id="nomeSocial" type="text" defaultValue={props.numero} onChange={(e) => handleChange(e, setNumero)}></input>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Bairro</label>
                                        <input className="form-control" id="email" type="text" defaultValue={props.bairro} onChange={(e) => handleChange(e, setBairro)}></input>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Cidade</label>
                                        <input className="form-control" id="email" type="text" defaultValue={props.cidade} onChange={(e) => handleChange(e, setCidade)}></input>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Estado</label>
                                        <input className="form-control" id="email" type="text" defaultValue={props.estado} onChange={(e) => handleChange(e, setEstado)}></input>
                                    </div>
                                    <div>
                                        <label htmlFor="email">CEP</label>
                                        <input className="form-control" id="email" type="text" defaultValue={props.cep} onChange={(e) => handleChange(e, setCep)}></input>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Informações adicionais</label>
                                        <textarea className="form-control" id="email" defaultValue={props.info} onChange={(e) => handleChange(e, setInfo)}></textarea>
                                    </div>
                                    <div className='teste'>
                                        <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                                        <Button variant="primary" type='submit'>Editar</Button>
                                    </div>
                                </>
                            }
                            {secaoForm === 'Telefones' &&
                                <>
                                    {props.telefones.map((t: any, i: any) => {
                                        return <div key={i + 1}>
                                            <label htmlFor={`telefone-${i + 1}`}>Telefone {i + 1}</label>
                                            <IMaskInput
                                                className="form-control" id={`telefone-${i + 1}`} type="text" defaultValue={t.ddd + t.numero}
                                                mask='(00) 000000000'
                                                onChange={(e) => handleTelefoneChange(e, i)}
                                            />
                                        </div>
                                    })}
                                    <div className='teste'>
                                        <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                                        <Button variant="primary" type='submit'>Editar</Button>
                                    </div>
                                </>
                            }
                        </form>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default EditarCliente;