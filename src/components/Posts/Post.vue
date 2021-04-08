<script>
export default {};
</script>

<template >
  <div id="post">
    <img src="../../assets/img/undraw_happy_news_hxmt.png" alt="" />
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
    }
  }
}
</style>