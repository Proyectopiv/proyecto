<?php 
include 'conexion.php'

$usuarios = $mysqli->query("SELECT CODIGO_ROL 
	FROM usuariosroles
	WHERE NOMBRE_USUARIO = '".$_POST['usuariolg']."'
	AND CLAVE = '".$_POST['passlg']."'");

if ($usuarios->num_rows == 0) {
	$dato = $usuarios->fetch_assoc();
	echo json_encode(array('error' => false, 'tipo' => $dato['CODIGO_ROL']));
}else{
	echo json_encode(array('error' => true));
}endif

$mysqli->close();
?>