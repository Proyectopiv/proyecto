<link href="./css/estilo1.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

<div class="nav-side-menu">
    <div class="brand">Administrador de la unidad</div>
    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
        <div class="menu-list">
            <ul id="menu-content" class="menu-content collapse out">
                <li>
                  <a>
                  <i class="fa fa-dashboard fa-lg"></i> Menu
                  </a>
                </li>
                <li  data-toggle="collapse" data-target="#products" class="collapsed active">
                  <a><i class="glyphicon glyphicon-bullhorn"></i> Gestionar <span class="glyphicon glyphicon-chevron-right"></span></a>
                </li>
                <ul class="sub-menu collapse" id="products">
                    <li class="active"><a href="./index_PAZ.html">Gestionar Apartamento</a></li>
                    <li><a href="./index_PAZ.html">Gestionar Propietarios</a></li>
                    <li><a href="./index_PAZ.html">Gestionar Zonas publicas</a></li>
                </ul>
                <li data-toggle="collapse" data-target="#service" class="collapsed">
                  <a href="./actualizacion_datos.php"><i class="glyphicon glyphicon-refresh"></i>Actualizar datos del usuario</a>
                </li> 
                <li  data-toggle="collapse" data-target="#products" class="collapsed active">
                  <a><i class="glyphicon glyphicon-plus"></i> Registrar <span class="glyphicon glyphicon-chevron-right"></span></a>
                </li>
                <ul class="sub-menu collapse" id="products">
                    <li class="active"><a href="./index_IVMA.html">Registrar Inquilinos</a></li>
                    <li><a href="./index_IVMA.html">Registo alquiler de zonas publicas</a></li>
                    <li><a href="./index_IVMA.html">Registro de vehiculos por apartamento</a></li>
                    <li><a href="./index_IVMA.html">Registro de movimiento de vehiculos</a></li>
                </ul> 
            </ul>
     </div>
</div>
