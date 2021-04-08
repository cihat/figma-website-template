<script>
export default {};
</script>

<template >
  <div id="post">
    <img src="../../assets/img/undrow-post-1.png" alt="" />
    <div class="content">
      <h1>Light, Fast & Powerful</h1>
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
      <button>Purchase Now</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
#post {
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 130px;
  margin-top: 141px;
  img {
    margin-right: 155px;
    max-width: 480px;
    height: 315.85;
  }
  .content {
    display: flex;
    flex-direction: column;
    max-width: 445px;

    h1 {
      margin-bottom: 1rem;
      color: #091133;
      font-weight: 500;
      font-size: 36px;
      line-height: 48px;
    }
    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 26px;
      color: #6f7cb2;
      margin-bottom: 40px;
    }
    button {
      color: #fff;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      background-color: #111b47;
      width: 150px;
      height: 32px;
      border-radius: 2px;
      cursor: pointer;
    }
    button:hover {
      color: #111b47;
      background-color: #fff;
      transition: 1s color, 1s border;
      border: 2px solid #111b47;
    }
  }
}
</style>