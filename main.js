jQuery(document).on('submit','#formlg',function(event){
	event.preventDefault();	
	jQuery.ajax({
		url: './login.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize(),
		beforeSend: function(){
			$('.btnlg').val('Validando...');
		}
	})
	.done(function(respuesta){
		console.log(respuesta);
		if(!respuesta.error){
			if(respuesta.tipo == 'Administrador del sistema'){
				location.href = './index_sistema.php';
			}else if(respuesta.tipo == 'Administrador de la unidad'){
				location.href = './index_sistema.php';
			}
		}else{
			$('.error').slideDown('slow');
			setTimeout(function(){
				$('.error').slideUp('slow');
		},3000);
		$('.btnlg').val('Iniciar Sesión');		
		}
	})
	.fail(function(resp){
		console.log(resp.responseText);
	})
	.always(function() {
		console.log("complete");
	});
});