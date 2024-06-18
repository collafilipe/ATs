package com.wb.wbbackend.hateoas;

import java.util.List;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

import com.wb.wbbackend.controles.ControleProduto;
import com.wb.wbbackend.entidades.Produto;

@Component
public class HateoasProduto implements Hateoas<Produto> {
    
    @Override
    public void adicionarLink(List<Produto> lista) {
        for (Produto produto : lista) {
            long id = produto.getId();
            Link linkProprio = WebMvcLinkBuilder
                    .linkTo(WebMvcLinkBuilder.methodOn(ControleProduto.class).obterProduto(id)).withSelfRel();  
            produto.add(linkProprio);       
        }
    }

    @Override
    public void adicionarLink(Produto objeto) {
        Link linkProprio = WebMvcLinkBuilder
                .linkTo(WebMvcLinkBuilder
                        .methodOn(ControleProduto.class)
                        .obterProdutos())
                .withRel("produtos");
        objeto.add(linkProprio);
    }
}
