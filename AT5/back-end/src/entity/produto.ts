import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produtos {
    @PrimaryGeneratedColumn()
    produtoID: number | undefined;

    @Column({ length: 255 })
    nome: string;

    @Column({ length: 10 })
    valor: string;

    constructor(nome: string, valor: string) {
        this.nome = nome;
        this.valor = valor;
    };
};