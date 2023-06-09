var active = 'ativo'

function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    
    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add(active);
    
        function activeTab(i){
            tabContent.forEach((section) => {
                section.classList.remove(active);
            });
            tabContent[i].classList.add(active);
        }
    
        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeTab(index);
            })
        })
    }
}

initTabNav();

function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');

    if(accordionList.length){
        accordionList[0].nextElementSibling.classList.add(active);

        function activeAccordion(){
            this.classList.toggle(active);
            this.nextElementSibling.classList.toggle(active)
        }
    
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

initAccordion();

function scrollSuave(){
    function scrollToSection(event){
        event.preventDefault();

        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior:'smooth',
            block:'start'
        });
    
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top:topo,
        //     behavior:"smooth",
        // });
    }
    
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

scrollSuave();

function initAnimaScroll(){
    const sections = document.querySelectorAll('.section');
    if(sections.length){
        const halfSection = window.innerHeight * 0.6;
    
        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isVisible = (sectionTop - halfSection) < 0;
                
                if(isVisible)
                    section.classList.add('ativo');
                else 
                    section.classList.remove('ativo');
            });
        }
        
        animaScroll();
        
        window.addEventListener('scroll', animaScroll);
    }
}

initAnimaScroll();