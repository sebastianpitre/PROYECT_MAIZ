<?php
    function conectar_bd($clave,$basedatos)
    {
        $conexion = new mysqli("127.0.0.1", "root", $clave, $basedatos);
      
        /* comprobar la conexión */
        if (mysqli_connect_errno()) {
            printf("Falló la conexión: %s\n", mysqli_connect_error());
            die('con conexion('.$conexion->connect_errno .')'.$mysqli->connect_error);
        }
        return $conexion;
    }
    function consulta($conexion,$consulta_sql)
    {
        
            $resultado=$conexion->query($consulta_sql);
        

            if (!$resultado) {

            echo 'no se pudo  ejecutar consultar'.$conexion->error;
            exit;
        }
        return $resultado;
    }
?>