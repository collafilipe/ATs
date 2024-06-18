import './cliente.css'

type props = {
    tema: string
}

function FormularioCadastroCliente(props: props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <h3 className="cadastro-title">Cadastrar cliente</h3>
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Rua" aria-label="Rua" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Número" aria-label="Número" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Bairro" aria-label="Bairro" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Cidade" aria-label="Cidade" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Estado" aria-label="Estado" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="CEP" aria-label="CEP" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <textarea className="form-control" placeholder="Informações adicionais" aria-label="Informações adicionais" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button><br/><br/>
                </div>
            </form>
        </div>
    )
}
export default FormularioCadastroCliente