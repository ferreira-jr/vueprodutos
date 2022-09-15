<template>
  <Navbar/>
  <main class="col-lg-8 mx-auto px-4 text-center">
    <RouterView />
  </main>
</template>

<script >
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
export default {
    components: { Navbar }
};
</script>

<style scoped>
#app {
  padding: 0;
  margin: 0;
}

</style>
