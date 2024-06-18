import Cliente from "./cliente";
import { useState, useEffect } from "react";
import './cliente.css'

type props = {
    tema: string
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
type Cliente = {
    id: number;
    nome: string;
    email: string;
    endereco: {
            id: number;
        rua: string;
        numero: string;
        bairro: string;
        cidade: string;
        estado: string;
        codigoPostal: string;
        informacoesAdicionais: string;
    };
    telefones: {
        id: number;
        numero: string;
        ddd: string;
        links: never[];
    }[]
};

function ListaCliente(_props: props) {
    const [cliente, setCliente] = useState([])
    const clientes: Cliente[] = cliente
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    useEffect(() => {
        fetch('http://localhost:32832/clientes', {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            res.json().then(data => {
                setCliente(data)
                console.log(data)
            })
        })
    }, [])

    return (
        <div className="container-fluid">
            <h5 className='center-align'>Lista de Clientes: </h5><br/>
            <div className='collection'>
                {clientes.map(c => {
                    return (
                        <div key={c.id}>
                            <Cliente
                                id={c.id}
                                nome={c.nome}
                                email={c.email}
                                rua={c.endereco.rua}
                                numero={c.endereco.numero}
                                bairro={c.endereco.bairro}
                                cidade={c.endereco.cidade}
                                estado={c.endereco.estado}
                                cep={c.endereco.codigoPostal}
                                info={c.endereco.informacoesAdicionais}
                                telefones={c.telefones}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default ListaCliente;