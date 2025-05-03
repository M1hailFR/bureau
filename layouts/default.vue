<template>
  <div>
    <BlockBannerPromo
      :fields="DEFAULT_BANNER_PROMO_CONFIG.block_fields"
      @close="isClose = true"
    />

    <HeaderDefault :fields="HEADER_DEFAULT_CONFIG.block_fields" 
     :BlockBannerPromoIsClose="isClose"
     />
    <main class="h-[2000px]">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { HeaderDefault } from "~/components/layouts/header";
import { BlockBannerPromo } from "~/components/blocks";
import { HEADER_DEFAULT_CONFIG, DEFAULT_BANNER_PROMO_CONFIG } from "~/configs/layouts/default";

const isClose = ref(false);

</script>

<style></style>
