<?php
session_start();
include('funciones.php');
   
// consultas en tabla analsis
$miconexion = conectar_bd('', 'bd_cultivomaiz');
      $resulta = consulta($miconexion, "SELECT * FROM `analisis_terreno` WHERE id_user1 like '{$_SESSION['id_usuario']}'");
      $resulta0 = consulta($miconexion, "SELECT * FROM `analisis_terreno` WHERE id_user1 like '{$_SESSION['id_usuario']}'");
      $resulta1 = consulta($miconexion, "SELECT * FROM `terreno` WHERE id_user like '{$_SESSION['id_usuario']}'");
//distinct sirve para seleccionar una  palabra aunque se  encuentre repetida una sola vez     
      $resulta2 = consulta($miconexion, "SELECT  DISTINCT `tipo_inventario` FROM `analisis_terreno` WHERE tipo_inventario LIKE '%comprar%' ");
      $resulta3 = consulta($miconexion, "SELECT  DISTINCT `tipo_inventario` FROM `analisis_terreno` WHERE tipo_inventario LIKE '%alquilar%'");
      
      $fila1 = $resulta1->fetch_assoc();
      $cotizar=$fila1['cotizar_lab'];
      $cotizar= intval($cotizar);
      $fila2 = $resulta2->fetch_assoc();
      $condicion2=$fila2['tipo_inventario'];
      $fila3 = $resulta3->fetch_assoc();
      $condicion3=$fila3['tipo_inventario'];
//----------------------------------------------------------------------------

//esta tabla imprime el valor de tipo transaccion alquilar del proceso analisis
      $tablaHTML1 = "<table><thead>";
      $tablaHTML1 .= "<tr><td colspan='5'><strong>Cotización del laboratorio </strong></td><td colspan='2' id='cotizar_lab'>$  $cotizar</td></tr>";
      $tablaHTML1 .= "<tr class=' bg-gradient-dark text-white'><th class='text-center' colspan='7'>Productos para Alquilar </th></tr>";
      $tablaHTML1 .= "<tr class=' bg-gradient-dark text-white'><th>Nombre Producto</th><th>Cantidad</th><th>Precio Unidad</th><th>Tiempo Alquiler</th><th>Subtotal</th><th class='text-center'>Eliminar</th></tr></thead>";
      $tablaHTML1 .= "<tbody><tr>";
      $sumar1=0;
      $sumar2=0;
      while ($fila = $resulta->fetch_assoc()) {
        $condicion=$fila['tipo_inventario'];
        if($condicion=="alquilar"){
          $numero1=$fila['precio_unidad'];
          $numero2=$fila['cantidad'];
          $hora=$fila['tiempo_alq'];  
          $producto=intval($numero1)*intval($numero2)*intval($hora);
          $sumar1= $sumar1+$producto;
          $id=$fila['id'] ;
          $tablaHTML1 .= "<tr>";
          $tablaHTML1 .= "<td >" . $fila['nombre_producto'] . "</td>";
          $tablaHTML1 .= "<td>" . $fila['cantidad'] . "</td>";
          $tablaHTML1 .= "<td>" . "$ " . $fila['precio_unidad']. "</td>";
          $tablaHTML1 .= "<td>" . $fila['tiempo_alq'] .' Horas'. "</td>";
          $tablaHTML1 .= "<td>" ."$ " . $producto . "</td>";
          $tablaHTML1 .= "<td><center><input type='checkbox' class='checkbox'onclick='eliminar1()' id='checkbox' name='checkbox[]' value='$id'></center></td>";
          $tablaHTML1 .= "</tr>";
        }
      }
      $tablaHTML1 .= "</tbody>";
      $tablaHTML1 .= " <tfoot><tr>";
      $tablaHTML1 .= "<td colspan='4'><strong><h4 class='mx-auto text-center'>Total:</h4> </strong></td>";
      $tablaHTML1 .= " <td id='totalAmount'>$ $sumar1</td><td></td>";
      $tablaHTML1 .= "</tr></tfoot>";
      $tablaHTML1 .= "</table>";
      $tablaHTML1 .= "<br>";
      echo $tablaHTML1;
     // Creamos un array con los valores

      $tablaHTML = "<table><thead>";
      $tablaHTML .= "<tr class=' bg-gradient-dark text-white text-center'><th class='text-center' colspan='7'>Productos para Comprar </th></tr>";

      $tablaHTML .= "<tr class=' bg-gradient-dark text-white'><th colspan='2' >Nombre Producto</th><th>Cantidad</th><th>Precio Unidad</th><th>Subtotal</th><th class='text-center'>Eliminar</th></tr></thead>";
      $tablaHTML .= "<tbody><tr>";
      $sumar=0;
//----------------------------------------------------------------------- 

//esta tabla imprime el valor de tipo transaccion comprar del proceso analisis
     while ($fila = $resulta0->fetch_assoc()) {
       $condicion=$fila['tipo_inventario'];
     
       if($condicion=="comprar"){
          $numero1=$fila['precio_unidad'];
          $numero2=$fila['cantidad'];
          $producto=intval($numero1)*intval($numero2);
          $sumar2= $sumar2+$producto;
          $id=$fila['id'] ;
          $tablaHTML .= "<tr>";
          $tablaHTML .= "<td colspan='2'>" . $fila['nombre_producto'] . "</td>";
          // $tablaHTML.= "<td>" . $fila['tipo_inventario'] . "</td>";    
          $tablaHTML .= "<td>" . $fila['cantidad'] . "</td>";
          $tablaHTML .= "<td>" . "$ " . $fila['precio_unidad']. "</td>";  
          $tablaHTML .= "<td>" ."$ " . $producto . "</td>";
          $tablaHTML .= "<td><center><input type='checkbox' class='checkbox'onclick='eliminar1()' id='checkbox' name='checkbox[]' value='$id'></center></td>";

          $tablaHTML .= "</tr>";
      }
     }
     $tablaHTML .= "</tbody>";
     $tablaHTML .= " <tfoot><tr>";
     $tablaHTML .= "<td colspan='4'><strong><h4 class='mx-auto text-center'>Total:</h4> </strong></td>";
     $tablaHTML .= " <td  id='totalAmount'>$ $sumar2</td><td></td>";
     $resultado=$sumar1+$cotizar+$sumar2;
     $tablaHTML .= "</tr></tfoot>";
     $tablaHTML .= "</table>";
     $tablaHTML .= "<br>";
    echo $tablaHTML;
//---------------------------------------------------------

//esta tabla imprime el valor  global del proceso analisis
   $tablaHTML3 = "<table><thead>"; 
   $tablaHTML3 .= "<tbody><tr>";
   $tablaHTML3 .= "</tbody>";
   $tablaHTML3 .= " <tfoot><tr>";
   $tablaHTML3 .= "<tr><td colspan='4'><strong><h4 class='mx-auto text-center'>Inversión Global:</h4> </strong></td><td  id='resultado'>$ $resultado</td></tr>";
   $tablaHTML3 .= "</tr></tfoot>";
   $tablaHTML3 .= "</table>";
   $tablaHTML3 .= "<br>";
  echo $tablaHTML3;
 

    
     // Creamos un array con los valores

      
?>