$(document).ready(function() {

    // Función para actualizar la tabla con los datos del servidor
    function actualizarTabla() {
      
        $.ajax({
            url: '../assets/php/obtener_tabla_analisis.php', // Archivo PHP que obtiene los datos del servidor
            
            success: function(data) {
                $('#tabla_paso1').html(data); // Actualizar el contenido de la tabla con los datos recibidos
            }
        });

        $.ajax({
            url: '../assets/php/obtener_tabla_preparacion.php', // Archivo PHP que obtiene los datos del servidor
            
            success: function(data) {
                $('#tabla_paso2').html(data); // Actualizar el contenido de la tabla con los datos recibidos
            }
        });

        $.ajax({
            url: '../assets/php/obtener_tabla_fertilizacion.php', // Archivo PHP que obtiene los datos del servidor
            
            success: function(data) {
                $('#tabla_paso4').html(data); // Actualizar el contenido de la tabla con los datos recibidos
            }
        });
    }



    function actualizardatos() {
        $.ajax({
            url: '../assets/php/obtener_datos.php',
            dataType: 'json',
            success: function(data) {
              $('#name_user').html(data.valor1);
              $('#area').html(data.valor2);
              $('#dist_semilla').html(data.valor4);
              $('#dist_surcos').html(data.valor3);
              $('#cant_plantas').html(data.valor5);
              $('#cant_obtenida').html(data.valor6);
              $('#cant_sembrar').html(data.valor7);
              $('#precio_sembrar').html(data.valor8);
              $('#respuesta_valor_maiz').html(data.valor9);
              $('#nombre_producto').html(data.valor10);



            }
        });
    }

    // Llamar a la función inicialmente para cargar la tabla con los datos actuales
    actualizarTabla();
    actualizardatos();

    // Escuchar eventos de cambio en el formulario
    setInterval(actualizarTabla, 1000); 
    setInterval(actualizardatos, 1000);

    //edité la actualización de la tabla
});