export const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  centerPadding: 10,
  arrows: true,
  adaptiveHeight: true,
  pauseOnHover: true,
  draggable: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: 5,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        centerPadding: 0,
        dots: true,
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
        centerPadding: 30,
        draggable: true,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3,
        slidesToScroll:1,
        centerPadding: 0,
        draggable: true,
        
      },
    },
  ],
};

