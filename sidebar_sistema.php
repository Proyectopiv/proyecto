<link href="./css/estilo1.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

<div class="nav-side-menu">
    <div class="brand">Administrador del sistema</div>
    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
        <div class="menu-list">
            <ul id="menu-content" class="menu-content collapse out">
                <li>
                  <a>
                  <i class="fa fa-dashboard fa-lg"></i> Menu
                  </a>
                </li>
                <li  data-toggle="collapse" data-target="#products" class="collapsed active">
                  <a><i class="glyphicon glyphicon-home"></i> Condominios <span class="glyphicon glyphicon-chevron-right"></span></a>
                </li>
                <ul class="sub-menu collapse" id="products">
                    <li class="active"><a href="./index_cdu.html">Gestionar Ciudades</a></li>
                    <li><a href="./index_cdu.html">Gestionar departamentos</a></li>
                    <li><a href="./index_cdu.html">Gestionar Unidades residenciales</a></li>
                </ul>
                <li data-toggle="collapse" data-target="#service" class="collapsed">
                  <a href="./actualizacion_datos.php"><i class="glyphicon glyphicon-refresh"></i>Actualizar datos del usuario</a>
                </li> 
                <li data-toggle="collapse" data-target="#service" class="collapsed">
                  <a href="./index_rol.html"><i class="glyphicon glyphicon-user"></i> Gestionar Roles</a>
                </li>  
            </ul>
     </div>
</div>