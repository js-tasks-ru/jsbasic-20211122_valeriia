function initCarousel() {
  let carousel = document.querySelector('.carousel__inner');
  let left = document.querySelector('.carousel__arrow_left');
  let right = document.querySelector('.carousel__arrow_right');
  let rClick = -1;
  let lClick = 0;

  if (lClick == 0) {
    left.style.display = 'none';
  }

  left.addEventListener('click', function() {
    rClick += 1;
    lClick += 1;
    carousel.style.transform = 'translateX(' + `${lClick*carousel.offsetWidth}` + 'px)';
    right.style.display = '';

    if (lClick == 0) {
      left.style.display = 'none';
    }
  });

  right.addEventListener('click', function() {
    carousel.style.transform = 'translateX(' + `${rClick*carousel.offsetWidth}` + 'px)';
    rClick -= 1;
    lClick -= 1;
    left.style.display = '';

    if (rClick <= -4) {
      right.style.display = 'none';
    }
  });
}
