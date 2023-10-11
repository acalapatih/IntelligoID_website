import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";

new Splide(".splide", {
  perPage: 3,
  breakpoints: {
    640: {
      perPage: 1,
    },
  },
});
