import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencil } from 'react-icons/bs';
import './servico.css'
import axios from 'axios';
import Swal from 'sweetalert2';

type Props = {
    id: number,
    nome: string,
    valor: string,
    quantidade: string
}

function EditarServico(props: Props) {
    const [show, setShow] = useState(false)
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
        axios.put('http://localhost:32831/servico/atualizar', {
            id: props.id,
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
                    <Modal.Title>Editar serviço</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='form-cliente'>
                        <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="nome">Nome</label>
                            <input className="form-control" id="nome" type="text" defaultValue={props.nome} onChange={(e) => handleChange(e, setNome)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="valor">Valor</label>
                            <input className="form-control" id="valor" type="text" defaultValue={props.valor} onChange={(e) => handleChange(e, setValor)} />
                        </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="teste">
                        <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                        <button className='btn btn-primary' type='button'>Editar</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditarServico;