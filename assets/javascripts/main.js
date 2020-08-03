$(document).ready(function() {

	var tl = new TimelineLite();

	var swiper = new Swiper('.swiper-container_home', {
		slidesPerView: 1,
		loop: true,
		allowTouchMove: true,
		slidesPerView: 'auto',
		grabCursor: true,
		preventClicks: true,
		keyboardControl: true,
		speed: 1000,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + ' cursor__link"></span>';
			},
		},
		
	});





	var galleryThumbs = new Swiper('.gallery-thumbs', {
		// spaceBetween: 10,
		slidesPerView: 5,
		loop: true,
		freeMode: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.gallery-top', {
		// spaceBetween: 10,
		loopedSlides: 5, //looped slides should be the same
		loop: true,
		navigation: {
	      	prevEl: '.prev_slide',
	      	nextEl: '.next_slide',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});








	$('html').on('DOMMouseScroll mousewheel', function (e) {
		if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
		    //scroll down
		    $( ".menu_home_header" ).addClass( "hidden_header" );
		} else {
		    //scroll up
		    $( ".menu_home_header" ).removeClass( "hidden_header" );
		}
	});


	$('.button_menu').click(function(event) {
		$('header').toggleClass('show_menu');
	});

	$('.button_show_search_input').click(function(event) {
		var tl = new TimelineLite();
		tl.to('.content_search_input', 0.7 ,{scaleX: 1});
		tl.to('.content_search_input > article', 0.5 ,{scaleX: 0});
		tl.to('.button_show_search_input', 0 ,{display: "none"});
		
	});

	$('.remove_label_input_search').click(function(event) {
		var tl = new TimelineLite();
		tl.to('.content_search_input > article', 0.7 ,{scaleX: 1});
		tl.to('.content_search_input', 0.5 ,{scaleX: 0});
		tl.to('.button_show_search_input', 0 ,{display: "block"});
		
	});


	$('.cart_product > section').click(function(event) {
		var tl = new TimelineLite();
		tl.to('.layer_product', 0, {opacity: 1, visibility: "visible"});
		tl.to('.layer_product form', 0.7, {scaleY: 1});
		tl.to('.layer_product form > section', 0.7, {scaleY: 0});
	});

	function closeLayerProduct () {
		var tl = new TimelineLite();
		tl.to('.layer_product form > section', 0.7, {scaleY: 1});
		tl.to('.layer_product form', 0.7, {scaleY: 0});
		tl.to('.layer_product', 0, {opacity: 0, visibility: "hidden"});
	};

	$('.layer_background_product').click(function(event) {
		closeLayerProduct();
	});

	$('.close_layer_product').click(function(event) {
		closeLayerProduct();
	});
	


});


