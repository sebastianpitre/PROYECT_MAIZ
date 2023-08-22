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
            $('#fecha_inicial').html(data.valor2);
            let fechaSumada = data.valor2 ;

            let fechaSumada1= new Date(fechaSumada);
         
            
           
            
           
          
          fechaSumada1.setDate(fechaSumada1.getDate()+1);
          let mesSumado = fechaSumada1.getMonth() ;
         
          let dia0 = Math.floor(fechaSumada1.getDate()/7);
          
          var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
          var numero2=0;
          var numero=0;
        
            for (let i = 0; i < 6; i++) {
            
                if(numero>10){
                 
                    let meses1=meses[numero2];
                    console.log(meses1);
                    $('#mes'+i).html(meses1);
                    var  numero2=numero2+1;
                
                }else{
                    numero=parseInt(mesSumado)+i;                     
                    let meses1=meses[numero];
                    console.log(meses1);
                    $('#mes'+i).html(meses1);
                }
            }
                var fechaActual = new Date(fechaSumada);
               
                // Sumar 7 días
                var dias = 28;
                var dias2 = 8;
                var dias3 = 8;
                var dias4 = 8;
                var dias5 = 8;
                var dias6 = 8;
                var dias7 = 8;
                var dias8 = 8;
                var dias9 = 8;
                var dias10 = 8;
                var dias11 = 8;
                var dias12 = 8;
                var dias13 = 8;
                var dias14 = 8;
                var dias15 = 8;
                var dias16 = 8;
                var dias17 = 8;

                fechaActual.setDate(fechaActual.getDate() + dias);
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();
                var diferencia = fechaActual-fechaSumada1;
                 
                var semanas_1=Math.floor(diferencia/(1000*60*60*24*7));
              
                semanas_1=semanas_1+dia0;
                
                $('#mes_1').html(year+"-"+mes+"-"+dia);
                console.log(year+"-"+mes+"-"+dia)
                console.log(fechaActual);
                fechaActual.setDate(fechaActual.getDate() + dias2);
                
                
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();
                $('#mes_2').html(year+"-"+mes+"-"+dia);
                var fechaAnteiror1 = new Date(year+"-"+mes+"-"+dia);
                console.log(year+"-"+mes+"-"+dia)
                fechaActual.setDate(fechaActual.getDate() + dias3);
                console.log(fechaActual);
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();
                $('#mes_3').html(year+"-"+mes+"-"+dia);
                var fechaActual1= new Date(year+"-"+mes+"-"+dia);
                
                //---------------------------------
                var diferencia1 = fechaActual1-fechaAnteiror1;
                let dia1 = Math.floor(fechaAnteiror1.getDate()/7);
                var semanas_2=Math.floor(diferencia1/(1000*60*60*24*7));
              
                semanas_2=semanas_2+dia1;
              
                //--------------------------
                fechaActual.setDate(fechaActual.getDate() + dias4);
                console.log(fechaActual);
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();


                $('#mes_4').html(year+"-"+mes+"-"+dia);
                fechaActual.setDate(fechaActual.getDate() + dias5);
                console.log(fechaActual);
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();
                $('#mes_5').html(year+"-"+mes+"-"+dia);

                fechaActual.setDate(fechaActual.getDate() + dias6);
                console.log(fechaActual);
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();
                $('#mes_6').html(year+"-"+mes+"-"+dia);
                fechaActual.setDate(fechaActual.getDate() + dias7);
                console.log(fechaActual);
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();
                $('#mes_7').html(year+"-"+mes+"-"+dia);

                fechaActual.setDate(fechaActual.getDate() + dias8);
                console.log(fechaActual);
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();
                $('#mes_8').html(year+"-"+mes+"-"+dia);
                fechaActual.setDate(fechaActual.getDate() + dias9);
                console.log(fechaActual);
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();
                $('#mes_9').html(year+"-"+mes+"-"+dia);

                fechaActual.setDate(fechaActual.getDate() + dias10);
                console.log(fechaActual);
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();
                $('#mes_10').html(year+"-"+mes+"-"+dia);
                fechaActual.setDate(fechaActual.getDate() + dias11);
                console.log(fechaActual);
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();
                $('#mes_11').html(year+"-"+mes+"-"+dia);

                fechaActual.setDate(fechaActual.getDate() + dias12);
                console.log(fechaActual);
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();
                $('#mes_12').html(year+"-"+mes+"-"+dia);
                fechaActual.setDate(fechaActual.getDate() + dias13);
                console.log(fechaActual);
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();
                $('#mes_13').html(year+"-"+mes+"-"+dia);

                fechaActual.setDate(fechaActual.getDate() + dias14);
                console.log(fechaActual);
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();
                $('#mes_14').html(year+"-"+mes+"-"+dia);
                fechaActual.setDate(fechaActual.getDate() + dias15);
                console.log(fechaActual);
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();
                $('#mes_15').html(year+"-"+mes+"-"+dia);

                fechaActual.setDate(fechaActual.getDate() + dias16);
                console.log(fechaActual);
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();
                $('#mes_16').html(year+"-"+mes+"-"+dia);
                fechaActual.setDate(fechaActual.getDate() + dias17);
                console.log(fechaActual);
                var dia =(fechaActual.getDate()).toString().padStart(2,"0");
                var mes=(fechaActual.getMonth()+1).toString().padStart(2,"0");
                var year=fechaActual.getFullYear();
                $('#mes_17').html(year+"-"+mes+"-"+dia);
         

                colorRow(semanas_1,semanas_2,dia0,dia1);

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
    //setInterval(actualizardatos, 1000);


    //edité la actualización de la tabla
});

