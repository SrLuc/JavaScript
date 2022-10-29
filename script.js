

const cigarro = 
{
    marca: ['malboro', 'derby', 'minister', 'gift', 'double strike', 'paiero'],
    preco: [10, 6, 5.5, 5, 10, 12 ]
};

const modificarNome = cigarro.marca.map(PrimeiraLetra => PrimeiraLetra[0].toUpperCase() + PrimeiraLetra.substring(1));
const desconto = cigarro.preco.map(preco =>"R$" + preco * 0.9);

console.log(modificarNome);
console.log(desconto);
