const esUnEmailValido = (email) => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return email ? regex.test(email.trim()) : false;
}

document.getElementById("formulario-login").addEventListener("submit", function(evento) {
    evento.preventDefault();

    let respuesta = 'Login correcto.', emailFlag = true, passFlag = true;

    let email = document.getElementById("inputEmail").value;
    let pass = document.getElementById("inputPass").value;

    if(!esUnEmailValido(email)) emailFlag = false;
    if(pass.trim().length < 8) passFlag = false;

    if(!emailFlag || !passFlag) {
        respuesta = "";
        if(!emailFlag) respuesta = "Email invalido.";
        if(!emailFlag && !passFlag) respuesta += "<br/>"; 
        if(!passFlag) respuesta += "La contraseña debe tener al menos 8 caracteres.";
    }

    document.getElementById("respuesta-formulario").innerHTML = respuesta;
});