import Cliente from "./cliente";
import { clientesSpring } from "./clienteSpring";
import './cliente.css'

type props = {
    tema: string
}

function ListaCliente(props: props) {
    let clientes = clientesSpring
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let tema = props.tema

    return (
        <div className="container-fluid">
            <h3 className="list-title">Clientes</h3>
            <div className="list-group">
                {clientes.map(c => {
                    return (
                        <Cliente key={c.id}
                            id={c.id}
                            nome={c.nome}
                            nomeSocial={c.nomeSocial}
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
                    )
                })}
            </div>
        </div>
    )
}

export default ListaCliente;