var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#link'),
	$lista = $('#contenido'),
	$primerPost = $('.item').first();



if (localStorage.getItem('autosave')) {

	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}
// js  cada 1 seg ejecuta esta funcion
var id = setInterval(function(){
	sessionStorage.setItem('titulo',$titulo.val());
	sessionStorage.setItem('url',$url.val());
},1000);


function mostrarOcultarFormulario(){
	

	$form.slideToggle();
	$lista.slideToggle();
	var pablo ="";
	return false;

}

function agregarPost(){
	var url = $url.val(),
		titulo = $titulo.val(),
		clone = $primerPost.clone();

	clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	clone.hide();

	$lista.prepend(clone);

	mostrarOcultarFormulario();
	$titulo.val('');
	$url.val('');

	clone.slideDown()
	return false

}


$('#publicar_nav a').click(mostrarOcultarFormulario );
$('#formulario').on('submit',agregarPost )