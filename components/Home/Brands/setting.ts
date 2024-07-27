export const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 4.8,
  slidesToScroll: 1,
  initialSlide: 0,
  centerPadding: 0,
  arrows: false,
  adaptiveHeight: true,
  pauseOnHover: true,
  draggable: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3.2,
        slidesToScroll: 1,
        centerPadding: 5,
        dots: true,
        draggable: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.8,
        slidesToScroll: 1,
        centerPadding: 30,
        dots: true,
        draggable: true,
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2.4,
        slidesToScroll: 2,
        initialSlide: 2,
        centerPadding: 30,
        draggable: true,
      },
    },
    {
      breakpoint: 700,
      settings: {
        
        // className: "center",
        // centerMode: true,
        infinite: true,
        slidesToShow: 1.7, 
        slidesToScroll: 1,
        // centerPadding: 0,
          dots: false,
        draggable: true,
      },
    },
  ],
};
