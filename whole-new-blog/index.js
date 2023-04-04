// MENU
function toggleNav() {
  const button_open = document.getElementById("button-open");
  const button_close = document.getElementById("button-close");
  const nav = document.querySelector(".nav");

  if (nav.style.display === "none") {
    nav.style.display = "block";
    button_open.style.display = "none";
    button_close.style.display = "block";
  } else {
    nav.style.display = "none";
    button_open.style.display = "block";
    button_close.style.display = "none";
  }
}

document.getElementById("burger-menu").addEventListener("click", toggleNav);
// END

// CLICK TO ACTIVATE NAV BUTTONS
const icons = [
  "#about-us",
  "#create",
  "#connect",
  "#transcend",
  "#dot-one",
  "#dot-two",
  "#call",
];

const activeIcons = [
  "./resources/images/icons/about-us-active.png",
  "./resources/images/icons/create-active.png",
  "./resources/images/icons/connect-active.png",
  "./resources/images/icons/transcend-active.png",
  "./resources/images/icons/Team Active.png",
  "./resources/images/icons/Blog Active.png",
  "./resources/images/icons/contact-active.png",
];

const inactiveIcons = [
  "./resources/images/icons/about-us-inactive.png",
  "./resources/images/icons/create-inactive.png",
  "./resources/images/icons/connect-inactive.png",
  "./resources/images/icons/transcend-inactive.png",
  "./resources/images/icons/Team InActive.png",
  "./resources/images/icons/Blog InActive.png",
  "./resources/images/icons/contact-inactive.png",
];

const updateIcons = (index) => {
  icons.forEach((icon, i) => {
    document.querySelector(icon).src =
      i === index ? activeIcons[i] : inactiveIcons[i];
  });
};

icons.forEach((icon, i) => {
  document.querySelector(icon).addEventListener("click", () => {
    updateIcons(i);
  });
});
// END

// VIBRATE WHEN CLICKED ON BURGER MENU
document.querySelector(".burger-menu").addEventListener("click", () => {
  window.navigator.vibrate(50);
});
// END
