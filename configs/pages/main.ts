export const MAIN_HERO_SLIDER_CONFIG = Object.freeze({
  block_fields: {
    slides: [
      { image: "/images/shared/slides/image.png" },
      { image: "/images/shared/slides/image-1.png" },
      { image: "/images/shared/slides/image-2.png" },
      { image: "/images/shared/slides/image-3.png" },
      { image: "/images/shared/slides/image-4.png" },
      { image: "/images/shared/slides/image-5.png" },
      { image: "images/shared/slides/bg.png" },
    ],
    textSlide: {
      image: "/images/pages/main/text.png",
      alt: "",
    },
    animation: {
      duration: 1,
      ease: "power1.inOut",
      scale: 1.03,
      delay: 0.03,
    },
  },
});

export const MAIN_APARTMENT_CONFIGURATOR_CONFIG = Object.freeze({
  block_fields: {
    link: "/",
    params: [
      {
        title: "Дом",
        multiple: true,
        options: [
          { title: "Все Дома", value: "1" },
          { title: "2", value: "2" },
          { title: "3", value: "3" },
          { title: "4", value: "4" },
          { title: "5", value: "5" },
          { title: "6", value: "6" },
          { title: "7", value: "7" },
        ],
      },
      {
        title: "Комнатность",
        multiple: true,
        options: [
          { title: "1 комната", value: "1" },
          { title: "2", value: "2" },
          { title: "3", value: "3" },
          { title: "4", value: "4" },
          { title: "5", value: "5" },
          { title: "6", value: "6" },
          { title: "7", value: "7" },
        ],
      },
      {
        title: "Площадь",
        multiple: true,
        options: [
          { title: "30-40 м2", value: "1" },
          { title: "2", value: "2" },
          { title: "3", value: "3" },
          { title: "4", value: "4" },
          { title: "5", value: "5" },
          { title: "6", value: "6" },
          { title: "7", value: "7" },
        ],
      },
    ],
  },
});
