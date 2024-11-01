// SCROLLER-PROJETOS

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.scroller-projetos');
    const btnEsq = document.querySelector('.projetos__botao-esq');
    const btnDir = document.querySelector('.projetos__botao-dir');

    let isScrolling = false;

    function verificarScroll() {
        if (container.scrollLeft === 0) {
            btnEsq.style.opacity = '0.5';
            btnEsq.style.pointerEvents = 'none'; 
        } else {
            btnEsq.style.opacity = '1';
            btnEsq.style.pointerEvents = 'auto'; 
        }

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            btnDir.style.opacity = '0.5';
            btnDir.style.pointerEvents = 'none';
        } else {
            btnDir.style.opacity = '1';
            btnDir.style.pointerEvents = 'auto';
        }
    }

    container.addEventListener('scroll', verificarScroll);

    function smoothScroll(container, delta) {
        const start = container.scrollLeft;
        const end = start + delta;
        const duration = 400;
        let startTime = null;
    
        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); 
    
            const ease = progress < 0.5 ? 4 * progress * progress * progress : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;
            container.scrollLeft = start + (end - start) * ease;
    
            if (progress < 1) {
                requestAnimationFrame(animation); 
            }
        }
    
        requestAnimationFrame(animation);
    }
    
    function scrollEsq() {
        if (!isScrolling) {
            isScrolling = true;
            smoothScroll(container, -450); 
            setTimeout(() => { isScrolling = false; }, 450);
        }
    }
    
    function scrollDir() {
        if (!isScrolling) {
            isScrolling = true;
            smoothScroll(container, 450); 
            setTimeout(() => { isScrolling = false; }, 450);
        }
    }
      

    btnEsq.addEventListener('click', scrollEsq);
    btnDir.addEventListener('click', scrollDir);

    verificarScroll();
});


$(document).ready(function(){
  Fancybox.bind("[data-fancybox]", {
  });
});

// HEADER AO SCROLLAR

window.addEventListener("scroll",function(){
    let header = document.querySelector('#cabecalho')
    header.classList.toggle('header__scrollado', window.scrollY > 50)
})

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section, article");
    const navItems = document.querySelectorAll(".menu-principal__item");

    function ativarItemMenu() {
        let index = sections.length;

        while (--index && window.scrollY + 300 < sections[index].offsetTop) {}

        navItems.forEach((item) => item.classList.remove("ativo"));

        navItems[index].classList.add("ativo");

        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            navItems.forEach((item) => item.classList.remove("ativo"));
            navItems[navItems.length - 1].classList.add("ativo");
        }
    }

    ativarItemMenu();
    window.addEventListener("scroll", ativarItemMenu);
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section, article");
    const navItems = document.querySelectorAll(".menu-mobile__item");

    function ativarItemMenu() {
        let index = sections.length;

        while (--index && window.scrollY + 300 < sections[index].offsetTop) {}

        navItems.forEach((item) => item.classList.remove("ativo"));

        navItems[index].classList.add("ativo");

        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            navItems.forEach((item) => item.classList.remove("ativo"));
            navItems[navItems.length - 1].classList.add("ativo");
        }
    }

    ativarItemMenu();
    window.addEventListener("scroll", ativarItemMenu);
});


// FADE

const observador = new IntersectionObserver ((entradas) => {
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('show')
        }else{
            entrada.target.classList.remove('show')
        }
    })
})

const elementos = document.querySelectorAll('.hidden')

elementos.forEach((elemento) => observador.observe(elemento))

// MENU-MOBILE

let btnAbrir = document.getElementById('btn-menu')
let btnFechar = document.getElementById('btn-fechar')
let menu = document.getElementById('menu-mobile')
let ol = document.getElementById('overlay')

btnAbrir.addEventListener('click', () =>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})

ol.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})

btnFechar.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})