const links = querySelectorAll('a[href^=#]');

function navigateHandle(event){
    event.preventDefault();

    links.forEach(link =>{
        link.classList.remove('ativo');
    })
    event.currentTarget.classList.add('ativo');
}

links.forEach( (link) => {
    link.addEventListener('click', navigateHandle);
});

function handleElement(e){
    e.currentTarget.remove();
}

const body = document.querySelectorAll('body *');
body.forEach(e =>{
    e.addEventListener('click', handleElement);
})

function handleKeyBoard(e){
    if(e.key === "t"){
        document.documentElement.classList.toggle('textomaior');
    }
}

window.addEventListener('keydown', handleKeyBoard);