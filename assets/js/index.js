let $ = id => document.getElementById(id);
let $header = $('header');

window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		$header.classList.add('scrolled');
        $header.classList.remove('back-transparent');
	} else {
		$header.classList.remove('scrolled');
        $header.classList.add('back-transparent');
	}
});

$('btn-pause').addEventListener('click', function() {
	let video = $('video-background');
	let imgPause = $('img-btn-pause');
	if (video.paused) {		
		video.play();
		imgPause.src = 'images/utilities/pause-button.svg';
	} else {
		video.pause();
		imgPause.src = 'images/utilities/play-button.webp';
	}
});

let btnDonate = document.getElementById('open-modal');
let paypalButton = document.querySelector('#donate-button-container img');

btnDonate.addEventListener('click', () => {
	paypalButton.click(); // Simulate click on PayPal button
});
