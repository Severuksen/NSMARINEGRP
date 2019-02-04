$('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    loop: true,
    dots: false,
    margin: 10,
    nav: false,
	autoplay: 5000,
	slidespeed: 3000,
	mouseDrag: false,
	touchDrag: true,
	items: 1,
    responsive:{
        0:{
			items:1
        },
		480:{
			items:1
		},
		768:{
			items:1
		}
    }
});