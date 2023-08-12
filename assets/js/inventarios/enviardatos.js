// 1 Funciones relacionadas a la pagina paso1.html 

function enviarDatosAlquilar() {

  // Obtener el valor del campo de entrada de datos
  const nombre = document.getElementById("productNameAlquiler").value;
  const tipo_transaccion = document.getElementById("transactionType").value;
  const cantidad = document.getElementById("quantityAlquiler").value;
  const precio = document.getElementById("pricePerUnitAlquiler").value;
  const tiempo = document.getElementById("rentalTime").value;
  const hectarea = document.getElementById("hectareas").value=0;
  const condicion = document.getElementById("condicion").value=0;
  // Crear un objeto FormData y agregar el dato
  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('tipo_transaccion', tipo_transaccion);
  formData.append('tiempo', tiempo);
  formData.append('precio', precio);
  formData.append('cantidad', cantidad);
  formData.append('condicion', condicion);
  formData.append('hectareas', hectarea);

  resetForm(transactionType);
    // Realizar una petición Fetch para enviar los datos al servidor
    fetch('../assets/php/guardar.php', {
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
  function enviarDatosComprar() {
      // Obtener el valor del campo de entrada de datos
      const nombre_c  = document.getElementById("productNameComprar").value;
      const cantidad_c = document.getElementById("quantityComprar").value;
      const precio_c  = document.getElementById("pricePerUnitComprar").value;
      const hectarea = document.getElementById("hectareas").value=0;
      const condicion = document.getElementById("condicion").value=0;
    
    
      const tipo_transaccion = document.getElementById("transactionType").value;
      
    
    // Crear un objeto FormData y agregar el dato
    const formData = new FormData();
    formData.append('nombre_c', nombre_c);
    formData.append('tipo_transaccion', tipo_transaccion);
    formData.append('precio_c', precio_c);
    formData.append('cantidad_c', cantidad_c);
    formData.append('condicion', condicion);
    formData.append('hectareas', hectarea);
    
    
      // Realizar una petición Fetch para enviar los datos al servidor
      fetch('../assets/php/guardar.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        console.log(data); // Respuesta del servidor (opcional)
        resetForm(transactionType);
      })
      .catch(error => {
        console.error('Error:', error);
      });  
}
// 1--------------Fin paso1.html  -----------------------------------


// 2 Funciones relacionadas a la pagina paso2.html 

  function PreparacionAlquilar() {
    // Obtener el valor  del campo de entrada de datos
    const nombre = document.getElementById("productNameAlquiler").value;
    const tipo_transaccion = document.getElementById("transactionType").value;
    const cantidad = document.getElementById("quantityAlquiler").value;
    const precio = document.getElementById("pricePerUnitAlquiler").value;
    const tiempo = document.getElementById("rentalTime").value;
    const hectarea = 0;
    const condicion = 0;
    // Crear un objeto FormData y agregar el dato
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('tipo_transaccion', tipo_transaccion);
    formData.append('tiempo', tiempo);
    formData.append('precio', precio);
    formData.append('cantidad', cantidad);
    formData.append('condicion', condicion);
    formData.append('hectareas', hectarea);

      // Realizar una petición Fetch para enviar los datos al servidor
      fetch('../assets/php/guardar.php', {
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
  function PreparacionComprar() {
      // Obtener el valor del campo de entrada de datos
      const nombre_c  = document.getElementById("productNameComprar").value;
      const cantidad_c = document.getElementById("quantityComprar").value;
      const precio_c  = document.getElementById("pricePerUnitComprar").value;
      const hectarea = 0;
      const condicion = 0;
    
    
      const tipo_transaccion = document.getElementById("transactionType").value;
      
    
    // Crear un objeto FormData y agregar el dato
    const formData = new FormData();
    formData.append('nombre_c', nombre_c);
    formData.append('tipo_transaccion', tipo_transaccion);
    formData.append('precio_c', precio_c);
    formData.append('cantidad_c', cantidad_c);
    formData.append('condicion', condicion);
    formData.append('hectareas', hectarea);
    
    
      // Realizar una petición Fetch para enviar los datos al servidor
      fetch('../assets/php/guardar.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        console.log(data); // Respuesta del servidor (opcional)
        resetForm(transactionType);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
      
  }
//tabla preparacion del terreno
// 1--------------Fin paso2.html  -----------------------------------


// 3 Funciones relacionadas a la pagina paso3.html 

// tabla proceso de semilla y fertilizacion
function proce_Semilla() {
  
  // Obtener el valor del campo de entrada de datos
  const tipo_transaccion = document.getElementById("transactionType").value;
  const precio = document.getElementById("pricePerUnitAlquiler").value;
  const hectarea =0;
  const condicion =0;

// Crear un objeto FormData y agregar el dato
const formData = new FormData();
formData.append('tipo_transaccion', tipo_transaccion);
formData.append('precio', precio);
formData.append('condicion', condicion);
formData.append('hectareas', hectarea);

resetForm(transactionType);
  // Realizar una petición Fetch para enviar los datos al servidor
  fetch('../assets/php/guardar.php', {
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
function proce_Fertilizante() {
    // Obtener el valor del campo de entrada de datos
    const nombre_c  = document.getElementById("productNameComprar").value;
    const cantidad_c = document.getElementById("quantityComprar").value;
    const unidad_medida = document.getElementById("unidad_medida").value;
    const precio_c  = document.getElementById("pricePerUnitComprar").value;
    const hectarea =0;
    const condicion =0;
   
    const tipo_transaccion = document.getElementById("transactionType").value;
    
  
  // Crear un objeto FormData y agregar el dato
  const formData = new FormData();
  formData.append('nombre_c', nombre_c);
  formData.append('tipo_transaccion', tipo_transaccion);
  formData.append('precio_c', precio_c);
  formData.append('unidad_medida', unidad_medida);
  formData.append('cantidad_c', cantidad_c);
  formData.append('condicion', condicion);
  formData.append('hectareas', hectarea);
  
  
    // Realizar una petición Fetch para enviar los datos al servidor
    fetch('../assets/php/guardar.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      console.log(data); // Respuesta del servidor (opcional)
      resetForm(transactionType);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
    
}
// tabla proceso de semilla y fertilizacion
 
// 3--------------Fin paso3.html  -----------------------------------

  function resetForm(transactionType) {
    if (transactionType === "alquilar") {
    document.getElementById("productNameAlquiler").value = "";
    document.getElementById("quantityAlquiler").value = "";
    document.getElementById("pricePerUnitAlquiler").value = "";
    document.getElementById("rentalTime").value = "";
    } else if (transactionType === "comprar") {
    document.getElementById("productNameComprar").value = "";
    document.getElementById("quantityComprar").value = "";
    document.getElementById("pricePerUnitComprar").value = "";
    }
}

  function eliminar_datos() {
    // Obtener el valor del campo de entrada de datos
    var eliminar  = document.getElementById("checkbox").value;
    const checkboxes = Array.from(document.getElementsByName('checkbox[]'));
    const seleccionados = checkboxes.filter(checkbox => checkbox.checked);
    const valores = seleccionados.map(checkbox => checkbox.value);
    console.log(valores);
  
  // Crear un objeto FormData y agregar el dato
  const formData = new FormData();
  formData.append('eliminar', eliminar);
  formData.append('valores', valores);
  
  
    // Realizar una petición Fetch para enviar los datos al servidor y eliminar la selección que realice
    fetch('../assets/php/eliminar_registro.php', {
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

function sumar (params) {
  
}

function toggleDiv() {
  var checkbox = document.getElementById("mostrar_lab");
  var div = document.getElementById("laboratorio");
  
  if (checkbox.checked) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}