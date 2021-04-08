<script>
import HeroComponent from "../components/HeroContent";
import LandingPage from "../components/LandingPage";
import Post from "../components/Posts/Post";
import Post1 from "../components/Posts/Post-1";
import Post2 from "../components/Posts/Post-2";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    HeroComponent,
    LandingPage,
    Post,
    Post1,
    Post2,
    Pricing,
    Footer,
  },
};
</script>

<template>
  <div id="home">
    <HeroComponent />
    <LandingPage />
    <Post />
    <Post1 />
    <Post2 />
    <Pricing />
    <!-- <Footer/> -->
  </div>
</template>

<style scoped lang="scss">
</style>