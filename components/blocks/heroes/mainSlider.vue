<template>
  <section class="relative w-full overflow-hidden main-animate">
    <div class="relative h-screen w-screen text-white">
      <div class="w-screen h-full overflow-hidden">
        <div
          class="bg-cover w-screen h-full bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${fields.slides.at(-1)?.image})` }"
        ></div>
      </div>

      <div
        v-for="(slide, idx) in fields.slides"
        :key="idx"
        class="animated-image w-0 h-full top-0 overflow-hidden absolute"
      >
        <div
          class="bg-cover w-screen h-full bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${slide.image})` }"
        ></div>
      </div>

      <div
        class="animated-image animate-reverse w-full h-full top-0 overflow-hidden absolute"
      >
        <div
          class="w-full h-full absolute flex items-end justify-center bottom-[80px]"
        >
          <div class="max-w-[1360px] px-10 w-full">
            <img
              :src="props.fields.textSlide.image"
              class="animate-ending w-full object-cover max-h-[270px]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type IFieldsProps } from "~/core/types/components";
import { type IBlockHeroMainSliderProps } from "./shared";

import gsap from "gsap";

defineOptions({
  name: "BlockHeroeMainSlider",
});

const props = defineProps<IFieldsProps<IBlockHeroMainSliderProps>>();

onMounted(() => {
  const mainTimeline = gsap.timeline({
    defaults: {
      duration: props.fields.animation.duration,
      ease: props.fields.animation.ease,
    },
    onComplete: () => {
      mainTimeline.reverse();
    },
    onReverseComplete: () => {
      nextTick().then(() => {
        gsap.fromTo(
          ".animate-reverse",
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            width: "100%",
            duration: 0.6,
            ease: "power2.out",
          }
        );
      });
    },
  });

  const slides = document.querySelectorAll(".animated-image");

  gsap.set(slides, {
    width: 0,
    opacity: 1,
  });

  slides.forEach((slide, idx) => {
    mainTimeline.to(
      slide,
      {
        width: "100%",
        scale: props.fields.animation.scale,
        delay: props.fields.animation.delay * idx,
      },
      idx === 0 ? 0 : "-=0.99"
    );
  });

  //   mainTimeline.to(
  //     ".animate-ending",
  //     {
  //       width: "100%",
  //       opacity: 1,
  //     },
  //     "-=0.99"
  //   );
});
</script>

<style lang="scss" scoped>
.main-animate {
  perspective: 1000px;
}

.animated-image {
  will-change: width;
}
</style>
