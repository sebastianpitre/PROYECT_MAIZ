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
            
            var tamaño1 = data.v_analisis ;
            var tamaño2 = data.v_preparacion ;
            var tamaño3 = data.v_siembra ;
            var tamaño4 = data.v_fertilizacion;
            var tamaño5 = data.v_cosecha;
            var tamaño6 = data.v_pos_cosecha;
            var tamaño7 = data.v_comercializar;
            // Obtener una referencia al elemento canvas del DOM
            grafico(tamaño1,tamaño2,tamaño3,tamaño4,tamaño5,tamaño6,tamaño7);
            grafico_grande(tamaño1,tamaño2,tamaño3,tamaño4,tamaño5,tamaño6,tamaño7);
        


            var analisis = data.v_analisis+"%";
            var preparacion = data.v_preparacion+"%";
            var siembra = data.v_siembra+"%";
            var fertilizacion = data.v_fertilizacion+"%";
            var cosecha = data.v_cosecha+"%";
            var pos_cosecha = data.v_pos_cosecha+"%";
            var comercializar = data.v_comercializar+"%";
            var inversion = data.valor_total_proceso;
            var ganancia = data.ganancias;

            grafico2_boton(inversion,ganancia);
            grafica2_grande(inversion,ganancia);


            $('#valor_analisis').html(data.valor_analisis);
            $('#valor_preparacion').html(data.valor_preparacion);
            $('#valor_siembra').html(data.valor_siembra);
            $('#valor_fertilizacion').html(data.valor_fertilizacion);
            $('#valor_cosecha').html(data.valor_cosecha);
            $('#valor_pos_cosecha').html(data.valor_pos_cosecha);
            $('#valor_comercializar').html(data.valor_comercializar);
            $('#valor_total_proceso').html(data.valor_total_proceso);
            
            $('#v_analisis').html(analisis);
            $('#v_preparacion').html(preparacion);
            $('#v_siembra').html(siembra);
            $('#v_fertilizacion').html(fertilizacion);
            $('#v_cosecha').html(cosecha);
            $('#v_pos_cosecha').html(pos_cosecha);
            $('#v_comercializar').html(comercializar);
            
            $('#bar_analisis').height(tamaño1);
            $('#bar_preparacion').height(tamaño2);
            $('#bar_siembra').height(tamaño3);
            $('#bar_fertilizacion').height(tamaño4);
            $('#bar_cosecha').height(tamaño5);
            $('#bar_pos_cosecha').height(tamaño6);
            $('#bar_comercializar').height(tamaño7);
        console.log(ganancias);

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


    //edité la actualización de la tabla
});


// grafica de barras BOTON
function grafico(tamaño1,tamaño2,tamaño3,tamaño4,tamaño5,tamaño6,tamaño7){

    const $grafica_boton = document.querySelector("#grafica_boton");
    // Las etiquetas son las porciones de la gráfica
    const etiquetas = ["Aná..", "Prep..", "siem..", "Fert..","Cos..","Pos..","Com.."]
    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const datosIngresos = {
        data: [tamaño1,tamaño2,tamaño3,tamaño4,tamaño5,tamaño6,tamaño7], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
        label:"Costos de Pro..",
        backgroundColor: [
            'rgb(0 183 105)',//Verde marino
            'rgb(131, 166, 3)',//Verde lima
            'rgb(255 150 0)',//Mostaza
            'rgb(70, 89, 2)',//Verde caquita
            'rgb(191, 73, 4)',//Naranja oscuro
            'rgb(140, 28, 3)',//Vino tinto oscuro
            'rgb(216 245 0)',//Verde clarito
        ],// Color de fondo
        borderColor: [
            'rgb(0 183 105)',//Verde marino
            'rgb(131, 166, 3)',//Verde lima
            'rgb(255 150 0)',//Mostaza
            'rgb(70, 89, 2)',//Verde caquita
            'rgb(191, 73, 4)',//Naranja oscuro
            'rgb(140, 28, 3)',//Vino tinto oscuro
            'rgb(216 245 0)',//Verde clarito
        ],// Color del borde
        hoverBackgroundColor: [
            'rgb(0 183 105 / 55%)',//Verde marino
            'rgb(131 166 3 / 55%)',//Verde lima
            'rgb(255 150 0 / 55%)',//Mostaza
            'rgb(70 89 2  / 55%)',//Verde caquita
            'rgb(191 73 4 / 55%)',//Naranja oscuro
            'rgb(140 28 3 / 55%)',//Vino tinto oscuro
            'rgb(216 245 0 / 55%)',//Verde clarito
        ],
        hoverBorderColor: [
            'rgb(183 105)',//Verde marino
            'rgb(131 166 3)',//Verde lima
            'rgb(255 150 0)',//Mostaza
            'rgb(70 89 2)',//Verde caquita
            'rgb(191 73 4 )',//Naranja oscuro
            'rgb(140 28 3)',//Vino tinto oscuro
            'rgb(216 245 0)',//Verde clarito
        ],
        borderWidth: 2,// Ancho del borde
        
    };
    const options = {
        responsive: true,
        AspectRatio: false,
        title: {
          display: true,
          text: 'Ventas por mes'
        }
    };
    new Chart($grafica_boton, {
        type: 'bar',// Tipo de gráfica. Puede ser dougnhut o pie
        data: {
            labels: etiquetas,
            datasets: [
                datosIngresos,
                // Aquí más datos...
            ]
        },
        //options:options,

    });
    
}
// grafica de barras BOTON


