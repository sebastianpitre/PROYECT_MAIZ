<?php
    session_start();
        $analisis_terreno = $_SESSION['analisis_terreno'];
        $preparacion = $_SESSION['preparacion'];
        $siembra =  $_SESSION['siembra'];
        $fertilizacion = $_SESSION['fertilizacion'];
        $cosecha = $_SESSION['cosecha'];
        $pos_cosecha = $_SESSION['pos_cosecha'];
        $comercializar = $_SESSION['comercializar'];

        //resultado de TODOS los procesod
        $total_proceso = $analisis_terreno+$preparacion+$siembra+$fertilizacion+$cosecha+$pos_cosecha+$comercializar;
       if($total_proceso>0){
        $porcentaje_analisis_terreno=number_format(($analisis_terreno/$total_proceso)*100,2) ;
        $porcentaje_preparacion=number_format(($preparacion/$total_proceso)*100,2) ;
        $porcentaje_siembra=number_format(($siembra/$total_proceso)*100,2) ;
        $porcentaje_fertilizacion=number_format(($fertilizacion/$total_proceso)*100,2) ;
        $porcentaje_cosecha=number_format(($cosecha/$total_proceso)*100,2) ;
        $porcentaje_pos_cosecha=number_format(($pos_cosecha/$total_proceso)*100,2) ;
        $porcentaje_comencializar=number_format(($comercializar/$total_proceso)*100,2) ;
        }else{
            $porcentaje_analisis_terreno=0 ;
            $porcentaje_preparacion=0 ;
            $porcentaje_siembra=0 ;
            $porcentaje_fertilizacion=0 ;
            $porcentaje_cosecha=0  ;
            $porcentaje_pos_cosecha=0 ;
            $porcentaje_comencializar=0 ;

        }
        $valores_resultado = array(
            'valor_analisis' => $analisis_terreno,
            'valor_preparacion' => $preparacion,
            'valor_siembra' => $siembra,
            'valor_fertilizacion' => $fertilizacion ,
            'valor_cosecha' => $cosecha ,
            'valor_pos_cosecha' => $pos_cosecha ,
            'valor_comercializar' => $comercializar,
            'valor_total_proceso' => $total_proceso,
            'v_analisis' => $porcentaje_analisis_terreno,
            'v_preparacion' => $porcentaje_preparacion,
            'v_siembra' => $porcentaje_siembra,
            'v_fertilizacion' => $porcentaje_fertilizacion ,
            'v_cosecha' => $porcentaje_cosecha ,
            'v_pos_cosecha' => $porcentaje_pos_cosecha ,
            'v_comercializar' => $porcentaje_comencializar
        
          ); 
        
          // Devolvemos los valores como un JSON
          header('Content-Type: application/json');
          echo json_encode($valores_resultado);
?>