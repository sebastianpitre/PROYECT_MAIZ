function Cerrarsesion(){
    
  console.log("aqui");
    Swal.fire({
        type: 'success',
        title: '<h4>Ejemplo de Alerta</h4>',
        text: 'Esto es una alerta de ejemplo',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No guardar`
    }).then((result) => {
        if (result.isConfirmed) {
            // Acción a realizar al hacer clic en "Guardar" // man daria crear el usuario
          
        } else if (result.isDenied) {
            // Acción a realizar al hacer clic en "No guardar" elimina la informasion del  usuario incluyendo la bd
            window.location.href=("../assets/php/cerrarsesion.php");
        } else {
            // Acción a realizar al hacer clic en "Cancelar"
            alert('Has seleccionado Cancelar');//continua el proceso 
        }
    });
}




    
    