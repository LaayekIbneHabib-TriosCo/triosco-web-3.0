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

// SECTION BEHAVIOUR
const sectionOne = document.querySelector(".section-1");
const observerOne = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        nav.style.display = "none";
        button_open.style.display = "block";
        button_close.style.display = "none";
      } else {
        nav.style.display = "block";
        button_open.style.display = "none";
        button_close.style.display = "block";
      }
    });
  },
  { threshold: 0.5 }
);
observerOne.observe(sectionOne);

const section = document.querySelector(".create");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(".section-title").innerHTML = " | CREATE";
      } else {
        document.querySelector(".section-title").innerHTML = "";
      }
    });
  },
  { threshold: 0.5 }
);
observer.observe(section);
// END

// SECTION 4 CREATE
const item_1 = document.querySelector(".item-1");
const item_2 = document.querySelector(".item-2");
const item_3 = document.querySelector(".item-3");

const preview_1 = document.querySelector(".preview-1");
const preview_2 = document.querySelector(".preview-2");
const preview_3 = document.querySelector(".preview-3");

item_1.addEventListener("mouseover", function () {
  preview_1.style.display = "block";
});

item_1.addEventListener("mouseleave", function () {
  preview_1.style.display = "none";
});
//
item_2.addEventListener("mouseover", function () {
  preview_2.style.display = "block";
});

item_2.addEventListener("mouseleave", function () {
  preview_2.style.display = "none";
});
//
item_3.addEventListener("mouseover", function () {
  preview_3.style.display = "block";
});

item_3.addEventListener("mouseleave", function () {
  preview_3.style.display = "none";
});
//
