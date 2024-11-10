// carrossel

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll("#slider img");
    const totalSlides = slides.length;

    function showSlide(index) {
        // esconde todas as imagens
        slides.forEach((slide, i) => {
            slide.style.display = "none";
        });

        // mostra a imagem atual
        slides[index].style.display = "block";
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    }

    // chama a função através dos botões de seta
    window.changeSlide = function(direction) {
        if (direction === 1) {
            nextSlide();
        } else if (direction === -1) {
            prevSlide();
        }
    };

    // da inicio ao slide
    showSlide(slideIndex);

    // muda de slide automaticamente a cada 5 segundos
    setInterval(nextSlide, 5000);
});

// nav menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
