export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        protected cpf: string,
        private idade: number,
    ) {}

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }

    getCpf(): string {
        return this.cpf;
    }

    getIdade(): number {
        return this.idade;
    }
}

export class Aluno extends Pessoa {
    constructor(
        nome: string,
        sobrenome: string,
        cpf: string,
        idade: number,
        public sala: string,
    ) {
        super(nome, sobrenome, cpf, idade);
    }

    getNomeCompleto(): string {
        console.log('Fazendo testes ')
        const result = super.getNomeCompleto();
        return result + 'TESTE';
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return 'Cliente: ' + this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('Lucas Marcelo', 'Schier', '123.456.789-10', 18 );
const aluno = new Aluno('Lucas Marcelo', 'Schier', '123.456.789-10', 18, '001' );
const cliente = new Cliente('Lucas Marcelo', 'Schier', '123.456.789-10', 18 );

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);