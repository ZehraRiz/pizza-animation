var controller = new ScrollMagic.Controller();

let timeline1 = new TimelineMax();

timeline1
	.to("h1", 2, { opacity: 0, ease: "power2.out", })
	.from("h3", 6, { y: "-100vh", ease: "power2.out", })
	.to("#empty_pan", 5, { opacity: 1, ease: "power2.out", })
	.to("#cheese_shreded", 3, { opacity: 1, ease: "power2.out", })
	.to("#tomato_sauce", 3, { opacity: 1, ease: "power2.out", }, "-=3")
	.to("#cheese_shreded", 3, { x: 200, scale: 1.2, ease: "power2.out", })
	.to("#tomato_sauce", 3, { x: -200, scale: 1.2, ease: "power2.out", }, "-=3")
	.to("#pan_with_tomato_sauce", 2, { opacity: 1, ease: "power2.out", })
	.to("#cheese_shreded", 3, { opacity: 0, ease: "power2.out", }, "-=2")
	.to("#tomato_sauce", 3, { opacity: 0, ease: "power2.out", }, "-=3")
	.from("#onion", 3, {y: "-100vh", ease: "power2.out",})
	.from("#tomato", 1, {y: "-100vh", ease: "power2.out",})
	.from("#capcicum", 1, {y: "-100vh"})
	.from("#pineapple", 1, { y: "-100vh", ease: "power2.out", })
	.to(".hide", 3, { height: "100%", ease: "power2.out", })
	.to("#onion", 3, {x: "200px", opacity: 0, y: -100, ease: "power2.out",})
	.to("#tomato", 3, {x: "-200px", opacity: 0, y: -100, ease: "power2.out",}, "-=3")
	.to("#capcicum", 3, {x: "-200px", opacity: 0, y: 100, ease: "power2.out",}, "-=3")
	.to("#pineapple", 3, { x: "200px", opacity: 0, y: 100, ease: "power2.out", }, "-=3")
	.to("#uncooked_pan", 6, { opacity: 1, ease: "power2.out", }, "-=1")
	.to("#cooked_pan", 6, { opacity: 1, delay: 5, ease: "power2.out", })
	.from("h2", 6, { y: "100vh", ease: "power2.out", })

	

	

var scene1 = new ScrollMagic.Scene({
	triggerElement: ".main-heading",
	duration: "5000",
	triggerHook: 0
})
	.setPin("#main-section")
	.setTween(timeline1) // trigger a TweenMax.to tween
	.addTo(controller);
