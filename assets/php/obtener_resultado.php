<?php
    session_start();
        $analisis_terreno = $_SESSION['analisis_terreno'];
        $preparacion = $_SESSION['preparacion'];
        $siembra = 0;
        $fertilizacion = $_SESSION['fertilizacion'];
        $cosecha = $_SESSION['cosecha'];
        $pos_cosecha = $_SESSION['pos_cosecha'];
        $comercializar = $_SESSION['comercializar'];

        //resultado de TODOS los procesod
        $total_proceso = $analisis_terreno+$preparacion+$siembra+$fertilizacion+$cosecha+$pos_cosecha+$comercializar;
       
        $valores_resultado = array(
            'valor_analisis' => $analisis_terreno,
            'valor_preparacion' => $preparacion,
            'valor_siembra' => $siembra,
            'valor_fertilizacion' => $fertilizacion ,
            'valor_cosecha' => $cosecha ,
            'valor_pos_cosecha' => $pos_cosecha ,
            'valor_comercializar' => $comercializar,
            'valor_total_proceso' => $total_proceso

        
        
          );
        
          // Devolvemos los valores como un JSON
          header('Content-Type: application/json');
          echo json_encode($valores_resultado);
?>