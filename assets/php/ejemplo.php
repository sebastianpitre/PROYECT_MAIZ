
<!DOCTYPE html>
<html>
<head>
    <title>Actualizar tabla automáticamente</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
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

            // Escuchar eventos de cambio en el formulario
            $('#miFormulario').on('change', function() {
                // Realizar una llamada a la función de actualización de la tabla
                actualizarTabla();
            });
        });
    </script>
</head>
<body>
    <h1>Tabla de datos</h1>
    <form id="miFormulario">
        <!-- Aquí coloca tus elementos de formulario que desencadenarán la actualización de la tabla -->
        <!-- Por ejemplo: -->
        <!-- <input type="text" name="nombre" id="nombre" placeholder="Nombre"> -->
    </form>

    <!-- Contenedor de la tabla -->
    <div id="tabla"></div>
</body>
</html>


2. obtener_datos.php:
php
<?php
      $miconexion = conectar_bd('', 'bd_cultivomaiz');
      $resulta = consulta($miconexion, "SELECT * FROM `analisis_terreno`");

      $tablaHTML = "<table><thead>";
      $tablaHTML .= "<tr><th>Nombre Producto</th><th>Tipo Inventario</th><th>Cantidad</th><th>Precio Unidad</th><th>Tiempo Alquiler</th><th>sub total</th><th>seleccionar</th></tr></thead>";
      $tablaHTML .= "<tbody><tr>";
      $sumar=0;

      while ($fila = $resulta->fetch_assoc()) {
        $numero1=$fila['precio_unidad'];
        $numero2=$fila['cantidad'];
        $hora=$fila['tiempo_alq'];
        $producto=intval($numero1)*intval($numero2)*intval($hora);
        $sumar= $sumar+$producto;
        $id=$fila['id'] ;
        $tablaHTML .= "<tr>";
        $tablaHTML .= "<td>" . $fila['nombre_producto'] . "</td>";
        $tablaHTML .= "<td>" . $fila['tipo_inventario'] . "</td>";
        $tablaHTML .= "<td>" . $fila['cantidad'] . "</td>";
        $tablaHTML .= "<td>" . $fila['precio_unidad'] . "</td>";
        $tablaHTML .= "<td>" . $fila['tiempo_alq'] . "</td>";
        $tablaHTML .= "<td>" . $producto . "</td>";
        $tablaHTML .= "<td><center><input type='checkbox' name='checkbox[]' value='$id'  ></center></td>";
        $tablaHTML .= "</tr>";
      }
      $tablaHTML .= "</tbody>";
      $tablaHTML .= "<tfoot><tr><td colspan='5'><strong><h4 class='mx-auto text-center'>Gasto Total:</h4> </strong></td><td id='resultado'>0</td></tr></tfoot>";
      $tablaHTML .= " <tfoot><tr>";
      $tablaHTML .= "<td colspan='5'><strong><h4 class='mx-auto text-center'>Total:</h4> </strong></td>";
      $tablaHTML .= " <td id='totalAmount'>$sumar</td>";
      $tablaHTML .= "</tr></tfoot>";
      $tablaHTML .= "</table>";

      echo $tablaHTML;
?>