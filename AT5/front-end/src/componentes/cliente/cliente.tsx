import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import EditarCliente from "./editarCliente";
import Swal from "sweetalert2";
import './cliente.css';
import axios from "axios";
import ICliente from "../../types/Icliente";
import 'materialize-css/dist/css/materialize.min.css';

function Cliente(cliente: ICliente) {
    const [show, setShow] = useState(false);

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
                axios.delete('http://localhost:5555/clientes/excluir/' + cliente.clienteID, {data: {id: cliente.clienteID}})
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
                    <div className="cliente-details">
                        <h5> Cliente: {cliente.nome}</h5>
                    <div className="acoes">
                        <EditarCliente 
                            clienteID={cliente.clienteID}
                            nome={cliente.nome}
                            email={cliente.email}
                            cpf={cliente.cpf}
                            sexo={cliente.sexo}
                            rua={cliente.rua}
                            telefone={cliente.telefone}
                            cidade={cliente.cidade}
                            estado={cliente.estado}
                            informacoesAdicionais={cliente.informacoesAdicionais}
                        ></EditarCliente>
                        <BsXLg className="icone" style={{color: 'red'}} onClick={deletar}/>
                        <BsChevronDown onClick={toggleShow} className="icone"/>
                    </div>
            </div>
            </div>
            {show && 
                <div className="cliente-details">
                    <div className="detalhes">
                        <h3>Informações básicas</h3>
                            <div><b>ID:  </b>{cliente.clienteID}</div>
                            <div><b>Nome Completo:  </b>{cliente.nome}</div>
                            <div><b>Email:  </b>{cliente.email}</div>
                            <div><b>Telefone: </b>{cliente.telefone}</div>
                            <div><b>CPF: </b>{cliente.cpf}</div>
                            <div><b>Sexo: </b>{cliente.sexo}</div>
                        </div>                            
                    <div className="detalhes">
                        <h3>Endereço</h3>
                            <div><b>Rua:  </b>{cliente.rua}</div>
                            <div><b>Cidade:  </b>{cliente.cidade}</div>
                            <div><b>Estado:  </b>{cliente.estado}</div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Cliente;