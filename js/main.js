/* global alert */
export function testme() {
    alert('hi!');
}
$(document).ready( function () {
	$('#table_id').DataTable(
		{
			"stripeClasses": []
		}
	);

/*
	$('.show-password').click(function(){


	if ($(".password-group input").attr("type") === "password") {
			$(".password-group input").attr("type", "text");
	} else {
			$(".password-group input").attr("type", "password");
	}
		// if(document.getElementById('check').checked) {
		// 	$('.password-group input').get(0).type = 'text';
		// } else {
		// 		$('.password-group input').get(0).type = 'password';
		// }
	});
	*/

		$(document).on('mousedown', '.show-password', function () {
				$(".password-group input").attr("type", "text");
				$(".show-password").html('<i class="fas fa-eye-slash"></i>')
		});
		$(document).on('mouseup', '.show-password', function () {
			$(".password-group input").attr("type", "password");
			$(".show-password").html('<i class="fas fa-eye"></i>')

		});

		$('[data-toggle="datepicker"]').datepicker();

		$(window).on('load', function() {
			$('#myModal').modal('show');
	});


} );