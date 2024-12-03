import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export default class ProdutoEntity {

    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    nome?: string;
    @Column()
    valor?: number;
    @Column()
    quantidade?: number;
    @Column()
    dataCriacao?: Date;
}