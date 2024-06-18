import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPencil } from 'react-icons/bs';
import './cliente.css'
import { IMaskInput } from "react-imask";

type props = {
    id: number,
    nome: string,
    nomeSocial: string,
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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function changeSecao(valor: string){
        setSecaoForm(valor)
    }

    return(
        <>
            <BsPencil onClick={handleShow} className="edit"/>

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
                        <form id='editar-cliente'>
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
                                        <input className="form-control" id="nome" type="text" defaultValue={props.nome}></input>
                                    </div>
                                    <div>
                                        <label htmlFor="nome">Nome Social</label>
                                        <input className="form-control" id="nomeSocial" type="text" defaultValue={props.nomeSocial}></input>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input className="form-control" id="email" type="email" defaultValue={props.email}></input>
                                    </div>
                                </>
                            }
                            {secaoForm === 'Endereço' && 
                                <>
                                    <div>
                                        <label htmlFor="nome">Rua</label>
                                        <input className="form-control" id="nome" type="text" defaultValue={props.rua}></input>
                                    </div>
                                    <div>
                                        <label htmlFor="nome">Número</label>
                                        <input className="form-control" id="nomeSocial" type="text" defaultValue={props.numero}></input>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Bairro</label>
                                        <input className="form-control" id="email" type="text" defaultValue={props.bairro}></input>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Cidade</label>
                                        <input className="form-control" id="email" type="text" defaultValue={props.cidade}></input>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Estado</label>
                                        <input className="form-control" id="email" type="text" defaultValue={props.estado}></input>
                                    </div>
                                    <div>
                                        <label htmlFor="email">CEP</label>
                                        <input className="form-control" id="email" type="text" defaultValue={props.cep}></input>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Informações adicionais</label>
                                        <textarea className="form-control" id="email" defaultValue={props.info}></textarea>
                                    </div>
                                </>
                            }
                            {secaoForm === 'Telefones' &&
                                <>
                                    {props.telefones.map((t: any, i:any) => {
                                        return <div key={i+1}>
                                                    <label htmlFor={`telefone-${i+1}`}>Telefone {i+1}</label>
                                                    <IMaskInput
                                                    className="form-control" id={`telefone-${i+1}`} type="text" defaultValue={t.ddd + t.numero}
                                                    mask='(00) 000000000'
                                                    />
                                                </div>
                                    })}
                                </>
                            }
                        </form>
                    </div>
                
                </Modal.Body>
                <Modal.Footer>
                    <div className='teste'>
                        <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                        <button className='btn btn-primary' type='button'>Editar</button>
                    </div>
                </Modal.Footer><br/><br/>
            </Modal>
        </>
    )
}

export default EditarCliente;