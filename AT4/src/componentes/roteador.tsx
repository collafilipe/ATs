import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./cliente/formularioCliente"
import ListaCliente from "./cliente/listaCliente";
import ListaProdutos from "./produto/listaProdutos";
import Home from "./home";
import ListaServicos from "./serviço/listaServiços";
import FormularioCadastroProduto from "./produto/cadastroProduto";
import FormularioCadastroServico from "./serviço/cadastroServico";
import Cadastro from "./cadastro";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="black" 
        botoes={['Home', 'Cadastros', 'Clientes', 'Produtos', 'Serviços']} />
        if (this.state.tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="black" />
                </>
            )
        } else if (this.state.tela === 'Cadastros') {
            return (
                <>
                    {barraNavegacao}
                    <Cadastro seletorView={this.selecionarView} />
                </>
            )
        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutos tema="black"/>
                </>
            )
        } else if (this.state.tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServicos tema="black"/>
                </>
            )
        } else if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="black"/>
                </>
            )
        } else if (this.state.tela === 'CadastroServico') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="black"/>
                </>
            )
        } else if (this.state.tela === 'CadastroCliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="black"/>
                </>
            )
        } else if (this.state.tela === 'CadastroProduto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="black"/>
                </>
            )
        }
    }
}