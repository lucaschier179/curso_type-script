function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Marcelo',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    }
};

semRetorno('Lucas', 'Marcelo');
pessoa.exibirNome();

export { pessoa };