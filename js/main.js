document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.scroller-projetos');
    const btnEsq = document.querySelector('.projetos__botao-esq');
    const btnDir = document.querySelector('.projetos__botao-dir');

    let isScrolling = false; // Evita múltiplas animações de rolagem

    // Ajusta a opacidade e a função do botão da esquerda com base na posição de rolagem
    function verificarScroll() {
        if (container.scrollLeft === 0) {
            btnEsq.style.opacity = '0.5';  // Define a opacidade do botão como "inativo"
            btnEsq.style.pointerEvents = 'none';  // Desativa cliques
        } else {
            btnEsq.style.opacity = '1';  // Define a opacidade do botão como "ativo"
            btnEsq.style.pointerEvents = 'auto';  // Ativa cliques
        }

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            btnDir.style.opacity = '0.5';
            btnDir.style.pointerEvents = 'none';
        } else {
            btnDir.style.opacity = '1';
            btnDir.style.pointerEvents = 'auto';
        }
    }

    // Detecta o evento de rolagem
    container.addEventListener('scroll', verificarScroll);

    // Função de rolar para a esquerda
    function scrollEsq() {
        if (!isScrolling) {
            isScrolling = true;
            container.scrollBy({ left: -300, behavior: 'smooth' });
            setTimeout(() => { isScrolling = false; }, 400);
        }
    }

    // Função de rolar para a direita
    function scrollDir() {
        if (!isScrolling) {
            isScrolling = true;
            container.scrollBy({ left: 300, behavior: 'smooth' });
            setTimeout(() => { isScrolling = false; }, 400);
        }
    }

    // Adiciona os eventos aos botões
    btnEsq.addEventListener('click', scrollEsq);
    btnDir.addEventListener('click', scrollDir);

    // Verifica a posição do scroll ao carregar a página
    verificarScroll();
});


$(document).ready(function(){
  //Visualização de imagens - Portfólio
  Fancybox.bind("[data-fancybox]", {
  });
});

/*
const slider = document.querySelector(".scroller-projetos");
firstItem = slider.querySelectorAll(".scroller-projetos__item")[0];
botoes = document.querySelectorAll(".projetos i");

let firstItemWidth = firstItem.clientWidth;

botoes.forEach(icon => {
    icon.addEventListener("click", () => {
        slider.scrollLeft += icon.id == "esquerdo" ? -firstItemWidth : firstItemWidth;
    })
});
*/

/*
const slider = document.querySelector(".scroller-projetos");

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart =  false;
}


slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
slider.addEventListener("mouseup", dragStop)

*/

window.addEventListener("scroll",function(){
    let header = document.querySelector('#cabecalho')
    header.classList.toggle('header__scrollado', window.scrollY > 100)
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