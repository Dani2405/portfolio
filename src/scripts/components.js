/**
 * Component loader
 */
async function loadComponent(url, elementId) {
  const response = await fetch(url);
  const html = await response.text();
  document.getElementById(elementId).innerHTML = html;
}

async function navComponent() {
  const response = await fetch('../../../src/components/nav.html');
  const html = await response.text();
  return html;
}

async function footerComponent() {
  const response = await fetch('../../../src/components/footer.html');
  const html = await response.text();
  return html;
}

/**
 * Event listeners
 */
document.addEventListener("DOMContentLoaded", function(){
  navComponent()
    .then(html => {
      document.getElementById('navComponent').innerHTML = html;
    });

  footerComponent()
    .then(html => {
      document.getElementById('footerComponent').innerHTML = html;
      setCurrentDate();
    });
});


/**
 * Set copyright year to today
 */
function setCurrentDate() {
  var year = new Date().getFullYear();
  document.getElementById("currentYear").innerHTML = year;
}

function mobileMenu() {
  var menu = document.getElementById("menu")
  if (menu)
    if(mobileDevice)
      document.getElementById("menu").classList.add("mobileMenu");
    else
       menu.classList.remove("mobileMenu");
}

document.addEventListener("DOMContentLoaded", function(){
  mobileMenu();
});