<?php
    // Obtener la información enviada por la solicitud AJAX
    include('funciones.php');
    $eliminar=$_POST['eliminar'];
    echo"$eliminar";
    $miconexion=conectar_bd('', 'bd_cultivomaiz');
    
    $consulta=consulta($miconexion,"DELETE FROM `inventario` WHERE  id like '$eliminar'");    
        
?>
