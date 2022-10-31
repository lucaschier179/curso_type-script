let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100; // eslint-disable-line

const pessoa = {
    nome: 'Lucas' as const,
    sobrenome: 'Schier',
};

function escolhaCor(cor: 'Verde' | 'Amarelo' | 'Azul') {
    return cor;
}
console.log(escolhaCor('Verde'));

// Module mode
export default 1;