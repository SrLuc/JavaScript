

const produtos =
[
    {
        nome: 'computador',
        preco: 1000
    },

    {
        nome: 'relogio',
        preco: 50
    },

    {
        nome: 'tenis',
        preco: 80
    }
];

const resultado = produtos.map(precoArray=>precoArray.preco*=0.9);
console.log('Preços atualizados com 10%OFF : ' + resultado);

const novosNomes = produtos.map(nomeArray=>nomeArray.nome + ' Inspiration');
console.log(novosNomes);


