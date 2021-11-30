<template>
  <div id="app">
    <defaultHeader/>
    <div class="main layout">
      <div class="wrap">
        <nuxt/>
      </div>
    </div>
    <defaultFooter/>
  </div>
</template>

<script>
import defaultHeader from "~/components/layout/defaultHeader";
import defaultFooter from "~/components/layout/defaultFooter";

export default {
  name: "articleDetail",
  components: {
    defaultHeader,
    defaultFooter
  }
}
</script>

<style scoped>

</style>
