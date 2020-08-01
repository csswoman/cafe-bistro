// Objeto con propiedades de formulario
let propFormulario = {

    formulario: document.formulario_contacto,
    elementos: document.formulario_contacto.elements

}

// Objeto con métodos de formulario

let metFormulario = {

    inicio: function() {
        for (var i =0; i < propFormulario.elementos.length; i++) {

            if ( propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email' || propFormulario.elementos[i].nodeName == 'textarea'){
                propFormulario.elementos[i].addEventListener('focus', metFormulario.focusInput);
                propFormulario.elementos[i].addEventListener('blur', metFormulario.blurInput);
            }
        }
    }
}