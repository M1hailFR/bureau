<template>
  <header
    v-if="fields"
    class="header px-10 py-3 flex items-center justify-between flex-row fixed z-50 w-full transition-all"
    :class="[
      isScroll ? 'bg-neutral4 text-neutral2' : 'bg-transparent text-neutral',
      BlockBannerPromoIsClose ? 'top-0' : 'top-[44px]',
    ]"
  >
    <div class="">
      <img :src="fields.logo" alt="logo" class="max-h-[46px] object-contain" />
    </div>
    <div class="flex items-center gap-8">
      <div class="hidden md:flex items-center">
        <Button
          class="button-underline mr-5"
          :class="isScroll ? 'text-neutral2' : 'text-neutral'"
          variant="underline"
          animatedUnderline
          underlineDirection="left"
          size="unset"
        >
          {{ fields.dropDownButtonText }}
        </Button>
        <div class="flex items-center gap-2 flex-row">
          <Button
            class="button-reverse-underline"
            :class="isScroll ? 'text-neutral2' : 'text-neutral'"
            variant="underline"
            size="unset"
            animatedUnderline
            underlineDirection="right"
          >
            {{ fields.dropDownButtonText }}
          </Button>
          <CornerDownRight
            class="bg-brand rounded-sm p-1 text-neutral2 size-[22px]"
          />
        </div>
      </div>

      <Button
        class="ml-3 h-10 w-10 flex flex-col gap-1 items-center justify-center bg-transparent"
        :class="isScroll ? 'text-neutral2' : 'text-neutral'"
        variant="menu"
        size="unset"
      >
        <span
          v-for="(item, idx) in 2"
          :key="idx"
          class="w-full h-[1px] bg-neutral rounded-full"
        ></span>
      </Button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { type IFieldsProps } from "~/core/types/components";
import { type IHeaderDefaultProps } from "./shared";
import { CornerDownRight } from "lucide-vue-next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

defineOptions({
  name: "HeaderDefault",
});

defineProps<
  IFieldsProps<IHeaderDefaultProps> & {
    BlockBannerPromoIsClose: boolean;
  }
>();
const isScroll = computed(() => {
  return currentScroll.value > 100;
});
const currentScroll = ref(0);
onMounted(() => {
  let lastScroll = window.scrollY;

  ScrollTrigger.create({
    start: 50,
    end: 99999,
    onUpdate: (self) => {
      currentScroll.value = window.scrollY;
      if (currentScroll.value > lastScroll) {
        gsap.to(".header", {
          y: -100,
          duration: 0.6,
          ease: "power2.inOut",
          opacity: 0,
        });
      } else {
        gsap.to(".header", {
          y: 0,
          duration: 0.6,
          ease: "power2.inOut",
          opacity: 1,
        });
      }
      lastScroll = currentScroll.value;
    },
  });
});
</script>
