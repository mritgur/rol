document.addEventListener("DOMContentLoaded",function(){
// слайдер на first_page

const slider = tns({
    "container": ".fpage_slider",
    items: 3,
    // "autoWidth": true,
    "center": false,
    // "swipeAngle": true,
    Touch : true,
    // "autoplayTimeout": 5500,
   
    slideBy: '1',
    // autoplay: true,
    loop: true,
    autoplayButton: false,
    mouseDrag: true,
    "speed": 400,
    controls:false,
    nav: false,
    responsive: {
        
        320: {

            items: 1
        },
        992: {

            items: 2
        },
        1440: {
            items: 3
        }
    },
    // navContainer: "#slPager"
    });
   
document.querySelector('.fpage_slider_next').addEventListener('click', () => {
slider.goTo('next');
});


});