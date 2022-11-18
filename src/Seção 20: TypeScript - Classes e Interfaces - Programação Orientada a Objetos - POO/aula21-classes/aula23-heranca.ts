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
    getNomeCompleto(): string {
        return 'Aluno: ' + this.nome + ' ' + this.sobrenome;
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return 'Cliente: ' + this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('Lucas Marcelo', 'Schier', '123.456.789-10', 18 );
const aluno = new Aluno('Lucas Marcelo', 'Schier', '123.456.789-10', 18 );
const cliente = new Cliente('Lucas Marcelo', 'Schier', '123.456.789-10', 18 );

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());