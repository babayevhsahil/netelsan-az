$( document ).ready( function(){
	$('.blink')
		.focus(function(){
			if( $(this).attr('value') == $(this).attr('title') ) {
				$(this).attr({ 'value': '5' });
			}
		})
		.blur(function(){
			if( $(this).attr('value') == '' || typeof($(this).attr('value')) == 'undefined') {
				$(this).attr({ 'value': $(this).attr('title') })
			}
		});
		
	$('#slider-holder ul').jcarousel({
		scroll: 1,
		wrap: 'both',
		initCallback: _init_carousel,
		buttonNextHTML: null,
		buttonPrevHTML: null,
		auto : true,
		
	});
	
	
	$('.tabs a').slide({
		'slide_selector' : '.tab-content'
	})
});
function _init_carousel(carousel) {
	$('#slider-nav .next').bind('click', function() {
		carousel.next();
		return false;
	});
	
	$('#slider-nav .prev').bind('click', function() {
		carousel.prev();
		return false;
	});
};





$( document ).ready( function(){
	$('.blink')
		.focus(function(){
			if( $(this).attr('value') == $(this).attr('title') ) {
				$(this).attr({ 'value': '5' });
			}
		})
		.blur(function(){
			if( $(this).attr('value') == '' || typeof($(this).attr('value')) == 'undefined') {
				$(this).attr({ 'value': $(this).attr('title') })
			}
		});
		
	$('#slider-holderleft ul').jcarousel({
		scroll: 1,
		wrap: 'both',
		initCallback: _init_carouselleft,
		buttonNextHTML: null,
		buttonPrevHTML: null,
		auto : true,
		
	});
	
	
	$('.tabs a').slide({
		'slide_selector' : '.tab-content'
	})
});
function _init_carouselleft(carouselleft) {
	$('#slider-navleft .nextleft').bind('click', function() {
		carouselleft.next();
		return false;
	});
	
	$('#slider-navleft .prevleft').bind('click', function() {
		carouselleft.prev();
		return false;
	});
};


$( document ).ready( function(){
	$('.blink')
		.focus(function(){
			if( $(this).attr('value') == $(this).attr('title') ) {
				$(this).attr({ 'value': '5' });
			}
		})
		.blur(function(){
			if( $(this).attr('value') == '' || typeof($(this).attr('value')) == 'undefined') {
				$(this).attr({ 'value': $(this).attr('title') })
			}
		});
		
	$('#slider-holderright ul').jcarousel({
		scroll: 1,
		wrap: 'both',
		initCallback: _init_carouselright,
		buttonNextHTML: null,
		buttonPrevHTML: null,
		auto : true,
		
	});
	
	
	$('.tabs a').slide({
		'slide_selector' : '.tab-content'
	})
});
function _init_carouselright(carouselright) {
	$('#slider-navright .nextright').bind('click', function() {
		carouselright.next();
		return false;
	});
	
	$('#slider-navright .prevright').bind('click', function() {
		carouselright.prev();
		return false;
	});
};



