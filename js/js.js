function validar(){
    let nombre=document.getElementById("nombre");

    let error=false;
    document.getElementById("validar_nombre").innerHTML="";
    document.getElementById("validar_email").innerHTML="";
    document.getElementById("validar_telefono").innerHTML="";

    if(nombre.value == ""){
        document.getElementById("validar_nombre").innerHTML="Debe completar el nombre";
        error=true;
        nombre.focus();
    }
    
    if(email.value == ""){
        document.getElementById("validar_email").innerHTML="Debe completar el email";
        error=true;
        email.focus();
    }

    if (isNaN(telefono.value) || (telefono.value == "")){ 
        document.getElementById("validar_telefono").innerHTML="Campo con datos NO validos";
        error=true;
        telefono.focus();
    }

    if(error == false){
        document.getElementById("nombre").value= "";
        document.getElementById("validar_nombre").innerHTML="";

        document.getElementById("email").value= "";
        document.getElementById("validar_email").innerHTML="";

        document.getElementById("telefono").value= "";
        document.getElementById("validar_telefono").innerHTML="";

        alert("Datos enviados");
    }
    return !error;
    }  