export class Pessoa {
    constructor(
        private nome: string,
        private sobrenome: string,
        private _cpf: string,
        private idade: number,
    ) {
        this.cpf = _cpf;
    }

    set cpf(cpf: string) {
        console.log('SETTER CHAMADO');
        this._cpf = cpf;
    }

    get cpf(): string {
        console.log('GETTER CHAMADO');
        return this._cpf.replace(/\D/g, '');
    }
}

const pessoa = new Pessoa('Lucas Marcelo', 'Schier', '123.456.789-10', 18 );
pessoa.cpf = '123.456.789-01';
console.log(pessoa.cpf);