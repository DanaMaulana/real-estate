// menu hamburger
const hamburger = document.querySelector('#hamburger');
const navBar = document.querySelector('#nav-menu');

hamburger.addEventListener('click', ()=> {
  hamburger.classList.toggle('hamburger-active');
  navBar.classList.toggle('hidden');
})

// navbar fixed
window.onscroll = () => {
  const header = document.querySelector('header');

  const fixedNavbar = header.offsetTop;
  if (window.scrollY > fixedNavbar) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
}

// tabs menu
function tabsMenu(evt, tabsName) {
  const tabMenu = document.getElementsByClassName('tabs-menu');
  for (let i = 0; i < tabMenu.length; i++) {
    tabMenu[i].style.display = 'none';
  }
  const tablinks = document.getElementsByClassName('tablink');
  for (let i = 0; i < tabMenu.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(tabsName).style.display = 'flex';
  evt.currentTarget.className += ' active';
}

// link nav if active
// When a link is clicked, it removes the 'active' class from all links and then adds the 'active' class only to the clicked link.
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.alink');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Remove 'active' class from all links
      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });

      // Add 'active' class to the clicked link
      this.classList.add('active');
    });
  });
});