type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
    nome: 'Lucas',
    sobrenome: 'Schier',
    idade: 18,
};

console.log(pessoa);

// Module mode
export { pessoa };