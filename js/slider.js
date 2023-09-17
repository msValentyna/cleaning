const sliderButtons = document.querySelectorAll('.room__item');
const sliderButtonsContainer = document.querySelector('.room')
const sliderImages = document.querySelectorAll('.room-image__wrapper');

sliderButtonsContainer.addEventListener('click', function(e) {
  e.preventDefault();
  const clicked = e.target.closest('.room__item');
  // console.log(clicked);
  if (!clicked) return;
  sliderButtons.forEach((button) => {
    button.classList.remove('room__item-active');
  });
  clicked.classList.add('room__item-active');

  sliderImages.forEach((image) => {
    image.classList.remove('room-wrapper-active');
  })
  // console.log(clicked.dataset.room);

  document.querySelector(`.room-wrapper-${clicked.dataset.room}`).classList.add('room-wrapper-active');

})