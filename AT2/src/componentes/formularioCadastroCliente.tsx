import React, { Component } from "react";

type Props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<Props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <>
                <div className="container"> {/* Container principal para garantir espaçamentos */}
                    <div className="row">
                        <div className="col s12"> {/* Centraliza o conteúdo na grade de 12 colunas */}
                            <h5 className="center-align">Cadastro Cliente:</h5> {/* Centraliza o título */}
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="first_name" type="text" className="validate" />
                                        <label htmlFor="first_name">Nome: </label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="last_name" type="text" className="validate" />
                                        <label htmlFor="last_name">Sobrenome: </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="telefone" type="text" className="validate" />
                                        <label htmlFor="telefone">Telefone: </label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="email" type="email" className="validate" />
                                        <label htmlFor="email">E-mail: </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <button className={estiloBotao} type="submit" name="action">Enviar
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col s12"> {/* Centraliza o conteúdo na grade de 12 colunas */}
                            <h5 className="center-align">Cadastro Serviço: </h5> {/* Centraliza o título */}
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="first_name" type="text" className="validate" />
                                        <label htmlFor="first_name">Nome: </label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="preco" type="text" className="validate" />
                                        <label htmlFor="preco">Preço: </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="ID" type="number" className="validate" />
                                        <label htmlFor="ID">ID: </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <button className={estiloBotao} type="submit" name="action">Enviar
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col s12"> {/* Centraliza o conteúdo na grade de 12 colunas */}
                            <h5 className="center-align">Cadastro Produto:</h5> {/* Centraliza o título */}
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="first_name" type="text" className="validate" />
                                        <label htmlFor="first_name">Nome: </label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="preco" type="text" className="validate" />
                                        <label htmlFor="preco">Preço: </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="ID" type="number" className="validate" />
                                        <label htmlFor="ID">ID: </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <button className={estiloBotao} type="submit" name="action">Enviar
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    {/* Repita a estrutura para os outros formulários, se necessário */}
                </div>
            </>
        );
    }
}
