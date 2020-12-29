//variables

//Creamos una variable por nombre nav el cual su identificador 
//lo creamos en el htm en el apartado de nav le pusimos un id=nav
let nav = document.getElementById('nav');
//es lo mismo que en nav solo que el id que agregamos en htm al menu era enlaces
let menu = document.getElementById('enlaces');
//vamos a creamor una variable del boton menu que su identificado id le pusimos es = open
let abrir = document.getElementById('open');
//vamos a crear una variable para los botones de los enlaces que creamos cen el nav, donde esta, equipo,
//servicios,contacto,etc, que a su classe que le pusimos era class= "btn-header".
let botones = document.getElementsByClassName('btn-header');
//creamos otra variable para cerrar el menu del icono que creamos
let cerrado = true;


//---------------------------------------------------------------------------------------------------------------------------//


//creamos una funcion que se va ha llamar menus
function menus() {
    //le creamos una variable(lef desplazam...) vamos a tomar los datos de la medicion de la pag que nos
    //imprimira = console(window.pageYOffset)
    let desplazamiento_actual = window.pageYOffset

    //entonses le desimos que si la pagina cuando pase de 300 de medicion va a remover la clase nav2 que el nav2
    //que pusimosen su estilo en css es transparente y pondra los datos que pusimos en la clase  nav 1
    if (desplazamiento_actual <= 300) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        //esto hara que los enlaces esten abajo del nav para que no se rompa la maqutacion y no abarque parte del nav
        menu.style.top = '80px';
        abrir.style.color = '#fff';
        //ahora vamos a darle color al boton de la variable abrir =open  que es el boton de menu .
        //le decimos que cuando este hata el princio de la pagina el boton sea blanco, osea cuando sea menor a 300 de la medida de la pagina
        abrir.style.color = '#fff';

    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2')
            //Le desimos que tarde un segundo en quitar la clase nav y poner el otro nav que le indicamos
        nav.style.transition = '1s ';
        //esto hara que los enlaces esten abajo del nav para que no se rompa la maqutacion y no abarque parte del nav
        menu.style.top = '100px';
        abrir.style.color = '#000';
        //ahora vamos a darle color al boton de la variable abrir =open  que es el boton de menu .
        //le decimos que cuando este en una medida de 300 de la pagina el boton sea negro, 
        //osea que cuando sea mayor a 300 de la medida de la pagina se cambie a ese color el boton
        abrir.style.color = '#000';
    }
}

//creamos una funcion que lo que hara sera que cuando precionemos el boton menu nos habra los enlaces que creamos 
//(servicio, equipo, contacto) al igual si le volvemos a dar click los cerrara

function apertura() {
    if (cerrado) {
        //le decimos que cuando le demos click al boton, los enlaces que estan en menu se 
        //desplazaran a la izquierda = '70vw';, osea que tomaran una anchura de '70vw'
        menu.style.width = '70vw';
        cerrado = false;
    } else {
        //cuando queremos cerrar, tomara una anchura de 0% osea que desaparecera los enlaces cuando le demos click al icono del menu
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}


//------------este evento nos va a servir para el payloder de carga de la pagina---------------------------//
//lo que va hacer es que al momento de cargar la pagina aparese el pyload, lo va a remover y aparecera
//todo el hidden para que aparesca de nuevo la pagina
window.addEventListener('load', function() {
    //llamamos a nuestra clase o identificador load que es el payloader que creamos, este se encuentra en body para despues removerlo
    //al cterminar de cargar la pagina y aparesca la pagina y no se quede en el payload de carga
    $('#onload').fadeOut();
    //va a remover  body ahi se encuentra el payloder y aparecera el hyden que es donde esta toda la pagina web
    $('body').removeClass('hidden');
    menus();
});
//---------------------------------------------------------------------------------------------------//
//aqui le decimos que cuando alguien le de click a dentro de la pagina ejecute una funcion y 
//entre parentecis ira (e) que es el parametro del evento que queremos que nos devuelva 
window.addEventListener('click', function(e) {
    console.log(e.target);
    if (cerrado == false) {
        let span = document.querySelector('span');
        if (e.target !== span && e.target !== abrir) {
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});


//le decimos con un evento que cada que haga scroll osea que baje la pantalla (pag) ejecute una funcion 
window.addEventListener('scroll', function() {
    //esa funcion es la siguiente, le decimos que nos imprima datos cada que bajemos a pag
    //esos datos son la medicion de la pagina
    console.log(window.pageYOffset);
    //ponemos la funcion que creamos para que funcione el scroll
    menus();

});


//esta es una funcion para cuando la pantalla llegue a un dispositivo de 700 px va a revomer el overflow y el ancho
window.addEventListener('resize', function() {
    if (screen.width >= 700) {
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }

});
//aqui ponemos la variable abrir que es la de la clase open de nuestro icono de menu,cuando le de click  se ejecutara 
//la funcion('click', function() que nuestra funcion es (apertura) que lo que hace es que cuando le demos click al icono del menu
//abrira los enlaces al igual que los cerrara
abrir.addEventListener('click', function() {
    apertura();
});