const menu = document.querySelector('.menu');

menu.outerHTML; //captura todo o html do elemento
menu.innerHTML; //html interno
menu.innerText; //texto, sem tags

//Transversing -> é o conjunto de função para navegar pelo DOM

//Exemplos de transversing
const lista = document.querySelector('.animais-lista');

lista.parentElement; //acessa o pai do elemento
lista.previousElementSibling; //acessa o elemento anterior de mesmo nível hierárquico
lista.nextElementSibling; //acessa o próximo elemento de mesmo nível hierárquico

lista.children; //acessao os filho do elemento

 // insertBefore() -> utiliza 2 parametros para alocar um elemento no DOM,
 // o 1º determina qual o elemento a ser movido, e o 2º vai determinar
 // aonde o 1º tem que ser movido. 

//  Exemplo: <casa>
        //     <janela></janela>
        //     <porta></porta>
        // </casa> -> functionName.insertBefore(janela, casa)
        
//  Resultado:
        //<janela></janela> 
        //<casa>
        //     <porta></porta>
        // </casa>