
let datosContacto= {nombre: "Santiago", apellido:"Martinez Escalera", telefono:"123456789", mail:"usuario@ejemplo.com", domicilio:"Algun lugar del mundo"} ;    // Objeto

 document.getElementById('datosContacto').addEventListener ('click',function(){
    document.getElementById("telefono").innerHTML = "Telefono: " + datosContacto.telefono; 
    document.getElementById("mail").innerHTML = "Mail: " + datosContacto.mail; 
    document.getElementById("domicilio").innerHTML = "Domicilio: " + datosContacto.domicilio;
});