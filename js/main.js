const mainVisualSlider = $('.js-mainVisual-slider')
  .on('init', () => {
    $('.js-mainVisual-slider .slick-slide[data-slick-index="0"]').addClass("add-animation");
  })
  .slick({
    arrows: false,
    fade: true,
    infinite: true,
    dots: false,
    speed: 5000,
    autoplay: false,
    autoplaySpeed: 4000,
  })
  .on({
    beforeChange: function (event, slick, currentSlide, nextSlide) {
      $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
      $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
    },
    afterChange: function () {
      $(".remove-animation", this).removeClass("remove-animation add-animation");
    },
  });

new Promise((resolve, reject) => {
  const img = document.getElementById('js_loading_img');
  const tmp = new Image();
  tmp.src = img.src;
  tmp.addEventListener('load', () => {
    img.classList.add('show');
    document.getElementById('js_loading_text').classList.add('show');
    setTimeout(() => resolve(), 2000);
  });
}).then(() => {
  const img = document.getElementById('js_mainVisual_first_img');
  const loading = document.getElementById('js_loading');
  if(img.complete) {
    loading.classList.add('hidden');
    mainVisualSlider.slick('slickPlay');
  } else {
    const tmp = new Image();
    tmp.src = img.src;
    tmp.addEventListener('load', () => {
      loading.classList.add('hidden');
      mainVisualSlider.slick('slickPlay');
    });
  }
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

sal({
  threshold: 0.2
});