$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items: 1, //
    nav: true, // Shows navigation arrows
    dots: true, // Shows pagination dots
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    },

    
})