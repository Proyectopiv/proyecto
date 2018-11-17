<?php
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
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
<!--	<center>
          <div id="carousel" class="carousel slide" data-ride="carousel">
          <p class="text-center h1"></p>
          <ol class="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
          <div class="carousel-item active">
          <img class="d-block w-800" src="./imagenes/imagen1.png" alt="First slide">
          </div>
          <div class="carousel-item">
          <img class="d-block w-800" src="./imagenes/imagen2.png" alt="Second slide">
          </div>
          <div class="carousel-item">
          <img class="d-block w-800" src="./imagenes/imagen3.png" alt="Third slide">
          </div>
          </div>
          <a class="carousel-control-prev" href="#" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
          </a>
          </div>
          </center> -->
          <center>
          	<h1 class="display-4"></h1>
	  		<h1 class="display-4">Gracias, vuelva pronto</h1>
	  			<a href="inicio.php" class="btn btn-primary">Ir a Inicio</a>
	  		</center>
		</div>
	</div>
</body>
<?php
	session_destroy();
?>
