// Para animar se soubrar tempo
// https://animate.style/

// https://scrollrevealjs.org/guide/installation.html
// https://animejs.com/documentation/#domNode

window.addEventListener('scroll', function() {
    const heroContainer = document.querySelector(".header")
    const navbar = document.querySelector('.navbar');

    const hasScrolledClass = navbar.classList.contains("scrolled")
    
    if (window.scrollY < heroContainer.clientHeight) {
      navbar.classList.remove('scrolled');
    } else {
      if(hasScrolledClass){
        return
      }
      
      navbar.classList.add('scrolled');
    }
});

