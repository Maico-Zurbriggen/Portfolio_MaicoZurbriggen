/*Evento que agrega el estilo a la navegacion cuando detecta que desaparecio de la pantalla para fijarla*/
window.addEventListener('scroll', function() { //Creamos un evento para cuando se hace scroll
    const width = window.innerWidth; //Almacenamos el ancho de la pantalla
    const navbar = document.getElementById('navbar'); //Obtenemos la navegacion 
    const sticky = navbar.offsetTop; //Se guarda la distancia desde el borde superior de la navegacion al borde superior del documento
    if(width > 768){ //Solo fijamos la navegacion en pantallas de ancho mayor a 768 px
        if (window.scrollY > sticky) { //Si se ha scrolleado una distancia mayor que la calculada
            navbar.classList.add('fija'); //Se fija la navegacion
        } else { 
            navbar.classList.remove('fija'); //Sino se desfija la navegacion
        } 
    }
});

/*Evento para abrir y cerrar los modulos de los certificados*/
document.addEventListener('DOMContentLoaded', (event) => { //Se agrega un evento para cuando apenas se carga la pagina

    /*MODULO PARA CERTIFICADOS*/
    var modal = document.getElementById('modulo'); //Se obtiene el div del modulo
    var openBtns = document.querySelectorAll('.abrir-modulo'); //Se obtiene un array con los distintos cursos
    var span = document.getElementById('cerrar'); //Se obtiene la cruz para cerrar el modulo
    var iframe = document.getElementById('modulo-contenido'); //Se obtiene el iframe

    // Abrir el modulo
    openBtns.forEach(function(btn) { //Iteramos cada enlace de curso
        btn.onclick = function(event) { //Se verifica cuando se presiona alguno
            event.preventDefault(); //Prevenimos que se redirija la pagina
            var href = btn.getAttribute('href'); //Obtenemos la url del enlace
            iframe.src = href; // Establece el src del iframe al href del enlace 
            modal.style.display = 'block'; //Hacemos visible el modulo
        } 
    });

    // Cerrar el modulo
    span.onclick = function() { //Al hacer click en la cruz para cerrar
        modal.style.display = 'none'; //Se vuelve ha eliminar el modulo
    } 

    // Cerrar el modulo al hacer clic fuera de él 
    window.onclick = function(event) { //Al hacer click en cualquier lugar de la ventana
        if (event.target == modal) { //Si donde se presiono no es el modulo
            modal.style.display = 'none'; //Se vuelve a eliminar el modulo
        } 
    } 

    /*NAVEGACION DESPLEGABLE*/
    const menuToggle = document.getElementById('desplegable'); //Guardamos el boton del desplegable
    const navMenu = document.getElementById('navbar'); //Guardamos la navegacion
    menuToggle.addEventListener('click', () => { //Si presionamos el boton
        navMenu.classList.toggle('visible'); //Alternamos la clase visible en la navegacion
    }); 

});
