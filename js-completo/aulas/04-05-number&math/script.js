// Retorne um número aleatório
// entre 1050 e 2000
const maxNumber = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const spliceNumbers = numeros.split(', ');
const arrayNumbers = Math.max(...spliceNumbers);
console.log(arrayNumbers);


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limpaPrecos(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    console.log(preco)
    preco = +preco.toFixed(2);
    return preco 
}

let soma = 0;

listaPrecos.forEach((preco) => {
    soma += limpaPrecos(preco);
    console.log(soma);
});

limpaPrecos(listaPrecos);