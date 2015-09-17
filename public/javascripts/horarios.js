$(function() {

	$('#modo-busca').on('change', function() {
		$('.modo-selecionado').text(' ' + $(this).val() + ' ');
	});

	$('.submit').on('click', function(event) {
		event.preventDefault();
		$.ajax({
			url: '/buscar-horario',
			data: {
				tipo: $('#modo-busca').val(),
				texto: $('#texto-busca').val()
			},
			beforeSend: function() {
				// .spinner-loading
			}
		}).done(function(res) {
			if (res)
				$('.table-result').html(res);
		});
	});

});