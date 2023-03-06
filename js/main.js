$('.js-mainVisual-slider').slick({
  arrows: false,
  fade: true,
  infinite: true,
  dots: false,
  speed: 8000,
  autoplay: true,
  autoplaySpeed: 3000,
});

$('.js-room-slider').slick({
  infinite: true,
  dots: false,
  speed: 300,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 757,
      settings: {
        slidesToShow: 1,
        dots: true,
      }
    }
  ]
});

function observeMainVisual() {
  const header = document.querySelector('header');
  function callback(entries) {
    if(entries[0].isIntersecting) {
      header.classList.remove('active');
    } else {
      header.classList.add('active');
    }
  }
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }
  const observer = new IntersectionObserver(callback, options);
  const target = document.querySelector('.js-intersection-mainVisual');
  observer.observe(target);
}
observeMainVisual();

sal();