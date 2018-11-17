function Inicio(){

//Ciudades
	$("#opciones a").click(function(e){
     	e.preventDefault();
        url = $(this).attr("href");

        $.post( url, function(data) {
        		if(url!="#")
        			$("#contenedor").removeClass("hide");
        			$("#contenedor").addClass("show");
        			$("#titulo").html("Listado de Ciudades");
                	$("#contenido" ).html(data);
        });
     });

	$("#contenido").on("click","button.btncerrar",function(){
		$("#contenedor").removeClass("show");
       	$("#contenedor").addClass("hide");
	})

	$("#contenido").on("click","button.btncerrar2",function(){
		$("#titulo").html("Listado Ciudades");
		$( "#contenido" ).load("./php/ciudad/index.php");	
	})

	$("#contenido").on("click","a.borrar",function(){
		//Recupera datos del formulario
		var codigo = $(this).attr("codigo");
		if ( confirm("¿Realmente desea borrar el registro?")){		
			$.ajax({
        		method: "post",
            	url: "./php/ciudad/controladorCiudad.php",
            	data: {codigo: codigo, accion:'borrar'},
            	dataType: "html"
        	})  .done(function( result ) {
        		$("#titulo").html("Listado Ciudades");
        		$( "#contenido" ).load("./php/ciudad/index.php");
        	});

		}
	});
	
	$("#contenido").on("click","a.editar",function(){
		$("#titulo").html("Editar Ciudad");
		//Recupera datos del fromulario
		var codigo = $(this).attr("codigo");
		$.ajax({
			type:"post",
			url:"./php/ciudad/editarCiudad.php",
			data:"codigo=" + codigo,
			dataType:"html"
        	}) .done(function( result ) {
        		$("#contenido").html(result);
        	});
	});
	
	$("#contenido").on("click","button#actualizar",function(){

		$("#titulo").html("Listado Ciudades");
        var datos=$("#fciudad").serialize();
            $.ajax({
			type:"post",
			url:"./php/ciudad/controladorCiudad.php",
			data: datos,
			dataType:"html"
        	}) .done(function( result ) {
        		$( "#contenido" ).load("./php/ciudad/index.php");
        	});
	});
	
	$("#contenido").on("click","button#nuevoc",function(){
		$("#titulo").html("Nueva Ciudad");
		$( "#contenido" ).load("./php/ciudad/nuevaCiudad.php");	
	})
	
	$("#contenido").on("click","button#grabarc",function(){

		var datos=$("#fciudad").serialize();
	
		$.ajax({
			type:"post",
			url:"./php/ciudad/controladorCiudad.php",
			data:datos,
			dataType:"html",
			success:function(result){
				$("#titulo").html("Listado Ciudades");
				$("#contenido" ).load("./php/ciudad/index.php");
			}
		})
	});	
//Ciudades

//Departamentos
	$("#opciones b").click(function(e){
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

	$("#contenido").on("click","button.btncerrar",function(){
		$("#contenedor").removeClass("show");
       	$("#contenedor").addClass("hide");
	})

	$("#contenido").on("click","button.btncerrar2",function(){
		$("#titulo").html("Listado departamentos");
		$( "#contenido" ).load("./php/departamento/index.php");	
	})

	$("#contenido").on("click","b.borrar",function(){
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
	
	$("#contenido").on("click","b.editar",function(){
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
	
	$("#contenido").on("click","button#actualizar",function(){
		
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
	
	$("#contenido").on("click","button#grabar",function(){
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

//Unidades
	$("#opciones d").click(function(e){
     	e.preventDefault();
        url = $(this).attr("href");

        $.post( url, function(data) {
        		if(url!="#")
        			$("#contenedor").removeClass("hide");
        			$("#contenedor").addClass("show");
        			$("#titulo").html("Listado de Unidades");
                	$("#contenido" ).html(data);
        });
     });

	$("#contenido").on("click","button.btncerrar",function(){
		$("#contenedor").removeClass("show");
       	$("#contenedor").addClass("hide");
	})

	$("#contenido").on("click","button.btncerrar2",function(){
		$("#titulo").html("Listado Unidades");
		$( "#contenido" ).load("./php/unidad/index.php");	
	})

	$("#contenido").on("click","d.borrar",function(){
		//Recupera datos del formulario
		var codigo = $(this).attr("codigo");
		if ( confirm("¿Realmente desea borrar el registro?")){		
			$.ajax({
        		method: "post",
            	url: "./php/unidad/controladorunidad.php",
            	data: {codigo: codigo, accion:'borrar'},
            	dataType: "html"
        	})  .done(function( result ) {
        		$("#titulo").html("Listado Unidades");
        		$( "#contenido" ).load("./php/unidad/index.php");
        	});

		}
	});
	
	$("#contenido").on("click","d.editar",function(){
		$("#titulo").html("Editar unidad");
		//Recupera datos del fromulario
		var codigo = $(this).attr("codigo");
		$.ajax({
			type:"post",
			url:"./php/unidad/editarunidad.php",
			data:"codigo=" + codigo,
			dataType:"html"
        	}) .done(function( result ) {
        		$("#contenido").html(result);
        	});
	});
	
	$("#contenido").on("click","button#actualizar",function(){
		$("#titulo").html("Listado Unidades");
        var datos=$("#funidad").serialize();
            $.ajax({
			type:"post",
			url:"./php/unidad/controladorunidad.php",
			data: datos,
			dataType:"html"
        	}) .done(function( result ) {
        		$( "#contenido" ).load("./php/unidad/index.php");
        	});
	});
	
	$("#contenido").on("click","button#nuevou",function(){
		$("#titulo").html("Nueva unidad");
		$( "#contenido" ).load("./php/unidad/nuevaunidad.php");	
	})
	
	$("#contenido").on("click","button#grabar",function(){

		var datos=$("#funidad").serialize();
	
		$.ajax({
			type:"post",
			url:"./php/unidad/controladorunidad.php",
			data:datos,
			dataType:"html",
			success:function(result){
				$("#titulo").html("Listado Unidades");
				$("#contenido" ).load("./php/unidad/index.php");
			}
		})
	});	
//Unidades
}