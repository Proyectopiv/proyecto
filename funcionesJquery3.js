function Inicio(){

//Propietarios
	$("#opciones a").click(function(e){
     	e.preventDefault();
        url = $(this).attr("href");

        $.post( url, function(data) {
        		if(url!="#")
        			$("#contenedor").removeClass("hide");
        			$("#contenedor").addClass("show");
        			$("#titulo").html("Listado de Propietarios");
                	$("#contenido" ).html(data);
        });
     });

	$("#contenido").on("click","button.btncerrar",function(){
		$("#contenedor").removeClass("show");
       	$("#contenedor").addClass("hide");
	})

	$("#contenido").on("click","button.btncerrar2",function(){
		$("#titulo").html("Listado Propietarios");
		$( "#contenido" ).load("./php/Propietarios/index.php");	
	})

	$("#contenido").on("click","a.borrar",function(){
		//Recupera datos del formulario
		var codigo = $(this).attr("codigo");
		if ( confirm("¿Realmente desea borrar el registro?")){		
			$.ajax({
        		method: "post",
            	url: "./php/Propietarios/controladorPropietario.php",
            	data: {codigo: codigo, accion:'borrar'},
            	dataType: "html"
        	})  .done(function( result ) {
        		$("#titulo").html("Listado Propietarios");
        		$( "#contenido" ).load("./php/Propietarios/index.php");
        	});

		}
	});
	
	$("#contenido").on("click","a.editar",function(){
		$("#titulo").html("Editar Propietarios");
		//Recupera datos del fromulario
		var codigo = $(this).attr("codigo");
		$.ajax({
			type:"post",
			url:"./php/Propietarios/editarPropietario.php",
			data:"codigo=" + codigo,
			dataType:"html"
        	}) .done(function( result ) {
        		$("#contenido").html(result);
        	});
	});
	
	$("#contenido").on("click","button#actualizarp",function(){
		$("#titulo").html("Listado Propietario");
        var datos=$("#fpropietario").serialize();
            $.ajax({
			type:"post",
			url:"./php/Propietarios/controladorPropietario.php",
			data: datos,
			dataType:"html"
        	}) .done(function( result ) {
        		$( "#contenido" ).load("./php/Propietarios/index.php");
        	});
	});
	
	$("#contenido").on("click","button#nuevop",function(){
		$("#titulo").html("Nuevo Propietarios");
		$( "#contenido" ).load("./php/Propietarios/nuevoPropietario.php");	
	})
	
	$("#contenido").on("click","button#grabarp",function(){

		var datos=$("#fpropietario").serialize();
	
		$.ajax({
			type:"post",
			url:"./php/Propietarios/controladorPropietario.php",
			data:datos,
			dataType:"html",
			success:function(result){
				$("#titulo").html("Listado Propietario");
				$("#contenido" ).load("./php/Propietarios/index.php");
			}
		})
	});	
//Propietarios

//Apartamentos
	$("#opciones b").click(function(e){
     	e.preventDefault();
        url = $(this).attr("href");

        $.post( url, function(data) {
        		if(url!="#")
        			$("#contenedor").removeClass("hide");
        			$("#contenedor").addClass("show");
        			$("#titulo").html("Listado de Apartamentos");
                	$("#contenido" ).html(data);
        });
     });

	$("#contenido").on("click","button.btncerrar",function(){
		$("#contenedor").removeClass("show");
       	$("#contenedor").addClass("hide");
	})

	$("#contenido").on("click","button.btncerrar2",function(){
		$("#titulo").html("Listado Apartamentos");
		$( "#contenido" ).load("./php/apartamento/index.php");	
	})

	$("#contenido").on("click","b.borrar",function(){
		//Recupera datos del formulario
		var codigo = $(this).attr("codigo");
		if ( confirm("¿Realmente desea borrar el registro?")){		
			$.ajax({
        		method: "post",
            	url: "./php/apartamento/controladorApartamento.php",
            	data: {codigo: codigo, accion:'borrar'},
            	dataType: "html"
        	})  .done(function( result ) {
        		$("#titulo").html("Listado Apartamentos");
        		$( "#contenido" ).load("./php/apartamento/index.php");
        	});

		}
	});
	
	$("#contenido").on("click","b.editar",function(){
		$("#titulo").html("Editar apartamento");
		//Recupera datos del fromulario
		var codigo = $(this).attr("codigo");
		$.ajax({
			type:"post",
			url:"./php/apartamento/editarApartamento.php",
			data:"codigo=" + codigo,
			dataType:"html"
        	}) .done(function( result ) {
        		$("#contenido").html(result);
        	});
	});
	
	$("#contenido").on("click","button#actualizara",function(){
		$("#titulo").html("Listado Apartamentos");
        var datos=$("#fapartamento").serialize();
            $.ajax({
			type:"post",
			url:"./php/apartamento/controladorApartamento.php",
			data: datos,
			dataType:"html"
        	}) .done(function( result ) {
        		$( "#contenido" ).load("./php/apartamento/index.php");
        	});
	});
	
	$("#contenido").on("click","button#nuevoa",function(){
		$("#titulo").html("Nuevo apartamento");
		$( "#contenido" ).load("./php/apartamento/nuevoApartamento.php");	
	})
	
	$("#contenido").on("click","button#grabara",function(){

		var datos=$("#fapartamento").serialize();
	
		$.ajax({
			type:"post",
			url:"./php/apartamento/controladorApartamento.php",
			data:datos,
			dataType:"html",
			success:function(result){
				$("#titulo").html("Listado Apartamentos");
				$("#contenido" ).load("./php/apartamento/index.php");
			}
		})
	});	
//Apartamentos

//Zonas
	$("#opciones c").click(function(e){
     	e.preventDefault();
        url = $(this).attr("href");

        $.post( url, function(data) {
        		if(url!="#")
        			$("#contenedor").removeClass("hide");
        			$("#contenedor").addClass("show");
        			$("#titulo").html("Listado de Zonas");
                	$("#contenido" ).html(data);
        });
     });

	$("#contenido").on("click","button.btncerrar",function(){
		$("#contenedor").removeClass("show");
       	$("#contenedor").addClass("hide");
	})

	$("#contenido").on("click","button.btncerrar2",function(){
		$("#titulo").html("Listado Zonas");
		$( "#contenido" ).load("./php/zonas/index.php");	
	})

	$("#contenido").on("click","c.borrar",function(){
		//Recupera datos del formulario
		var codigo = $(this).attr("codigo");
		if ( confirm("¿Realmente desea borrar el registro?")){		
			$.ajax({
        		method: "post",
            	url: "./php/zonas/controladorZona.php",
            	data: {codigo: codigo, accion:'borrar'},
            	dataType: "html"
        	})  .done(function( result ) {
        		$("#titulo").html("Listado Zonas");
        		$( "#contenido" ).load("./php/zonas/index.php");
        	});

		}
	});
	
	$("#contenido").on("click","c.editar",function(){
		$("#titulo").html("Editar zonas");
		//Recupera datos del fromulario
		var codigo = $(this).attr("codigo");
		$.ajax({
			type:"post",
			url:"./php/zonas/editarZona.php",
			data:"codigo=" + codigo,
			dataType:"html"
        	}) .done(function( result ) {
        		$("#contenido").html(result);
        	});
	});
	
	$("#contenido").on("click","button#actualizarz",function(){
		$("#titulo").html("Listado Zonas");
        var datos=$("#fzona").serialize();
            $.ajax({
			type:"post",
			url:"./php/zonas/controladorZona.php",
			data: datos,
			dataType:"html"
        	}) .done(function( result ) {
        		$( "#contenido" ).load("./php/zonas/index.php");
        	});
	});
	
	$("#contenido").on("click","button#nuevoz",function(){
		$("#titulo").html("Nueva zonas");
		$( "#contenido" ).load("./php/zonas/nuevoZonas.php");	
	})
	
	$("#contenido").on("click","button#grabarz",function(){

		var datos=$("#fzona").serialize();
	
		$.ajax({
			type:"post",
			url:"./php/zonas/controladorZona.php",
			data:datos,
			dataType:"html",
			success:function(result){
				$("#titulo").html("Listado Zonas");
				$("#contenido" ).load("./php/zonas/index.php");
			}
		})
	});	
//Zonas

}