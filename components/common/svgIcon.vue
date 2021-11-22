<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="name"></use>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
    },
  },
};
</script>

<style></style>
