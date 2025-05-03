<template>
  <section class="apartment-configurator relative w-full">
    <section
      class="flex flex-col gap-10 items-center max-w-[1130px] w-full absolute xs:bottom-[-266px] sm:bottom-[-126px] lg:bottom-[-124px] xl:bottom-[-36px] left-0 right-0 m-auto px-5"
    >
      <div
        class="grid w-full box-content grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 items-stretch justify-items-center"
      >
        <div
          class="dropdown bg-neutral w-full border-r border-neutral-200 py-3 border-b-transparent hover:border-b-black border-b-2"
          v-for="(param, idx) in fields.params"
          :key="idx"
        >
          <div class="text-sm text-neutral-400 p-0 px-8">{{ param.title }}</div>
          <DropdownMenuRoot>
            <DropdownMenuTrigger
              as="button"
              class="relative flex h-9 w-full items-center justify-between rounded-md bg-white text-xl px-8"
            >
              <span class="line-clamp-1 text-left">
                {{
                  selected[param.title]?.length
                    ? param.options
                        .filter((o) => selected[param.title].includes(o.value))
                        .map((o) => o.title)
                        .join(", ")
                    : param.options[0]?.title
                }}
              </span>
              <ChevronDown
                class="size-[22px] border-neutral-200 border rounded-sm p-1 ml-2"
              />
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent
                class="DropdownMenuContent bg-white rounded-lg shadow-lg w-full overflow-hidden"
                :side-offset="16"
              >
                <DropdownMenuCheckboxItem
                  v-for="option in param.options"
                  :key="option.value"
                  :checked="selected[param.title].includes(option.value)"
                  @click="toggleOption(param.title, option.value, true)"
                  class="flex w-full items-center gap-2 px-8 py-2 text-black hover:bg-primary/5"
                >
                  <DropdownMenuItemIndicator>
                    <span v-if="selected[param.title].includes(option.value)"
                      >✔️</span
                    >
                  </DropdownMenuItemIndicator>
                  {{ option.title }}
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenuRoot>
        </div>

        <div
          class="flex items-center min-h-[82px] gap-2 justify-center flex-row bg-neutral2 w-full px-8 py-3"
        >
          <Button
            class="button-reverse-underline text-neutral text-2xl"
            variant="underline"
            size="unset"
            animatedUnderline
            underlineDirection="right"
          >
            126 квартир
          </Button>
          <CornerDownRight
            class="bg-brand rounded-sm p-1 text-neutral2 size-[22px]"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { IFieldsProps } from "~/core/types/components";
import type { IBlockApartmentConfiguratorProps } from "./shared";

import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuItemIndicator,
} from "reka-ui";

import { ChevronDown, CornerDownRight } from "lucide-vue-next";

defineOptions({
  name: "BlockApartmentConfigurator",
});

const props = defineProps<IFieldsProps<IBlockApartmentConfiguratorProps>>();

const selected = ref<{ [key: string]: string[] }>({});

if (props.fields?.params) {
  props.fields.params.forEach((param) => {
    if (!(param.title in selected.value)) {
      selected.value[param.title] = param.multiple
        ? []
        : [param.options[0]?.value];
    }
  });
}

function toggleOption(paramTitle: string, value: string, multiple: boolean) {
  if (multiple) {
    if (selected.value[paramTitle].includes(value)) {
      selected.value[paramTitle] = selected.value[paramTitle].filter(
        (v) => v !== value
      );
    } else {
      selected.value[paramTitle].push(value);
    }
  } else {
    selected.value[paramTitle] = [value];
  }
}
</script>

<style lang="scss" scoped>
:deep(.DropdownMenuContent) {
  width: var(--reka-dropdown-menu-trigger-width) !important;
  min-width: var(--reka-dropdown-menu-trigger-width) !important;
  max-width: 100vw;
}
</style>
