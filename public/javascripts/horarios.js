(function() {
	$('#buscar-horarios').on('submit', function(event) {

		event.preventDefault();

		if ($('#texto-busca').val() != '') {

			$.ajax({
				url: '/buscar-horario',
				data: {
					tipo: $('#modo-busca').val(),
					texto: $('#texto-busca').val()
				}
			})
			.done(function(res) {
				$('.table-result').html(res);
			});

		}

	});
})();


(function() {

	$(document)

		.on('show.bs.modal', '#modal-horarios', function(event) {

			var modal = $(this);

			$.ajax($(event.relatedTarget).prop('href')).done(function(response) {

				modal.find('.modal-content').html(response);

			});

		})

		.on('hidden.bs.modal', '#modal-horarios', function(event) {

			$(this).find('.modal-content').empty();

		});

})();