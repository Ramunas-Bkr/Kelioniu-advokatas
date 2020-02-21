let header = document.getElementById("header");
let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function renderTestimonial(data) {

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const obj = data[i];


        HTML += `<div class="testimonial-box">
    <div class="box-photo" style="background-image: url(../img/Testimonials/${obj.photo});"></div>
    <div class="box-stars">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
    </div>
    <div class="box-name">
        <h5>${obj.name}</h5>
        <h6>${obj.title}</h6>
        <p class="testimonial-text">
               ${obj.text}
        </p>
    </div>
    <div class="box-quotes">
        <i class="fa fa-quote-right"></i>
    </div>
    </div>`
    }
    return document.getElementById('testimonials').innerHTML = HTML;
}


let slideIndex = 1;


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("testimonial-box");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "inline-block";
}


// let testimonialTaimer = setInterval("testimTaimer()", 1200);

// function testimTaimer(n) {

//     let slides = document.getElementsByClassName("testimonial-box");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "inline-block";
// }

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let modal = document.getElementById("mymodal");
let close = document.getElementById("close_modal_window");

btn1.onclick = display;
btn2.onclick = display;
btn3.onclick = display;

function display() {
    modal.style.display = "block";
};

close.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

let btn_sent = document.getElementById('btn-sent');

btn_sent.onclick = function() {
    modal.style.display = "none";
    alert('Ačiū, netrukus susisieksmime');

}