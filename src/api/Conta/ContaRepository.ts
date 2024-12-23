import { Repository } from "typeorm";
import { ContaEntity } from "./ContaEntity";

export class ContaRepository {
    private database: Repository<ContaEntity>;

    constructor(repository: Repository<ContaEntity>) {
        this.database = repository;
    }

    criarConta = async (nome:string, email:string, senha:string): Promise<boolean> => {
        try {
            const contaEntity = new ContaEntity(nome, email, senha);
            await this.database.save(contaEntity);
            return true;
        } catch (error) {
            throw error;
        }
    }

    buscarUsuario = async (email:string): Promise<ContaEntity | null> => {
        try {
            const usuario = await this.database.findOneBy({ email });
            return usuario;
        } catch (error) {
            throw error;
        }
    }
}