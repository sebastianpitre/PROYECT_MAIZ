Claro, aquí tienes el código actualizado para que la tabla se actualice en tiempo real sin necesidad de un formulario:

1. index.html:
html
<!DOCTYPE html>
<html>
<head>
    <title>Actualizar tabla automáticamente</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="../pages/enviardatos.js"></script>
    <script>
        $(document).ready(function() {
            // Función para actualizar la tabla con los datos del servidor
            function actualizarTabla() {
                $.ajax({
                    url: 'obtener_datos.php', // Archivo PHP que obtiene los datos del servidor
                    success: function(data) {
                        $('#tabla').html(data); // Actualizar el contenido de la tabla con los datos recibidos
                    }
                });
            }

            // Llamar a la función inicialmente para cargar la tabla con los datos actuales
            actualizarTabla();

            // Actualizar la tabla automáticamente cada 5 segundos
            setInterval(actualizarTabla, 100000);
        });
    </script>
    <style>
        table {
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h1>Tabla de datos</h1>
    <!-- Contenedor de la tabla -->
    <div id="tabla"></div>
</body>
</html>




Recuerda configurar los archivos conecta_bd.php y consulta.php para establecer la conexión a la base de datos y realizar las consultas correspondientes.

Con esta implementación, la tabla se actualizará automáticamente cada 5 segundos sin necesidad de recargar la página.


2. obtener_datos.php:
php
