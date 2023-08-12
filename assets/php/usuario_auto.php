<?php

session_start();

include('funciones.php');
$enviar=0;
$eliminar=0;

if ($_SERVER['REQUEST_METHOD']==='POST') { 
  $miconexion = conectar_bd('', 'bd_cultivomaiz');
  $verificacion0=consulta($miconexion,"SELECT MAX(id_usuario) as max_id from usuario");
  if ($verificacion0){
    $verificacion=consulta($miconexion,"ALTER TABLE usuario AUTO_INCREMENT=1");
    $verificaci=consulta($miconexion,"ALTER TABLE terreno AUTO_INCREMENT=1");
    $fila0=$verificacion0->fetch_object(); 
    $valor=$fila0->max_id;
    $valor=$valor+1;
    $username="User" . $valor;
    

  }else{
      $fila0=$verificacion0->fetch_object(); 
      $valor=$fila0->max_id;
      $valor=$valor+1;
      $username="user".$valor;

    }

  //$verificacion0=$verificacion0+1;

  
  if ($valor>0 ) {  
    //+$row0;//$_POST[''];
    // $password=$_POST[''];SELECT * FROM terreno WHERE id_user
    $resultado=consulta($miconexion,"INSERT INTO `usuario`( `nombre_u`)
    values('$username')");
   $resultado2=consulta($miconexion,"INSERT INTO `terreno`(`surcos`,`distancia`,`id_user`)
   values(75,25,'$valor')");
   $resultado3=consulta($miconexion,"INSERT INTO `proceso_siembra`(`precio_semilla`,`id_user_siembra`)
  values(0,'$valor')");
if($resultado){
        $_SESSION['username']=$username;
        $_SESSION['id_usuario']=$valor;
        echo"inciciando sesion  '{$_SESSION['id_usuario']}'";
        echo '<script language="javascript">window.location.href="../../pages/paso1.html"</script>';
        echo"inciciando sesion";
      } else {
          echo "Error al guardar los datos: " . $miconexion->error;
      }
  }
}
?>