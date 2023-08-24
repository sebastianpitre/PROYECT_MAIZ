<?php
session_start();

if (!isset($_SESSION['username'])) {
    include('funciones.php');
    $enviar = 0;
    $eliminar = 0;

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $miconexion = conectar_bd('', 'bd_cultivomaiz');
        $verificacion0 = consulta($miconexion, "SELECT MAX(id_usuario) as max_id from usuario");
        if ($verificacion0) {
            $verificacion = consulta($miconexion, "ALTER TABLE usuario AUTO_INCREMENT=1");
            $verificaci = consulta($miconexion, "ALTER TABLE terreno AUTO_INCREMENT=1");
            $verificacionf = consulta($miconexion, "ALTER TABLE cronograma AUTO_INCREMENT=1");
            $fila0 = $verificacion0->fetch_object();
            $valor = $fila0->max_id;
            $valor = $valor + 1;
            $username = "User" . $valor;

            $resultado = consulta($miconexion, "INSERT INTO `usuario`( `nombre_u`)
                values('$username')");
            $resultado2 = consulta($miconexion, "INSERT INTO `terreno`(`surcos`,`distancia`,`id_user`)
                values(90,15,'$valor')");
            $resultado3 = consulta($miconexion, "INSERT INTO `proceso_siembra`(`precio_semilla`,`id_user_siembra`)
                values(0,'$valor')");
            $resultadof = consulta($miconexion, "INSERT INTO `cronograma`(`id_user_cronograma`)
                values('$valor')");

            if ($resultado) {
                $_SESSION['username'] = $username;
                $_SESSION['id_usuario'] = $valor;
                $mensaje = '<div class="alert alert-success">Sesión iniciada para el usuario: <strong>' . $_SESSION['username'] . '</strong></div>';
                $redireccion = true;
            } else {
                $mensaje = '<div class="alert alert-danger">Error al guardar los datos: ' . $miconexion->error . '</div>';
                $redireccion = false;
            }
        }
    }
} else {
    $mensaje = '<div class="alert alert-info">Ya has iniciado sesión como: <strong>' . $_SESSION['username'] . '</strong></div>';
    $redireccion = true;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciando Sesión</title>
    <!-- Agrega el enlace al archivo CSS de Bootstrap -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="text-center">
            <h1>Iniciando Plan de cultivo</h1>
            <p>Tu contenido existente aquí.</p>
            <?php echo $mensaje; ?>
            <!-- Incluye un script para redirigir si se vuelve atrás -->
           
            <script>
                if (window.history.replaceState) {
                    window.history.replaceState(null, null, window.location.href = "../../pages/paso1.html");
                }
            </script>
        </div>
    </div>

    <!-- Agrega el enlace al archivo JS de Bootstrap (opcional) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    
</body>
</html>
