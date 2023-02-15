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

document
  .getElementById("open-gallery-btn")
  .addEventListener("click", function () {
    openModal();
    showSlides(slideIndex);
  });

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("modal-img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// demo

// document.getElementById("modal-content").addEventListener("click", function () {
//   document.querySelector(".nav").style.visibility = "hidden";
// });
