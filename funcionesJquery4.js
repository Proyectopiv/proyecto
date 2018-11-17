function Inicio(){

//Inquilinos
	$("#opciones a").click(function(e){
     	e.preventDefault();
        url = $(this).attr("href");

        $.post( url, function(data) {
        		if(url!="#")
        			$("#contenedor").removeClass("hide");
        			$("#contenedor").addClass("show");
        			$("#titulo").html("Listado Inquilinos");
                	$("#contenido" ).html(data);
        });
     });

	$("#contenido").on("click","button.btncerrari",function(){
		$("#contenedor").removeClass("show");
       	$("#contenedor").addClass("hide");
	})

	$("#contenido").on("click","button.btncerrar2i",function(){
		$("#titulo").html("Listado Inquilinos");
		$( "#contenido" ).load("./php/inquilino/index.php");	
	})

	$("#contenido").on("click","a.borrar",function(){
		//Recupera datos del formulario
		var codigo = $(this).attr("codigo");
		if ( confirm("¿Realmente desea borrar el registro?")){		
			$.ajax({
        		method: "post",
            	url: "./php/inquilino/controladorInquilino.php",
            	data: {codigo: codigo, accion:'borrar'},
            	dataType: "html"
        	})  .done(function( result ) {
        		$("#titulo").html("Listado Inquilinos");
        		$( "#contenido" ).load("./php/inquilino/index.php");
        	});

		}
	});
	
	$("#contenido").on("click","a.editar",function(){
		$("#titulo").html("Editar Inquilino");
		//Recupera datos del fromulario
		var codigo = $(this).attr("codigo");
		$.ajax({
			type:"post",
			url:"./php/inquilino/editarInquilino.php",
			data:"codigo=" + codigo,
			dataType:"html"
        	}) .done(function( result ) {
        		$("#contenido").html(result);
        	});
	});
	
	$("#contenido").on("click","button#actualizari",function(){
		$("#titulo").html("Listado Inquilinos");
        var datos=$("#finquilino").serialize();
            $.ajax({
			type:"post",
			url:"./php/inquilino/controladorInquilino.php",
			data: datos,
			dataType:"html"
        	}) .done(function( result ) {
        		$( "#contenido" ).load("./php/inquilino/index.php");
        	});
	});
	
	$("#contenido").on("click","button#nuevoi",function(){
		$("#titulo").html("Nuevo Inquilinos");
		$( "#contenido" ).load("./php/inquilino/nuevoInquilino.php");	
	})
	
	$("#contenido").on("click","button#grabari",function(){

		var datos=$("#finquilino").serialize();
	
		$.ajax({
			type:"post",
			url:"./php/inquilino/controladorInquilino.php",
			data:datos,
			dataType:"html",
			success:function(result){
				$("#titulo").html("Listado Inquilinos");
				$("#contenido" ).load("./php/inquilino/index.php");
			}
		})
	});	
//Inquilinos

//Vehiculos
	$("#opciones b").click(function(e){
     	e.preventDefault();
        url = $(this).attr("href");

        $.post( url, function(data) {
        		if(url!="#")
        			$("#contenedor").removeClass("hide");
        			$("#contenedor").addClass("show");
        			$("#titulo").html("Listado Vehiculos");
                	$("#contenido" ).html(data);
        });
     });

	$("#contenido").on("click","button.btncerrarv",function(){
		$("#contenedor").removeClass("show");
       	$("#contenedor").addClass("hide");
	})

	$("#contenido").on("click","button.btncerrar2v",function(){
		$("#titulo").html("Listado Vehiculos");
		$( "#contenido" ).load("./php/vehiculo/index.php");	
	})

	$("#contenido").on("click","b.borrar",function(){
		//Recupera datos del formulario
		var codigo = $(this).attr("codigo");
		if ( confirm("¿Realmente desea borrar el registro?")){		
			$.ajax({
        		method: "post",
            	url: "./php/vehiculo/controladorVehiculo.php",
            	data: {codigo: codigo, accion:'borrar'},
            	dataType: "html"
        	})  .done(function( result ) {
        		$("#titulo").html("Listado Vehiculos");
        		$( "#contenido" ).load("./php/vehiculo/index.php");
        	});

		}
	});
	
	$("#contenido").on("click","b.editar",function(){
		$("#titulo").html("Editar Vehiculo");
		//Recupera datos del fromulario
		var codigo = $(this).attr("codigo");
		$.ajax({
			type:"post",
			url:"./php/vehiculo/editarVehiculo.php",
			data:"codigo=" + codigo,
			dataType:"html"
        	}) .done(function( result ) {
        		$("#contenido").html(result);
        	});
	});
	
	$("#contenido").on("click","button#actualizarv",function(){
		$("#titulo").html("Listado Vehiculos");
        var datos=$("#fvehiculo").serialize();
            $.ajax({
			type:"post",
			url:"./php/vehiculo/controladorVehiculo.php",
			data: datos,
			dataType:"html"
        	}) .done(function( result ) {
        		$( "#contenido" ).load("./php/vehiculo/index.php");
        	});
	});
	
	$("#contenido").on("click","button#nuevov",function(){
		$("#titulo").html("Nuevo Vehiculo");
		$( "#contenido" ).load("./php/vehiculo/nuevoVehiculo.php");	
	})
	
	$("#contenido").on("click","button#grabarv",function(){

		var datos=$("#fvehiculo").serialize();
	
		$.ajax({
			type:"post",
			url:"./php/vehiculo/controladorVehiculo.php",
			data:datos,
			dataType:"html",
			success:function(result){
				$("#titulo").html("Listado Vehiculos");
				$("#contenido" ).load("./php/vehiculo/index.php");
			}
		})
	});	
//Vehiculos

//Alquiler
	$("#opciones c").click(function(e){
     	e.preventDefault();
        url = $(this).attr("href");

        $.post( url, function(data) {
        		if(url!="#")
        			$("#contenedor").removeClass("hide");
        			$("#contenedor").addClass("show");
        			$("#titulo").html("Listado Alquiler");
                	$("#contenido" ).html(data);
        });
     });

	$("#contenido").on("click","button.btncerraral",function(){
		$("#contenedor").removeClass("show");
       	$("#contenedor").addClass("hide");
	})

	$("#contenido").on("click","button.btncerrar2al",function(){
		$("#titulo").html("Listado Alquiler");
		$( "#contenido" ).load("./php/alzonas/index.php");	
	})

	$("#contenido").on("click","c.borrar",function(){
		//Recupera datos del formulario
		var codigo = $(this).attr("codigo");
		if ( confirm("¿Realmente desea borrar el registro?")){		
			$.ajax({
        		method: "post",
            	url: "./php/alzonas/controladorAlzona.php",
            	data: {codigo: codigo, accion:'borrar'},
            	dataType: "html"
        	})  .done(function( result ) {
        		$("#titulo").html("Listado Alquiler");
        		$( "#contenido" ).load("./php/alzonas/index.php");
        	});

		}
	});
	
	$("#contenido").on("click","c.editar",function(){
		$("#titulo").html("Editar Alquier");
		//Recupera datos del fromulario
		var codigo = $(this).attr("codigo");
		$.ajax({
			type:"post",
			url:"./php/alzonas/editarAlzona.php",
			data:"codigo=" + codigo,
			dataType:"html"
        	}) .done(function( result ) {
        		$("#contenido").html(result);
        	});
	});
	
	$("#contenido").on("click","button#actualizaral",function(){
		$("#titulo").html("Listado Alquiler");
        var datos=$("#falzona").serialize();
            $.ajax({
			type:"post",
			url:"./php/alzonas/controladorAlzona.php",
			data: datos,
			dataType:"html"
        	}) .done(function( result ) {
        		$( "#contenido" ).load("./php/alzonas/index.php");
        	});
	});
	
	$("#contenido").on("click","button#nuevoal",function(){
		$("#titulo").html("Nuevo Alquiler");
		$( "#contenido" ).load("./php/alzonas/nuevoAlzona.php");	
	})
	
	$("#contenido").on("click","button#grabaral",function(){

		var datos=$("#falzona").serialize();
	
		$.ajax({
			type:"post",
			url:"./php/alzonas/controladorAlzona.php",
			data:datos,
			dataType:"html",
			success:function(result){
				$("#titulo").html("Listado Alquiler");
				$("#contenido" ).load("./php/alzonas/index.php");
			}
		})
	});	
//Alquiler

//Moviemientos
	$("#opciones d").click(function(e){
     	e.preventDefault();
        url = $(this).attr("href");

        $.post( url, function(data) {
        		if(url!="#")
        			$("#contenedor").removeClass("hide");
        			$("#contenedor").addClass("show");
        			$("#titulo").html("Listado Moviemientos");
                	$("#contenido" ).html(data);
        });
     });

	$("#contenido").on("click","button.btncerrarmv",function(){
		$("#contenedor").removeClass("show");
       	$("#contenedor").addClass("hide");
	})

	$("#contenido").on("click","button.btncerrar2mv",function(){
		$("#titulo").html("Listado Moviemientos");
		$( "#contenido" ).load("./php/MVehiculos/index.php");	
	})

	$("#contenido").on("click","d.borrar",function(){
		//Recupera datos del formulario
		var codigo = $(this).attr("codigo");
		if ( confirm("¿Realmente desea borrar el registro?")){		
			$.ajax({
        		method: "post",
            	url: "./php/MVehiculos/controladorMVehiculos.php",
            	data: {codigo: codigo, accion:'borrar'},
            	dataType: "html"
        	})  .done(function( result ) {
        		$("#titulo").html("Listado Moviemientos");
        		$( "#contenido" ).load("./php/MVehiculos/index.php");
        	});

		}
	});
	
	$("#contenido").on("click","d.editar",function(){
		$("#titulo").html("Editar Movimiento");
		//Recupera datos del fromulario
		var codigo = $(this).attr("codigo");
		$.ajax({
			type:"post",
			url:"./php/MVehiculos/editarMVehiculos.php",
			data:"codigo=" + codigo,
			dataType:"html"
        	}) .done(function( result ) {
        		$("#contenido").html(result);
        	});
	});
	
	$("#contenido").on("click","button#actualizarmv",function(){
		$("#titulo").html("Listado Moviemientos");
        var datos=$("#fmvehiculos").serialize();
            $.ajax({
			type:"post",
			url:"./php/MVehiculos/controladorMVehiculos.php",
			data: datos,
			dataType:"html"
        	}) .done(function( result ) {
        		$( "#contenido" ).load("./php/MVehiculos/index.php");
        	});
	});
	
	$("#contenido").on("click","button#nuevomv",function(){
		$("#titulo").html("Nuevo Moviemientos");
		$( "#contenido" ).load("./php/MVehiculos/nuevoMVehiculos.php");	
	})
	
	$("#contenido").on("click","button#grabarmv",function(){

		var datos=$("#fmvehiculos").serialize();
	
		$.ajax({
			type:"post",
			url:"./php/MVehiculos/controladorMVehiculos.php",
			data:datos,
			dataType:"html",
			success:function(result){
				$("#titulo").html("Listado Moviemientos");
				$("#contenido" ).load("./php/MVehiculos/index.php");
			}
		})
	});	
//Moviemientos
}