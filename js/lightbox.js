
// Objeto con las propiedades del efecto Lightbox
let propLightbox = {

    imgContainer: document.getElementsByClassName('lightbox'),
    imagen: null,
    imagenSrc: null,
    cuerpoDom: document.getElementsByTagName('body')[0],
    lightbox_container: null,
    modal: null
}

// Objeto con los métodos del efecto Lightbox
let metLightbox = {
    inicio: function() {

        for (var i = 0; i < propLightbox.imgContainer.length; i++) {
            propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen)
        }

    },

    capturaImagen: function() {

        propLightbox.imagen = this;
        metLightbox.lightbox(propLightbox.imagen);
    },

    lightbox: function(imagen){

        propLightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);0

        propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');

        propLightbox.lightbox_container = document.getElementById('lightbox_container');

        propLightbox.lightbox_container.style.width = '100%';
        propLightbox.lightbox_container.style.height = '100%';
        propLightbox.lightbox_container.style.position = 'fixed';
        propLightbox.lightbox_container.style.zIndex = '1000';
        propLightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
        propLightbox.lightbox_container.style.top = '0';
        propLightbox.lightbox_container.style.left = '0';

        propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
        propLightbox.modal = document.getElementById('modal');

        propLightbox.modal.style.height= '100%';


        propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imagenSrc);
        propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal');
    }
}

metLightbox.inicio();