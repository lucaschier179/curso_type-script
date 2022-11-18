export class CarrinhoDeCompras {
    private readonly produtos: Produto[] = [];

    inserirProdutos(...produtos: Produto[]): void {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }

    quantidadeProdutos(): number {
        return this.produtos.length;
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}

export class Produto {
    constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 49.90);
const produto2 = new Produto('Caneta', 2.90);
const produto3 = new Produto('Caneca', 29.90);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);
console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeProdutos());