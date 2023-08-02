
  // Maneja el evento de envío del formulario
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtén los valores de los campos del formulario
    var clima = document.getElementById('clima').value;
    var temperatura = parseFloat(document.getElementById('temperatura').value);
    var precipitaciones = parseFloat(document.getElementById('precipitaciones').value);
    var altitud = parseFloat(document.getElementById('altitud').value);
    var agua = document.getElementById('agua').value;

    var textura = document.getElementById('textura').value;
    var ph = parseFloat(document.getElementById('ph').value);
    var nitrogeno = parseFloat(document.getElementById('nitrogeno').value);
    var fosforo = parseFloat(document.getElementById('fosforo').value);
    var potasio = parseFloat(document.getElementById('potasio').value);

    var profundidad = parseFloat(document.getElementById('profundidad').value);
    var muestras = parseFloat(document.getElementById('muestras').value);

    var variedad = document.getElementById('variedad').value;
    var rendimiento = parseFloat(document.getElementById('rendimiento').value);
    var resistencia = document.getElementById('resistencia').value;
    var diasmadurez = parseFloat(document.getElementById('diasmadurez').value);

    var labores = document.getElementById('labores').value;
    var riegos = document.getElementById('riegos').value;
    var malezas = document.getElementById('malezas').value;
    var fertilizantes = document.getElementById('fertilizantes').value;
    var monitoreo = document.getElementById('monitoreo').value;

    var madurez = document.getElementById('madurez').value;

    // Realiza los cálculos necesarios para el estudio del cultivo de maíz
    // Aquí puedes agregar tu lógica de cálculo basada en los valores ingresados

    // Ejemplo de cálculo para determinar si es adecuado para cultivar maíz
    var esAdecuadoParaMaiz = false;

    // Verificar si el pH del suelo está dentro del rango adecuado
    if (ph >= 5.5 && ph <= 7.5) {
      esAdecuadoParaMaiz = true;
    }

    // Construye el resultado del estudio del cultivo de maíz
    var resultadoHTML = '<h2>Resultado del Estudio del Cultivo de Maíz</h2>';
    resultadoHTML += '<h3>Información de la Región:</h3>';
    resultadoHTML += '<p>Clima: ' + clima + '</p>';
    resultadoHTML += '<p>Temperatura: ' + temperatura + ' °C</p>';
    resultadoHTML += '<p>Precipitaciones: ' + precipitaciones + ' mm</p>';
    resultadoHTML += '<p>Altitud: ' + altitud + ' metros</p>';
    resultadoHTML += '<p>Disponibilidad de Agua: ' + agua + '</p>';

    resultadoHTML += '<h3>Análisis del Suelo:</h3>';
    resultadoHTML += '<p>Textura del Suelo: ' + textura + '</p>';
    resultadoHTML += '<p>pH del Suelo: ' + ph + '</p>';
    resultadoHTML += '<p>Contenido de Nitrógeno: ' + nitrogeno + ' kg/ha</p>';
    resultadoHTML += '<p>Contenido de Fósforo: ' + fosforo + ' kg/ha</p>';
    resultadoHTML += '<p>Contenido de Potasio: ' + potasio + ' kg/ha</p>';

    resultadoHTML += '<h3>Muestreo del Suelo:</h3>';
    resultadoHTML += '<p>Profundidad del Muestreo: ' + profundidad + ' cm</p>';
    resultadoHTML += '<p>Cantidad de Muestras: ' + muestras + '</p>';

    resultadoHTML += '<h3>Selección de Semillas:</h3>';
    resultadoHTML += '<p>Variedad de Maíz: ' + variedad + '</p>';
    resultadoHTML += '<p>Rendimiento Esperado: ' + rendimiento + ' kg/ha</p>';
    resultadoHTML += '<p>Resistencia a Enfermedades y Plagas: ' + resistencia + '</p>';
    resultadoHTML += '<p>Días a la Madurez: ' + diasmadurez + ' días</p>';

    resultadoHTML += '<h3>Preparación del Suelo:</h3>';
    resultadoHTML += '<p>Labores de Preparación: ' + labores + '</p>';

    resultadoHTML += '<h3>Manejo del Cultivo:</h3>';
    resultadoHTML += '<p>Frecuencia de Riegos: ' + riegos + '</p>';
    resultadoHTML += '<p>Control de Malezas: ' + malezas + '</p>';
    resultadoHTML += '<p>Aplicación de Fertilizantes: ' + fertilizantes + '</p>';
    resultadoHTML += '<p>Monitoreo de Plagas y Enfermedades: ' + monitoreo + '</p>';

    resultadoHTML += '<h3>Cosecha:</h3>';
    resultadoHTML += '<p>Criterios de Madurez: ' + madurez + '</p>';

    resultadoHTML += '<h3>Recomendación:</h3>';
    if (esAdecuadoParaMaiz) {
      resultadoHTML += '<p>El suelo es adecuado para cultivar maíz.</p>';
      resultadoHTML += '<table>';
      resultadoHTML += '<tr><th>Factor</th><th>Valor</th></tr>';
      resultadoHTML += '<tr><td>pH del Suelo</td><td>' + ph + '</td></tr>';
      resultadoHTML += '<tr><td>Contenido de Nitrógeno</td><td>' + nitrogeno + ' kg/ha</td></tr>';
      resultadoHTML += '<tr><td>Contenido de Fósforo</td><td>' + fosforo + ' kg/ha</td></tr>';
      resultadoHTML += '<tr><td>Contenido de Potasio</td><td>' + potasio + ' kg/ha</td></tr>';
      resultadoHTML += '</table>';
      resultadoHTML += '<p>Los valores de pH y nutrientes se encuentran dentro de los rangos óptimos para el cultivo de maíz, lo que indica que el suelo proporciona las condiciones adecuadas para su desarrollo.</p>';
    } else {
      resultadoHTML += '<p>El suelo no es adecuado para cultivar maíz. Se recomienda evaluar otras opciones de cultivo.</p>';
    }

    // Muestra el resultado en el div 'resultado'
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = resultadoHTML;

    // Restablece el formulario
    this.reset();
  });

