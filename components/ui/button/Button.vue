<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { Primitive, type PrimitiveProps } from "reka-ui";
import { type ButtonVariants, buttonVariants } from ".";
import { ref, nextTick } from "vue";
import { gsap } from "gsap";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
  underlineDirection?: "left" | "right";
  animatedUnderline?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  underlineDirection: "left",
  animatedUnderline: false,
});

const underlineRef = ref<HTMLElement | null>(null);

const onEnter = () => {
  if (props.animatedUnderline && underlineRef.value) {
    if (props.underlineDirection === "right") {
      gsap.to(
        underlineRef.value,

        {
          right: 0,
          width: 0,
          duration: 0.3,
          ease: "power2.out",
          clearProps: "right",
        }
      );
    } else {
      gsap.to(underlineRef.value, {
        left: 0,
        width: "100%",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }
};

const onLeave = () => {
  if (props.animatedUnderline && underlineRef.value) {
    if (props.underlineDirection === "right") {
      gsap.fromTo(
        underlineRef.value,
        { left: 0, width: 0 },
        {
          left: 0,
          width: "100%",
          duration: 0.3,
          ease: "power2.out",
          clearProps: "left",
        }
      );
    } else {
      gsap.to(underlineRef.value, {
        left: "100%",
        width: 0,
        duration: 0.3,
        ease: "power2.in",
        clearProps: "left",
      });
    }
  }
};
</script>

<template>
  <Primitive
    data-slot="button"
    :as="as"
    :as-child="asChild"
    :class="
      cn(buttonVariants({ variant, size }), props.class, {
        'relative': props.animatedUnderline,
      })
    "
    @mouseenter="onEnter"
    @mouseleave="onLeave"
  >
    <slot />
    <span
      ref="underlineRef"
      :class="[
        'absolute -bottom-0.5 h-[1px] bg-current pointer-events-none',
        props.underlineDirection === 'right' ? 'right-0 w-full' : 'left-0 w-0',
      ]"
    ></span>
  </Primitive>
</template>
