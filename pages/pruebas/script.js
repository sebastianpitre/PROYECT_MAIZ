// Maneja el evento de envío del formulario en la página 1 (formulario1.html)
document.getElementById('myForm1').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
    // Obtén los valores de los campos del formulario en la página 1
    var clima = document.getElementById('clima').value;
    var temperatura = parseFloat(document.getElementById('temperatura').value);
    var precipitaciones = parseFloat(document.getElementById('precipitaciones').value);
    var altitud = parseFloat(document.getElementById('altitud').value);
    var agua = document.getElementById('agua').value;
  
    // Guarda los valores en el almacenamiento local (localStorage) para utilizarlos en la página 2
    localStorage.setItem('clima', clima);
    localStorage.setItem('temperatura', temperatura);
    localStorage.setItem('precipitaciones', precipitaciones);
    localStorage.setItem('altitud', altitud);
    localStorage.setItem('agua', agua);
  
    // Redirecciona a la página 2 (formulario2.html)
    window.location.href = 'formulario2.html';
  });
  
  // Maneja el evento de envío del formulario en la página 2 (formulario2.html)
  document.getElementById('myForm2').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
    // Obtén los valores de los campos del formulario en la página 2
    var textura = document.getElementById('textura').value;
    var ph = parseFloat(document.getElementById('ph').value);
    var nitrogeno = parseFloat(document.getElementById('nitrogeno').value);
    var fosforo = parseFloat(document.getElementById('fosforo').value);
    var potasio = parseFloat(document.getElementById('potasio').value);
  
    // Guarda los valores en el almacenamiento local (localStorage) para utilizarlos en la página 3
    localStorage.setItem('textura', textura);
    localStorage.setItem('ph', ph);
    localStorage.setItem('nitrogeno', nitrogeno);
    localStorage.setItem('fosforo', fosforo);
    localStorage.setItem('potasio', potasio);
  
    // Redirecciona a la página 3 (formulario3.html)
    window.location.href = 'formulario3.html';
  });
  
  // Maneja el evento de envío del formulario en la página 3 (formulario3.html)
  document.getElementById('myForm3').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
    // Obtén los valores de los campos del formulario en la página 3
    var profundidad = parseFloat(document.getElementById('profundidad').value);
    var muestras = parseFloat(document.getElementById('muestras').value);
    var variedad = document.getElementById('variedad').value;
    var rendimiento = parseFloat(document.getElementById('rendimiento').value);
    var resistencia = document.getElementById('resistencia').value;
    var diasmadurez = parseFloat(document.getElementById('diasmadurez').value);
  
    // Obtiene los valores guardados en el almacenamiento local (localStorage) de las páginas anteriores
    var clima = localStorage.getItem('clima');
    var temperatura = localStorage.getItem('temperatura');
    var precipitaciones = localStorage.getItem('precipitaciones');
    var altitud = localStorage.getItem('altitud');
    var agua = localStorage.getItem('agua');
    var textura = localStorage.getItem('textura');
    var ph = localStorage.getItem('ph');
    var nitrogeno = localStorage.getItem('nitrogeno');
    var fosforo = localStorage.getItem('fosforo');
    var potasio = localStorage.getItem('potasio');
  
    // Realiza los cálculos necesarios para el estudio del cultivo de maíz
    // Aquí puedes agregar tu lógica de cálculo basada en los valores ingresados
  
    // Construye el resultado del estudio del cultivo de maíz
    var resultadoHTML = '<h2>Resultado del Estudio del Cultivo de Maíz</h2>';
    resultadoHTML += '<h3>Información de la Región:</h3>';
    resultadoHTML += '<p>Clima: ' + clima + '</p>';
    resultadoHTML += '<p>Temperatura: ' + temperatura + '</p>';
    resultadoHTML += '<p>Precipitaciones: ' + precipitaciones + '</p>';
    resultadoHTML += '<p>Altitud: ' + altitud + '</p>';
    resultadoHTML += '<p>Disponibilidad de Agua: ' + agua + '</p>';
  
    resultadoHTML += '<h3>Análisis del Suelo:</h3>';
    resultadoHTML += '<p>Textura del Suelo: ' + textura + '</p>';
    resultadoHTML += '<p>pH del Suelo: ' + ph + '</p>';
    resultadoHTML += '<p>Contenido de Nitrógeno: ' + nitrogeno + '</p>';
    resultadoHTML += '<p>Contenido de Fósforo: ' + fosforo + '</p>';
    resultadoHTML += '<p>Contenido de Potasio: ' + potasio + '</p>';
  
    resultadoHTML += '<h3>Muestreo del Suelo:</h3>';
    resultadoHTML += '<p>Profundidad del Muestreo: ' + profundidad + '</p>';
    resultadoHTML += '<p>Cantidad de Muestras: ' + muestras + '</p>';
  
    resultadoHTML += '<h3>Selección de Semillas:</h3>';
    resultadoHTML += '<p>Variedad de Maíz: ' + variedad + '</p>';
    resultadoHTML += '<p>Rendimiento Esperado: ' + rendimiento + '</p>';
    resultadoHTML += '<p>Resistencia a Enfermedades y Plagas: ' + resistencia + '</p>';
    resultadoHTML += '<p>Días a la Madurez: ' + diasmadurez + '</p>';
  
    // Muestra el resultado en el div 'resultado' en la página 4 (resultado.html)
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = resultadoHTML;
  });
  