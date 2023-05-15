var products = 
[
    {
        description:  'Boneco',
        price: 'R$ 19'
    },
    {
        description:  'Espada',
        price: 'R$ 25'
    },
    {
        description:  'Carrinho',
        price: 'R$ 32'
    },
    {
        description:  'Bola',
        price: 'R$ 10'
    },
]

let totalPrices = 0;
products.forEach((item) => {
    const price = +item.price.replace('R$ ', '');
        totalPrices = price + totalPrices;
});

let totalTaxas = 0;
const transactions = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
transactions.forEach(item => {
    item = item.toLowerCase().trim();
    item = item.slice(0,4);

    if(item === 'taxa')
        totalTaxas++

    console.log(totalTaxas)
})