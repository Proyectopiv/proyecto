function Inicio(){

//Roles
	$("#opciones a").click(function(e){
     	e.preventDefault();
        url = $(this).attr("href");

        $.post( url, function(data) {
        		if(url!="#")
        			$("#contenedor").removeClass("hide");
        			$("#contenedor").addClass("show");
        			$("#titulo").html("Listado de Roles");
                	$("#contenido" ).html(data);
        });
     });

	$("#contenido").on("click","button.btncerrar",function(){
		$("#contenedor").removeClass("show");
       	$("#contenedor").addClass("hide");
	})

	$("#contenido").on("click","button.btncerrar2",function(){
		$("#titulo").html("Listado Roles");
		$( "#contenido" ).load("./php/usuariosroles/index.php");	
	})

	$("#contenido").on("click","a.borrar",function(){
		//Recupera datos del formulario
		var codigo = $(this).attr("codigo");
		if ( confirm("¿Realmente desea borrar el registro?")){		
			$.ajax({
        		method: "post",
            	url: "./php/usuariosroles/controladorUsuariosroles.php",
            	data: {codigo: codigo, accion:'borrar'},
            	dataType: "html"
        	})  .done(function( result ) {
        		$("#titulo").html("Listado Roles");
        		$( "#contenido" ).load("./php/usuariosroles/index.php");
        	});

		}
	});
	
	$("#contenido").on("click","a.editar",function(){
		$("#titulo").html("Editar Rol");
		//Recupera datos del fromulario
		var codigo = $(this).attr("codigo");
		$.ajax({
			type:"post",
			url:"./php/usuariosroles/editarUsuariosroles.php",
			data:"codigo=" + codigo,
			dataType:"html"
        	}) .done(function( result ) {
        		$("#contenido").html(result);
        	});
	});
	
	$("#contenido").on("click","button#actualizar",function(){

		$("#titulo").html("Listado Roles");
        var datos=$("#frol").serialize();
            $.ajax({
			type:"post",
			url:"./php/usuariosroles/controladorUsuariosroles.php",
			data: datos,
			dataType:"html"
        	}) .done(function( result ) {
        		$( "#contenido" ).load("./php/usuariosroles/index.php");
        	});
	});
	
	$("#contenido").on("click","button#nuevor",function(){
		$("#titulo").html("Nuevo Rol");
		$( "#contenido" ).load("./php/usuariosroles/nuevoUsuariosroles.php");	
	})
	
	$("#contenido").on("click","button#grabar",function(){
		var datos=$("#frol").serialize();
		$.ajax({
			type:"post",
			url:"./php/usuariosroles/controladorUsuariosroles.php",
			data:datos,
			dataType:"html",
			success:function(result){
				$("#titulo").html("Listado Roles");
				$("#contenido" ).load("./php/usuariosroles/index.php");
			}
		})
	});	
//Roles











//Municipios
$("#opciones b").click(function(b){
     	b.preventDefault();
        url = $(this).attr("href");

        $.post( url, function(data) {
        		if(url!="#")
        			$("#contenedor").removeClass("hide");
        			$("#contenedor").addClass("show");
        			$("#titulo").html("Listado de Municipios");
                	$("#contenido" ).html(data);
        });
     });

	$("#contenido").on("click","button.btncerrarm",function(){
		$("#contenedor").removeClass("show");
       	$("#contenedor").addClass("hide");
	})

	$("#contenido").on("click","button.btncerrar2m",function(){
		$("#titulo").html("Listado Municipios");
		$( "#contenido" ).load("./php/municipio/index.php");	
	})

	$("#contenido").on("click","b.borrar",function(){
		//Recupera datos del formulario
		var codigo = $(this).attr("codigo");
		if ( confirm("¿Realmente desea borrar el registro?")){		
			$.ajax({
        		method: "post",
            	url: "./php/municipio/controladorMunicipio.php",
            	data: {codigo: codigo, accion:'borrar'},
            	dataType: "html"
        	})  .done(function( result ) {
        		$("#titulo").html("Listado Municipios");
        		$( "#contenido" ).load("./php/municipio/index.php");
        	});

		}
	});
	
	$("#contenido").on("click","b.editar",function(){
		$("#titulo").html("Editar Municipio");
		//Recupera datos del fromulario
		var codigo = $(this).attr("codigo");
		$.ajax({
			type:"post",
			url:"./php/municipio/editarMunicipio.php",
			data:"codigo=" + codigo,
			dataType:"html"
        	}) .done(function( result ) {
        		$("#contenido").html(result);
        	});
	});
	
	$("#contenido").on("click","button#actualizarm",function(){
		
		$("#titulo").html("Listado Municipios");
        var datos=$("#fmunicipio").serialize();
            $.ajax({
			type:"post",
			url:"./php/municipio/controladorMunicipio.php",
			data: datos,
			dataType:"html"
        	}) .done(function( result ) {
        		$( "#contenido" ).load("./php/municipio/index.php");
        	});
	});
	
	$("#contenido").on("click","button#nuevom",function(){
		$("#titulo").html("Nuevo Municipio");
		$( "#contenido" ).load("./php/municipio/nuevoMunicipio.php");	
	})
	
	$("#contenido").on("click","button#grabarm",function(){
		
		var datos=$("#fmunicipio").serialize();
		console.log(datos);
		$.ajax({
			type:"post",
			url:"./php/municipio/controladorMunicipio.php",
			data:datos,
			dataType:"html",
			success:function(result){
				$("#titulo").html("Listado Municipios");
				$("#contenido" ).load("./php/municipio/index.php");
			}
		})
	});	
//Municipios

//Departamentos
	$("#opciones c").click(function(e){
     	e.preventDefault();
        url = $(this).attr("href");

        $.post( url, function(data) {
        		if(url!="#")
        			$("#contenedor").removeClass("hide");
        			$("#contenedor").addClass("show");
        			$("#titulo").html("Listado de departamentos");
                	$("#contenido" ).html(data);
        });
     });

	$("#contenido").on("click","button.btncerrard",function(){
		$("#contenedor").removeClass("show");
       	$("#contenedor").addClass("hide");
	})

	$("#contenido").on("click","button.btncerrar2d",function(){
		$("#titulo").html("Listado departamentos");
		$( "#contenido" ).load("./php/departamento/index.php");	
	})

	$("#contenido").on("click","c.borrar",function(){
		//Recupera datos del formulario
		var codigo = $(this).attr("codigo");
		if ( confirm("¿Realmente desea borrar el registro?")){		
			$.ajax({
        		method: "post",
            	url: "./php/departamento/controladorDepartamento.php",
            	data: {codigo: codigo, accion:'borrar'},
            	dataType: "html"
        	})  .done(function( result ) {
        		$("#titulo").html("Listado departamentos");
        		$( "#contenido" ).load("./php/departamento/index.php");
        	});

		}
	});
	
	$("#contenido").on("click","c.editar",function(){
		$("#titulo").html("Editar departamentos");
		//Recupera datos del fromulario
		var codigo = $(this).attr("codigo");
		$.ajax({
			type:"post",
			url:"./php/departamento/editarDepartamento.php",
			data:"codigo=" + codigo,
			dataType:"html"
        	}) .done(function( result ) {
        		$("#contenido").html(result);
        	});
	});
	
	$("#contenido").on("click","button#actualizard",function(){
		//		var comu_codi = $("#comu_codi").attr("value");
		//		var comu_nomb = $("#comu_nomb").attr("value");
		//		var muni_codi = $("#muni_codi").attr("value");
		//		var datos = "comu_codi="+comu_codi+"&comu_nomb="+comu_nomb+"&muni_codi="+muni_codi;
		
		$("#titulo").html("Listado departamentos");
        var datos=$("#fdepartamento").serialize();
            $.ajax({
			type:"post",
			url:"./php/departamento/controladorDepartamento.php",
			data: datos,
			dataType:"html"
        	}) .done(function( result ) {
        		$( "#contenido" ).load("./php/departamento/index.php");
        	});
	});
	
	$("#contenido").on("click","button#nuevod",function(){
		$("#titulo").html("Nuevo departamento");
		$( "#contenido" ).load("./php/departamento/nuevoDepartamento.php");	
	})
	
	$("#contenido").on("click","button#grabard",function(){
		/*var comu_codi = $("#comu_codi").attr("value");
		var comu_nomb = $("#comu_nomb").attr("value");
		var muni_codi = $("#muni_codi").attr("value");
		var datos = "comu_codi="+comu_codi+"&comu_nomb="+comu_nomb+"&muni_codi="+muni_codi;*/
		
		var datos=$("#fdepartamento").serialize();
	
		$.ajax({
			type:"post",
			url:"./php/departamento/controladorDepartamento.php",
			data:datos,
			dataType:"html",
			success:function(result){
				$("#titulo").html("Listado departamentos");
				$("#contenido" ).load("./php/departamento/index.php");
			}
		})
	});	
//Departamentos
}