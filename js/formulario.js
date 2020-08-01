// Objeto con propiedades de formulario
let propFormulario = {

    formulario: document.formulario_contacto,
    elementos: document.formulario_contacto.elements,
    error: null,
    textoError: null

}

// Objeto con métodos de formulario

let metFormulario = {

    inicio: function() {
        for (var i =0; i < propFormulario.elementos.length; i++) {

            if ( propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email' || propFormulario.elementos[i].nodeName.toLowerCase() == 'textarea'){
                propFormulario.elementos[i].addEventListener('focus', metFormulario.focusInput);
                propFormulario.elementos[i].addEventListener('blur', metFormulario.blurInput);
            }
        }

        propFormulario.formulario.addEventListener('submit', metFormulario.validarInputs);
    },

    focusInput: function () {
        this.parentElement.children[1].className = 'label active';
    },

    blurInput: function () {
        if(this.value == '') {
            this.parentElement.children[1].className = 'label';
        }
    },

    validarInputs: function(e) {
        for (var i = 0; i < propFormulario.elementos.length; i++) {

            if ( propFormulario.elementos[i].value == '') {
                e.preventDefault();

                propFormulario.error = document.createElement('p');
                propFormulario.textoError = document.createTextNode('Por favor llena el campo con tu ' + propFormulario.elementos[i].name);
                propFormulario.error.appendChild(propFormulario.textoError);
                propFormulario.error.className = 'error';

                propFormulario.elementos[i].parentElement.appendChild(propFormulario.error);
            }
        }
    }
}

metFormulario.inicio();