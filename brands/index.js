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
