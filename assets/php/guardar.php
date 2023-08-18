

<?php
session_start();
  include('funciones.php');
  $miconexion=conectar_bd('', 'bd_cultivomaiz');

  // Obtener el dato enviado desde JavaScript
  $hectarea = $_POST['hectareas'];
  $condicion = $_POST['condicion'];
  $cronograma = $_POST['cronograma'];
 
  /* Guarda al seleccionar el Botón comprar 909 =hectareas*/
  if( $condicion==="hectarea"){
    $cotizar = $_POST['cotizar'];
    $hectarea=$_POST['hectareas'];     
    $cronograma = $_POST['cronograma'];
    $resultado=consulta($miconexion,"UPDATE `terreno` SET `area`='$hectarea',`cotizar_lab`='$cotizar' WHERE `id_user`LIKE '{$_SESSION['id_usuario']}'");
    $resultado_fecha=consulta($miconexion,"UPDATE `cronograma` SET `fecha_inicial`='$cronograma' WHERE `id_user_cronograma`LIKE '{$_SESSION['id_usuario']}'");
 
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
  elseif( $tipo==="siembra"){
   
    $precio_a=$_POST['precio'];
    $nombre=$_POST['nombre'];

    //hay que incrementar  desde donde elimina el usuario y asi aprobechar  todo los espacios de la tabla
    $verificacion=consulta($miconexion,"ALTER TABLE proceso_siembra AUTO_INCREMENT=1");
    //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
    $busqueda1=consulta($miconexion,"SELECT * FROM terreno WHERE id_user like '{$_SESSION['id_usuario']}'");
    $fila2 = $busqueda1->fetch_object();
    $area = $fila2->area;
    $dist_surcos = $fila2->surcos;
    $dist_semillas = $fila2->distancia;

    $dist_semillasm = intval($dist_semillas)/100;
    $dist_surcosm = intval($dist_surcos)/100;
    $cant_plantas = round(intval($area)/($dist_semillasm*$dist_surcosm));
    $cant_obtenida = (($cant_plantas*100)/1000);
    $cant_sembrar = number_format(intval($cant_plantas*3)/(10000),2)." Kg";
    
    $cant_sembrar1 = intval($cant_plantas*3)/(10000);
   
    $precio_sembrar1 = intval($precio_a);
   
    $respuesta_valor_maiz1 =  number_format($cant_sembrar1 * $precio_sembrar1,2);
   
 
    $resultado=consulta($miconexion,"UPDATE `proceso_siembra` SET `nombre_producto`='$nombre',`precio_semilla`='$precio_a',`valor_semilla`='$respuesta_valor_maiz1',`valor_tonelada`='$cant_obtenida'WHERE `id_user_siembra`LIKE '{$_SESSION['id_usuario']}'");



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

//-------------------------------------------------------------------------------------------------------------------------

//  Funciones para guardar los datos en bd de la pagina paso4.html 
 
  /*Guarda al seleccionar el Botón Alquilar */
  elseif( $tipo==="alquilar_fertilizacion"){
    $nombre_a=$_POST['nombre'];
    $cantidad_a=$_POST['cantidad'];
    $precio_a=$_POST['precio'];
    $tiempo_a=$_POST['tiempo'];

  
    //hay que incrementar  desde donde elimina el usuario y asi aprobechar  todo los espacios de la tabla
    $verificacion=consulta($miconexion,"ALTER TABLE fertilizacion AUTO_INCREMENT=1");
    //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
    $resultado=consulta($miconexion,"INSERT INTO `fertilizacion`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_fertilizacion`)
    values('$nombre_a','$tipo','$cantidad_a','$precio_a','$tiempo_a','{$_SESSION['id_usuario']}')");

      if($resultado){
  //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
        } 
          else {
            echo "Error al guardar los datos: " . $miconexion->error;
      }
  }

  /* Guarda al seleccionar el Botón comprar */
  if( $tipo==="comprar_fertilizacion"){
  
    $nombre_c=$_POST['nombre_c'];
    $cantidad_c=$_POST['cantidad_c'];
    $precio_c=$_POST['precio_c'];
    
  
    $verificaci=consulta($miconexion,"ALTER TABLE fertilizacion AUTO_INCREMENT=1");
    $resultado=consulta($miconexion,"INSERT INTO `fertilizacion`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`,`id_user_fertilizacion`)
    values('$nombre_c','$tipo','$cantidad_c','$precio_c','{$_SESSION['id_usuario']}')");

    if($resultado){
//      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
    } 
      else {
        echo "Error al guardar los datos: " . $miconexion->error;
      }   

  }



//  Funciones para guardar los datos en bd de la pagina paso5.html 
 
  /*Guarda al seleccionar el Botón Alquilar */
  elseif( $tipo==="alquilar_cosecha"){
    $nombre_a=$_POST['nombre'];
    $cantidad_a=$_POST['cantidad'];
    $precio_a=$_POST['precio'];
    $tiempo_a=$_POST['tiempo'];

  
    //hay que incrementar  desde donde elimina el usuario y asi aprobechar  todo los espacios de la tabla
    $verificacion=consulta($miconexion,"ALTER TABLE cosecha AUTO_INCREMENT=1");
    //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
    $resultado=consulta($miconexion,"INSERT INTO `cosecha`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_cosecha`)
    values('$nombre_a','$tipo','$cantidad_a','$precio_a','$tiempo_a','{$_SESSION['id_usuario']}')");

      if($resultado){
  //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
        } 
          else {
            echo "Error al guardar los datos: " . $miconexion->error;
      }
  }

  /* Guarda al seleccionar el Botón comprar */
  if( $tipo==="comprar_cosecha"){
  
    $nombre_c=$_POST['nombre_c'];
    $cantidad_c=$_POST['cantidad_c'];
    $precio_c=$_POST['precio_c'];
    
  
    $verificaci=consulta($miconexion,"ALTER TABLE cosecha AUTO_INCREMENT=1");
    $resultado=consulta($miconexion,"INSERT INTO `cosecha`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`,`id_user_cosecha`)
    values('$nombre_c','$tipo','$cantidad_c','$precio_c','{$_SESSION['id_usuario']}')");

    if($resultado){
//      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
    } 
      else {
        echo "Error al guardar los datos: " . $miconexion->error;
      }   

  } 




  //  Funciones para guardar los datos en bd de la pagina paso6.html 
 
  /*Guarda al seleccionar el Botón Alquilar */
  elseif( $tipo==="alquilar_pos_cosecha"){
    $nombre_a=$_POST['nombre'];
    $cantidad_a=$_POST['cantidad'];
    $precio_a=$_POST['precio'];
    $tiempo_a=$_POST['tiempo'];

  
    //hay que incrementar  desde donde elimina el usuario y asi aprobechar  todo los espacios de la tabla
    $verificacion=consulta($miconexion,"ALTER TABLE pos_cosecha AUTO_INCREMENT=1");
    //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
    $resultado=consulta($miconexion,"INSERT INTO `pos_cosecha`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_pos_cosecha`)
    values('$nombre_a','$tipo','$cantidad_a','$precio_a','$tiempo_a','{$_SESSION['id_usuario']}')");

      if($resultado){
  //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
        } 
          else {
            echo "Error al guardar los datos: " . $miconexion->error;
      }
  }

  /* Guarda al seleccionar el Botón comprar */
  if( $tipo==="comprar_pos_cosecha"){
  
    $nombre_c=$_POST['nombre_c'];
    $cantidad_c=$_POST['cantidad_c'];
    $precio_c=$_POST['precio_c'];
    
  
    $verificaci=consulta($miconexion,"ALTER TABLE pos_cosecha AUTO_INCREMENT=1");
    $resultado=consulta($miconexion,"INSERT INTO `pos_cosecha`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`,`id_user_pos_cosecha`)
    values('$nombre_c','$tipo','$cantidad_c','$precio_c','{$_SESSION['id_usuario']}')");

    if($resultado){
//      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
    } 
      else {
        echo "Error al guardar los datos: " . $miconexion->error;
      }   

  }



  //  Funciones para guardar los datos en bd de la pagina paso7.html 
 
 /*Guarda al seleccionar el Botón Alquilar */
 elseif( $tipo==="alquilar_comercializar"){
  $nombre_a=$_POST['nombre'];
  $cantidad_a=$_POST['cantidad'];
  $precio_a=$_POST['precio'];
  $tiempo_a=$_POST['tiempo'];


  //hay que incrementar  desde donde elimina el usuario y asi aprobechar  todo los espacios de la tabla
  $verificacion=consulta($miconexion,"ALTER TABLE comercializar AUTO_INCREMENT=1");
  //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
  $resultado=consulta($miconexion,"INSERT INTO `comercializar`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user_comercializar`)
  values('$nombre_a','$tipo','$cantidad_a','$precio_a','$tiempo_a','{$_SESSION['id_usuario']}')");

    if($resultado){
//      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
      } 
        else {
          echo "Error al guardar los datos: " . $miconexion->error;
    }
}

/* Guarda al seleccionar el Botón comprar */
if( $tipo==="comprar_comercializar"){

  $nombre_c=$_POST['nombre_c'];
  $cantidad_c=$_POST['cantidad_c'];
  $precio_c=$_POST['precio_c'];
  

  $verificaci=consulta($miconexion,"ALTER TABLE comercializar AUTO_INCREMENT=1");
  $resultado=consulta($miconexion,"INSERT INTO `comercializar`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`,`id_user_comercializar`)
  values('$nombre_c','$tipo','$cantidad_c','$precio_c','{$_SESSION['id_usuario']}')");

  if($resultado){
//      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
  } 
    else {
      echo "Error al guardar los datos: " . $miconexion->error;
    }   

}

?>



