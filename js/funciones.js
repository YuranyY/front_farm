function validaesVacio(dato){
    return !dato.trim().length;
}

/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validar(){
    //obtiene valores
    let name = $("#name").val();
    let address = $("#address").val();
    let extension = $("#extension").val();
    let description = $("#description").val();
    let category = $("#category").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(name)) {
        errores="Debe ingresar el nombre<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    }else if( validaesVacio(address)) {
        errores="Debe ingresar la addess<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#address").focus();
        return false;
    }else if( validaesVacio(extension)) {  
        errores="Debe ingresar  la extension<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#extension").focus();
        return false;
    }else if( validaesVacio(category)) { 
        errores="Debe seleccionar la categoría<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#category").focus();
        return false;
    }else if( validaesVacio(description)) { 
        errores="Debe ingresar la descripción<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#description").focus();
        return false;
    }
    else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

/**
 * Al actualizar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
 function validarEditar(){
    //obtiene valores
    let name = $("#Fname").val();
    let address = $("#Faddress").val();
    let extension = $("#Fextension").val();
    let description = $("#Fdescription").val();
    let category = $("#category").val();
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(name)) {
        errores="Debe ingresar el nombre<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#Fname").focus();
        return false;
    }else if( validaesVacio(address)) {
        errores="Debe ingresar el address<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#Faddress").focus();
        return false;
    }else if( validaesVacio(extension)) {  
        errores="Debe ingresar la extension<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#Fextension").focus();
        return false;
    }else if( validaesVacio(category)) { 
        errores="Debe seleccionar la categoría<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#category").focus();
        return false;
    }else if( validaesVacio(description)) { 
        errores="Debe ingresar la descripción<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#Fdescription").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

function upperCaseF(campo) {
    setTimeout(function () {
        campo.value = campo.value.toUpperCase();
    }, 1);
}