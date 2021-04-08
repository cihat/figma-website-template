<script>
export default {
  name: "pricing",
};
</script>

<template>
  <div class="container">
    <div id="pricing">
      <h1>A Price To Suit Everyone</h1>
      <p class="body">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus
      </p>
      <h2 class="price">$40</h2>
      <h4 class="title">UI Design Kit</h4>
      <p class="info">See, One price. Simple.</p>
      <button>Purchase Now</button>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  background-image: url("../assets/img/pricing-Rectangle.png");
}
#pricing {
  padding-top: 237px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 600px;

  h1 {
    font-weight: 500;
    line-height: 48px;
    font-size: 36px;
    color: #091133;
    margin-bottom: 1rem;
  }

  p.body {
    font-weight: 400;
    font-size: 1rem;
    line-height: 26px;
    color: #6f7cb2;
    margin-bottom: 35.82px;
    text-align: center;
  }

  h2.price {
    font-weight: 500;
    font-size: 50px;
    line-height: 66px;
    letter-spacing: 1px;
    color: #222f65;
  }

  h4.title {
    font-weight: 400;
    line-height: 26px;
    font-weight: 1rem;
    color: #37447e;
    margin-bottom: 60px;
  }

  p.info {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 9px;
    color: #5d6970;
  }

  button {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: #fff;
    background-color: #111b47;
    width: 189px;
    height: 32px;
    margin-bottom: 172px;
    border-radius: 2px;
    cursor: pointer;
  }
  button:hover {
    transition: 1s color;
    color: #111b47;
    background-color: #fff;
  }
}
</style>