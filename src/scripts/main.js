let mobileDevice;
let showMenu = false;

function debounce(func, delay) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}

// Updates the menu depending on the scroll position
function updateMenu() {
  var viewportOffset = document.getElementById("home").getBoundingClientRect();

  // these are relative to the viewport
  var top = viewportOffset.top-250;
  let elHeight = window.innerHeight;
  let elWidth = window.innerWidth;
  let menu = document.getElementById("menu");

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

function toggleMenu() {
  showMenu = !showMenu;

  if(showMenu) {
    document.getElementById("navLinks").style.display = "flex";
    document.getElementById("menuIcon").innerHTML = "<span class=\"material-icons-round\">close</span>"
    document.getElementById("menu").style.paddingBottom = "25px";
  } else {
    document.getElementById("navLinks").style.display = "none";
    document.getElementById("menuIcon").innerHTML = "<span class=\"material-icons-round\">menu</span>"
    document.getElementById("menu").style.paddingBottom = 0;
  }
}

/**
 * Check and update device type
 */
function updateDeviceType() {
  mobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Show/Hide Solo projects and Group projects on load
 */
function projectView() {
  if (window.location.hash === "#group")
    swapActiveProject()
}

/**
 * Toggle between Solo projects and Group projects
 */
function toggleProjectView(obj) {
  // Swap activeProject and inactiveProject ids
  if(obj.id === 'activeProject')
    return;

  swapActiveProject()
}

function swapActiveProject() {
  var activeProject = document.getElementById("activeProject");
  var inactiveProject = document.getElementById('inactiveProject');

  activeProject.id = 'inactiveProject';
  inactiveProject.id = 'activeProject';

  // Toggle visibility of soloProjects and groupProjects
  var soloProjects = document.getElementById('soloProjects');
  var groupProjects = document.getElementById('groupProjects');

  if (soloProjects.style.display === 'none') {
    soloProjects.style.display = 'block';
    groupProjects.style.display = 'none';
  } else {
    soloProjects.style.display = 'none';
    groupProjects.style.display = 'block';
  }
}

/**
 * Randomize the order of the hobbies list
 */
function randomizeHobbies() {
  // Get the parent div element
  var parentDiv = document.getElementById('hobbies');

  if (!parentDiv)
    return;

  // Get all div elements with the class "hobby" within the parent div
  var hobbyDivs = parentDiv.querySelectorAll('.hobby');

  // Convert NodeList to array to use array methods
  hobbyDivs = Array.from(hobbyDivs);

  // Shuffle the array to randomize the order
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  // Shuffle the hobbyDivs array
  var shuffledHobbyDivs = shuffleArray(hobbyDivs);

  // Clear the parent div's content
  parentDiv.innerHTML = '';

  // Re-append the shuffled divs to the parent div
  shuffledHobbyDivs.forEach(function(div) {
    parentDiv.appendChild(div);
  });
}

/**
 * Update current age
 */
function setCurrentAge() {
  var ageDiv = document.getElementById("aboutMeAge")

  if (!ageDiv)
    return;

  const birthDate = new Date(1995, 4, 24); //0-indexed
  const today = new Date();
  ageDiv.textContent = today.getFullYear() - birthDate.getFullYear() - ((today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) ? 1 : 0);
}

/**
 * Init
 */
function init() {
  updateDeviceType();
}

const handleScroll = debounce(function() {
  if (!mobileDevice) {
    updateMenu()
  }
}, 50);

/**
 * Event listeners
 */
document.addEventListener("DOMContentLoaded", function(){
  init();
  randomizeHobbies();
  setCurrentAge();
});

window.addEventListener('scroll', handleScroll);

document.addEventListener("resize", function(e) {
  updateMenu()
});