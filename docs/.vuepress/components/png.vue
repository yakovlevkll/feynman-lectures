<template>
  <img :src="$withBase(`/img/${src}.png`)" :alt="alt" class="zoom-img">
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
});
</script>