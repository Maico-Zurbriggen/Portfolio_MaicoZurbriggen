/*Evento que agrega el estilo a la navegacion cuando detecta que desaparecio de la pantalla para fijarla*/
window.addEventListener('scroll', function() { 
    var navbar = document.getElementById('navbar'); 
    var sticky = navbar.offsetTop; 
    if (window.scrollY > sticky) { 
        navbar.classList.add('fija'); 
    } else { 
        navbar.classList.remove('fija'); 
    } 
});

/*Evento para abrir y cerrar los modulos de los certificados*/
document.addEventListener('DOMContentLoaded', (event) => { 
    var modal = document.getElementById('modulo'); 
    var openBtns = document.querySelectorAll('.abrir-modulo'); 
    var span = document.getElementsByClassName('cerrar')[0]; 
    var iframe = document.getElementById('modulo-contenido');

    // Abrir el modulo
    openBtns.forEach(function(btn) { 
        btn.onclick = function(event) { 
            event.preventDefault(); 
            var href = btn.getAttribute('href'); 
            iframe.src = href; // Establece el src del iframe al href del enlace 
            modal.style.display = 'block';
        } 
    });

    // Cerrar el modulo
    span.onclick = function() { 
        modal.style.display = 'none'; 
    } 

    // Cerrar el modulo al hacer clic fuera de él 
    window.onclick = function(event) { 
        if (event.target == modal) { 
            modal.style.display = 'none'; 
        } 
    } 
});