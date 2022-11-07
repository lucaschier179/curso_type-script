export class Empresa {
    public readonly nome: string; // public não é necessário
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    mostrarColaboradores(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ) {}
}

const empresa1 = new Empresa('Pormade', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Lucas', 'Marcelo');
const colaborador2 = new Colaborador('Marcelo', 'Lopes');
const colaborador3 = new Colaborador('Everton', 'Ribeiro');
const colaborador4 = new Colaborador('João', 'Gomes');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.adicionaColaborador({
    nome: 'Marcelo',
    sobrenome: 'Lucas',
});
empresa1.adicionaColaborador(colaborador4);
console.log(empresa1);
empresa1.mostrarColaboradores();
