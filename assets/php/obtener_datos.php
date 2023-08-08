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
  $area = $fila2->area;
  $dist_surcos = $fila2->surcos;
  $dist_semillas = $fila2->distancia;
  $dist_semillasm = intval($dist_semillas)/100;
  $dist_surcosm = intval($dist_surcos)/100;
  $cant_plantas = round(intval($area)/($dist_semillasm*$dist_surcosm));
  $cant_obtenida = (($cant_plantas*300)/1000);
  $cant_sembrar = round(intval($cant_plantas*4*2)/(1000))." Kg";
  $area=$area = intval($area*1);
  $area=$area ." m²";
  $dist_semillas = $dist_semillas ." cm";
  $dist_surcos = $dist_surcos ." cm";
  $cant_obtenida = round($cant_obtenida/1000)." T";

  // Creamos un array con los valores
  $valores = array(
    'valor1' => $nombre,
    'valor2' => $area,
    'valor3' => $dist_surcos,
    'valor4' => $dist_semillas,
    'valor5' => $cant_plantas,
    'valor6' => $cant_obtenida,
    'valor7' => $cant_sembrar

  );

  // Devolvemos los valores como un JSON
  header('Content-Type: application/json');
  echo json_encode($valores);
      
?>