<?php
session_start();
include('funciones.php');
      $miconexion = conectar_bd('', 'bd_cultivomaiz');
      $resulta = consulta($miconexion, "SELECT * FROM `comercializar` WHERE id_user_comercializar like '{$_SESSION['id_usuario']}'");
  
      $tablaHTML = "<table><thead>";
      $tablaHTML .= "<tr><th>Nombre Producto</th><th>Cantidad</th><th>Precio Unidad</th><th>Tiempo Alquiler</th><th>Subtotal</th><th>Eliminar</th></tr></thead>";
      $tablaHTML .= "<tbody><tr>";
      $sumar=0;

      while ($fila = $resulta->fetch_assoc()) {
        $condicion=$fila['tipo_inventario'];
        if($condicion=="alquilar_comercializar"){
          $numero1=$fila['precio_unidad'];
          $numero2=$fila['cantidad'];
          $hora=$fila['tiempo_alq'];
          $producto=intval($numero1)*intval($numero2)*intval($hora);
        }
          if($condicion=="comprar_comercializar"){
            $numero1=$fila['precio_unidad'];
            $numero2=$fila['cantidad'];
            $producto=intval($numero1)*intval($numero2);
          }
        
          $sumar= $sumar+$producto;
          $id=$fila['id_comercializar'] ;
          $tablaHTML .= "<tr>";
          $tablaHTML .= "<td>" . $fila['nombre_producto'] . "</td>";
          $tablaHTML .= "<td>" . $fila['cantidad'] . "</td>";
          $tablaHTML .= "<td>" . "$ " . $fila['precio_unidad']. "</td>";
          $tablaHTML .= "<td>" . $fila['tiempo_alq'] . "</td>";
          $tablaHTML .= "<td>" ."$ " . $producto . "</td>";
          $tablaHTML .= "<td><center><input type='checkbox' class='checkbox'onclick='eliminar_datos()' id='checkbox' name='checkbox[]' value='$id'></center></td>";

          $tablaHTML .= "</tr>";
        }
      $tablaHTML .= "</tbody>";
      $tablaHTML .= " <tfoot><tr>";
      $tablaHTML .= "<td colspan='5'><strong><h4 class='mx-auto text-center'>Total:</h4> </strong></td>";
      $tablaHTML .= " <td id='totalAmount'>$ $sumar</td>";
      $resultado=$sumar;
      $tablaHTML .= "<tr><td colspan='5'><strong><h4 class='mx-auto text-center'>Inversión Global2:</h4> </strong></td><td id='resultado'>$ </td></tr>";
      $tablaHTML .= "</tr></tfoot>";
      $tablaHTML .= "</table>";

     echo $tablaHTML;
     // Creamos un array con los valores ...

      
?>