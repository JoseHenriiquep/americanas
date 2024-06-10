//Carrossel de imagens
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = "none";
        });
        slides[index].style.display = "block";
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    document.querySelector(".next-button").addEventListener("click", nextSlide);
    document.querySelector(".prev-button").addEventListener("click", prevSlide);

    showSlide(currentSlide);
});

//Slider de produtos 
//Slider 1
const produtos1 = document.querySelectorAll('.produtos-n-1')
let counter1 = 0

function left1(){
    if (counter1 == 0) {
        counter1 = produtos1.length / 10
    } else {
        counter1--
    }
    scroll1()
}    
function right1(){
    if (counter1 == produtos1.length / 10) {
        counter1 = 0
    } else {
        counter1++
    }
    scroll1()
}
function scroll1(){
    produtos1.forEach(function(item){
        item.style.transform =  `translateX(-${counter1 * 1200}px)`
    })
}
//Slider 2
const produtos2 = document.querySelectorAll('.produtos-n-2')
let counter2 = 0

function left2(){
    if (counter2 == 0) {
        counter2 = produtos2.length / 10
    } else {
        counter2--
    }
    scroll2()
}    
function right2(){
    if (counter2 == produtos2.length / 10) {
        counter2 = 0
    } else {
        counter2++
    }
    scroll2()
}
function scroll2(){
    produtos2.forEach(function(item){
        item.style.transform =  `translateX(-${counter2 * 1200}px)`
    })
}
//Slider 3
const produtos3 = document.querySelectorAll('.produtos-n-3')
let counter3 = 0

function left3(){
    if (counter3 == 0) {
        counter3 = produtos3.length / 10
    } else {
        counter3--
    }
    scroll3()
}    
function right3(){
    if (counter3 == produtos3.length / 10) {
        counter3 = 0
    } else {
        counter3++
    }
    scroll3()
}
function scroll3(){
    produtos3.forEach(function(item){
        item.style.transform =  `translateX(-${counter3 * 1200}px)`
    })
}

//Slider de promoções
//Slider 1
const promoçoes1 = document.querySelectorAll('.promoçoes-n-1')
let contador1 = 0

function left4(){
    if (contador1 == 0) {
        contador1 = promoçoes1.length / 8
    } else {
        contador1--
    }
    scroll4()
}    
function right4(){
    if (contador1 == promoçoes1.length / 8) {
        contador1 = 0
    } else {
        contador1++
    }
    scroll4()
}
function scroll4(){
    promoçoes1.forEach(function(item){
        item.style.transform =  `translateX(-${contador1 * 1200}px)`
    })
}
//Slider 2
const promoçoes2 = document.querySelectorAll('.promoçoes-n-2')
let contador2 = 0

function left5(){
    if (contador2 == 0) {
        contador2 = promoçoes2.length / 8
    } else {
        contador2--
    }
    scroll5()
}    
function right5(){
    if (contador2 == promoçoes2.length / 8) {
        contador2 = 0
    } else {
        contador2++
    }
    scroll5()
}
function scroll5(){
    promoçoes2.forEach(function(item){
        item.style.transform =  `translateX(-${contador2 * 1200}px)`
    })
}

//Slider categorias
const cat = document.querySelectorAll('.cat')
let contador3 = 0

function left6(){
    if (contador3 == 0) {
        contador3 = cat.length / 17 
    } else {
        contador3--
    }
    scroll6()
}    
function right6(){
    if (contador3 == cat.length / 17) {
        contador3 = 0
    } else {
        contador3++
    }
    scroll6()
}
function scroll6(){
    cat.forEach(function(item){
        item.style.transform =  `translateX(-${contador3 * 1050}px)`
    })
}
