
// Objeto con Propiedades de Parallax
let propParallax = {

    seccion: document.querySelector('.parallax'),
    recorrido: null,
    limite: null

}




//Objeto con Métodos de Parallax
let metParallax = {

    inicio: function () {
        window.addEventListener('scroll', metParallax.scrollParallax);
    },

    scrollParallax: function () {

        propParallax.recorrido = window.pageYOffset;
        propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;
    }
}

metParallax.inicio();

