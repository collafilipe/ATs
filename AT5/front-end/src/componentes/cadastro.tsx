import "./cadastro.css"

type props = {
    seletorView: Function
}

function Cadastro(props: props) {
    return(
        <>
            <h3 className="cadastro-title">O que deseja cadastrar?</h3>
            <div className="opcoes-cadastro">
                <button onClick={(e) => props.seletorView('CadastroCliente', e)}>Clientes</button>
                <button onClick={(e) => props.seletorView('CadastroProduto', e)}>Produtos</button>
                <button onClick={(e) => props.seletorView('CadastroServico', e)}>Serviços</button>
                <button onClick={(e) => props.seletorView('CadastroCompraProduto', e)}>Compras de Produtos</button>
                <button onClick={(e) => props.seletorView('CadastroCompraServico', e)}>Compras de Serviços</button>
            </div>
        </>
    )
}

export default Cadastro