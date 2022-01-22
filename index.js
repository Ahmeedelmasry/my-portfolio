// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

  //Contact Popup
  $(".popup").click(function() {
    $(this).fadeOut()
});
//Here we stop propagation , means that popup hide only when we click on it itself (only parent click) , prevent the click action on inner div
$(".popup .inner").click(function(e) {
    e.stopPropagation();
});
//Close popup on button click
$(".popup .close").click(function(e) {
    e.preventDefault();
    $(this).parentsUntil(".popup").parent().fadeOut();
});

//Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyvIoswx_NujZEM8fRENvuCqhEWbkUbibcq58JrJ2OEcU4tb2PNsDTFWRI-1ftsRo5A/exec'
const form = document.forms['google-sheet']

//form
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>document.querySelector(".contact .popup").style.display = "block")
    .catch(error => alert("error"))
})
