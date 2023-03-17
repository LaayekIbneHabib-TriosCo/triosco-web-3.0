let slideIndex = 1;

document.querySelector(".grid").addEventListener("click", function () {
  openModal();
  showSlides(slideIndex);
});

function openModal() {
  document.querySelector(".gallery").style.display = "block";
}

function closeModal() {
  document.querySelector(".gallery").style.display = "none";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("img");
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

// back functionality

document.querySelector(".back-btn").addEventListener("click", () => {
  window.history.back();
});
