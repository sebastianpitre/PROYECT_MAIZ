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

  $busqueda1=consulta($miconexion,"SELECT * FROM terreno WHERE id_user like $id_usuario");

  $fila2 = $busqueda1->fetch_object(); 
  $busqueda2=consulta($miconexion,"SELECT * FROM proceso_siembra WHERE id_user_siembra like $id_usuario");

  $fila3 = $busqueda2->fetch_object(); 
  $precio_sembrar=$fila3->precio_semilla;
  $nombre_producto=$fila3->nombre_producto;

  $area = $fila2->area;
  $dist_surcos = $fila2->surcos;
  $dist_semillas = $fila2->distancia;
  $dist_semillasm = intval($dist_semillas)/100;
  $dist_surcosm = intval($dist_surcos)/100;
  $cant_plantas = round(intval($area)/($dist_semillasm*$dist_surcosm));
  $cant_obtenida = (($cant_plantas*300)/1000);
  $cant_sembrar = intval($cant_plantas*3*4)/(10000)." Kg";
  
  $cant_sembrar1 = intval($cant_plantas*3*4)/(10000);
  $area=$area = intval($area*1);
  $area=$area ." m²";
  $dist_semillas = $dist_semillas ." cm";
  $dist_surcos = $dist_surcos ." cm";
  $cant_obtenida = round($cant_obtenida/1000)." T";

  $precio_sembrar1 = intval($precio_sembrar);
  $precio_sembrar ="$". intval($precio_sembrar);
  $respuesta_valor_maiz_valor_maiz = "$".$cant_sembrar1 * $precio_sembrar1;

  // Creamos un array con los valores
  $valores = array(
    'valor1' => $nombre,
    'valor2' => $area,
    'valor3' => $dist_surcos,
    'valor4' => $dist_semillas,
    'valor5' => $cant_plantas,
    'valor6' => $cant_obtenida,
    'valor7' => $cant_sembrar,
    'valor8' => $precio_sembrar,
    'valor9' => $respuesta_valor_maiz_valor_maiz,
    'valor10' => $nombre_producto


  );

  // Devolvemos los valores como un JSON
  header('Content-Type: application/json');
  echo json_encode($valores);
      
?>