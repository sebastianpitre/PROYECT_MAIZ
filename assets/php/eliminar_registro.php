<?php
    // Obtener la información enviada por la solicitud AJAX
    include('funciones.php');
   
    
 
        $seleccionados = $_POST["valores"];
        $miconexion=conectar_bd('', 'bd_cultivomaiz');

          $consulta=consulta($miconexion,"DELETE FROM `inventario` WHERE  id like '$seleccionados'");
          
     
         
       

    
        
?>
