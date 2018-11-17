<?php 
if ($this->session->userdata('user')) {
	redirect('login.php');
}
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Unidad</title>
	<link rel="stylesheet" type="text/css" href="https:/stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"
   			integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  			crossorigin="anonymous"></script>
	<script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			console.log("Todo bien");
		})
	</script>
	
</head>

<body background="./imagenes/fondo.png"> 
		<?php include_once('navegacion_unidad.php'); 
		include_once ('sidebar_unidad.php') ?>
</body>