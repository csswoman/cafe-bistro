// Objeto con propiedades de efecto scroll

let propScroll = {

    posicion: window.pageYOffset,
    scroll_suave: document.getElementsByClassName('scroll-suave'),
    volver_arriba: document.getElementsByClassName('volver-arriba')

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
    }
}