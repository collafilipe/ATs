import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { EditarCompraProduto, EditarCompraServico } from "./editarCompra";
import Swal from "sweetalert2";
import './comprar.css';
import axios from "axios";
import 'materialize-css/dist/css/materialize.min.css';
import IcompraCliente, { IcompraClienteProduto, IcompraClienteServico } from "../../types/IcompraCliente";

function CompraServico(cliente: IcompraClienteServico) {
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
                axios.delete('http://localhost:5555/comprar/excluir/' + cliente.compraID, {data: {id: cliente.compraID}})
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
                        <h5> Cliente ID: {cliente.cliente.nome}</h5>
                    <div className="acoes">
                        <EditarCompraServico
                            cliente={cliente.cliente}
                            servico={cliente.servico}
                            quantidadeServico={cliente.quantidadeServico}
                            valorServico={cliente.valorServico} 
                            compraID={cliente.compraID}                
                        ></EditarCompraServico>
                        <BsXLg className="icone" style={{color: 'red'}} onClick={deletar}/>
                        <BsChevronDown onClick={toggleShow} className="icone"/>
                    </div>
            </div>
            </div>
            {show && 
                <div className="cliente-details">
                    <div className="detalhes">
                        <h3>Informações básicas</h3>
                            <div><b>Cliente ID: </b>{cliente.cliente.nome}</div>
                            <div><b>Serviço ID: </b>{cliente.servico.nome}</div>
                        </div>                            
                    <div className="detalhes">
                        <h3>Compra</h3>
                            <div><b>Quantidade do serviço: </b>{cliente.quantidadeServico}</div>
                            <div><b>Valor do serviço: </b>{cliente.valorServico}</div>
                    </div>
                </div>
            }
        </div>
    );
}

function CompraProduto(cliente: IcompraClienteProduto) {
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
                axios.delete('http://localhost:5555/comprar/excluir/' + cliente.compraID, {data: {id: cliente.compraID}})
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
                        <h5> Cliente ID: {cliente.cliente.nome}</h5>
                    <div className="acoes">
                        <EditarCompraProduto
                            cliente={cliente.cliente}
                            produto={cliente.produto}
                            quantidadeProduto={cliente.quantidadeProduto}
                            valorProduto={cliente.valorProduto} 
                            compraID={cliente.compraID}                      
                        ></EditarCompraProduto>
                        <BsXLg className="icone" style={{color: 'red'}} onClick={deletar}/>
                        <BsChevronDown onClick={toggleShow} className="icone"/>
                    </div>
            </div>
            </div>
            {show && 
                <div className="cliente-details">
                    <div className="detalhes">
                        <h3>Informações básicas</h3>
                            <div><b>Compra ID: </b>{cliente.compraID}</div>
                            <div><b>Cliente ID: </b>{cliente.cliente.nome}</div>
                            <div><b>Produto ID: </b>{cliente.produto.nome}</div>
                        </div>                            
                    <div className="detalhes">
                        <h3>Compra</h3>
                            <div><b>Quantidade do produto: </b>{cliente.quantidadeProduto}</div>
                            <div><b>Valor do produto: </b>{cliente.valorProduto}</div>
                    </div>
                </div>
            }
        </div>
    );
}

function Lista10Consumidos(cliente: IcompraCliente) {
}

export { CompraProduto, CompraServico, Lista10Consumidos };
