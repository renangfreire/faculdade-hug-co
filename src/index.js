// Para animar se soubrar tempo
// https://animate.style/

// https://scrollrevealjs.org/guide/installation.html
// https://animejs.com/documentation/#domNode

const users = [
  {name:"João", age: 25, city: "São Paulo"},
  {name:"Maria", age: 30, city: "Rio de Janeiro"},
  {name:"José", age: 35, city: "Curitiba"},
]

window.addEventListener('scroll', function() {
    const heroContainer = document.querySelector(".header")
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > heroContainer.clientHeight) { // Ajuste o valor conforme necessário
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});

