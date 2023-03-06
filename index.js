// BACKGROUND EFFECT
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

// SECTION 1
const button_open = document.getElementById("button-open");
const button_close = document.getElementById("button-close");
const nav = document.querySelector(".nav");
const section1 = document.querySelector(".section-1");

function myFunction() {
  const observer1 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          nav.style.display = "none";
          button_open.style.display = "block";
          button_close.style.display = "none";
          document.querySelector(".header").style.borderBottom = "0";
          document.querySelector(".body").style.backgroundImage =
            "url(/resources/images/background.png)";
        } else {
          nav.style.display = "block";
          button_open.style.display = "none";
          button_close.style.display = "block";
          document.querySelector(".header").style.borderBottom =
            "0.25rem solid var(--yellow)";
          document.querySelector(".body").style.backgroundImage = "none";
        }
      });
    },
    { threshold: 1 }
  );

  observer1.observe(section1);
}

if (window.innerWidth > 500) {
  myFunction();
}
// END

// CHANGE SECTION TITLES AND LOGO STATE
const sections = [
  {
    id: "#section-2",
    title: " | ABOUT US",
  },
  {
    id: "#section-3",
    title: " | CREATE",
  },
  {
    id: "#section-4",
    title: " | CONNECT",
  },
  {
    id: "#section-5",
    title: " | TRANSCEND",
  },
  {
    id: "#section-6",
    title: " | OUR TEAM",
  },
  {
    id: "#section-7",
    title: " | OUR BLOGS",
  },
  {
    id: "#section-8",
    title: " | CONTACT US",
  },
];

sections.forEach((section, index) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelector(".section-title").innerHTML = section.title;
          icons.forEach((icon, i) => {
            document.querySelector(icon).src =
              i === index ? activeIcons[i] : inactiveIcons[i];
          });
        } else {
          document.querySelector(".section-title").innerHTML = "";
          document.getElementById(icons).src = inactiveIcons;
        }
      });
    },
    { threshold: 1 }
  );
  observer.observe(document.querySelector(section.id));
});
// END

// HOVER TO SHOW PREVIEW ON SERIVICE PAGE
const togglePreview = (items, previews) => {
  for (let i = 0; i < items.length; i++) {
    const item = document.querySelector(items[i]);
    const preview = document.querySelector(previews[i]);

    item.addEventListener("mouseover", () => {
      preview.style.display = "block";
    });

    item.addEventListener("mouseleave", () => {
      preview.style.display = "none";
    });
  }
};

togglePreview(
  [".item-1", ".item-2", ".item-3"],
  [".preview-1", ".preview-2", ".preview-3"]
);
togglePreview(
  [".item-1B", ".item-2B", ".item-3B"],
  [".preview-1B", ".preview-2B", ".preview-3B"]
);
togglePreview(
  [".item-1C", ".item-2C", ".item-3C"],
  [".preview-1C", ".preview-2C", ".preview-3C"]
);
// END

// REDUCE SCROLL SENSITIVITY
function wheel(event) {
  var delta = 0;
  if (event.wheelDelta) {
    delta = event.wheelDelta / 120;
  } else if (event.detail) {
    delta = -event.detail / 3;
  }

  handle(delta);
  if (event.preventDefault) {
    event.preventDefault();
  }
  event.returnValue = false;
}

function handle(delta) {
  var time = 1000;
  var distance = 300;

  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $(window).scrollTop() - distance * delta,
      },
      time
    );
}

if (window.addEventListener) {
  window.addEventListener("DOMMouseScroll", wheel, false);
}
window.onmousewheel = document.onmousewheel = wheel;
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
  "./resources/images/icons/circle-tab-active.png",
  "./resources/images/icons/circle-tab-active.png",
  "./resources/images/icons/contact-active.png",
];

