<?php
include('funciones.php');
      $miconexion = conectar_bd('', 'bd_cultivomaiz');
      $resulta = consulta($miconexion, "SELECT * FROM `inventario`");

      $tablaHTML = "<table><thead>";
      $tablaHTML .= "<tr><th>Nombre Producto</th><th>Tipo Inventario</th><th>Cantidad</th><th>Precio Unidad</th><th>Tiempo Alquiler</th><th>Subtotal</th><th>Eliminar</th></tr></thead>";
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
        $tablaHTML .= "<td><center><input type='checkbox' class='checkbox'onclick='eliminar1()' id='checkbox' name='checkbox[]' value='$id'></center></td>";

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