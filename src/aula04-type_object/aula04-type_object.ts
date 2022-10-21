const objetoA: {
    readonly chaveA: string;
    chaveB: string;
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};

objetoA.chaveB  = 'Testando mudança de valor';

console.log(objetoA)