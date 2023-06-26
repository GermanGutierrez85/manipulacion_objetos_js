"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá realizar los siguientes enunciados todos en este
    script de javascript. Cada enunciado agrega una funcionalidad
    extra al programa.
/*

/* 1 - Enunciado

- Debera capturar el evento "onclick" del boton "Ingresar"
y leer los datos ingresados en "usuario" y "email".
- Tome esos datos y almacenelo en memoria permanente del explorador.
- Deberá completar las etiquetas <p> de id "usuarioLogeado" y "emailLogeado"
con los datos almacenados en memoria, a fin de darle la bienvenida al usuario logeado.

*/
const btnIngresar = document.getElementById("btnIngresar");
const usuario = document.getElementById('usuario');
const email= document.getElementById('email');

const usuarioLogeado = document.getElementById('usuarioLogeado');
const emailLogeado = document.getElementById('emailLogeado');

const login = document.getElementById('login');
const logout = document.getElementById('logout')

// Evento click para inico de sesion

btnIngresar.onclick = () =>{
    usuario.onchange = () => usuario.value;

    email.onchange = () => email.value;
    
    let nombreUsuario = usuario.value;
    let emailUsuario = email.value;
    localStorage.setItem('user', nombreUsuario);
    localStorage.setItem('mailAddress', emailUsuario);

    usuarioLogeado.innerHTML = localStorage.getItem('user');
    emailLogeado.innerHTML = localStorage.getItem('mailAddress');

    usuario.value = "";
    email.value = "";

    login.classList.add('hidden');
    logout.classList.remove('hidden');
    
}


/* 2 - Enunciado

- Al comenzar el script se debe verificar si en memoria se encuentran
almacenados los datos de "usuario" y "email".
- En caso de que hubiera datos almacenados se debe completar los elementos
"usuarioLogeado" y "emailLogeado".
- Se debe ocultar la sección "login" (puede usar la clase CSS hidden ya creada)
y deberá revelar la sección "logout" (quitar la clase hidden).

*/
const userName = localStorage.getItem('user');
const userEmail = localStorage.getItem('mailAddress')

if(userName !==null || userEmail !==null){
    
    usuarioLogeado.innerHTML = userName;
    emailLogeado.innerHTML = userEmail;
    login.classList.add('hidden');
    logout.classList.remove('hidden'); 
}

/* 3 - Enunciado

- Debera capturar el evento "onclick" del boton "Salir". Cuando este
botón sea presionado deberá borrar de memoria las variables de este programa.
- Luego deberá refrescar la página (desde javascript, con window.location.reload()) y al
volverse a cargar debería aparecer nuevamente la sección de bienvenida
ya que no debería haber más datos en memoria cargados.

*/
//Evento click para salida de sesion

const btnSalir = document.getElementById('btnSalir');

btnSalir.onclick = () => {
    localStorage.clear();
    location.reload()
}
