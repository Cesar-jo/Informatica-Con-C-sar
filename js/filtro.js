$(function() {
    //le vamos a decir que los elementos de la clase filter cuando le demos click se ejecute una funcion
    //la clase filter se alojan los botones de diseño,programacion, marketin de nuestra galeria de proyectos
    $('.filter').click(function() {
        //nos dice que al elemento que selecciones, va agregar una clase en este case es la clase active que esta
        //en el boton todos que su classe es active, cuando le de click va a lanzar todas las imagenes de nuestra galeria de trabajos
        //con sublings ssignifica hermanos, entonses cuando le demos click al boton todos que es el de active por su clase
        //va a remover a sus otros hermanos en este caso los otros botones, como diseño, programacion,marketin,etc
        //cuando se remueva nos va aparecer las imagenes de acuerdo al boton que elegimos.
        $(this).addClass('active').siblings().removeClass('active');
        //creamos una variable llamada ""valor" que  va hacer igual al elemento que seleccionamos.
        //y va a tomar el atibuto=(attr) ('data-nombre')
        let valor = $(this).attr('data-nombre');
        //creamos un if y le decimos que si if es == a todos, pues al precionar el boton todos,
        // nos lanza todas las imagenes
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    //------------variables---------------------//
    //creamos estas variables que son nuestros enlases de equipo,servicio,trabajo,contacto 
    // que esta en nuestro menu de nav, para despues utilizarlos y nos direccionen a cada apartado
    let sobreme = $('#yo').offset().top,
        servicio = $('#servicio').offset().top,
        trabajo = $('#trabajo').offset().top,
        contacto = $('#contacto').offset().top;

    //ponemos las mismas variables pero en este caso le decimos que sigan funcionando cuando sea rponsive la pagina
    //osea que si esta en modo movil o tableta de ese tamaño funcionen por igual
    window.addEventListener('resize', function() {
        let sobreme = $('#yo').offset().top,
            servicio = $('#servicio').offset().top,
            trabajo = $('#trabajo').offset().top,
            contacto = $('#contacto').offset().top;
    });

    //-----------------------------------------boton inicio------------------------------------------------------//

    //aqui le decimos que cuando le de click en el boton inicio, que su clase es (enlace-inicio) 
    //nos mande hasta el princio osea el inicio
    $('#enlace-inicio').on('click', function(e) {
        //el e.preventDefault(); nos quita el # que pusimos en los enlaces del nav
        e.preventDefault();
        //y que nos anime el html y el body
        $('html, body').animate({
            // con el scrollTop le decimos que nos direccione a la parte mas alta de la pagina osea el inicio
            scrollTop: 0
        }, 600);
    });

    //-----------------------------------------boton equipo------------------------------------------------------//


    //aqui le decimos que cuando le de click en el boton equipo, que su clase es (enlace-equipo) 
    //nos mande hasta el apartado de equipo
    $('#enlace-sobreme').on('click', function(e) {
        //el e.preventDefault(); nos quita el # que pusimos en los enlaces del nav
        e.preventDefault();
        $('html, body').animate({
            // con el scrollTop le decimos que nos direccione al apartado del equipo
            //le pusimos un -100 por que tapava el h3 que le pusimos como titulo "nuestro equipo" para que no lo tapara
            scrollTop: sobreme - 100
        }, 600);
    });

    //-----------------------------------------boton servicios------------------------------------------------------//


    //aqui le decimos que cuando le de click en el boton equipo, que su clase es (enlace-equipo) 
    //nos mande hasta el apartado de equipo
    $('#enlace-servicio').on('click', function(e) {
        //el e.preventDefault(); nos quita el # que pusimos en los enlaces del nav
        e.preventDefault();
        $('html, body').animate({
            // con el scrollTop le decimos que nos direccione al apartado de servicios
            //le pusimos un -100 por que tapava el h3 que le pusimos como titulo "nuestros servicios" 
            scrollTop: servicio - 100
        }, 600);
    });

    //-----------------------------------------boton trabajo------------------------------------------------------/ /

    //aqui le decimos que cuando le de click en el boton trabajo, que su clase es (enlace-trabajo) 
    //nos mande hasta el apartado de nuestros trabajos
    $('#enlace-trabajo').on('click', function(e) {
        //el e.preventDefault(); nos quita el # que pusimos en los enlaces del nav
        e.preventDefault();
        $('html, body').animate({
            // con el scrollTop le decimos que nos direccione a la parte  trabajos
            //le pusimos un -100 por que tapar nuestro contacto
            scrollTop: trabajo - 100
        }, 600);
    });

    //-----------------------------------------boton contactos------------------------------------------------------//



    //aqui le decimos que cuando le de click en el boton equipo, que su clase es (enlace-contacto) 
    //nos mande hasta el apartado de contacto
    $('#enlace-contacto').on('click', function(e) {
        //el e.preventDefault(); nos quita el # que pusimos en los enlaces del nav
        e.preventDefault();
        $('html, body').animate({
            // con el scrollTop le decimos que nos direccione a la parte  de contactos
            //le pusimos un -100 por que tapar nuestro contacto
            scrollTop: contacto - 100
        }, 600);
    });
});