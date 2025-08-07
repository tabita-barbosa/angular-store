export interface Produto {
    nome: string,
    descricao: string,
    preco: number,
    quantidade?: number, // interrogação transforma em numero OU undefined (opcional)
}