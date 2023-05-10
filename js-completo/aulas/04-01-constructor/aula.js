// Função construtora
function FunçãoConstrutora()//observe que ela começa com letra maiuscula,
{}                          //para tornar sua identificação fácil.
                            
//Vou usar de exemplo uma padaria.

function Padaria(produto, preco){ //Função construtora
    this.produto = produto;
    this.preco = preco;
}

//variável que for utilizar da função construtora, podendo manipular tudo.
const cafe = new Padaria('Croissant', 9000);
