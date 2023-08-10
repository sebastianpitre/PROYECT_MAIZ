<?php
session_start();
include('funciones.php');
      $miconexion = conectar_bd('', 'bd_cultivomaiz');
      $resulta = consulta($miconexion, "SELECT * FROM `inventario` WHERE id_user1 like '{$_SESSION['id_usuario']}'");
      $resulta0 = consulta($miconexion, "SELECT * FROM `inventario` WHERE id_user1 like '{$_SESSION['id_usuario']}'");

      $resulta1 = consulta($miconexion, "SELECT * FROM `terreno` WHERE id_user like '{$_SESSION['id_usuario']}'");
      $resulta2 = consulta($miconexion, "SELECT  DISTINCT `tipo_inventario` FROM `inventario` WHERE tipo_inventario LIKE '%comprar%' ");
      $resulta3 = consulta($miconexion, "SELECT  DISTINCT `tipo_inventario` FROM `inventario` WHERE tipo_inventario LIKE '%alquilar%'");
      
      $fila1 = $resulta1->fetch_assoc();
      $cotizar=$fila1['cotizar_lab'];
     $cotizar= intval($cotizar);
     $fila2 = $resulta2->fetch_assoc();
     $condicion2=$fila2['tipo_inventario'];

     $fila3 = $resulta3->fetch_assoc();
     $condicion3=$fila3['tipo_inventario'];

      $tablaHTML1 = "<table><thead>";
      $tablaHTML1 .= "<tr><td colspan='5'><strong>Cotización del laboratorio </strong></td><td colspan='2' id='cotizar_lab'>$  $cotizar</td></tr>";
      $tablaHTML1 .= "<tr><td colspan='5'><strong>tipo de inversión </strong></td><td colspan='2' id='cotizar_lab'>$condicion3</td></tr>";

      $tablaHTML1 .= "<tr><th>Nombre Producto</th><th>Cantidad</th><th>Precio Unidad</th><th>Tiempo Alquiler</th><th>Subtotal</th><th>Eliminar</th></tr></thead>";
      
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
        $tablaHTML1 .= "<td>" . $fila['nombre_producto'] . "</td>";
      //  $tablaHTML1 .= "<td>" . $fila['tipo_inventario'] . "</td>";
        $tablaHTML1 .= "<td>" . $fila['cantidad'] . "</td>";
        $tablaHTML1 .= "<td>" . "$ " . $fila['precio_unidad']. "</td>";
        $tablaHTML1 .= "<td>" . $fila['tiempo_alq'] . "</td>";
        $tablaHTML1 .= "<td>" ."$ " . $producto . "</td>";
        $tablaHTML1 .= "<td><center><input type='checkbox' class='checkbox'onclick='eliminar1()' id='checkbox' name='checkbox[]' value='$id'></center></td>";

        $tablaHTML1 .= "</tr>";
      }
      }
      $tablaHTML1 .= "</tbody>";
      $tablaHTML1 .= " <tfoot><tr>";
      $tablaHTML1 .= "<td colspan='5'><strong><h4 class='mx-auto text-center'>Total:</h4> </strong></td>";
      $tablaHTML1 .= " <td id='totalAmount'>$ $sumar1</td>";
      
     
     
      $tablaHTML1 .= "</tr></tfoot>";
      $tablaHTML1 .= "</table>";
      $tablaHTML1 .= "<br>";
     echo $tablaHTML1;
    

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
       $tablaHTML .= "<td><center><input type='checkbox' class='checkbox'onclick='eliminar1()' id='checkbox' name='checkbox[]' value='$id'></center></td>";

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