// grafica de barras GRANDE
function grafico_grande(tamaño1,tamaño2,tamaño3,tamaño4,tamaño5,tamaño6,tamaño7){

    const $grafica_grande = document.querySelector("#grafica_grande");
    // Las etiquetas son las porciones de la gráfica
    const etiquetas = ["Análisis del terreno", "Preparación del terreno", "Proceso de siembra", "Fertilización","Cosecha","Pos-Cosecha","Comercializacion"]
    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const datosIngresos = {
        data: [tamaño1,tamaño2,tamaño3,tamaño4,tamaño5,tamaño6,tamaño7], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
        label:"Representación de Costos de Producción",
        backgroundColor: [
            'rgb(0 183 105)',//Verde marino
            'rgb(131, 166, 3)',//Verde lima
            'rgb(255 150 0)',//Mostaza
            'rgb(70, 89, 2)',//Verde caquita
            'rgb(191, 73, 4)',//Naranja oscuro
            'rgb(140, 28, 3)',//Vino tinto oscuro
            'rgb(216 245 0)',//Verde clarito
        ],// Color de fondo
        borderColor: [
            'rgb(0 183 105)',//Verde marino
            'rgb(131, 166, 3)',//Verde lima
            'rgb(255 150 0)',//Mostaza
            'rgb(70, 89, 2)',//Verde caquita
            'rgb(191, 73, 4)',//Naranja oscuro
            'rgb(140, 28, 3)',//Vino tinto oscuro
            'rgb(216 245 0)',//Verde clarito
        ],// Color del borde
        hoverBackgroundColor: [
            'rgb(0 183 105 / 55%)',//Verde marino
            'rgb(131 166 3 / 55%)',//Verde lima
            'rgb(255 150 0 / 55%)',//Mostaza
            'rgb(70 89 2  / 55%)',//Verde caquita
            'rgb(191 73 4 / 55%)',//Naranja oscuro
            'rgb(140 28 3 / 55%)',//Vino tinto oscuro
            'rgb(216 245 0 / 55%)',//Verde clarito
        ],
        hoverBorderColor: [
            'rgb(183 105)',//Verde marino
            'rgb(131 166 3)',//Verde lima
            'rgb(255 150 0)',//Mostaza
            'rgb(70 89 2)',//Verde caquita
            'rgb(191 73 4 )',//Naranja oscuro
            'rgb(140 28 3)',//Vino tinto oscuro
            'rgb(216 245 0)',//Verde clarito
        ],
        borderWidth: 2,// Ancho del borde
        
    };
    const options = {
        responsive: true,
        AspectRatio: false,
        title: {
          display: true,
          text: 'Ventas por mes'
        }
    };
    new Chart($grafica_grande, {
        type: 'bar',// Tipo de gráfica. Puede ser dougnhut o pie
        data: {
            labels: etiquetas,
            datasets: [
                datosIngresos,
                // Aquí más datos...
            ]
        },
        options:options,

    });
    
}

