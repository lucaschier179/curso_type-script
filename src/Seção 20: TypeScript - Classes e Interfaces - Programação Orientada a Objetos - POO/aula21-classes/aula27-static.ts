export class Pessoa {
    static idadePadrao = 0
    static cpfPadrao = '000.000.000-00'

    constructor(
        public nome: string,
        public sobrenome: string,
        public cpf: string,
        public idade: number,
    ) {}

    metodoNormal(): void {
        console.log(Pessoa.cpfPadrao, Pessoa.idadePadrao)
    }

    static criaPessoa(nome: string, sobrenome: string): Pessoa {
        return new Pessoa(nome, sobrenome, Pessoa.cpfPadrao, Pessoa.idadePadrao);
    }
}

const pessoa1 = new Pessoa('Lucas Marcelo', 'Schier', '123.456.789-10', 18);
const pessoa2 = Pessoa.criaPessoa('Marcelo', 'Schier');
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
console.log(Pessoa.cpfPadrao, Pessoa.idadePadrao);
