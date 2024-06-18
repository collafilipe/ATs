package com.wb.wbbackend.atualizadores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wb.wbbackend.entidades.Produto;
import com.wb.wbbackend.verificadores.VerificadorStringNula;

@Component
public class AtualizadorProduto implements Atualizador<Produto> {
    @Autowired
    private VerificadorStringNula verificarString;

    @Override
    public void atualizar(Produto alvo, Produto atualizacao) {
        if (!verificarString.verificar(atualizacao.getNome())) {
            alvo.setNome(atualizacao.getNome());
        }
        if (!verificarString.verificar(atualizacao.getValor())) {
            alvo.setValor(atualizacao.getValor());
        }
    }
}
