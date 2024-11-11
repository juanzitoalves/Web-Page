// carrossel

//adciona um ouvinte que espera todo o documento HTML ser carregado e analisado antes de executar a função 
document.addEventListener("DOMContentLoaded", function() {
    //é inicializado como 0 e mantém o controle do slide atual
    let slideIndex = 0;
    //seleciona todo e qualquer elemento img dentro do id slider
    const slides = document.querySelectorAll("#slider img");
    // armazena todos os slides
    const totalSlides = slides.length;

    //esconde todos os slides
    function showSlide(index) {
        // esconde todas as imagens
        slides.forEach((slide, i) => {
            slide.style.display = "none";
        });

        // mostra o slide atual
        slides[index].style.display = "block";
    }

    //essa função faz uma encrementação em 1 e através do operador de módulo, reinicia caso exceda totalSlides
    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;

        //chama a função para exibir o próximo slide
        showSlide(slideIndex);
    }

    //essa função faz uma decrementação em 1 e através do operador de módulo, reinicia fique abaixo de 0
    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    }

    //chama a função através dos botões de seta
    window.changeSlide = function(direction) {
        if (direction === 1) {
            nextSlide();
        } else if (direction === -1) {
            prevSlide();
        }
    };

    //função para alterar o slide com base na direção
    showSlide(slideIndex);

    //muda de slide automaticamente a cada 5 segundos.
    setInterval(nextSlide, 5000);
});

//nav menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
