const hamburgerButton = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu__container');
// const navigation = document.querySelector('.navigation');
// const navigationLinks = document.querySelectorAll('.navigation__link');

hamburgerButton.addEventListener('click', function(e) {
  e.isClick = true;
  // console.log('click btn');
  const expanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
  hamburgerButton.classList.toggle('is-active');
  hamburgerMenu.classList.toggle('is-active');
  document.body.classList.toggle('is-hidden');
  hamburgerButton.setAttribute('aria-expanded', !expanded);
});

document.body.addEventListener('click', function(e) {
  if (e.isClick === true) {
    return;
  };
  // console.log('click body')
  hamburgerButton.classList.remove('is-active');
  hamburgerMenu.classList.remove('is-active');
  document.body.classList.remove('is-hidden');
})
/*
navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburgerButton.classList.remove('is-active');
    navigation.classList.remove('is-active');
    document.body.classList.remove('is-hidden');
  })
});
*/