<template>
  <BlockHeroeMainSlider :fields="MAIN_HERO_SLIDER_CONFIG.block_fields" />
  <BlockApartmentConfigurator
    :fields="MAIN_APARTMENT_CONFIGURATOR_CONFIG.block_fields"
  />
</template>

<script setup lang="ts">
import {
  MAIN_HERO_SLIDER_CONFIG,
  MAIN_APARTMENT_CONFIGURATOR_CONFIG,
} from "~/configs/pages/main";
import {
  BlockHeroeMainSlider,
  BlockApartmentConfigurator,
} from "~/components/blocks";
</script>
