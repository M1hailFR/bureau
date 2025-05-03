<template>
  <div
    class="top-0 left-0 w-full z-[100] bg-neutral flex items-center px-4 py-2 transition-all duration-300"
    :class="isClose ? 'hidden' : 'fixed'"
  >
    <div class="flex items-center justify-center w-full">
      <Button
        class="mr-5 text-neutral2 text-xs bg-brand"
        variant="default"
        size="xs"
      >
        {{ fields.buttonText }}
      </Button>
      <Button
        class="button-underline mr-5 text-neutral2"
        variant="underline"
        animatedUnderline
        underlineDirection="left"
        size="unset"
      >
        {{ fields.text }}
      </Button>
    </div>
    <div class="flex items-center justify-end">
      <X
        class="border border-neutral2 cursor-pointer rounded-sm p-1 text-neutral2 size-[22px]"
        @click="onClose"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IFieldsProps } from "~/core/types/components";
import { type IBlockBannerPromoProps } from "./shared";
import { X } from "lucide-vue-next";

defineOptions({
  name: "BlockBannerPromo",
});

defineProps<IFieldsProps<IBlockBannerPromoProps>>();

const isClose = ref(false);

const emit = defineEmits(["close"]);

const onClose = () => {
  isClose.value = true;
  emit("close");
};
</script>
