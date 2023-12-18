import Glide from "@glidejs/glide";

const glide = () => {
  const myGlide = new Glide('.glide', {
    type: "carousel",
    startAt: 0,
    perView: 3,
    breakpoints: {
      576: {
        perView: 1
      },
      768: {
        perView: 2
      },
      1025: {
        perView: 3
      }
    }
  });

  myGlide.mount();
};

export default glide;
