export interface Produto {
    id?: number;
    nome: string;
    valor: number;
    imagem?: string;
    quantidade: number;
}

export class ValidacaoProduto {
    static isValid(produto: Produto): boolean {
        if (!produto.nome || !produto.valor || !produto.quantidade) {
            return false;
        }
        return true;
    }
}