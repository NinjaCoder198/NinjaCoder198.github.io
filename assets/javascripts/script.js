gsap.registerPlugin(ScrollTrigger);


// Using Locomotive Scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  }
});






// PARALLAX INDIVIDUAL ELEMENTS (while sharing class)

// get sections
var parallaxElements = Array.prototype.slice.call(document.querySelectorAll(".animation"));

// get box or parallax element inside each section
  var self = this;
	
  parallaxElements.forEach(function(self) {
	  
    var boxTop = self.querySelectorAll(".parallaxTop");
    var box = self.querySelectorAll(".parallax");
    
    // animate boxes at top of page (section already in viewport)
    gsap.to(boxTop, {
      scrollTrigger: {
        scroller: ".smooth-scroll",
        scrub: true, 
        trigger: self, 
        start: "top 0%", 
        end: "bottom 0%", 
      }, 
      y: (i, target) => -innerHeight * target.dataset.speed,
      ease: "none"
    });
    
    // animate boxes when the relevant section comes into viewport
    gsap.to(box, {
      scrollTrigger: {
        scroller: ".smooth-scroll",
        scrub: true, 
        trigger: self, 
        start: "top 30%", 
        end: "bottom 0%", 
      }, 
      y: (i, target) => -innerHeight * target.dataset.speed,
      ease: "none"
    });
    
    
});



////////////////////////////////////


// //other animations
// gsap.to("#box1", {
//   scrollTrigger: {
//     scroller: ".smooth-scroll",
//     scrub: 3,
//     trigger: "#section1",
//     start: "top bottom",
//     end: "top top"
//   }, 
//   y: -100,
//   ease: "none"
// });


//timeline test
// var tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#section1",
//       scroller: ".smooth-scroll",
//       // scrub: 5,
//       start: "top 120%",
//       end: "+=100%",
//       markers: true,
//       id: "text panel"
//     }
//   });

// tl.staggerFrom(".box1", 0.5, {scale: 0.3, y: "-100%", autoAlpha: 0}, 0.2)
//   // .from("#box8", {autoAlpha: 0, ease: "power2"})
// .staggerTo(".box1", 0.2,{scale: 1, ease: "bounce"});


//timeline test
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2",
      scroller: ".smooth-scroll",
      // scrub: 5,
      start: "top 100%",
      end: "+=100%",
      markers: true,
      id: "text panel"
    }
  });

tl.staggerFrom(".box2", 0.6, {opacity: 0,y: 100, autoAlpha: 0}, 0.2)
  // .from("#box8", {autoAlpha: 0, ease: "power2"})
.staggerTo(".box2", 0.2,{opacity: 1, ease: "bounce"});

// //timeline test
// var tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#section3",
//       scroller: ".smooth-scroll",
//       // scrub: 5,
//       start: "top 110%",
//       end: "+=100%",
//       markers: true,
//       id: "text panel"
//     }
//   });

// tl.staggerFrom(".box3", 0.6, {opacity: 0, autoAlpha: 0}, 0.2)
//   // .from("#box8", {autoAlpha: 0, ease: "power2"})
// .staggerTo(".box3", 0.6,{opacity: 1, ease: "bounce"});

//timeline test
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section3",
      scroller: ".smooth-scroll",
      scrub: 3,
      start: "top bottom",
      end: "top top",
      markers: true,
      id: "text panel"
    }
  });

tl.staggerFrom(".box3", 1, {y: 100, autoAlpha: 0});


//timeline test
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section4",
      scroller: ".smooth-scroll",
      scrub: 3,
      start: "top bottom",
      end: "top top",
      markers: true,
      id: "text panel"
    }
  });

tl.staggerFrom(".box4", 0.5, {x: "-100vw",  autoAlpha: 0}, 0.5);


  // .from("#box8", {autoAlpha: 0, ease: "power2"})
// .staggerTo(".box4", 0.6,{x: 100, ease: "bounce"});


// //toggle test
// gsap.from("#box9", {
//   scrollTrigger: {
//     trigger: "#section4",
//     scroller: ".smooth-scroll",
//     toggleActions: "restart none none none",
//     start: "top top",
//     id: "bottom panel"
//     // end: "top top"
//   }, 
//   rotation: 360,
//   ease: "none"
// });





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();