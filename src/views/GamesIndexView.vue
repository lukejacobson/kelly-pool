<script>
// @ is an alias to /src
import BasePage from "@/components/BasePage.vue";
import KellyPoolBase from "@/components/KellyPoolBase.vue";

export default {
  name: "GamesIndexView",
  components: {
    BasePage,
    KellyPoolBase,
  },
};
</script>

<template>
  <div class="home">
    <img alt="Waving Hand" src="../assets/billiards.png" />
    <BasePage msg="Kelly Pool">
      <div class="canvas">
        <KellyPoolBase/>
      </div>
    </BasePage>

  </div>
</template>

<style scoped>
.canvas {
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>