const inactiveIcons = [
  "./resources/images/icons/about-us-inactive.png",
  "./resources/images/icons/create-inactive.png",
  "./resources/images/icons/connect-inactive.png",
  "./resources/images/icons/transcend-inactive.png",
  "./resources/images/icons/circle-tab-inactive.png",
  "./resources/images/icons/circle-tab-inactive.png",
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

// TEAM OVERVIEW
// let teamOverview = document.querySelectorAll(".teamOverview");
// let teamPopup = document.querySelectorAll(".team-popup");
// let closePopup = document.querySelectorAll(".close-popup");

// for (let i = 0; i < teamOverview.length; i++) {
//   teamOverview[i].addEventListener(
//     "click",
//     (function (index) {
//       return function () {
//         teamPopup[index].style.display = "block";
//       };
//     })(i)
//   );

//   if (closePopup[i]) {
//     closePopup[i].addEventListener(
//       "click",
//       (function (index) {
//         return function () {
//           teamPopup[index].style.display = "none";
//         };
//       })(i)
//     );
//   }
// }

let teamOverview = document.querySelectorAll(".teamOverview");
let teamPopup = document.querySelectorAll(".team-popup");
let closePopup = document.querySelectorAll(".close-popup");

for (let i = 0; i < teamOverview.length; i++) {
  teamOverview[i].addEventListener(
    "click",
    (function (index) {
      return function () {
        // Check if any teamPopup is already displayed
        let isPopupDisplayed = false;
        for (let j = 0; j < teamPopup.length; j++) {
          if (teamPopup[j].style.display === "block") {
            isPopupDisplayed = true;
            break;
          }
        }

        // Display the new teamPopup only if there is no other teamPopup displayed
        if (!isPopupDisplayed) {
          teamPopup[index].style.display = "block";
          teamOverview[index].style.border = "2px solid #f2b400";
          // teamOverview[index].style.padding = "10px";
        }
      };
    })(i)
  );

  if (closePopup[i]) {
    closePopup[i].addEventListener(
      "click",
      (function (index) {
        return function () {
          teamPopup[index].style.display = "none";
          teamOverview[index].style.border = "none";
          // teamOverview[index].style.padding = "0px";
        };
      })(i)
    );
  }
}

// END

// CHANGE LANGUAGE
function displayEnglish() {
  document.getElementById("lang-english").style.display = "block";
  document.getElementById("lang-german").style.display = "none";
  document.getElementById("lang-french").style.display = "none";
  document.getElementById("lang-hindi").style.display = "none";
  document.getElementById("lang-hindi").style.display = "none";
  document.getElementById("lang-spanish").style.display = "none";
  document.getElementById("lang-bengali").style.display = "none";
  document.getElementById("lang-telugu").style.display = "none";
}
function displayGerman() {
  document.getElementById("lang-english").style.display = "none";
  document.getElementById("lang-german").style.display = "block";
  document.getElementById("lang-french").style.display = "none";
  document.getElementById("lang-hindi").style.display = "none";
  document.getElementById("lang-gujarati").style.display = "none";
  document.getElementById("lang-spanish").style.display = "none";
  document.getElementById("lang-bengali").style.display = "none";
  document.getElementById("lang-telugu").style.display = "none";
}
function displaySpanish() {
  document.getElementById("lang-english").style.display = "none";
  document.getElementById("lang-german").style.display = "none";
  document.getElementById("lang-french").style.display = "none";
  document.getElementById("lang-hindi").style.display = "none";
  document.getElementById("lang-gujarati").style.display = "none";
  document.getElementById("lang-spanish").style.display = "block";
  document.getElementById("lang-bengali").style.display = "none";
  document.getElementById("lang-telugu").style.display = "none";
}
function displayFrench() {
  document.getElementById("lang-english").style.display = "none";
  document.getElementById("lang-german").style.display = "none";
  document.getElementById("lang-french").style.display = "block";
  document.getElementById("lang-hindi").style.display = "none";
  document.getElementById("lang-gujarati").style.display = "none";
  document.getElementById("lang-spanish").style.display = "none";
  document.getElementById("lang-bengali").style.display = "none";
  document.getElementById("lang-telugu").style.display = "none";
}
function displayHindi() {
  document.getElementById("lang-english").style.display = "none";
  document.getElementById("lang-german").style.display = "none";
  document.getElementById("lang-french").style.display = "none";
  document.getElementById("lang-hindi").style.display = "block";
  document.getElementById("lang-gujarati").style.display = "none";
  document.getElementById("lang-spanish").style.display = "none";
  document.getElementById("lang-bengali").style.display = "none";
  document.getElementById("lang-telugu").style.display = "none";
}
function displayGujarati() {
  document.getElementById("lang-english").style.display = "none";
  document.getElementById("lang-german").style.display = "none";
  document.getElementById("lang-french").style.display = "none";
  document.getElementById("lang-hindi").style.display = "none";
  document.getElementById("lang-gujarati").style.display = "block";
  document.getElementById("lang-spanish").style.display = "none";
  document.getElementById("lang-bengali").style.display = "none";
  document.getElementById("lang-telugu").style.display = "none";
}
function displayBengali() {
  document.getElementById("lang-english").style.display = "none";
  document.getElementById("lang-german").style.display = "none";
  document.getElementById("lang-french").style.display = "none";
  document.getElementById("lang-hindi").style.display = "none";
  document.getElementById("lang-gujarati").style.display = "none";
  document.getElementById("lang-spanish").style.display = "none";
  document.getElementById("lang-bengali").style.display = "block";
  document.getElementById("lang-telugu").style.display = "none";
}
function displayTelugu() {
  document.getElementById("lang-english").style.display = "none";
  document.getElementById("lang-german").style.display = "none";
  document.getElementById("lang-french").style.display = "none";
  document.getElementById("lang-hindi").style.display = "none";
  document.getElementById("lang-gujarati").style.display = "none";
  document.getElementById("lang-spanish").style.display = "none";
  document.getElementById("lang-bengali").style.display = "none";
  document.getElementById("lang-telugu").style.display = "block";
}
// END

// VIBRATE WHEN CLICKED ON BURGER MENU
document.querySelector(".burger-menu").addEventListener("click", () => {
  window.navigator.vibrate(50);
});
// END
