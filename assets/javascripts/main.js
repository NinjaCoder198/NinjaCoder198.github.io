document.addEventListener("DOMContentLoaded",function(){


	// start slider
	var count = 0;

    const nextSlider = document.querySelector(".next_slider");
    const prevSlider = document.querySelector(".prev_slider");
    const Slider = document.querySelector(".slider");
    const bannerSlider = document.querySelectorAll(".banner-slider ul li");
    const navDostButton = document.querySelectorAll(".nav-dost-button ul li");

    function removeSlider() {
    	for (let i = 0; i < bannerSlider.length; i++) {
    		bannerSlider[i].classList.remove("active_banner-slider");
    		navDostButton[i].classList.remove("active_nav-dost-button");
    	}
	} 

	function nextSlider_fun(){
		if (count >= (bannerSlider.length - 1)) {
			removeSlider();
			bannerSlider[0].classList.add("active_banner-slider");
			navDostButton[0].classList.add("active_nav-dost-button");
			count = 0;
		}    		
    	else if (count < (bannerSlider.length - 1)){
    		removeSlider();
			bannerSlider[count+1].classList.add("active_banner-slider");
			navDostButton[count+1].classList.add("active_nav-dost-button");
			count++;
    	}
	}
	function prevSlider_fun(){
		if (count <= 0) {
			removeSlider();
			bannerSlider[bannerSlider.length - 1].classList.add("active_banner-slider");
			navDostButton[bannerSlider.length - 1].classList.add("active_nav-dost-button");
			count = bannerSlider.length - 1;
		}    		
    	else if (count > 0){
    		removeSlider();
			bannerSlider[count-1].classList.add("active_banner-slider");
			navDostButton[count-1].classList.add("active_nav-dost-button");
			count--;
    	}
	}

	var slideInterval = setInterval(nextSlider_fun, 7000);
	function playSlideshow(){
		slideInterval = setInterval(nextSlider_fun, 7000);
	}

	function pauseSlideshow(){
		clearInterval(slideInterval);
	}

	Slider.onmousemove = () =>{
		pauseSlideshow();
	}
	Slider.onmouseout = () =>{
		playSlideshow();
	}
    nextSlider.onclick = () => {
		nextSlider_fun();
	};
    prevSlider.onclick = () => {
		prevSlider_fun();
	};


	// Nav dost button click
	for (let i = 0; i < navDostButton.length; i++) {
		navDostButton[i].onclick = () =>{
			if (i !== count) {
				removeSlider();
				bannerSlider[i].classList.add("active_banner-slider");
				navDostButton[i].classList.add("active_nav-dost-button");
				count = i;
			}			
		}
	}

	// end slider

	// start content-mid	
	const textCircle = document.querySelectorAll(".text-circle ul li");
	var countCircle = 0;
	textCircle.forEach((item) =>{
		let setHTML = item.textContent;
		if (setHTML == "") {
			countCircle += 4;
			item.style.transform = "rotate("+ countCircle + "deg)";
		}else{
			countCircle += 6;
			item.style.transform = "rotate("+ countCircle + "deg)";
		}
	});    

    // end contetn-mid




    //start google map
	var initializeMap = function() {
		var mapOptions = {
			center: concordeLatLng,
			zoom: 15,
			streetViewControl: true,
			mapMaker: true,
			heading: 20,


		};
		var map = new google.maps.Map(document.getElementById("js-map"), mapOptions);

		var marker = new google.maps.Marker({
			position: concordeLatLng,
			map: map,
			icon: 'https://raw.githubusercontent.com/SunHarry198/images/master/icon-address.png'
		});        
	}

	var concordeLatLng = new google.maps.LatLng(10.776147,106.682883);
	google.maps.event.addDomListener(window, 'load', initializeMap);

	// end google map



	// start animation
	var addressTeamplate = document.getElementsByClassName('address_teamplate');
	var arrayAdressTemp = document.getElementsByClassName('array_address_temp');
	window.addEventListener('scroll', function(){
		for (let i = 0; i < arrayAdressTemp.length; i++) {

			let totalOffset = document.body.scrollTop + arrayAdressTemp[i].getBoundingClientRect().top + 200;
			let addressScroll = "add";
			if (window.pageYOffset > totalOffset) {
				if (addressScroll == "add") {
					addressScroll = "noadd";
					addressTeamplate[i].classList.add('add_animation');
				}
			}
		}
	})
	// end animation


},false);