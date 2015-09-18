$(function() {

	$('.submit').on('click', function(event) {
		event.preventDefault();
		if ( $('#texto-busca').val() != '') {
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
		}
	});

});