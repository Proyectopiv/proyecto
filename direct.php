<?php
  session_start();
  if($_SESSION['CODIGO_ROL'] == 'Administrador del sistema'){
    header('location: ../index_sistema.php');
  }else if($_SESSION['CODIGO_ROL'] == 'Administrador de la unidad'){
    header('location: ../index_unidad.php');
  }
 ?>
