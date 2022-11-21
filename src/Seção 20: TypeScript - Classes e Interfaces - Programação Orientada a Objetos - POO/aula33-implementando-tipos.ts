type TipoPessoa = {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;
}

export class Pessoa extends TipoPessoa {
    constructor(public nome: string, public sobrenome: string) {
        super();
    }

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('Lucas', 'Marcelo');
console.log(pessoa.nomeCompleto());