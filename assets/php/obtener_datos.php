<?php
session_start();
include('funciones.php');

  // Creamos un array con los valores
  $miconexion = conectar_bd('', 'bd_cultivomaiz');
  $busqueda=consulta($miconexion,"SELECT * FROM usuario WHERE id_usuario like '{$_SESSION['id_usuario']}'");
  
  /*         echo"***************+++++++++++++++++++++++*****************************",$_SESSION['nusuario'];*/
  $fila1 = $busqueda->fetch_object(); 
  $nombre =$fila1->nombre_u;
  $id_usuario = $fila1->id_usuario;

 
  $busqueda2=consulta($miconexion,"SELECT * FROM cronograma WHERE id_user_cronograma like $id_usuario");

  $fila3 = $busqueda2->fetch_object(); 
  $fecha_inicial=$fila3->fecha_inicial;


  // Creamos un array con los valores
  $valores = array(
    'valor1' => $nombre,
    'valor2' => $fecha_inicial


  );

  // Devolvemos los valores como un JSON
  header('Content-Type: application/json');
  echo json_encode($valores);
      
?>