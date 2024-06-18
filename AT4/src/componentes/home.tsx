import React, { Component } from "react";
import './home.css';
import 'materialize-css/dist/css/materialize.min.css';

type Props = {
    tema: string
}

export default class Home extends Component<Props> {
    render() {
        return (
            <div className="container">
                <h5 className="center-align">Bem Vindo!</h5>
                <div>
                    <p>
                        Bem Vindo ao sistema WB, onde se pode fazer o cadastro de forma rápida e fácil! Aqui, você poderá desfrutar de uma variedade de serviços personalizados para atender às suas necessidades. Ao se cadastrar, você terá acesso a recursos exclusivos, como:

                        Gerenciamento de perfil: Atualize suas informações pessoais, incluindo endereço, número de telefone e preferências de contato.

                        Suporte ao cliente: Tenha acesso a uma equipe dedicada pronta para ajudá-lo com quaisquer dúvidas ou problemas que possam surgir.

                        Para se cadastrar, basta preencher o formulário de inscrição abaixo com suas informações pessoais. Após o envio, você receberá um e-mail de confirmação com detalhes sobre como acessar sua conta. Estamos ansiosos para recebê-lo em nossa comunidade!
                    </p>
                </div>
            </div>
        );
    }
}
