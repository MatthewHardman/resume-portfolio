/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);

//End Miniport Code

const form = document.querySelector('#contact-form');

      form.addEventListener('submit', event =>{
        const { name, email, subject, message } = event.target;

        const endpoint = "https://6uhy2sg9j8.execute-api.us-east-2.amazonaws.com/default/SendEmail";
        const body = JSON.stringify({
          senderName: name.value,
          senderEmail: email.value,
          subject: subject.value,
          message: message.value
        });
        const requestOptions = {
          method: "POST",
          body
        };

        fetch(endpoint, requestOptions)
          .then((response) => {
            if (!response.ok) throw new Error("Error in fetch");
            return response.json();
          });
      });