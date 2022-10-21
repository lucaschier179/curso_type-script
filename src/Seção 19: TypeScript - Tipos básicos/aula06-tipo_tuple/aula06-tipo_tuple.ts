// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Lucas'];
const dadosCliente2: [number, string, string] = [1, 'Lucas', 'Marcelo'];
const dadosCliente3: [number, string, string?] = [1, 'Lucas'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Lucas', 'Marcelo'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Marcelo';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Lucas', 'Marcelo'];
const array2: ReadonlyArray<string> = ['Lucas', 'Marcelo'];

console.log(array1);
console.log(array2);