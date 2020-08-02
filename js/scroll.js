// Objeto con propiedades de efecto scroll

let propScroll = {

    posicion: window.pageYOffset,
    scroll_suave: document.getElementsByClassName('scroll-suave'),
    volver_arriba: document.getElementsByClassName('volver-arriba'),
    destino: null,
    seccion_distancia: null,
    intervalo: null

}


//Objeto con métodos de efecto scroll

let metScroll = {

    inicio: function () {

        for(var i = 0; i < propScroll.scroll_suave.length; i++) {
            propScroll.scroll_suave[i].addEventListener('click', metScroll.moverse);
        }

        for(var i = 0; i < propScroll.volver_arriba.length; i++) {
            propScroll.volver_arriba[i].addEventListener('click', metScroll.subir);
        }
    },

    moverse: function(e) {
        e.preventDefault();
        propScroll.destino = this.getAttribute('href');
        propScroll.seccion_distancia = document.querySelector(propScroll.destino).offsetTop;

        propScroll.posicion = window.pageYOffset;
        propScroll.intervalo = setInterval(function(){

            if( propScroll.posicion < propScroll.seccion_distancia) {

                propScroll.posicion += 30;

                if(propScroll.posicion >= propScroll.seccion_distancia) {
                    clearInterval(propScroll.intervalo);
                }
            }  else {

                propScroll.posicion -= 30;

                if(propScroll.posicion <= propScroll.seccion_distancia) {
                    clearInterval(propScroll.intervalo);
                }
            }

            window.scrollTo(0, propScroll.posicion)

        }, 15);
    }

}

metScroll.inicio();