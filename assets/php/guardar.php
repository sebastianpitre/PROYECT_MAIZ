

<?php
session_start();
  include('funciones.php');
// Obtener el dato enviado desde JavaScript
  $hectarea = $_POST['hectareas'];
  $condicion = $_POST['condicion'];
  //$cotizar = $_POST['cotizar'];
  echo"hola cartacol .$hectarea";
  /* Guarda al seleccionar el Botón comprar 909 =hectareas*/
  if( $condicion==="hectarea"){
    $hectarea=$_POST['hectareas'];
    $miconexion=conectar_bd('', 'bd_cultivomaiz');
    $resultado=consulta($miconexion,"UPDATE `terreno` SET `area`='$hectarea' WHERE `id_user`LIKE '{$_SESSION['id_usuario']}'");
    //$resultado=consulta($miconexion,"INSERT INTO `inventario`( `subtotal_alquiler`)
    //values('$cotizar')");
  }
 

 

  $tipo = $_POST['tipo_transaccion'];

  /* Guarda al seleccionar el Botón comprar */
  if( $tipo==="comprar"){
   // $cotizar = $_POST['cotizar'];  
    $nombre_c=$_POST['nombre_c'];
    $cantidad_c=$_POST['cantidad_c'];
    $precio_c=$_POST['precio_c'];
    
    $miconexion=conectar_bd('', 'bd_cultivomaiz');
    $verificaci=consulta($miconexion,"ALTER TABLE inventario AUTO_INCREMENT=1");
    $resultado=consulta($miconexion,"INSERT INTO `inventario`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`,`id_user1`)
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

    $miconexion=conectar_bd('', 'bd_cultivomaiz');
    //hay que incrementar  desde donde elimina el usuario y asi aprobechar  todo los espacios de la tabla
    $verificacion=consulta($miconexion,"ALTER TABLE inventario AUTO_INCREMENT=1");
    //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
    $resultado=consulta($miconexion,"INSERT INTO `inventario`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`,`id_user1`)
    values('$nombre_a','$tipo','$cantidad_a','$precio_a','$tiempo_a','{$_SESSION['id_usuario']}')");

      if($resultado){
  //      echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
        } 
          else {
            echo "Error al guardar los datos: " . $miconexion->error;
      }
  }

?>
