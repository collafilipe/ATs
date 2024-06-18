/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaServiços extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <><h5 className="center-align">Lista de Serviços: </h5><br/>
            <div className="collection">
                <a className="collection-item">Serviços 1</a>
                <a className="collection-item">Serviços 2</a>
                <a className="collection-item">Serviços 3</a>
                <a className="collection-item">Serviços 4</a>
                <a className="collection-item">Serviços 1</a>
                <a className="collection-item">Serviços 2</a>
                <a className="collection-item">Serviços 3</a>
                <a className="collection-item">Serviços 4</a>
                <a className="collection-item">Serviços 1</a>
                <a className="collection-item">Serviços 2</a>
                <a className="collection-item">Serviços 3</a>
                <a className="collection-item">Serviços 4</a>
                <a className="collection-item">Serviços 1</a>
                <a className="collection-item">Serviços 2</a>
                <a className="collection-item">Serviços 3</a>
                <a className="collection-item">Serviços 4</a>
            </div></>
        )
    }
}