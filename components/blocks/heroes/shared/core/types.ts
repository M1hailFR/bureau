export interface IBlockHeroMainSliderProps {
  slides: Array<{
    image: string;
  }>;
  textSlide: {
    image: string;
  };
  animation: {
    duration: number;
    ease: string;
    scale: number;
    delay: number;
  };
}