// gráfico de barras GRANDE
function grafico2_boton(inversion,ganancia){

    const $grafica2_boton = document.querySelector("#grafica2_boton");
    // Las etiquetas son las porciones de la gráfica
    const etiquetas = ["Valor invertido", "Ganancia esperada"]
    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const datosIngresos = {
        data: [inversion,ganancia], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
        label:"Representación de Costos de Producción",
        backgroundColor: [
            'rgb(255 150 0)',//Verde marino
            'rgb(0 183 105)',//Verde lima
            
        ],// Color de fondo
        borderColor: [
            'rgb(255 150 0)',//Verde marino
            'rgb(0 183 105)',//Verde lima
           
        ],// Color del borde
        hoverBackgroundColor: [
            'rgb(255 150 0 / 55%)',//Verde marino
            'rgb(0 183 105 / 55%)',//Verde lima
            
        ],
        hoverBorderColor: [
            'rgb(183 105 0)',//Verde marino
            'rgb(0 183 105)',//Verde lima
            
        ],
        borderWidth: 2,// Ancho del borde
        
    };
    const options = {
        responsive: true,
        AspectRatio: false,
        title: {
          display: true,
          text: 'Ventas por mes'
        }
    };
    new Chart($grafica2_boton, {
        type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
        data: {
            labels: etiquetas,
            datasets: [
                datosIngresos,
                // Aquí más datos...
            ]
        },
        options: options,

    });
    
}

// grafico pastel BOTON
function grafica2_grande(inversion,ganancia){

    const $grafica2_grande = document.querySelector("#grafica2_grande");
    // Las etiquetas son las porciones de la gráfica
    const etiquetas = ["Valor invertido", "Ganancia esperada"]
    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const datosIngresos = {
        data: [inversion,ganancia], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
        label:"Representación de Costos de Producción",
        backgroundColor: [
            'rgb(255 150 0)',//Verde marino
            'rgb(0 183 105)',//Verde lima
            
        ],// Color de fondo
        borderColor: [
            'rgb(255 150 0)',//Verde marino
            'rgb(0 183 105)',//Verde lima
           
        ],// Color del borde
        hoverBackgroundColor: [
            'rgb(255 150 0 / 55%)',//Verde marino
            'rgb(0 183 105 / 55%)',//Verde lima
            
        ],
        hoverBorderColor: [
            'rgb(183 105 0)',//Verde marino
            'rgb(0 183 105)',//Verde lima
            
        ],
        borderWidth: 2,// Ancho del borde
        
    };
    const options = {
        responsive: true,
        AspectRatio: false,
        title: {
          display: true,
          text: 'Ventas por mes'
        }
    };
    new Chart($grafica2_grande, {
        type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
        data: {
            labels: etiquetas,
            datasets: [
                datosIngresos,
                // Aquí más datos...
            ]
        },
        options:options,

    });
    
}
// GRafico pastel BOTON






 // Obtener el botón y el modal
function openModal() {
    var modal = document.getElementById("modal");
    
    modal.style.display = "block"; // muestra el modal
}

function closeModal() {
  var modal = document.getElementById("modal");
  
  modal.style.display = "none"; // oculta el modal
}


function ocultarmostarelementos(validacion) {

    var elemento1=document.getElementById("elemento1");
    var elemento2=document.getElementById("elemento2");
    var elemento3=document.getElementById("elemento3");
    if(validacion=="verelemento1"){
        elemento1.style.display="block";
        
        elemento2.style.display="none";
        
        elemento3.style.display="none";
 
    }
    else if(validacion=="verelemento2")
    {
        elemento1.style.display="none";
        
        elemento2.style.display="block";
        
        elemento3.style.display="none";
    }else if(validacion==="verelemento3")
    {
        elemento1.style.display="none";
        
        elemento2.style.display="none";
        
        elemento3.style.display="block";
    }
  
}
