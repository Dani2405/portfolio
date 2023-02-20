/*
 * Variables
 */
let mobileDevice;
let showMenu = false;
const contactForm = document.querySelector("#contactForm");
const contactFormStatus = document.querySelector("#contactFormStatus");

/*
 * Functions
 */
// Debounce function
function debounce(func, wait) {
  let timeoutID;
  return function () {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(func, wait);
  };
}

// Checks and returns the size of the screen
function checkScreenSize() {
  intViewportWidth = window.innerWidth;
}

// Updates the menu depending on the scroll position
function updateMenu() {
  var viewportOffset = document.getElementById("home").getBoundingClientRect();

  // these are relative to the viewport
  var top = viewportOffset.top-250;
  elHeight = window.innerHeight;;
  elWidth = window.innerWidth;
  menu = document.getElementById("menu");

  if(elWidth >= 1500) {
    menu.classList.remove("mobileMenu");
    if(top <= -elHeight) {
      menu.classList.add("smallMenu");
      document.getElementById("navLinks").style.display = "flex";
      showMenu = false;
    } else if (top > -elHeight) {
      menu.classList.remove("smallMenu");
      document.getElementById("navLinks").style.display = "flex";
    }
  } else {
    showMenu = false;
    menu.classList.remove("smallMenu");
    menu.classList.add("mobileMenu");
    document.getElementById("navLinks").style.display = "none";
    document.getElementById("menuIcon").innerHTML = "<span class=\"material-icons-round\">menu</span>";
  }
}

function mobileMenu() {
  if(mobileDevice) {
    document.getElementById("menu").classList.add("mobileMenu");
  }
}

function toggleMenu() {
  showMenu = !showMenu;

  if(showMenu) {
    document.getElementById("navLinks").style.display = "flex";
    document.getElementById("menuIcon").innerHTML = "<span class=\"material-icons-round\">close</span>"
  } else {
    document.getElementById("navLinks").style.display = "none";
    document.getElementById("menuIcon").innerHTML = "<span class=\"material-icons-round\">menu</span>"
  }
}

/**
 * check and update device type
 */
function updateDeviceType() {
  mobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * contact form success
 */
function contactFormSuccess() {
  contactForm.reset();
  contactFormStatus.innerHTML = "Thanks for contacting us!";

  setTimeout(() => {
    contactFormStatus.innerHTML = "";
  }, 3000);
}

/**
 * contact form error
 */
function contactFormError() {
  contactFormStatus.innerHTML = "Oops! There was a problem.";

  setTimeout(() => {
    contactFormStatus.innerHTML = "";
  }, 3000);
}

function setCurrentDate() {
  var year = new Date().getFullYear();
  document.getElementById("currentYear").innerHTML = year;
}

/**
 * Init
 */
function init() {
  updateDeviceType();
}

init();

/**
 * Event listeners
 */

document.addEventListener("DOMContentLoaded", function(){
  mobileMenu();
  setCurrentDate();
});

window.addEventListener('scroll',function(e) {
  if (!mobileDevice) {
    updateMenu();
  }
});

window.addEventListener("resize", function(e) {
  updateMenu();
  checkScreenSize();
  debounce(updateDeviceType, 50);
});

/**
 * handle the contact form submission event
 * [Only if we're on the root page]
 */
var first = window.location.origin+"/";
var second = window.location.href;
if(first === second.substring(0 , second.indexOf("#") != -1 ? second.indexOf("#") : second.length)) {
  contactForm.addEventListener("submit", function (ev) {
    ev.preventDefault();

    const data = JSON.stringify(Object.fromEntries(new FormData(contactForm)));

    fetch("https://formspree.io/f/xqkwvbkd", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.ok) {
          contactForm.reset();
          contactFormSuccess();
        } else {
          console.log(`Form not submitted: ${response}`);
          contactFormError();
        }
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
        contactFormError();
      });
  });
}