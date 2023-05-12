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


// com essa função, é possível capturar qualquer DOM e adicionar uma classe "ativar";
//Isso acontece, pois é passado um parametro chamado seletor 
//que representa um parametro passado numa requisição mais tarde.
function SelecionarDom(seletor){
    this.element = function(){
        return document.querySelector(seletor);
    }
    
    this.ativar = function(){
        this.element.classList.add('ativar');
    }
}

// Variáveis que chamam o método.
const ul = new SelecionarDom('ul');
const li = new SelecionarDom('li');


// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
  }

function DadosPessoa(nome, idade){
    this.name = nome;
    this.idade = idade;
    this.distance = function(){
        console.log(nome + 'andou !');
    }
}
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos

const dadoPessoa = new DadosPessoa('João', 20);
const dadoPessoa2 = new DadosPessoa('Maria', 25);
const dadoPessoa3 = new DadosPessoa('Bruno', 15);
  
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  
function Dom(select){
     
}