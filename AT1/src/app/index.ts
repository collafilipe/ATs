import * as readline from 'readline';
import Cliente from "../modelo/cliente";
import ListagemClientes from "../listagem/listagemClientes";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import listagemClienteMaisConsumiram from "../listagem/listagemClienteMaisConsumiram";
import listagemGeneroMasculino from "../listagem/listagemGeneroMasculino";
import listagemGeneroFemenino from "../listagem/listagemGeneroFemenino";
import ListagemProdutosServicosMaisConsumidos from "../listagem/listagemMaisConsumidos";
import ListagemServicosProdutosMaisConsumidosFeminino from "../listagem/listagemMaisConsumidoFeminino";
import ListagemServicosProdutosMaisConsumidosMasculino from "../listagem/listagemMaisConsumidoMasculino";
import listagemClientesMenosConsumiram from "../listagem/listagemClientesMenosConsumiram";
import ListagemClientesMaisConsumiramValor from "../listagem/listagemMaisConsumiramEmValor";
import CPF from "../modelo/cpf";
import Telefone from "../modelo/telefone";
import ListagemProdutos from "../listagem/listagemProduto";
import ListagemServicos from "../listagem/listagemServiço";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const clientes: Array<Cliente> = [];
const produtos: Array<Produto> = [];
const servicos: Array<Servico> = [];

console.log(`\nBem-vindo ao novo programa do Grupo World Beauty!`);

