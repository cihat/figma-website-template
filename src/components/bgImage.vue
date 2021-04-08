<script>
export default {
  name: "BgImage",
};
</script>

<template >
  <div id="bgImage">
    <img class="bg-image" src="../assets/img/Path.png" alt="background image" />
    <img
      class="bg-image"
      id="image-2"
      src="../assets/img/Group.png"
      alt="background image"
    />
  </div>
</template>

<style scoped lang="scss">
#bgImage {
  img.bg-image {
    position: absolute;
    right: 0;
    top: 0px;
    z-index: -1;
  }
  img#image-2 {
    top: 245px;
  }
}
</style>