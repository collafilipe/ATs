import { useState } from "react";
import { BsChevronDown, BsXLg } from 'react-icons/bs';
import Swal from 'sweetalert2';
import EditarProduto from "./editarProduto";
import axios from "axios";
import IProduto from "../../types/IProduto";

function Produto(props: IProduto) {

    const [show, setShow] = useState(false)
    const toggleShow = () => setShow(!show)

    function deletar() {
        Swal.fire({
            title: "Deseja realmente excluir o produto?",
            showCancelButton: true,
            confirmButtonText: "Excluir",
            confirmButtonColor: "firebrick",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://localhost:5555/produtos/excluir/' + props.produtoID, {data: {id: props.produtoID}})
                .then(() => {
                    Swal.fire({
                        title: "Produto excluído com sucesso!",
                        icon: "success",
                        confirmButtonColor: "green"
                    }).then(() => {
                        window.location.reload()
                    })
                })
            }
        });
}

    return (
        <div className="list-group-item list-group-item-action">
            <div className="item-listado">
                <div className="cliente-details">
                    <h5>Produto: {props.nome}</h5>
                <div className="acoes">
                    <EditarProduto
                        produtoID={props.produtoID}
                        nome={props.nome}
                        valor={props.valor}
                        ></EditarProduto>
                    <BsXLg className="icone" style={{color: 'red'}} onClick={deletar}/>
                    <BsChevronDown onClick={toggleShow} className="icone"/>
                    </div>
                </div>
            </div>
            {show &&
            <div>
                <div className="cliente-details">
                <div className="detalhes">
                    <h3>Informações basicas</h3>
                    <div><b>ID: </b>{props.produtoID}</div>
                        <div><b>Nome: </b>{props.nome}</div>
                        <div><b>Valor: </b>{props.valor}</div>
                    </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Produto;