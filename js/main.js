// Make panda jump when press button
//math.random to randomly make leopard and points appear
//leopard randomly appear (boss) DONE
//make score and lives go up/down

//problems: 
//window is laggy when the point moves across the screen (too much animation)
//how to write code when images intersect ("collide")

//repeat background
var posX = 0;
var speed = 3;
var scroller = function() {
	posX -= speed;
	$('body').css('background-position', posX+'px 0');
}
//leopard animation
var blink= function(){
	$('.leopard').delay(random).animate({right: "+=3000"}, 2500).fadeOut(500,0).animate({right: "-=3000"}, 500).fadeIn(500,0)
}

//bampoo animation
var bampoint= function(){
	$('.point').animate({right: "+=2500"}, 5500).fadeOut(500,0).animate({right: "-=2500"}, 5000).fadeIn(500,0)
}

//generates random number between 1-5 seconds
var random= Math.floor((Math.random() *5000) +1000); 

$(document).ready(function() {
	//setInterval(scroller, 5);
	setInterval(blink, 5);
	setInterval(bampoint,5);
	//makes panda jump on click
	$(window).on('click', function(){
		$('.panda').animate({bottom: "+=250"}, 500).animate({bottom: "-=250"}, 500)
	})
	
});







