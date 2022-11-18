export abstract class Personagem {
    protected abstract emoji: string;

    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number,
    ) {}

    atacar(personagem: Personagem): void {
        console.log(`${this.emoji} - ${this.nome} está atacando...`);
        personagem.sofrerDano(this.ataque);
    }

    sofrerDano(forcaAtaque: number): void {
        this.vida -= forcaAtaque;
        console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`);
    }
}

export class Guerreiro extends Personagem {
    protected emoji = '\u{1F9DD}';
}
export class Monstro extends Personagem {
    protected emoji = '\u{1F9DF}';
}

const guerreiro = new Guerreiro('Guerreiro', 100, 1000);
const monstro = new Monstro('Monstro', 85, 1000);

guerreiro.atacar(monstro);
guerreiro.atacar(monstro);
guerreiro.atacar(monstro);