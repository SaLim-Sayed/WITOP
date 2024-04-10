export const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  centerPadding: 10,
  arrows: true,
  adaptiveHeight: true,
  pauseOnHover: true,
  draggable: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow:3.7,
        slidesToScroll: 1,
        centerPadding: 5,
        dots: true,
        draggable: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: 30,
        dots: true,
        draggable: true,
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerPadding: 30,
        draggable: true,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        centerPadding: 30,
        draggable: true,
      },
    },
  ],
};