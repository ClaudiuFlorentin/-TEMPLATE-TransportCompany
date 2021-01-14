// SLIDER EXECUTED BY BUTTONS
var slideIndex = 0;
showSlide(slideIndex);

// NEXT / PREVIOUS CONTROLS
function pushSlide(n) 
{
    showSlide(slideIndex += n);
}

function showSlide(n)
{
    var i;
    var slides = document.getElementsByClassName("sliderImage");
    if(n > slides.length) { slideIndex = 1; }
    if(n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// SLIDER AUTOMATICALY EXECUTED BY TIME
showTimeSlide();

function showTimeSlide()
{
    var i;
    var slides = document.getElementsByClassName("sliderImage");
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if(slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showTimeSlide, 7000);
}