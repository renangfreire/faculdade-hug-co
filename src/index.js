// Para animar se soubrar tempo
// https://animate.style/

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 600) { // Ajuste o valor conforme necessário
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});