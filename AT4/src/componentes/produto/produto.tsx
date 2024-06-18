import { useState } from "react";
import { BsChevronDown, BsXLg } from 'react-icons/bs';
import Swal from 'sweetalert2';
import EditarProduto from "./editarProduto";
import axios from "axios";

type props = {
    id: number,
    nome: string,
    valor: string,
    quantidade: string
}

function Produto(props: props) {
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
                axios.delete('http://localhost:32831/produto/excluir', {data: {id: props.id}})
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
                <div className="conteudo">
                    <span>{props.nome}</span>
                </div>
                <div className="acoes">
                    <EditarProduto
                        id={props.id}
                        nome={props.nome}
                        valor={props.valor}
                        quantidade={props.quantidade}
                    ></EditarProduto>
                    <BsXLg className="icone" style={{color: 'red'}} onClick={deletar}/>
                    <BsChevronDown onClick={toggleShow} className="icone"/>
                </div>
            </div>
            {show &&
            <div>
                <div className="detalhes">
                    <div className="detalhes-item">
                        <div><b>Nome: </b>{props.nome}</div>
                        <div><b>Valor: </b>{props.valor}</div>
                        <div><b>Quantidade vendida: </b>{props.quantidade}</div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Produto;