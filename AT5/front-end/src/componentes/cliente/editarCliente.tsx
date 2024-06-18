import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencil } from 'react-icons/bs';
import axios from 'axios';
import Swal from 'sweetalert2';
import './cliente.css';
import ICliente from '../../types/Icliente';
import 'materialize-css/dist/css/materialize.min.css';

function EditarCliente(props: ICliente) {
    const [show, setShow] = useState(false);
    const [secaoForm, setSecaoForm] = useState('Informações Básicas');
    const [nome, setNome] = useState(props.nome);
    const [email, setEmail] = useState(props.email);
    const [rua, setRua] = useState(props.rua);
    const [cidade, setCidade] = useState(props.cidade);
    const [estado, setEstado] = useState(props.estado);
    const [sexo, setSexo] = useState(props.sexo);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setter: React.Dispatch<React.SetStateAction<string>>) {
        const value = event.target.value;
        setter(value);
    }

    function changeSecao(valor: string) {
        setSecaoForm(valor);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.put('http://localhost:5555/clientes/alterar/' + props.clienteID, {
            id: props.clienteID,
            nome: nome,
            email: email,
            sexo: sexo,
            rua: rua,
            cidade: cidade,
            estado: estado,
        }).then(() => {
            Swal.fire({
                title: "Cliente atualizado com sucesso!",
                icon: "success",
                confirmButtonColor: 'green'
            }).then(() => {
                window.location.reload();
            });
        });
    }

    return (
        <>
            <BsPencil onClick={handleShow} className="edit" />

            <Modal className='modal'
                size='lg'
                show={show}
                BsXLg onHide={handleClose}
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
                            </div>
                            <h4>{secaoForm}</h4>
                            {secaoForm === 'Informações Básicas' &&
                                <>
                                    <div>
                                        <label htmlFor="nome">Nome</label>
                                        <input className="form-control" id="nome" type="text" value={nome} onChange={(e) => handleChange(e, setNome)} />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input className="form-control" id="email" type="email" value={email} onChange={(e) => handleChange(e, setEmail)} />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Sexo</label>
                                        <input className="form-control" id="email" type="text" value={sexo} onChange={(e) => handleChange(e, setSexo)} />
                                    </div>
                                </>
                            }
                            {secaoForm === 'Endereço' &&
                                <>
                                    <div>
                                        <label htmlFor="nome">Rua</label>
                                        <input className="form-control" id="nome" type="text" value={rua} onChange={(e) => handleChange(e, setRua)} />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Cidade</label>
                                        <input className="form-control" id="email" type="text" value={cidade} onChange={(e) => handleChange(e, setCidade)} />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Estado</label>
                                        <input className="form-control" id="email" type="text" value={estado} onChange={(e) => handleChange(e, setEstado)} />
                                    </div>
                                </>
                            }
                            <div className='teste'>
                                <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                                <Button variant="primary" type='submit'>Editar</Button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EditarCliente;