var audioBtn = document.querySelector('#sound_button');
var audioPlayer = document.querySelector('#audio_player');


audioBtn.onclick = function() {
	audioToggle();
};

function audioToggle() {
	if (audioPlayer.paused) {
		audioPlayer.play();
		sound_button.classList.add('active');
        color.classList.add('active');
	}	else	{	
		audioPlayer.pause();
		sound_button.classList.remove('active');
        color.classList.remove('active');
	}
}




$("nav ul li a").click(function(e) {
	var top = $('body').find($(this).attr('href')).offset().top;
	$('html, body').animate({
			scrollTop: top
	},2000, 'easeOutBounce');
});



$(".guitar__string").hover(function() {
    var guitarSound = new Audio('./sounds/' + $(this).attr("id") + '.mp3');
    guitarSound.play();
});