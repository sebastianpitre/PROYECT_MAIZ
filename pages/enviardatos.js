function enviarDatos() {
  // Obtener el valor del campo de entrada de datos
  const nombre = document.getElementById("productNameAlquiler").value;
  const tipo = document.getElementById("transactionType").value;
const cantidad = document.getElementById("quantityAlquiler").value;
const precio = document.getElementById("pricePerUnitAlquiler").value;
const tiempo = document.getElementById("rentalTime").value;

// Crear un objeto FormData y agregar el dato
const formData = new FormData();
formData.append('nombre', nombre);
formData.append('tipo', tipo);
formData.append('tiempo', tiempo);
formData.append('precio', precio);
formData.append('cantidad', cantidad);


  // Realizar una petición Fetch para enviar los datos al servidor
  fetch('guardar.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    console.log(data); // Respuesta del servidor (opcional)
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
function enviarDatos1() {
    // Obtener el valor del campo de entrada de datos
    const nombre_c  = document.getElementById("productNameComprar").value;
    const cantidad_c = document.getElementById("quantityComprar").value;
    const precio_c  = document.getElementById("pricePerUnitComprar").value;
 
   
    const tipo = document.getElementById("transactionType").value;
 
  
  // Crear un objeto FormData y agregar el dato
  const formData = new FormData();
  formData.append('nombre_c', nombre_c);
  formData.append('tipo', tipo);
  formData.append('precio_c', precio_c);
  formData.append('cantidad_c', cantidad_c);
  
  
    // Realizar una petición Fetch para enviar los datos al servidor
    fetch('guardar.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      console.log(data); // Respuesta del servidor (opcional)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  function eliminar1() {
    // Obtener el valor del campo de entrada de datos
    var eliminar  = document.getElementById("checkbox").value;
    console.log(eliminar);
  
  // Crear un objeto FormData y agregar el dato
  const formData = new FormData();
  formData.append('eliminar', eliminar);
  
  
  
    // Realizar una petición Fetch para enviar los datos al servidor y eliminar la selección que realice
    fetch('eliminar_registro.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      console.log(data); // Respuesta del servidor (opcional)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
