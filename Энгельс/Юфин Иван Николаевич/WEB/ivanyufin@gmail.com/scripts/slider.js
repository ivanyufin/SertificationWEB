var slider = document.querySelector(".container_body");
var items = document.querySelectorAll('.item');
var carouselIndicators = document.querySelector(".carouselIndicators").getElementsByTagName('li');
    
var step = 0;
var width = screen.width;

var left = document.querySelector(".carousel_button_prev");
var right = document.querySelector(".carousel_button_next");



right.addEventListener("click", () => {
    carouselIndicators[step].classList.remove('active');
    items[step].classList.remove('active_item');
    if(step + 1 < carouselIndicators.length) {
        carouselIndicators[step + 1].classList.add('active');
        items[step + 1].classList.add('active_item');
    }
    else {
        carouselIndicators[0].classList.add('active');
        items[0].classList.add('active_item');
    }
    if(step >= items.length - 1) step = -1;
    step++;
    slider.style.transform = "translateX(" + -(step * (width * 0.83)) + "px)";
});

left.addEventListener("click", () => {
    carouselIndicators[step].classList.remove('active');
    items[step].classList.remove('active_item');
    if(step - 1 > -1) {
        carouselIndicators[step - 1].classList.add('active');
        items[step - 1].classList.add('active_item');
    }
    else {
        carouselIndicators[carouselIndicators.length - 1].classList.add('active');   
        items[items.length - 1].classList.add('active_item');
    }
    if(step <= 0 ) step = items.length;
    step--;
    slider.style.transform = "translateX(" + -(step * (width * 0.83) ) + "px)";
});