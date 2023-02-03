// BACKGROUND OVERLAY
function update(e) {
  let x = e.clientX || e.touches[0].clientX;
  let y = e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty("--cursorX", x + "px");
  document.documentElement.style.setProperty("--cursorY", y + "px");
}

document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);
// END

// MENU
let button_open = document.querySelector(".button-open");
let button_close = document.querySelector(".button-close");
let nav = document.querySelector(".nav");

document.querySelector(".burger-menu").addEventListener("click", function () {
  if (nav.style.display === "none") {
    nav.style.display = "block";
    button_open.style.display = "none";
    button_close.style.display = "block";
  } else {
    nav.style.display = "none";
    button_open.style.display = "block";
    button_close.style.display = "none";
  }
});
// END

//
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
