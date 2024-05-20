/*validamos que se complete el campo nombre  */
function validarFormulario(){
    var nombre = document.getElementById("nombre");
    
    if(nombre.value.trim() === "") {
        alert("Por favor ingresa tu nombre");
        nombre.focus();
        return false;
    }

 }


