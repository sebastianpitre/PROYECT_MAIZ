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
    $fila0=$verificacion0->fetch_object(); 
    $valor=$fila0->max_id;
    $valor=$valor+1;
    $username="user".$valor;;
    

  }else{
      $fila0=$verificacion0->fetch_object(); 
      $valor=$fila0->max_id;
      $valor=$valor+1;
      $username="user".$valor;

    }

  //$verificacion0=$verificacion0+1;

  
  if ($valor>0 ) {  
    //+$row0;//$_POST[''];
    // $password=$_POST[''];
    $resultado=consulta($miconexion,"INSERT INTO `usuario`( `nombre_u`)
    values('$username')");
  
    if($resultado){
        $_SESSION['username']=$username;
        echo"inciciando sesion  '{$_SESSION['username']}'";
        echo '<script language="javascript">alert("para confirmar presione aceptar");window.location.href="../../pages/paso1.html"</script>';
        echo"inciciando sesion";
      } else {
          echo "Error al guardar los datos: " . $miconexion->error;
      }
  }
}
?>