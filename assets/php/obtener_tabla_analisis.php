<?php
session_start();
include('funciones.php');
      $miconexion = conectar_bd('', 'bd_cultivomaiz');
      $resulta = consulta($miconexion, "SELECT * FROM `analisis_terreno` WHERE id_user1 like '{$_SESSION['id_usuario']}'");
      $resulta1 = consulta($miconexion, "SELECT * FROM `terreno` WHERE id_user like '{$_SESSION['id_usuario']}'");
      
      $fila1 = $resulta1->fetch_assoc();
      $cotizar=$fila1['cotizar_lab'];
      $cotizar= intval($cotizar);
      $tablaHTML = "<table><thead>";
      $tablaHTML .= "<tr class=' bg-gradient-dark text-white'><th>Nombre Producto</th><th>Cantidad</th><th>Precio Unidad</th><th>Tiempo Alquiler</th><th>Subtotal</th><th class='text-center'>Eliminar</th></tr></thead>";      
      $tablaHTML .= "<tbody><tr>";
      $sumar=0;
  

      while ($fila = $resulta->fetch_assoc()) {
        $condicion=$fila['tipo_inventario'];
        if($condicion=="alquilar"){
          $numero1=$fila['precio_unidad'];
          $numero2=$fila['cantidad'];
          $hora=$fila['tiempo_alq'];
  
          $producto=intval($numero1)*intval($numero2)*intval($hora);
        }
        if($condicion=="comprar"){
          $numero1=$fila['precio_unidad'];
          $numero2=$fila['cantidad'];
  
          $producto=intval($numero1)*intval($numero2);
        }
        
        $sumar= $sumar+$producto;
        $id=$fila['id'] ;
        $tablaHTML .= "<tr>";
        $tablaHTML .= "<td>" . $fila['nombre_producto'] . "</td>";
        $tablaHTML .= "<td>" . $fila['cantidad'] . "</td>";
        $tablaHTML .= "<td>" . "$ " . $fila['precio_unidad']. "</td>";
        $tablaHTML .= "<td>" . $fila['tiempo_alq'] . "</td>";
        $tablaHTML .= "<td>" ."$ " . $producto . "</td>";
        $tablaHTML .= "<td><center>Clic <input type='checkbox' class='checkbox'onclick='eliminar1()' id='checkbox' name='checkbox[]' value='$id'></center></td>";

        $tablaHTML .= "</tr>";
      }
      $tablaHTML .= "</tbody>";
      $tablaHTML .= " <tfoot><tr>";
      $tablaHTML .= "<td colspan='4'><strong><h4 class='mx-auto text-center'>Total:</h4> </strong></td>";
      $tablaHTML .= " <td id='totalAmount'>$ $sumar</td>";
      $resultado=$sumar+$cotizar;
      $tablaHTML .= "<tr><td colspan='4'><strong><h4 class='mx-auto text-center'>Inversión Global:</h4> </strong></td><td id='resultado'>$ $resultado</td></tr>";
     
     
      $tablaHTML .= "</tr></tfoot>";
      $tablaHTML .= "</table>";

     echo $tablaHTML;
     // Creamos un array con los valores

      
?>