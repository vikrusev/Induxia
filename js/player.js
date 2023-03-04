function _(id){
	return document.getElementById(id);
}

window.onload = function(){
	var video = _('videoPlayer');
	var action = _('action');
	var sound = _('sound');
	var bar = _('bar');

	//button functions
	action.addEventListener('click', function(){
		if(video.paused == true){
			video.play();
			action.innerHTML = 'Pause';
		}

		else{
			video.pause();
			action.innerHTML = 'Play';
		}
	});

	sound.addEventListener('click', function(){
		if(video.muted == true){
			video.muted = false;
			sound.innerHTML = 'Sound Off'
		}
		else{
			video.muted = true;
			sound.innerHTML = 'Sound On';
		}
	});

	var isMousePressed = false;

	//skip to specific time
	bar.addEventListener('change', function(){
		var time = video.duration * (bar.value / 100);
		video.currentTime = time;
	});

	bar.addEventListener('mousedown', function(){
		isMousePressed = true;
		video.pause();
	});

	bar.addEventListener('mouseup', function(){
		video.play();
		isMousePressed = false;
	});	

	//the bar filling should move with the video time
	video.addEventListener('timeupdate', function(){
		if(!isMousePressed){
			var value = (100 / video.duration) * video.currentTime;
			bar.value = value;
		}
	});
}