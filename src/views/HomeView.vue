<script>
// @ is an alias to /src
import BasePage from "@/components/BasePage.vue";

export default {
  name: "HomeView",
  components: {
    BasePage,
  },
};
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/cards.png" />
    <BasePage msg="Welcome to my simple Games App, powered by Vue.js!" />
  </div>
</template>
