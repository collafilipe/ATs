import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencil } from 'react-icons/bs';
import './servico.css'

type Props = {
    id: number,
    nome: string,
    valor: number,
    quantidade: number
}

function EditarServico(props: Props) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <div className='form-group'>
                            <label htmlFor="nome">Nome</label>
                            <input className="form-control" id="nome" type="text" defaultValue={props.nome} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="valor">Valor</label>
                            <input className="form-control" id="valor" type="text" defaultValue={props.valor} />
                        </div>
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