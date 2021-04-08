<script>
export default {
  name: "HeroContent",
};
</script>

<template>
  <div id="hero-content">
    <h1>Introduce Your Product Quickly & Effectively</h1>
    <div class="paraf">
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus
      </p>
      <br />
      <p>
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
        sem. Nulla consequat massa quis enim.
      </p>
    </div>
    <div class="buttons">
      <button class="active">Purchase UI Kit</button>
      <button>Learn More</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
#hero-content {
  margin-top: 253px;
  margin-bottom: 386px;
  max-width: 539px;
  max-height: 316px;
  display: flex;
  flex-direction: column;
  margin-left: 163px;

  h1 {
    color: #091133;
    font-weight: 500;
    font-size: 50px;
    line-height: 66px;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  .paraf {
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
    color: #505f98;
    margin-bottom: 69px;
  }

  .buttons {
    button {
      cursor: pointer;
      width: 189px;
      height: 36px;
      border-radius: 2px;
      font-weight: 500;
      line-height: 26px;
      font-size: 16px;
      color: #091133;
      border: 2px solid #091133;
      background-color: inherit;
      transition: color 1s;
    }
    button:hover {
      background-color: #111b47;
      color: #fff;
      border: 2px solid #111b47;
      margin-right: 30px;
    }

    .active {
      background-color: #111b47;
      color: #fff;
      border: 2px solid #111b47;
      margin-right: 30px;
    }
    .active:hover {
      color: #091133;
      border: 2px solid #091133;
      background-color: inherit;
    }
  }
}
</style>