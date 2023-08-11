<?php
    // Obtener la información enviada por la solicitud AJAX
    include('funciones.php');
   
    
 
        $seleccionados = $_POST["valores"];
        $miconexion=conectar_bd('', 'bd_cultivomaiz');

        $consulta=consulta($miconexion,"DELETE FROM `analisis_terreno` WHERE  id like '$seleccionados'");

        $consulta=consulta($miconexion,"DELETE FROM `preparacion_terreno` WHERE  id_terreno like '$seleccionados'");

          
     
         
       

    
        
?>
