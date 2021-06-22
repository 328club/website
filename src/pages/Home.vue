<template>
  <section class="bg"></section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100%;
  background-image: url(../assets/background.png);
  background-size: cover;
  background-repeat: no-repeat;
  // background-position: 50% 50%;
  background-color: #000000;
}
</style>
