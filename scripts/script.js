// Function to switch between "Features" tabs
function openTabs(event, tabName) {
  let i, tabcontent, tablinks;

  // Hides all tabs
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Removes the active class from all tabs
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  // Shows content of clicked tab + attach active class
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

// Loads default tab content
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("defaultOpen").click();
});

// FAQ accordion function
const acc = document.getElementsByClassName("faq__accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Toggles active css class
    this.classList.toggle("active");

    // Toggles visibility of sibling (p tag)
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Toggle mobile menu and disable body scrolling while mobile menu is open
let mobileMenu = document.getElementById('mobile-open')
let closeMenu = document.getElementById('mobile-exit')
let nav = document.querySelector('nav')
let body = document.querySelector('body')

mobileMenu.addEventListener('click', () => {
  nav.classList.add('mobile');
  body.style.overflowY = 'hidden';
})

closeMenu.addEventListener('click', () => {
  nav.classList.remove('mobile');
  body.style.overflowY = 'visible';
})