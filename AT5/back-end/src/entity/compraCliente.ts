import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { Clientes } from "./cliente";
import { Produtos } from "./produto";
import { Servicos } from "./servico";

@Entity()
export class Compra {
    @PrimaryGeneratedColumn()
    compraID: number | undefined;

    @ManyToOne(() => Clientes)
    @JoinColumn({ name: "clienteID" })
    cliente: Clientes;

    @ManyToOne(() => Produtos)
    @JoinColumn({ name: "produtoID" })
    produto: Produtos;

    @ManyToOne(() => Servicos)
    @JoinColumn({ name: "servicoID" })
    servico: Servicos;

    @Column({default: null})
    quantidadeProduto: number;

    @Column({default: null})
    quantidadeServico: number;

    @Column({default: null})
    valorServico: number;

    @Column({default: null})
    valorProduto: number;

    constructor(cliente: Clientes, produto: Produtos, servico: Servicos, quantidadeProduto: number, quantidadeServico: number, valorServico: number, valorProduto: number) {
        this.cliente = cliente;
        this.produto = produto;
        this.servico = servico;
        this.quantidadeProduto = quantidadeProduto;
        this.quantidadeServico = quantidadeServico;
        this.valorServico = valorServico;
        this.valorProduto = valorProduto;
    }
}