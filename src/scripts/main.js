/*
 * Variables
 */
let mobileDevice;
let showMenu = false;

/*
 * Functions
 */
function isMobile() {
  if(mobileDevice)
    return true;
  else
    return false;
}

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
  var top = viewportOffset.top;
  elHeight = window.innerHeight;;
  elWidth = window.innerWidth;
  menu = document.getElementById("menu");

  if(elWidth > 1500) {
    if(top <= -elHeight) {
      menu.classList.add("smallMenu");
    } else if (top > -elHeight) {
      menu.classList.remove("smallMenu");
    }
  } else {
    menu.classList.remove("smallMenu");
    menu.classList.add("mobileMenu");
  }
}

function mobileMenu() {
  if(isMobile) {
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
 * Init
 */
function init() {
  updateDeviceType();
}

init();

/*
 * Event listeners
 */
document.addEventListener("DOMContentLoaded", function(){
  mobileMenu();
});

window.addEventListener('scroll',function(e) {
  updateMenu();
  checkScreenSize();
});

window.addEventListener("resize", debounce(updateDeviceType, 50));