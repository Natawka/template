
(function($){
	jQuery.fn.carouselPlag = function(){  //fn-служебный объект, хранящий в себе методы
		var leftArrow = $('#move-on.arrow-left');
		var rightArrow = $('#move-on.arrow-right');
		var list = $('.carousel');
		
		var initialValueLeft = 0;
		var effectiveValueLeft = 342;
		var imageCount = list.find('li').length;
		
		
		var minSet = -((imageCount - 3) * effectiveValueLeft);
		var maxSet = 0;
		
		leftArrow.click(function(){
			if (initialValueLeft == maxSet){
				initialValueLeft = minSet;
				list.animate({left : initialValueLeft + "px"}, 300);
			}else{
				initialValueLeft += 342;
				list.animate({left : initialValueLeft + "px"}, 300);
			}
		});
		rightArrow.click(function(){
				if (initialValueLeft ==minSet){
					initialValueLeft = maxSet;
					list.animate({left : initialValueLeft + "px"}, 300);
				}else{
				initialValueLeft -= 342;
				list.animate({left : initialValueLeft + "px"}, 300);
				}
			});
	  
    return this;	
	};
})(jQuery);