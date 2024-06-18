import "./listas.css"

type props = {
    seletorView: Function
}

function Listas(props: props) {
    return(
        <>
            <h3 className="cadastro-title">O que deseja Listar?</h3>
            <div className="opcoes-cadastro">
                <button onClick={(e) => props.seletorView('ListaCliente', e)}>Clientes</button>
                <button onClick={(e) => props.seletorView('ListaProduto', e)}>Produtos</button>
                <button onClick={(e) => props.seletorView('ListaServico', e)}>Serviços</button>
                <button onClick={(e) => props.seletorView('ListagemComprasProduto', e)}>Compras Produto</button>
                <button onClick={(e) => props.seletorView('ListagemComprasServico', e)}>Compras Serviço</button>
                <button onClick={(e) => props.seletorView('Listagem10Consumidores', e)}>Lista 10 mais consumidores</button>
                <button onClick={(e) => props.seletorView('Listagem10MenosConsumidores', e)}>Lista 10 menos consumidores</button>
                <button onClick={(e) => props.seletorView('ListagemClientesMasculinos', e)}>Lista de clientes masculinos</button>
                <button onClick={(e) => props.seletorView('ListagemClientesFemininos', e)}>Lista de clientes femininos</button>
                <button onClick={(e) => props.seletorView('ListagemMaisConsumidos', e)}>Lista dos mais consumidos</button>
                <button onClick={(e) => props.seletorView('ListagemMaisConsumidosMasculino', e)}>Lista dos produtos ou serviços mais consumidos clientes masculinos</button>
                <button onClick={(e) => props.seletorView('ListagemMaisConsumidosFeminino', e)}>Lista dos produtos ou serviços  mais consumidos clientes feminino</button>
                <button onClick={(e) => props.seletorView('Listagem5MaisGasto', e)}>Lista de 5 cliente que mais gastaram</button>
            </div>
        </>
    )
}

export default Listas;