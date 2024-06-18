import { useState } from "react"
import { BsXLg } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import EditarCliente from "./editarCliente";
import Swal from "sweetalert2";
import './cliente.css';
import axios from "axios";

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

function Cliente(props: props) {

    const [show, setShow] = useState(false)

    const toggleShow = () => setShow(!show);

    function deletar() {
        Swal.fire({
            title: "Tem certeza que quer excluir o cliente?",
            showCancelButton: true,
            confirmButtonText: "Excluir",
            confirmButtonColor: 'firebrick',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://localhost:32832/cliente/excluir', {data: {id: props.id}})
                .then(() => {
                    Swal.fire({
                        title: "Cliente excluído com sucesso!",
                        icon: "success",
                        confirmButtonColor: 'green'
                    }).then(() => {
                        window.location.reload()
                    })
                })
            }
          });
    }

    return(
        <div className="list-group-item list-group-item-action">
            <div className="item-listado">
                <div className="conteudo">
                    <span>{props.nome}</span>
                </div>
                <div className="acoes">
                    <EditarCliente
                        id={props.id}
                        nome={props.nome}
                        email={props.email}
                        rua={props.rua}
                        numero={props.numero}
                        bairro={props.bairro}
                        cidade={props.cidade}
                        estado={props.estado}
                        cep={props.cep}
                        info={props.info}
                        telefones={props.telefones}
                    ></EditarCliente>
                    <BsXLg className="icone" style={{color: 'red'}} onClick={deletar}/>
                    <BsChevronDown onClick={toggleShow} className="icone"/>
                </div>
            </div>
            {show && 
                <div>
                    <div className="detalhes">
                        <h3>Informações básicas</h3>
                        <div className="detalhes-item">
                            <div><b>Nome Completo:  </b>{props.nome}</div>
                            <div><b>Email:  </b>{props.email}</div>

                        </div>                            
                    </div>
                    <div className="detalhes">
                        <h3>Telefones</h3>
                        <div className="detalhes-item">
                            {props.telefones.map((t: any, i: any) => { return <div><b>Telefone {i+1}:  </b>({t.ddd}) {t.numero}</div> })}                        
                        </div>
                    </div>
                    <div className="detalhes">
                        <h3>Endereço</h3>
                        <div className="detalhes-item">
                            <div><b>Rua:  </b>{props.rua}</div>
                            <div><b>Número:  </b>{props.numero}</div>
                            <div><b>Bairro:  </b>{props.bairro}</div>
                            <div><b>Cidade:  </b>{props.cidade}</div>
                            <div><b>Estado:  </b>{props.estado}</div>
                            <div><b>Código Postal:  </b>{props.cep}</div>
                            <div><b>Informações adicionais:  </b>{props.info}</div>
                        </div>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default Cliente;