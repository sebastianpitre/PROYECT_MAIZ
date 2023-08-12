

<?php
session_start();
  include('funciones.php');
  $miconexion=conectar_bd('', 'bd_cultivomaiz');

  // Obtener el dato enviado desde JavaScript
  $hectarea = $_POST['hectareas'];
  $condicion = $_POST['condicion'];
  $cotizar = $_POST['cotizar'];
  echo"hola cartacol .$condicion";
  /* Guarda al seleccionar el Botón comprar 909 =hectareas*/
  if( $condicion==="hectarea"){
    $hectarea=$_POST['hectareas'];
    
    $resultado=consulta($miconexion,"UPDATE `terreno` SET `area`='$hectarea',`cotizar_lab`='$cotizar' WHERE `id_user`LIKE '{$_SESSION['id_usuario']}'");
 
  }
  
  
 

  $tipo = $_POST['tipo_transaccion'];

  /* Guarda al seleccionar el Botón comprar */
  if( $tipo==="comprar"){
  
    $nombre_c=$_POST['nombre_c'];
    $cantidad_c=$_POST['cantidad_c'];
    $precio_c=$_POST['precio_c'];
    
  
    $verificaci=consulta($miconexion,"ALTER TABLE analisis_terreno AUTO_INCREMENT=1");
    $resultado=consulta($miconexion,"INSERT INTO `analisis_terreno`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`,`id_user_analisis`)
    values('$nombre_c','$tipo','$cantidad_c','$precio_c','{$_SESSION['id_usuario']}')");

    if($resultado){
//      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
    } 
      else {
        echo "Error al guardar los datos: " . $miconexion->error;
      }   

  }

  /*Guarda al seleccionar el Botón Alquilar */
  elseif( $tipo==="alquilar"){
    $nombre_a=$_POST['nombre'];
    $cantidad_a=$_POST['cantidad'];
    $precio_a=$_POST['precio'];
    $tiempo_a=$_POST['tiempo'];

  
    //hay que incrementar  desde donde elimina el usuario y asi aprobechar  todo los espacios de la tabla
    $verificacion=consulta($miconexion,"ALTER TABLE analisis_terreno AUTO_INCREMENT=1");
    //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
    $resultado=consulta($miconexion,"INSERT INTO `analisis_terreno`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_analisis`)
    values('$nombre_a','$tipo','$cantidad_a','$precio_a','$tiempo_a','{$_SESSION['id_usuario']}')");

      if($resultado){
  //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
        } 
          else {
            echo "Error al guardar los datos: " . $miconexion->error;
      }
  }


// 2 Funciones para guardar los datos en bd de la pagina paso2.html 
 
  /*Guarda al seleccionar el Botón Alquilar */
  elseif( $tipo==="alquilar_preparacion"){
    $nombre_a=$_POST['nombre'];
    $cantidad_a=$_POST['cantidad'];
    $precio_a=$_POST['precio'];
    $tiempo_a=$_POST['tiempo'];

  
    //hay que incrementar  desde donde elimina el usuario y asi aprobechar  todo los espacios de la tabla
    $verificacion=consulta($miconexion,"ALTER TABLE preparacion_terreno AUTO_INCREMENT=1");
    //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
    $resultado=consulta($miconexion,"INSERT INTO `preparacion_terreno`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_preparacion`)
    values('$nombre_a','$tipo','$cantidad_a','$precio_a','$tiempo_a','{$_SESSION['id_usuario']}')");

      if($resultado){
  //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
        } 
          else {
            echo "Error al guardar los datos: " . $miconexion->error;
      }
  }

  /* Guarda al seleccionar el Botón comprar */
  if( $tipo==="comprar_preparacion"){
  
    $nombre_c=$_POST['nombre_c'];
    $cantidad_c=$_POST['cantidad_c'];
    $precio_c=$_POST['precio_c'];
    
  
    $verificaci=consulta($miconexion,"ALTER TABLE preparacion_terreno AUTO_INCREMENT=1");
    $resultado=consulta($miconexion,"INSERT INTO `preparacion_terreno`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`,`id_user_preparacion`)
    values('$nombre_c','$tipo','$cantidad_c','$precio_c','{$_SESSION['id_usuario']}')");

    if($resultado){
//      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
    } 
      else {
        echo "Error al guardar los datos: " . $miconexion->error;
      }   

  }
  elseif( $tipo==="Semillas"){
   
    $precio_a=$_POST['precio'];
   

  
    //hay que incrementar  desde donde elimina el usuario y asi aprobechar  todo los espacios de la tabla
    $verificacion=consulta($miconexion,"ALTER TABLE preparacion_terreno AUTO_INCREMENT=1");
    //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
    $resultado=consulta($miconexion,"INSERT INTO `preparacion_terreno`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_preparacion`)
    values('$precio_a','{$_SESSION['id_usuario']}')");

      if($resultado){
  //      echo '<script  language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
        } 
          else {
            echo "Error al guardar los datos: " . $miconexion->error;
      }
  }

  /* Guarda al seleccionar el Botón comprar */
  if( $tipo==="fertilizacion"){
  
    $nombre_c=$_POST['nombre_c'];
    $cantidad_c=$_POST['cantidad_c'];
    $unidad_medida=$_POST['unidad_medida'];
    $precio_c=$_POST['precio_c'];
    
  
    $verificaci=consulta($miconexion,"ALTER TABLE preparacion_terreno AUTO_INCREMENT=1");
    $resultado=consulta($miconexion,"INSERT INTO `preparacion_terreno`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`,`id_user_preparacion`)
    values('$nombre_c','$tipo','$cantidad_c','$precio_c','{$_SESSION['id_usuario']}')");

    if($resultado){
//      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
    } 
      else {
        echo "Error al guardar los datos: " . $miconexion->error;
      }   

  }

?>



