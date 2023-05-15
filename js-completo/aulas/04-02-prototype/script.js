function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.andar = function (){
        console.log(nome + ' andou');
    }
}

const lucas = new Pessoa('Lucas', 19);

Pessoa.prototype.nadar = function() {
    console.log('nadou')
}

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function PessoaDados(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    PessoaDados.prototype.nomeCompleto = function(){
        const nomeCompleto = `${nome} ${sobrenome}`;
        return nomeCompleto;
    }
}

const Nauberth = new PessoaDados('Lucas Nauberth', 'Souza Protasio', 19);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String
