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
            url: '../assets/php/obtener_tabla_siembra.php', // Archivo PHP que obtiene los datos del servidor
            
            success: function(data) {
                $('#tabla_paso3').html(data); // Actualizar el contenido de la tabla con los datos recibidos
            }
        });
        $.ajax({
            url: '../assets/php/obtener_tabla_fertilizacion.php', // Archivo PHP que obtiene los datos del servidor
            
            success: function(data) {
                $('#tabla_paso4').html(data); // Actualizar el contenido de la tabla con los datos recibidos
            }
        });

        $.ajax({
            url: '../assets/php/obtener_tabla_cosecha.php', // Archivo PHP que obtiene los datos del servidor
            
            success: function(data) {
                $('#tabla_paso5').html(data); // Actualizar el contenido de la tabla con los datos recibidos
            }
        });

        $.ajax({
            url: '../assets/php/obtener_tabla_pos_cosecha.php', // Archivo PHP que obtiene los datos del servidor
            
            success: function(data) {
                $('#tabla_paso6').html(data); // Actualizar el contenido de la tabla con los datos recibidos
            }
        });

        $.ajax({
            url: '../assets/php/obtener_tabla_comercializar.php', // Archivo PHP que obtiene los datos del servidor
            
            success: function(data) {
                $('#tabla_paso7').html(data); // Actualizar el contenido de la tabla con los datos recibidos
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


    // resultados de cada proceso
    function resultados_procesos() {
      
        $.ajax({
            url: '../assets/php/obtener_resultado.php',
            dataType: 'json',
            success: function(data) {
                var alto=300;
                var tamaño1=alto*data.v_analisis/100+"px" ;
                var tamaño2=alto*data.v_preparacion/100+"px" ;
                var tamaño3=alto*data.v_siembra/100+"px" ;
                
               
              $('#valor_analisis').html(data.valor_analisis);
              $('#valor_preparacion').html(data.valor_preparacion);
              $('#valor_siembra').html(data.valor_siembra);
              $('#valor_fertilizacion').html(data.valor_fertilizacion);
              $('#valor_cosecha').html(data.valor_cosecha);
              $('#valor_pos_cosecha').html(data.valor_pos_cosecha);
              $('#valor_comercializar').html(data.valor_comercializar);
              $('#valor_total_proceso').html(data.valor_total_proceso);
             
              $('#v_analisis').html(data.v_analisis);
              $('#v_preparacion').html(data.v_preparacion);
              $('#v_siembra').html(data.v_siembra);
              $('#v_fertilizacion').html(data.v_fertilizacion);
              $('#v_cosecha').html(data.v_cosecha);
              $('#v_pos_cosecha').html(data.v_pos_cosecha);
              $('#v_comercializar').html(data.v_comercializar);
             
              $('#bar1').height(tamaño1);
              $('#bar2').height(tamaño2);
              $('#bar3').height(tamaño3);
            console.log(tamaño3);
             
             

            }
        });
    }
    


    // Llamar a la función inicialmente para cargar la tabla con los datos actuales
    actualizarTabla();
    actualizardatos();
    resultados_procesos();

    // Escuchar eventos de cambio en el formulario
    setInterval(actualizarTabla, 1000); 
    setInterval(actualizardatos, 1000);
    setInterval(resultados_procesos, 1000);


    //edité la actualización de la tabla
});

function grafico(){
    const myDiv = document.getElementById("myDiv");
    myDiv.style.backgroundColor = "blue";
    myDiv.style.width = "200px";
    myDiv.style.height = "150px";

}
