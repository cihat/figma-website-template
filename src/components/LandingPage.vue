<script>
export default {
  name: "LandingPage2",
};
</script>

<template>
  <div id="landing-page">
    <div class="content">
      <ul>
        <li class="title">
          <h1>Light, Fast & Powerful</h1>
        </li>
        <li class="body">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <br />
          <p>
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
        </li>
        <li class="element-carts">
          <ul>
            <li class="element-cart">
              <img
                src="../assets/img/element-cart-icon.png"
                alt="Element cart icon"
              />
              <h3>Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </li>
            <li class="element-cart">
              <img
                src="../assets/img/element-cart-icon.png"
                alt="Element cart icon"
              />
              <h3>Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="photo">
      <img
        src="../assets/img/landing-page-2-undraw_mobile_login_ikmv.png"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
#landing-page {
  margin: 160px;
  padding-top: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 540px;
    max-height: 422px;
    margin-right: 30px;
    ul {
      li.title {
        h1 {
          font-weight: 500;
          font-size: 36px;
          line-height: 48px;
          color: #091133;
          margin-bottom: 1rem;
        }
      }
      li.body {
        max-width: 540px;
        font-weight: 400;
        font-size: 1rem;
        line-height: 26px;
        color: #6f7cb2;
        margin-bottom: 80px;
      }
      li.element-carts {
        ul {
          display: flex;
          li.element-cart {
            &:nth-last-child(1) {
              margin-right: 0px;
            }
            margin-right: 30px;
            display: flex;
            flex-direction: column;
            max-width: 255px;
            max-height: 138px;
            align-items: flex-start;
            img {
              margin-bottom: 14px;
            }
            h3 {
              font-weight: 500;
              font-size: 1rem;
              line-height: 26px;
              color: #091133;
              margin-bottom: 6px;
            }
            p {
              font-weight: 400;
              font-size: 12px;
              line-height: 18px;
              color: #5d6970;
            }
          }
        }
      }
    }
  }
  .photo {
    width: 540px; /* you can use % */
    height: auto;
    margin-bottom: 108px;
  }
}
</style>