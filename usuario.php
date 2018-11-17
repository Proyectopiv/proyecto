<?php
  require_once('conexion.php');
  class Usuario extends Conexion {
    public function login($user, $clave)
    {
     
      parent::conectar();
      $user  = parent::salvar($user);
      $clave = parent::salvar($clave);
      $consulta = 'select CODIGO_USUROL, CODIGO_ROL from usuariosroles where NOMBRE_USUARIO="'.$user.'" AND CLAVE= "'.$clave.'"';
      $verificar_usuario = parent::verificarRegistros($consulta);
      if($verificar_usuario > 0){
        $user = parent::consultaArreglo($consulta);
        session_start();
        $_SESSION['CODIGO_USUROL'] = $user['CODIGO_USUROL'];
        $_SESSION['CODIGO_ROL']  = $user['CODIGO_ROL'];
        if($_SESSION['CODIGO_ROL'] == 'Administrador del sistema'){
          echo './index_sistema.php';
        }else if($_SESSION['CODIGO_ROL'] == 'Administrador de la unidad'){
          echo './index_unidad.php';
        }
      }else{
        echo 'error_3';
      }
      parent::cerrar();
    }

  }
?>
