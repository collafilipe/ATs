import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Clientes {
    @PrimaryGeneratedColumn()
    clienteID: number | undefined;

    @Column({ length: 255 })
    nome: string;

    @Column({ length: 255, unique: true })
    cpf: string;

    @Column({ length: 255, unique: true })
    email: string;

    @Column({ length: 255 })
    rua: string

    @Column({ length: 255 })
    cidade: string;

    @Column({ length: 255 })
    estado: string;

    @Column({ length: 255, nullable: true })
    informacoesAdicionais: string | null;

    @Column({ length: 255, unique: true, nullable: true })
    telefone: string | null;

    @Column({ length: 255})
    sexo: string;

    constructor(nome: string, cpf: string, email: string, rua: string, cidade: string, estado: string, informacoesAdicionais: string | null, telefone: string | null, sexo: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.rua = rua;
        this.cidade = cidade;
        this.estado = estado;
        this.informacoesAdicionais = informacoesAdicionais;
        this.telefone = telefone;
        this.sexo = sexo;
    }
}