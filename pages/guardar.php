

<?php
  include('funciones.php');
// Obtener el dato enviado desde JavaScript
$tipo = $_POST['tipo'];




    /* Guarda al seleccionar el Botón comprar */
    if( $tipo==="comprar"){
      


      $nombre_c=$_POST['nombre_c'];
      $cantidad_c=$_POST['cantidad_c'];
      $precio_c=$_POST['precio_c'];
      $miconexion=conectar_bd('', 'bd_cultivomaiz');
      $resultado=consulta($miconexion,"INSERT INTO `inventario`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`)
      values('$nombre_c','$tipo','$cantidad_c','$precio_c')");

      if($resultado){
        echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
      } 
        else {
          echo "Error al guardar los datos: " . $miconexion->error;
        }   

    }elseif( $tipo==="alquilar"){
     
      $nombre_a=$_POST['nombre'];
      $cantidad_a=$_POST['cantidad'];
      $precio_a=$_POST['precio'];
      $tiempo_a=$_POST['tiempo'];
      $miconexion=conectar_bd('', 'bd_cultivomaiz');
      //hay que incrementar  desde donde elimina el usuario y asi aprobechar  todo los espacios de la tabla
      $verificacion=consulta($miconexion,"ALTER TABLE usuario AUTO_INCREMENT=1");
      //codigo por realizar cambiandoel 1 por un valor de la consulta cuando se valide cuales el valor max
      $resultado=consulta($miconexion,"INSERT INTO `inventario`( `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`)
      values('$nombre_a','$tipo','$cantidad_a','$precio_a','$tiempo_a')");

        if($resultado){
          echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="paso1.php"</script>';
          } 
            else {
              echo "Error al guardar los datos: " . $miconexion->error;
        }
    }

?>
