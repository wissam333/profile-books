<script>
import appheader from "./components/Header.vue";
import sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    appheader,
    sidebar
  },

}
</script>

<template>
  <div class="app">
    <div class="view">
      <div class="right">
        <appheader></appheader>
        <router-view />
      </div>
      <div class="left">
        <sidebar></sidebar>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  .view {
    display: flex;
    flex-direction: row-reverse;
    @media (max-width: 991px) {
      flex-direction: column;
    }
    .left {
      width: 6em;
      @media (max-width: 991px) {
        width: 100%;
      }
    }
    .right {
      width: calc(100% - 6em);
      @media (max-width: 991px) {
        width: 100%;
      }
    }
  }
}
</style>
