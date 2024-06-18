package com.wb.wbbackend;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

import com.wb.wbbackend.entidades.Cliente;
import com.wb.wbbackend.entidades.Produto;
import com.wb.wbbackend.entidades.Servico;
import com.wb.wbbackend.entidades.Endereco;
import com.wb.wbbackend.entidades.Telefone;
import com.wb.wbbackend.repositorios.RepositorioCliente;
import com.wb.wbbackend.repositorios.RepositorioProduto;
import com.wb.wbbackend.repositorios.RepositorioServico;

@SpringBootApplication
public class WbbackendApplication {

	public static void main(String[] args) {
		// Propriedades
		Map<String,Object> propriedades = new HashMap<>();
		propriedades.put("server.port", "32832");
		propriedades.put("spring.jpa.show-sql", "true");
		
		// Inicialização de propriedades em código
		SpringApplication app = new SpringApplication(WbbackendApplication.class);
		app.setDefaultProperties(propriedades);
        app.run(args);
        
		SpringApplication.run(WbbackendApplication.class, args);
	}

	@Component
	public static class Runner implements ApplicationRunner {
		@Autowired
		public RepositorioServico repositorioServico;

		@Autowired
		public RepositorioProduto repositorioProduto;

		@Autowired
		public RepositorioCliente repositorio;

		@Override
		public void run(ApplicationArguments args) throws Exception {

			Servico servico = new Servico();
			servico.setNome("Maquiar");
			servico.setValor("200");

			repositorioServico.save(servico);

			Servico servico2 = new Servico();
			servico2.setNome("Massagem");
			servico2.setValor("300");

			repositorioServico.save(servico2);

			Servico servico3 = new Servico();
			servico3.setNome("Limpeza de pele");
			servico3.setValor("140");

			repositorioServico.save(servico3);

			Servico servico4 = new Servico();
			servico4.setNome("Cortar Cabelo");
			servico4.setValor("55");

			repositorioServico.save(servico4);

			Produto produto = new Produto();
			produto.setNome("Maquiagem");
			produto.setValor("20");

			repositorioProduto.save(produto);

			Produto produto2 = new Produto();
			produto2.setNome("Cotonete");
			produto2.setValor("10");

			repositorioProduto.save(produto2);

			Produto produto3 = new Produto();
			produto3.setNome("Algodao");
			produto3.setValor("5");

			repositorioProduto.save(produto3);

			Produto produto4 = new Produto();
			produto4.setNome("Shampoo");
			produto4.setValor("30");

			repositorioProduto.save(produto4);

			Cliente cliente = new Cliente();
			cliente.setNome("Pedro Alcântara de Bragança e Bourbon");
			cliente.setSobreNome("Dom Pedro");

			Endereco endereco = new Endereco();
			endereco.setCidade("Rio de Janeiro");
			endereco.setEstado("Rio de Janeiro");
			endereco.setBairro("Centro");
			endereco.setRua("Praça Quinze de Novembro");
			endereco.setNumero("48");
			endereco.setCodigoPostal("20010-010");
			endereco.setInformacoesAdicionais("O Paço Imperial é " + "um edifício histórico localizado na "
					+ "atual Praça XV de Novembro, no centro " + "da cidade do Rio de Janeiro, Brasil.");

			cliente.setEndereco(endereco);
			Telefone telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente.getTelefones().add(telefone);
			repositorio.save(cliente);

			Cliente cliente2 = new Cliente();
			cliente2.setNome("Teresa Cristina de Bourbon-Duas Sicílias");
			cliente2.setSobreNome("Mãe dos Brasileiros");

			endereco = new Endereco();
			endereco.setCidade("Rio de Janeiro");
			endereco.setEstado("Rio de Janeiro");
			endereco.setBairro("Centro");
			endereco.setRua("Praça Quinze de Novembro");
			endereco.setNumero("48");
			endereco.setCodigoPostal("20010-010");
			endereco.setInformacoesAdicionais("O Paço Imperial é " + "um edifício histórico localizado na "
					+ "atual Praça XV de Novembro, no centro " + "da cidade do Rio de Janeiro, Brasil.");

			cliente2.setEndereco(endereco);
			telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente2.getTelefones().add(telefone);
			repositorio.save(cliente2);

			Cliente cliente3 = new Cliente();
			cliente3.setNome("Isabel Cristina Leopoldina Augusta Gonzaga de Bourbon e Bragança");
			cliente3.setSobreNome("Pricesa Isabel");

			endereco = new Endereco();
			endereco.setCidade("Rio de Janeiro");
			endereco.setEstado("Rio de Janeiro");
			endereco.setBairro("Centro");
			endereco.setRua("Praça Quinze de Novembro");
			endereco.setNumero("48");
			endereco.setCodigoPostal("20010-010");
			endereco.setInformacoesAdicionais("O Paço Imperial é " + "um edifício histórico localizado na "
					+ "atual Praça XV de Novembro, no centro " + "da cidade do Rio de Janeiro, Brasil.");

			cliente3.setEndereco(endereco);
			telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente3.getTelefones().add(telefone);
			repositorio.save(cliente3);

			Cliente cliente4 = new Cliente();
			cliente4.setNome("Leopoldina Teresa Gonzaga de Bragança e Bourbon-Duas Sicílias");
			cliente4.setSobreNome("Pricesa Leopoldina");

			endereco = new Endereco();
			endereco.setCidade("Rio de Janeiro");
			endereco.setEstado("Rio de Janeiro");
			endereco.setBairro("Centro");
			endereco.setRua("Praça Quinze de Novembro");
			endereco.setNumero("48");
			endereco.setCodigoPostal("20010-010");
			endereco.setInformacoesAdicionais("O Paço Imperial é " + "um edifício histórico localizado na "
					+ "atual Praça XV de Novembro, no centro " + "da cidade do Rio de Janeiro, Brasil.");

			cliente4.setEndereco(endereco);
			telefone = new Telefone();
			telefone.setDdd("21");
			telefone.setNumero("22152622");
			cliente4.getTelefones().add(telefone);
			repositorio.save(cliente4);

		}
	}
}