$(document).ready(function(){
    $('.box').on('click', function(){
        var animation = ['crawl','dangle','jump','stretch','flip'];
        var box = this;

        var animation = animation[Math.floor(Math.random()*5)];

        $(box).addClass(animation);

        setTimeout(function () {
			$(box).removeClass(animation);
		}, 4000);
    });

});
