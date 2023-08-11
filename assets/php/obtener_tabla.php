<?php
session_start();
include('funciones.php');
      $miconexion = conectar_bd('', 'bd_cultivomaiz');
      $resulta = consulta($miconexion, "SELECT * FROM `analisis_terreno` WHERE id_user_analisis like '{$_SESSION['id_usuario']}'");
      $resulta0 = consulta($miconexion, "SELECT * FROM `analisis_terreno` WHERE id_user_analisis like '{$_SESSION['id_usuario']}'");

      $resulta1 = consulta($miconexion, "SELECT * FROM `terreno` WHERE id_user like '{$_SESSION['id_usuario']}'");
      $resulta2 = consulta($miconexion, "SELECT  DISTINCT `tipo_inventario` FROM `analisis_terreno` WHERE tipo_inventario LIKE '%comprar%' ");
      $resulta3 = consulta($miconexion, "SELECT  DISTINCT `tipo_inventario` FROM `analisis_terreno` WHERE tipo_inventario LIKE '%alquilar%'");
      
      $fila1 = $resulta1->fetch_assoc();
      $cotizar=$fila1['cotizar_lab'];
     $cotizar= intval($cotizar);
     $fila2 = $resulta2->fetch_assoc();
     $condicion2=$fila2['tipo_inventario'];

     $fila3 = $resulta3->fetch_assoc();
     $condicion3=$fila3['tipo_inventario'];

      $tablaHTML3 = "<table><thead>";
      $tablaHTML3 .= "<tr><td colspan='5'><strong>Cotización del laboratorio </strong></td><td colspan='2' id='cotizar_lab'>$  $cotizar</td></tr>";
      $tablaHTML3 .= "<tr><td colspan='5'><strong>tipo de inversión </strong></td><td colspan='2' id='cotizar_lab'>$condicion3</td></tr>";

      $tablaHTML3 .= "<tr><th>Nombre Producto</th><th>Cantidad</th><th>Precio Unidad</th><th>Tiempo Alquiler</th><th>Subtotal</th><th>Eliminar</th></tr></thead>";
      
      $tablaHTML3 .= "<tbody><tr>";
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
        $tablaHTML3 .= "<tr>";
        $tablaHTML3 .= "<td>" . $fila['nombre_producto'] . "</td>";
      //  $tablaHTML3 .= "<td>" . $fila['tipo_inventario'] . "</td>";
        $tablaHTML3 .= "<td>" . $fila['cantidad'] . "</td>";
        $tablaHTML3 .= "<td>" . "$ " . $fila['precio_unidad']. "</td>";
        $tablaHTML3 .= "<td>" . $fila['tiempo_alq'] . "</td>";
        $tablaHTML3 .= "<td>" ."$ " . $producto . "</td>";
        $tablaHTML3 .= "<td><center><input type='checkbox' class='checkbox'onclick='eliminar_datos()' id='checkbox' name='checkbox[]' value='$id'></center></td>";

        $tablaHTML3 .= "</tr>";
      }
      }
      $tablaHTML3 .= "</tbody>";
      $tablaHTML3 .= " <tfoot><tr>";
      $tablaHTML3 .= "<td colspan='5'><strong><h4 class='mx-auto text-center'>Total:</h4> </strong></td>";
      $tablaHTML3 .= " <td id='totalAmount'>$ $sumar1</td>";
      
     
     
      $tablaHTML3 .= "</tr></tfoot>";
      $tablaHTML3 .= "</table>";
      $tablaHTML3 .= "<br>";
     echo $tablaHTML3;
    

     $tablaHTML = "<table><thead>";
     $tablaHTML .= "<tr><td colspan='5'><strong>tipo de inversión </strong></td><td colspan='2' id='cotizar_lab'>$condicion2</td></tr>";

     $tablaHTML .= "<tr><th>Nombre Producto</th><th>Cantidad</th><th>Precio Unidad</th><th>Subtotal</th><th>Eliminar</th></tr></thead>";
     $tablaHTML .= "<tbody><tr>";
     $sumar=0;
 

     while ($fila = $resulta0->fetch_assoc()) {
       $condicion=$fila['tipo_inventario'];
     
       if($condicion=="comprar"){
         $numero1=$fila['precio_unidad'];
         $numero2=$fila['cantidad'];
 
         $producto=intval($numero1)*intval($numero2);
       
       
       $sumar2= $sumar2+$producto;
       $id=$fila['id'] ;
       $tablaHTML .= "<tr>";
       $tablaHTML .= "<td>" . $fila['nombre_producto'] . "</td>";
      // $tablaHTML.= "<td>" . $fila['tipo_inventario'] . "</td>";
       
       $tablaHTML .= "<td>" . $fila['cantidad'] . "</td>";
       $tablaHTML .= "<td>" . "$ " . $fila['precio_unidad']. "</td>";
       
       $tablaHTML .= "<td>" ."$ " . $producto . "</td>";
       $tablaHTML .= "<td><center><input type='checkbox' class='checkbox'onclick='eliminar_datos()' id='checkbox' name='checkbox[]' value='$id'></center></td>";

       $tablaHTML .= "</tr>";
      }
     }
     $tablaHTML .= "</tbody>";
     $tablaHTML .= " <tfoot><tr>";
     $tablaHTML .= "<td colspan='5'><strong><h4 class='mx-auto text-center'>Total:</h4> </strong></td>";
     $tablaHTML .= " <td id='totalAmount'>$ $sumar2</td>";
     $resultado=$sumar1+$cotizar+$sumar2;
     $tablaHTML .= "<tr><td colspan='5'><strong><h4 class='mx-auto text-center'>Inversión Global:</h4> </strong></td><td id='resultado'>$ $resultado</td></tr>";
    
    
     $tablaHTML .= "</tr></tfoot>";
     $tablaHTML .= "</table>";

    echo $tablaHTML;
    
     // Creamos un array con los valores

      
?>