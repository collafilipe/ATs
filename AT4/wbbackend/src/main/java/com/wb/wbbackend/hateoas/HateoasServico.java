package com.wb.wbbackend.hateoas;

import java.util.List;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

import com.wb.wbbackend.controles.ControleServico;
import com.wb.wbbackend.entidades.Servico;

@Component
public class HateoasServico implements Hateoas<Servico> {
    
    @Override
    public void adicionarLink(List<Servico> lista) {
        for (Servico servico : lista) {
            long id = servico.getId();
            Link linkProposito = WebMvcLinkBuilder
                    .linkTo(WebMvcLinkBuilder.methodOn(ControleServico.class).obterServico(id)).withSelfRel();  
            servico.add(linkProposito);       
        }
    }

    @Override
    public void adicionarLink(Servico objeto) {
        Link linkPropio = WebMvcLinkBuilder
                .linkTo(WebMvcLinkBuilder
                        .methodOn(ControleServico.class)
                        .obterServicos())
                .withRel("servicos");
        objeto.add(linkPropio);
    }
}