function getWeekNumber(date) {
    var onejan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
    }
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
        colorRow();
    }
  
}

function obtener_semana(){
    //fila 2
    let sema_2 = document.getElementById("mes_2");
    //fila 2
    var sema1=sema_2.innerText;
    var sema1 = new Date(sema1);

}

function colorRow(semanas_1,semanas_2,dia0,dia1) {
    obtener_semana();
    // 
    let sema1 = document.getElementById("fecha_inicial");
    var seman_1=sema1.innerText;
    var sema = new Date(seman_1);
    sema.setDate(sema.getDate()+1);
    var  numero_semana= getWeekNumber(sema);
      var table = document.getElementById("table1");
      var rows = table.getElementsByTagName("tr");
      selectedRow = rows[2];
      var cells = selectedRow.getElementsByTagName("td");
      //colocamos los numeros de la semanaen la fila 0 iniciando desde la columna 0
     for(var i=0;i<24;i++){
        if (i<9){
            cells[i].innerHTML="0"+ (numero_semana+i);      
        }else{
            cells[i].innerHTML= numero_semana+i;
        }
   
     }
        //dede aqui simplemente seleccionamos que fila se va a pintar y cuantas celldas se van a seleccionar
        // number se encarga  de seleccionar las filas
        var s1=0; //inicia desde que semana inicia
        var s2=6; // finaliza  columnas de las tabla
        //selecciona las fila que se va a pintar
        var number = 1;
        //cellscolor  selecciona  cuantas celldas se pintaran
      var cellsToColor = s2;
    
      for (var j =3; j < 12; j++) {
          
          //reseteamos el color hasta el valor de todas las celldas
          /*for (var i = s1; i < s2; i++) {
            var number = j;
          selectedRow = rows[number ];
          var cells = selectedRow.getElementsByTagName("td");
            if (i==1) {
              cells[i].style.backgroundColor = "white"; // Cambia el color de las celdas a amarillo
            
            }
            cells[i].style.backgroundColor = "white"; // Cambia el color de las celdas a amarillo
           
          }*/
          // cargamos el color de  las seldas seleccionadas
          for (var i1 = 0; i1 < 27; i1++) {
            var number = j;
          selectedRow = rows[j];
          var cells = selectedRow.getElementsByTagName("td");
          
            if (i1>=(dia0-1) && i1<=semanas_1 && j==3) {
              cells[i1].style.backgroundColor = "rgb(0 183 105)"; // Cambia el color de las celdas a amarillo        console.log(i); 
              var contenedor=document.createElement("div");
              var contenedor2=document.createElement("div");
              var br=document.createElement("br");
              var br1=document.createElement("br");
              var p=document.createElement("p");
              contenedor.setAttribute("class","tooltip-container");
           //   contenedor.innerText="X";
              contenedor2.setAttribute("class","tooltip-content");
              contenedor2.innerText="Eliminar malezas,\nArado, Nivelación, Fertilización y enmendamiento del suelo, Siembra";


              cells[i1].appendChild(contenedor);
              contenedor.appendChild(contenedor2);
            //  contenedor2.appendChild(br1);
              //contenedor2.appendChild(p);
              //contenedor2.appendChild(br);


              //cells[i1].classList.add('tooltip-container');

//              cells[i1].title="1. Desmalezado 2. Arado  3. Nivelación   Fertilización y enmendamiento del suelo   5. Siembra";
              console.log("aqui"+i1);
            }
            else if (i1>semanas_1 && i1<=(semanas_1+semanas_2+dia1) && j==4) {
              cells[i1].style.backgroundColor = "rgb(131, 166, 3)"; // Cambia el color de las celdas a amarillo        console.log(i); 
              
              cells[i1].title="holaaaaaaaaaaaaaaaa";
              console.log("else"+i1);
            }
            else if (i1>=3 && i1<=6 && j==5) {
              cells[i1].style.backgroundColor = "rgb(255 150 0)"; // Cambia el color de las celdas a amarillo        console.log(i); 
              
              cells[i1].title="holaaaaaaaaaaaaaaaa";
              console.log("else"+i1);
            }
            else if (i1>=7 && i1<=15 && j==6) {
              cells[i1].style.backgroundColor = "rgb(70, 89, 2)"; // Cambia el color de las celdas a amarillo        console.log(i); 
              
              cells[i1].title="holaaaaaaaaaaaaaaaa";
              console.log("else"+i1);
            }
            else if (i1>=9 && i1<=10 && j==7) {
              cells[i1].style.backgroundColor = "rgb(191, 73, 4)"; // Cambia el color de las celdas a amarillo        console.log(i); 
              
              cells[i1].title="holaaaaaaaaaaaaaaaa";
              console.log("else"+i1);
            }
            else if (i1>=5 && i1<=6 && j==8) {
              cells[i1].style.backgroundColor = "rgb(140, 28, 3)"; // Cambia el color de las celdas a amarillo        console.log(i); 
              
              cells[i1].title="holaaaaaaaaaaaaaaaa";
              console.log("else"+i1);
            }
            else if (i1>=3 && i1<=6 && j==9) {
              cells[i1].style.backgroundColor = "blue"; // Cambia el color de las celdas a amarillo        console.log(i); 
              
              cells[i1].title="holaaaaaaaaaaaaaaaa";
              console.log("else"+i1);
            }
            else if (i1>=12 && i1<=16 && j==10) {
              cells[i1].style.backgroundColor = "red"; // Cambia el color de las celdas a amarillo        console.log(i); 
              
              cells[i1].title="holaaaaaaaaaaaaaaaa";
              console.log("else"+i1);
            }
            else if (i1>=20 && i1<=24 && j==11) {
              cells[i1].style.backgroundColor = "yellow"; // Cambia el color de las celdas a amarillo        console.log(i); 
              
              cells[i1].title="holaaaaaaaaaaaaaaaa";
              console.log("else"+i1);
            }
            
            
        console.log("ninguno"+i1);
           // cells[i1].style.backgroundColor = "yellow"; // Cambia el color de las celdas a amarillo        console.log(i); 
    
         }
    }
}

    
   