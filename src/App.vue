<script>
import Navbar from "./components/Navbar";
import BgImage from "./components/BgImage";
import Footer from "./components/Footer";

export default {
  components: {
    Navbar,
    BgImage,
    Footer,
  },
};
</script>

<template>
  <Navbar />
  <BgImage />
  <router-view />
  <Footer />
</template>

<style lang="scss">
@import "./assets/css/reset.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
#app {
  font-family: "Roboto", sans-serif, Avenir, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
