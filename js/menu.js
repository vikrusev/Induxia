function setClassToMenu(byUser) {

	byUser = (byUser == undefined) ? true : false;

	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	var menu = document.getElementById('menu');

	if(width > 1024){
		menu.className = '';
	}

	if(width <= 1024 && menu.className != 'hiddenMenu'){
		menu.className = 'hiddenMenu';
	}

	//user wants to shrink
	if(byUser){
		menu.className = 'hiddenMenu';
	}
}

function expandMenu(){
	document.getElementById('menu').className = '';
}


$(document).ready(function(){
	setClassToMenu(false);

	$('#menu li:not(:last-child)').click(function(){
		$('html, body').animate({
	        scrollTop: $($(this).find('a').attr('href')).offset().top
	    }, 1300);
	});

	$('#menu ul li:last-child').hover(function(){
		//mousein
		$(this).find('img').attr('src', 'resources/shrinkMenuHover.png');
	}, function(){
		//mouseout
		$(this).find('img').attr('src', 'resources/shrinkMenu.png');
	});
})

window.onresize = function(){
	setClassToMenu(false);
}