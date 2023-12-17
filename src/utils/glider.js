import Glide from "@glidejs/glide";
const glide = (id) => {
  new Glide(id, {
    type: "carousel",
    startAt: 0,
    perView: 3,
  }).mount();
};

export default glide;