function iniciar() {
    console.log(`\nOpções de inicialização: `);
    rl.question(`\n1 - Cadastrar\n2 - Listar\n3 - Alterar dados\n4 - Excluir dado\n0 - Sair\n\nOpção: `, (opcao) => {
        if (opcao === '1') {
            console.log(`\nDentre as seguintes opções, qual você deseja cadastrar: `);
            rl.question(`\n1 - Cliente\n2 - Produto\n3 - Serviço\n\nOpção: `, (CadastroOpcao) => {
                if (CadastroOpcao === '1') {
                    console.log(`\nInício do cadastro do cliente`);
                    rl.question(`\nPor favor informe o nome do cliente: `, (nome) => {
                        rl.question(`Por favor informe o nome social do cliente: `, (nomeSocial) => {
                            rl.question(`Por favor informe o número do CPF: `, (valorCPF) => {
                                rl.question(`Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `, (data) => {
                                    console.log(`\n(Informe no padrão masculino e feminino)`);
                                    rl.question(`Como você se identifica: `, (genero) => {
                                        rl.question(`Por favor informe seu DDD: `, (ddd) => {
                                            rl.question(`Por favor informe seu número: `, (numero) => {
                                                let partesData = data.split('/');
                                                let ano = Number(partesData[2]);
                                                let mes = Number(partesData[1]);
                                                let dia = Number(partesData[0]);
                                                let telefone = new Telefone(ddd, numero);
                                                let dataEmissao = new Date(ano, mes - 1, dia);
                                                let cpf = new CPF(valorCPF, dataEmissao);
                                                let cliente = new Cliente(nome, nomeSocial, cpf, genero, telefone);
                                                clientes.push(cliente);
                                                console.log(`\nCadastro concluído!\n`);
                                                iniciar();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                } else if (CadastroOpcao === '2') {
                    console.log(`\nInício do cadastro do produto`);
                    rl.question(`\nPor favor informe o nome do produto: `, (nomeProduto) => {
                        rl.question(`Por favor informe o valor do produto: `, (valorProduto) => {
                            rl.question(`Por favor informe o ID do produto: `, (idProduto) => {
                                let id = idProduto
                                let nome = nomeProduto;
                                let valor = valorProduto;
                                let produto = new Produto(nome, valor, id);
                                produtos.push(produto);
                                console.log(`\nCadastro Concluído!`);
                                iniciar();
                            });
                        });
                    });
                } else if (CadastroOpcao ==='3') {
                    console.log(`\nInício do cadastro de serviços: `)
                    rl.question(`\nPor favor informe o nome do serviço: `, (nomeServico) => {
                        rl.question(`Por favor informe o valor do serviço: `, (valorServico) => {
                            rl.question(`Por favor informe o ID do serviço: `, (idServico) => {
                                let nome = nomeServico;
                                let valor = valorServico;
                                let id = idServico;
                                let servico = new Servico(nome, valor, id);
                                servicos.push(servico);
                                console.log(`\nCadastro concluído!`);
                                iniciar();
                            });
                        });
                    });
                } else {
                    console.log(`\nError!`)
                    console.log('Opção inválida!');
                    iniciar();
                };
        });
        } else if(opcao === '2') {
            console.log(`\nDentre as seguintes opções, qual você deseja listar: `);
            rl.question(`\n1 - Listagem dos 10 que mais consumiram produtos ou serviços, em quantidade, não em valor\n2 - Listagem de todos os clientes por gênero\n3 - Listagem geral dos serviços ou produtos mais consumidos\n4 - Listagem dos serviços ou produtos mais consumidos por gênero\n5 - Listagem dos 10 clientes que menos consumiram produtos ou serviços\n6 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade\n7 - Listagem de todos os clientes\n8 - Listagem de todos os produtos\n9 - Listagem de todos os serviços\n\nOpção: `, (opcaoListagem) => {
                if (opcaoListagem === '2') {
                    console.log(`\nQual gênero deseja listar: `);
                    rl.question(`\n1 - Masculino\n2 - Femenino\n\nOpção: `, (opcaoGenero) => {
                        switch(opcaoGenero) {
                            case '1':
                                const listagemGeneroMasculinos = new listagemGeneroMasculino(clientes)
                                listagemGeneroMasculinos.listar();
                                iniciar();
                                break;
                            case '2':
                                const listagemGeneroFemeninos = new listagemGeneroFemenino(clientes)
                                listagemGeneroFemeninos.listar();
                                iniciar();
                                break;
                            default:
                                console.log(`\nError!`)
                                console.log(`Opção inválida!`);
                                iniciar();
                                break;
                        };
                    });
                } else if (opcaoListagem === '4') {
                    console.log(`\nQual gênero deseja listar: `);
                    rl.question(`\n1 - Masculino\n2 - Feminino\n\nOpção: `, (opcaoGeneroListagem) => {
                        switch(opcaoGeneroListagem) {
                            case '1':
                                const listagemMaisConsumido = new ListagemServicosProdutosMaisConsumidosMasculino(clientes)
                                listagemMaisConsumido.listar();
                                iniciar();
                                break;
                            case '2':
                                const listagemMaisConsumido1 = new ListagemServicosProdutosMaisConsumidosFeminino(clientes)
                                listagemMaisConsumido1.listar();
                                iniciar();
                                break;
                            default:
                                console.log(`\nError!`)
                                console.log(`Opção inválida!`);
                                iniciar();
                                break;
                        };
                    });
                } else {
                switch(opcaoListagem) {
                    case '1' :
                        const listagemClienteMais = new listagemClienteMaisConsumiram(clientes);
                        listagemClienteMais.listar();
                        iniciar();
                        break;
                    case '3':
                        const listagemProdutosServicosConsumidos = new ListagemProdutosServicosMaisConsumidos(clientes);
                        listagemProdutosServicosConsumidos.listar();
                        iniciar();
                        break;
                    case '5':
                        const listagemMenosConsumiram = new listagemClientesMenosConsumiram(clientes);
                        listagemMenosConsumiram.listar();
                        iniciar();
                        break;
                    case '6':
                        const listagemMaisConsumidoValor = new ListagemClientesMaisConsumiramValor(clientes);
                        listagemMaisConsumidoValor.listar();
                        iniciar();
                        break;
                    case '7':
                        const listagemClientes = new ListagemClientes(clientes);
                        listagemClientes.listar();
                        iniciar();
                        break;
                    case '8':
                        const listagemProdutos = new ListagemProdutos(produtos);
                        listagemProdutos.listar();
                        iniciar();
                        break;
                    case '9':
                        const listagemServicos = new ListagemServicos(servicos);
                        listagemServicos.listar();
                        iniciar();
                        break;
                    default:
                        console.log(`\nError!`)
                        console.log(`Opção inválida!`);
                        iniciar();
                        break;
                }};
            });
        } else if (opcao === '3') {
                    console.log(`\nQual das opções abaixo você deseja alterar: `);
                    rl.question(`\n1 - Clientes\n2 - Produtos\n3 - Serviços\n\nOpção: `, (opcoesAlterar) => {
                        if (opcoesAlterar === '1') {
                            console.log(`\nAlteração de dados do Cliente: `);
                            rl.question(`\nDigite o CPF do cliente que deseja alterar os dados: `, (cpfAlterar) => {
                                const clienteEncontrado = clientes.find(cliente => cliente.getCpf.getValor === cpfAlterar);
                                if (clienteEncontrado) {
                                    console.log(`\nQual informação você deseja alterar: `);
                                    rl.question(`\n1 - Nome do Cliente\n2 - Nome Social do Cliente\n3 - Gênero do Cliente\n4 - Adicionar Produto/Serviço\n5 - Excluir Produto/Serviço\n\nOpção: `, (clienteEncontrados) => {
                                        if (clienteEncontrados === '1') {
                                            console.log(`\nAlterando o Nome do cliente: ${clienteEncontrado.nome}`);
                                            rl.question(`\nQual o novo Nome: `, (novoNome) => {
                                                clienteEncontrado.nome = novoNome;
                                                console.log(`\nNome alterado com sucesso!`);
                                                iniciar();
                                            });
                                        } else if (clienteEncontrados === '2') {
                                            console.log(`\nAlterando o Nome Social do Cliente: ${clienteEncontrado.nomeSocial}`)
                                            rl.question(`\nQual o novo Nome Social: `, (novoNomeSocial) => {
                                                clienteEncontrado.nomeSocial = novoNomeSocial;
                                                console.log(`\nNome Social alterado com sucesso!`);
                                                iniciar();
                                            });
                                        } else if (clienteEncontrados === '3') {
                                            console.log(`\nAlterando o Gênero de ${clienteEncontrado.nome}, que é ${clienteEncontrado.getGenero}`);
                                            console.log(`\n(masculino / feminino)`)
                                            rl.question(`\nQual o novo Gênero: `, (novoGenero) => {
                                                clienteEncontrado.genero = novoGenero;
                                                console.log(`\nGênero alterado com sucesso!`);
                                                iniciar();
                                            });
                                        } else if (clienteEncontrados === '4') {
                                            console.log(`\nAdicionando Produto/Serviço: `);
                                            rl.question(`\nQual opção você deseja adicionar:\n\n1 - Produto\n2 - Serviço\n\nOpção: `, (opcaoAdicionar) => {
                                                if(opcaoAdicionar === '1') {
                                                    rl.question(`\nQual o ID do produto que deseja adicionar: `, (idProdutoAdicionar) => {
                                                        const idProdutoEncontrado = produtos.find(produto => produto.getId === idProdutoAdicionar);
                                                        if (idProdutoEncontrado) {
                                                            console.log(`\nAdicionando ${idProdutoEncontrado.nome} em ${clienteEncontrado.nome}`);
                                                            clienteEncontrado.adicionarProdutoConsumido(idProdutoEncontrado);
                                                            console.log(`\nProduto ${idProdutoEncontrado.nome} adicionado no Cliente ${clienteEncontrado.nome}!`);
                                                            iniciar();
                                                        } else {
                                                            console.log(`\nID não encontrado!`);
                                                            iniciar();
                                                        };
                                                    });
                                                } else if (opcaoAdicionar === '2') {
                                                    rl.question(`\nQual o ID do serviço que deseja adicionar: `, (idServicoAdicionar) => {
                                                        const idServicoEncontrado = servicos.find(servico => servico.getId === idServicoAdicionar);
                                                        if (idServicoEncontrado) {
                                                            console.log(`\nAdicionando ${idServicoEncontrado.nome} em ${clienteEncontrado.nome}`);
                                                            clienteEncontrado.adicionarServicoConsumido(idServicoEncontrado);
                                                            console.log(`\nServiço ${idServicoEncontrado.nome} adicionado no Cliente ${clienteEncontrado.nome}!`);
                                                            iniciar();
                                                        } else {
                                                            console.log(`\nID de serviço não encontrado!`);
                                                            iniciar();
                                                        };
                                                    })
                                                } else {
                                                    console.log(`\nError!`);
                                                    console.log(`Opção inválida!`);
                                                    iniciar();
                                                };
                                            });
                                        } else if (clienteEncontrados === '5') {
                                            console.log(`Excluindo Produto/Serviço`);
                                            rl.question(`\nQual opção você deseja excluir:\n\n1 - Produto\n2 - Serviço\n\nOpção: `, (opcaoExcluir) => {
                                                if (opcaoExcluir === '1' || 'produto') {
                                                    rl.question(`\nQual o ID do produto a ser excluido: `, (idExcluido) => {
                                                        const index = clienteEncontrado.getProdutosConsumidos.findIndex(produto => produto.getId === idExcluido);
                                                        if (index !== -1) {
                                                            clienteEncontrado.getProdutosConsumidos.splice(index, 1);
                                                            console.log(`\nProduto excluído com sucesso!`);
                                                            iniciar();
                                                        } else {
                                                            console.log(`\nProduto não encontrado!`);
                                                            iniciar();
                                                        };
                                                    });
                                                } else if (opcaoExcluir === '2') {
                                                    rl.question(`\nQual o ID do serviço a ser excluido: `, (idServicoExcluido) => {
                                                        const index = clienteEncontrado.getServicosConsumidos.findIndex(servico => servico.getId === idServicoExcluido);
                                                        if (index !== -1) {
                                                            clienteEncontrado.getServicosConsumidos.splice(index, 1);
                                                            console.log(`\nServiço excluído com sucesso!`);
                                                            iniciar();
                                                        } else {
                                                            console.log(`\nServiço não encontrado!`)
                                                            iniciar();
                                                        };
                                                    });
                                                } else {
                                                    console.log(`\nError!`);
                                                    console.log(`Opção inválida!`);
                                                    iniciar();
                                                };
                                            });
                                        } else {
                                            console.log(`\nError!`);
                                            console.log(`Opção inválida!`);
                                            iniciar();
                                        };
                                    })
                                } else {
                                    console.log(`\nCPF não encontrado!\n`);
                                    iniciar();
                                };
                            })
                        } else if (opcoesAlterar === '2') {
                            console.log(`\nAlteração de dados de Produto: `);
                            rl.question(`\nQual o ID do produto: `, (idProduto) => {
                                const produtoEncontrado = produtos.find(produto => produto.getId === idProduto);
                                if (produtoEncontrado) {
                                    console.log(`\nQual informação você deseja alterar: `);
                                    rl.question(`\n1 - Nome do Produto\n2 - Valor do Produto\n\nOpção: `, (produtoAlterar) => {
                                        if (produtoAlterar === '1') {
                                            console.log(`\nAlterando o nome do produto ${produtoEncontrado.nome}`);
                                            rl.question(`\nQual o novo nome desejado: `, (novoNomeProduto) => {
                                                produtoEncontrado.nome = novoNomeProduto;
                                                console.log(`\nNome do produto alterado com sucesso!`);
                                                iniciar();
                                            });

                                        } else if (produtoAlterar === '2') {
                                            console.log(`\nAlterando o valor do produto ${produtoEncontrado.nome} de ${produtoEncontrado.valor}`);
                                            rl.question(`\nQual o novo valor a ser atribuido: `, (novoValorProduto) => {
                                                produtoEncontrado.valor = novoValorProduto;
                                                console.log(`\nValor do produto alterado com sucesso!`);
                                                iniciar();
                                            });
                                        } else {
                                            console.log(`\nError!`);
                                            console.log(`Opção inválida!`);
                                            iniciar();
                                        }
                                    });
                                } else {
                                    console.log(`\nID de produto não encontrado!`);
                                    iniciar();
                                };
                            });
                        } else if (opcoesAlterar === '3') {
                            console.log(`\nAlterações de dados de serviço: `);
                            rl.question(`\nQual o ID do serviço: `, (idServico) => {
                                const servicoEncontrado = servicos.find(servico => servico.getId === idServico);
                                if (servicoEncontrado) {
                                    console.log(`\nQual informação você deseja alterar: `);
                                    rl.question(`\n1 - Nome do Serviço\n2 - Valor do Serviço`, (opcaoServico) => {
                                        if (opcaoServico === '1') {
                                            console.log(`\nAlterando o nome do Serviço ${servicoEncontrado.nome}`);
                                            rl.question(`\nQual seria o novo Nome: `, (novoNome) => {
                                                servicoEncontrado.nome = novoNome;
                                                console.log(`\nNome do Serviço alterado com secusso!`);
                                                iniciar();
                                            });

                                        } else if (opcaoServico === '2') {
                                            console.log(`\nAlterando o valor do serviço ${servicoEncontrado.nome} de ${servicoEncontrado.valor}`);
                                            rl.question(`\nQual o novo valor a ser atribuido: `, (novoValorServico) => {
                                                servicoEncontrado.valor = novoValorServico;
                                                console.log(`\nValor do Serviço alterado com sucesso!`);
                                                iniciar();
                                            });

                                        } else {
                                            console.log(`\nError!`)
                                            console.log(`Opção inválida!`)
                                            iniciar();
                                        };
                                    });
                                } else {
                                    console.log(`\nID de serviço não encontrado!`);
                                    iniciar();
                                };
                            });
                        } else {
                            console.log(`\nError!`)
                            console.log(`Opção inválida!`)
                            iniciar();
                        };
                    });
        } else if (opcao === '4') {
            console.log(`\nQual das opções abaixo você deseja excluir: `);
            rl.question(`\n1 - Cliente\n2 - Produto\n3 - Serviço\n\nOpção: `, (opcaoExcluir) => {
                if (opcaoExcluir === '1') {
                    rl.question(`Insira o CPF do cliente que deseja excluir: `, (cpfExcluir) => {
                        const clienteEncontrado = clientes.find(cliente => cliente.getCpf.getValor === cpfExcluir);
                        if(clienteEncontrado) {
                            console.log(`\n(Responda com sim ou não)`);
                            rl.question(`Deseja mesmo excluir o cliente ${clienteEncontrado.nome}? `, (perguntaCliente) => {
                                if (perguntaCliente === 'sim') {
                                    console.log(`Ok! Excluindo cliente...`);
                                    const index = clientes.findIndex(cliente => cliente.getCpf.getValor === cpfExcluir);
                                    if(index !== -1) {
                                        clientes.splice(index, 1)
                                        console.log(`\nCliente ${clienteEncontrado.nome} excluido com sucesso!`);
                                        iniciar();
                                    } else {
                                        console.log(`\nError!`);
                                        console.log(`Relatar problema ao suporte.`)
                                        iniciar();
                                    };
                                } else if (perguntaCliente === 'não') {
                                    console.log(`\nOk! Voltando ao início.`);
                                    iniciar();
                                } else {
                                    console.log(`\nError!`);
                                    console.log(`Opção Inválida!`);
                                    iniciar();
                                };
                            });
                        } else {
                            console.log(`\nCliente não encontrado!`);
                            iniciar();
                        };
                    });
                } else if (opcaoExcluir === '2') {
                    rl.question(`\nInsira o ID do produto que deseja excluir: `, (idProdutoExcluir) => {
                        const idProduto = produtos.find(produto => produto.getId === idProdutoExcluir);
                        if (idProduto) {
                            console.log(`\n(Responda com sim ou não)`);
                            rl.question(`Deseja mesmo excluir o produto ${idProduto.nome}? `, (respostaProduto) => {
                                if (respostaProduto === 'sim') {
                                    console.log(`\nOk! Excluindo produto...`);
                                    const index = produtos.findIndex(produto => produto.getId === idProdutoExcluir);
                                    if (index !== -1) {
                                        produtos.splice(index, 1)
                                        console.log(`\nProduto ${idProduto.nome} excluido com sucesso!`);
                                        iniciar();
                                    } else {
                                        console.log(`\nError!`);
                                        console.log(`Relatar problema ao suporte!`);
                                        iniciar();
                                    };
                                } else if (respostaProduto === 'não') {
                                    console.log(`\nOk! voltando ao início!`);
                                    iniciar();
                                } else {
                                    console.log(`\nError!`);
                                    console.log(`Opção inválida!`);
                                    iniciar();
                                };
                            });
                        } else {
                            console.log(`\nProduto não encontrado!`);
                            iniciar();
                        };
                    });
                } else if (opcaoExcluir === '3') {
                    rl.question(`\nInsira o ID do serviço que deseja excluir: `, (idServicoExcluir) => {
                        const idServico = servicos.find(servico => servico.getId === idServicoExcluir)
                        if (idServico) {
                            console.log(`\n(Responda com sim ou não)`);
                            rl.question(`Deseja mesmo excluir o serviço ${idServico.nome}? `, (respostaServico) => {
                                if (respostaServico === 'sim') {
                                    console.log(`\nOk! Excluindo serviço!`);
                                    const index = servicos.findIndex(servico => servico.getId === idServicoExcluir)
                                    if (index !== -1) {
                                        servicos.splice(index, 1)
                                        console.log(`\nServiço ${idServico} excluido com sucesso!`);
                                        iniciar();
                                    } else {
                                        console.log(`\nError!`);
                                        console.log(`Relatar problema ao suporte!`);
                                        iniciar();
                                    };
                                } else if (respostaServico === 'não') {
                                    console.log(`\nOk! voltando ao início!`);
                                    iniciar();
                                } else {
                                    console.log(`\nError!`);
                                    console.log(`Opção Inválida!`);
                                    iniciar();
                                };
                            });
                        } else {
                            console.log(`\nServiço não encontrado`);
                            iniciar();
                        };
                    });
                } else {
                    console.log(`\nError!`);
                    console.log(`Opção inválida!`);
                    iniciar();
                };
            });
        } else if (opcao === '0') {
            console.log(`\nAté mais!`);
            rl.close();
        } else {
            console.log(`\nError!`)
            console.log(`Opção inválida!`)
            iniciar();
        };
    });
};

const data1 = new Date(2004, 10, 4);
const cpf1 = new CPF('515.518.088-03', data1);
const telefone1 = new Telefone('12', '997601410');
const cliente1 = new Cliente(`Filipe Colla`, `Filipe`, cpf1, `masculino`, telefone1);

const data2 = new Date(1990, 5, 15);
const cpf2 = new CPF('123.466.789-10', data2);
const telefone2 = new Telefone('11', '987654321');
const cliente2 = new Cliente(`Maria Silva`, `Maria`, cpf2, `feminino`, telefone2);

const cpf3 = new CPF('987.684.321-01', new Date(1985, 3, 25));
const telefone3 = new Telefone('56', '123456789');
const cliente3 = new Cliente('João Souza', 'João', cpf3, 'masculino', telefone3);

const cpf4 = new CPF('333.282.111-00', new Date(1978, 9, 10));
const telefone4 = new Telefone('78', '654987321');
const cliente4 = new Cliente('Ana Oliveira', 'Ana', cpf4, 'feminino', telefone4);

const cpf5 = new CPF('444.565.666-99', new Date(2000, 7, 20));
const telefone5 = new Telefone('90', '321987654');
const cliente5 = new Cliente('Pedro Santos', 'Pedro', cpf5, 'masculino', telefone5);

const cpf6 = new CPF('111.252.333-44', new Date(1995, 8, 12));
const telefone6 = new Telefone('11', '987654321');
const cliente6 = new Cliente('Carlos Oliveira', 'Carlos', cpf6, 'masculino', telefone6);

const cpf7 = new CPF('222.533.444-55', new Date(1982, 4, 23));
const telefone7 = new Telefone('22', '123456789');
const cliente7 = new Cliente('Juliana Silva', 'Juliana', cpf7, 'feminino', telefone7);

const cpf8 = new CPF('333.434.555-66', new Date(1976, 10, 5));
const telefone8 = new Telefone('33', '654987321');
const cliente8 = new Cliente('Lucas Souza', 'Lucas', cpf8, 'masculino', telefone8);

const cpf9 = new CPF('444.535.666-77', new Date(1999, 3, 17));
const telefone9 = new Telefone('44', '321987654');
const cliente9 = new Cliente('Mariana Santos', 'Mariana', cpf9, 'feminino', telefone9);

const cpf10 = new CPF('555.636.777-88', new Date(1988, 6, 28));
const telefone10 = new Telefone('55', '987654321');
const cliente10 = new Cliente('Pedro Oliveira', 'Pedro', cpf10, 'masculino', telefone10);

const cpf11 = new CPF('666.747.888-99', new Date(1993, 9, 8));
const telefone11 = new Telefone('66', '123456789');
const cliente11 = new Cliente('Ana Silva', 'Ana', cpf11, 'feminino', telefone11);

const cpf12 = new CPF('777.828.999-00', new Date(1972, 2, 15));
const telefone12 = new Telefone('77', '654987321');
const cliente12 = new Cliente('Marcos Souza', 'Marcos', cpf12, 'masculino', telefone12);

const cpf13 = new CPF('888.949.000-11', new Date(1990, 5, 24));
const telefone13 = new Telefone('88', '321987654');
const cliente13 = new Cliente('Fernanda Santos', 'Fernanda', cpf13, 'feminino', telefone13);

const cpf14 = new CPF('999.010.611-22', new Date(1985, 11, 3));
const telefone14 = new Telefone('99', '987654321');
const cliente14 = new Cliente('Rafael Oliveira', 'Rafael', cpf14, 'masculino', telefone14);

const cpf15 = new CPF('000.151.222-23', new Date(2002, 7, 19));
const telefone15 = new Telefone('00', '123456789');
const cliente15 = new Cliente('Camila Silva', 'Camila', cpf15, 'feminino', telefone15);

const cpf16 = new CPF('111.282.333-44', new Date(1998, 3, 25));
const telefone16 = new Telefone('11', '987654321');
const cliente16 = new Cliente('Gabriel Silva', 'Gabriel', cpf16, 'masculino', telefone16);

const cpf17 = new CPF('222.353.444-55', new Date(1986, 7, 14));
const telefone17 = new Telefone('22', '123456789');
const cliente17 = new Cliente('Laura Oliveira', 'Laura', cpf17, 'feminino', telefone17);

const cpf18 = new CPF('333.464.555-66', new Date(1979, 1, 9));
const telefone18 = new Telefone('33', '654987321');
const cliente18 = new Cliente('Matheus Souza', 'Matheus', cpf18, 'masculino', telefone18);

const cpf19 = new CPF('444.575.666-77', new Date(1995, 5, 20));
const telefone19 = new Telefone('44', '321987654');
const cliente19 = new Cliente('Bianca Santos', 'Bianca', cpf19, 'feminino', telefone19);

const cpf20 = new CPF('555.686.777-88', new Date(1983, 9, 7));
const telefone20 = new Telefone('55', '987654321');
const cliente20 = new Cliente('Rodrigo Oliveira', 'Rodrigo', cpf20, 'masculino', telefone20);

const cpf21 = new CPF('111.242.333-44', new Date(1990, 8, 15));
const telefone21 = new Telefone('11', '987654321');
const cliente21 = new Cliente('Ana Oliveira', 'Ana', cpf21, 'feminino', telefone21);

const cpf22 = new CPF('222.393.444-55', new Date(1985, 4, 22));
const telefone22 = new Telefone('22', '123456789');
const cliente22 = new Cliente('Pedro Souza', 'Pedro', cpf22, 'masculino', telefone22);

const cpf23 = new CPF('333.474.555-66', new Date(1976, 11, 3));
const telefone23 = new Telefone('33', '654987321');
const cliente23 = new Cliente('Juliana Santos', 'Juliana', cpf23, 'feminino', telefone23);

const cpf24 = new CPF('444.545.666-77', new Date(1999, 2, 28));
const telefone24 = new Telefone('44', '321987654');
const cliente24 = new Cliente('Fernando Silva', 'Fernando', cpf24, 'masculino', telefone24);

const cpf25 = new CPF('555.646.777-88', new Date(1980, 7, 10));
const telefone25 = new Telefone('55', '987654321');
const cliente25 = new Cliente('Carla Oliveira', 'Carla', cpf25, 'feminino', telefone25);

const cpf26 = new CPF('666.767.888-99', new Date(1996, 1, 18));
const telefone26 = new Telefone('66', '123456789');
const cliente26 = new Cliente('Rafael Souza', 'Rafael', cpf26, 'masculino', telefone26);

const cpf27 = new CPF('777.808.999-00', new Date(1973, 5, 7));
const telefone27 = new Telefone('77', '654987321');
const cliente27 = new Cliente('Amanda Santos', 'Amanda', cpf27, 'feminino', telefone27);

const cpf28 = new CPF('888.939.000-11', new Date(1992, 10, 29));
const telefone28 = new Telefone('88', '321987654');
const cliente28 = new Cliente('Lucas Oliveira', 'Lucas', cpf28, 'masculino', telefone28);

const cpf29 = new CPF('999.030.111-22', new Date(1978, 3, 14));
const telefone29 = new Telefone('99', '987654321');
const cliente29 = new Cliente('Mariana Silva', 'Mariana', cpf29, 'feminino', telefone29);

const cpf30 = new CPF('000.131.222-33', new Date(1987, 9, 8));
const telefone30 = new Telefone('00', '123456789');
const cliente30 = new Cliente('Gustavo Souza', 'Gustavo', cpf30, 'masculino', telefone30);


clientes.push(cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10, cliente11, cliente12, cliente13, cliente14, cliente15, cliente16, cliente17, cliente18, cliente19, cliente20, cliente21, cliente22, cliente23, cliente24, cliente25, cliente26, cliente27, cliente28, cliente29, cliente30);

const produto1 = new Produto('Shampoo', '20', '1212');
const produto2 = new Produto('Creme para as Mãos', '12', '1002');
const produto3 = new Produto('Gel de Limpeza Facial', '15', '1003');
const produto4 = new Produto('Condicionador Capilar', '18', '1004');
const produto5 = new Produto('Creme Anti-Idade', '50', '1005');
const produto6 = new Produto('Desodorante Roll-on', '10', '1006');
const produto7 = new Produto('Escova Dental', '4', '1007');
const produto8 = new Produto('Fio Dental', '3', '1008');
const produto9 = new Produto('Esponja de Banho', '6', '1009');
const produto10 = new Produto('Pasta de Dente', '7', '1010');
const produto11 = new Produto('Condicionador', '25', '2323');
const produto12 = new Produto('Sabonete', '5', '3434');
const produto13 = new Produto('Creme Hidratante', '30', '4545');
const produto14 = new Produto('Perfume', '50', '5656');
const produto15 = new Produto('Protetor Solar', '40', '6767');
const produto16 = new Produto('Creme Dental', '10', '7878');
const produto17 = new Produto('Loção Pós-barba', '15', '8989');
const produto18 = new Produto('Desodorante', '12', '9090');
const produto19 = new Produto('Maquiagem', '35', '1012');
const produto20 = new Produto('Cotonete', '3', '1111');

produtos.push(produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8, produto9, produto10, produto11, produto12, produto13, produto14, produto15, produto16, produto17, produto18, produto19, produto20);

const servico1 = new Servico('Cortar Cabelo', '30', '2323');
const servico2 = new Servico('Corte Feminino', '45', '2012');
const servico3 = new Servico('Escova Progressiva', '100', '2013');
const servico4 = new Servico('Penteado', '55', '2014');
const servico5 = new Servico('Spa das Mãos', '40', '2015');
const servico6 = new Servico('Spa dos Pés', '45', '2016');
const servico7 = new Servico('Maquiagem Simples', '30', '2017');
const servico8 = new Servico('Maquiagem Artística', '60', '2018');
const servico9 = new Servico('Reflexologia', '70', '2019');
const servico10 = new Servico('Drenagem Linfática', '80', '2020');
const servico11 = new Servico('Coloração de Cabelo', '60', '2001');
const servico12 = new Servico('Hidratação Capilar', '40', '2002');
const servico13 = new Servico('Manicure', '25', '2003');
const servico14 = new Servico('Pedicure', '30', '2004');
const servico15 = new Servico('Depilação', '50', '2005');
const servico16 = new Servico('Massagem Relaxante', '70', '2006');
const servico17 = new Servico('Limpeza de Pele', '55', '2007');
const servico18 = new Servico('Design de Sobrancelhas', '20', '2008');
const servico19 = new Servico('Tratamento Capilar', '80', '2009');
const servico20 = new Servico('Maquiagem Profissional', '65', '2010');

servicos.push(servico1, servico2, servico3, servico4, servico5, servico6, servico7, servico8, servico9, servico10, servico11, servico12, servico13, servico14, servico15, servico16, servico17, servico18, servico19, servico20);

cliente1.adicionarProdutoConsumido(produto1);
cliente1.adicionarProdutoConsumido(produto1);
cliente1.adicionarProdutoConsumido(produto1);
cliente1.adicionarProdutoConsumido(produto1);
cliente1.adicionarProdutoConsumido(produto1);
cliente10.adicionarProdutoConsumido(produto13);
cliente10.adicionarProdutoConsumido(produto13);
cliente10.adicionarProdutoConsumido(produto13);
cliente10.adicionarProdutoConsumido(produto13);
cliente10.adicionarProdutoConsumido(produto13);
cliente11.adicionarProdutoConsumido(produto14);
cliente12.adicionarProdutoConsumido(produto15);
cliente13.adicionarProdutoConsumido(produto16);
cliente2.adicionarProdutoConsumido(produto19);
cliente14.adicionarProdutoConsumido(produto17);
cliente15.adicionarProdutoConsumido(produto18);
cliente17.adicionarProdutoConsumido(produto20);
cliente18.adicionarProdutoConsumido(produto3);
cliente18.adicionarProdutoConsumido(produto3);
cliente18.adicionarProdutoConsumido(produto3);
cliente18.adicionarProdutoConsumido(produto3);
cliente18.adicionarProdutoConsumido(produto3);
cliente27.adicionarProdutoConsumido(produto12);
cliente27.adicionarProdutoConsumido(produto12);
cliente27.adicionarProdutoConsumido(produto12);
cliente27.adicionarProdutoConsumido(produto12);

cliente1.adicionarServicoConsumido(servico1);
cliente2.adicionarServicoConsumido(servico2);
cliente3.adicionarServicoConsumido(servico3);
cliente4.adicionarServicoConsumido(servico4);
cliente5.adicionarServicoConsumido(servico5);
cliente6.adicionarServicoConsumido(servico6);
cliente7.adicionarServicoConsumido(servico7);
cliente8.adicionarServicoConsumido(servico8);
cliente9.adicionarServicoConsumido(servico9);
cliente10.adicionarServicoConsumido(servico10);

iniciar();