<?php
    // Obtener la información enviada por la solicitud AJAX
    include('funciones.php');
   
    
 
        $seleccionados = $_POST["valores"];
        $miconexion=conectar_bd('', 'bd_cultivomaiz');

        $consulta=consulta($miconexion,"DELETE FROM `analisis_terreno` WHERE  id like '$seleccionados'");

        $consulta=consulta($miconexion,"DELETE FROM `preparacion_terreno` WHERE  id_terreno like '$seleccionados'");
        
        $consulta=consulta($miconexion,"DELETE FROM `fertilizacion` WHERE  id_fertilizacion like '$seleccionados'");

        $consulta=consulta($miconexion,"DELETE FROM `cosecha` WHERE  id_cosecha like '$seleccionados'");

        $consulta=consulta($miconexion,"DELETE FROM `pos_cosecha` WHERE  id_pos_cosecha like '$seleccionados'");
  
        $consulta=consulta($miconexion,"DELETE FROM `comercializar` WHERE  id_comercializar like '$seleccionados'");

         
       

    
        
?>
