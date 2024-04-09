/**
 * Component loader
 */
async function loadComponent(url) {
  const response = await fetch(url);
  return await response.text();
}

/**
 * Event listeners
 */
document.addEventListener("DOMContentLoaded", function(){
  loadComponent('../../../src/components/nav.html')
    .then(html => {
      document.getElementById('navComponent').innerHTML = html;
    });

  loadComponent('../../../src/components/footer.html')
    .then(html => {
      document.getElementById('footerComponent').innerHTML = html;
      setCurrentDate();
    });
});


/**
 * Set copyright year to today
 */
function setCurrentDate() {
  document.getElementById("currentYear").innerHTML = new Date().getFullYear();
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