import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencil } from 'react-icons/bs';
import './servico.css'
import Swal from 'sweetalert2';
import axios from 'axios';
import IServico from '../../types/IServico';

function EditarServico(props: IServico) {
    const [show, setShow] = useState(false);
    const [nome, setNome] = useState(props.nome);
    const [valor, setValor] = useState(props.valor);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleChange(event: any, setter: any) {
        const value = event.target.value
        setter(value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.put('http://localhost:5555/servicos/alterar/' + (props.servicoID), {
            id: props.servicoID,
            nome: nome,
            valor: valor,
        }).then(() => {
            Swal.fire({
                title: "Serviço atualizado com sucesso!",
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
                                <>
                                    <div>
                                        <label htmlFor="nome">Nome</label>
                                        <input className="form-control" id="nome" type="text" value={nome} onChange={(e) => handleChange(e, setNome)} />
                                    </div>
                                    <div>
                                        <label htmlFor="valor">Valor</label>
                                        <input className="form-control" id="valor" type="number" value={valor} onChange={(e) => handleChange(e, setValor)} />
                                    </div>
                                </>
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

export default EditarServico;