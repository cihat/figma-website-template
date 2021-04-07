<script>
export default {};
</script>

<template>
  <nav>
    <ul>
      <li class="navbar-left">
        <ul>
          <router-link class="link" tag="li" to="/">Home</router-link>
          <router-link class="link" tag="li" to="/about">About</router-link>
          <router-link class="link" tag="li" to="/contact">Contact</router-link>
        </ul>
      </li>
      <li class="title">
        <a href="#"><h1>Landie</h1></a>
      </li>
      <li class="button">
        <button>Buy Now</button>
      </li>
    </ul>
  </nav>
  <Home />
</template>

<style scoped lang="scss">
nav {
  margin-top: 12px;
  margin-bottom: 253px;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;

    li.navbar-left {
      ul {
        display: flex;
        justify-content: space-around;
        .link {
          margin-right: 60px;
          color: #505f98;
          font-size: 14px;
          line-height: 24px;
        }
        :nth-last-child(1) {
          margin-right: 0px;
        }
      }
    }

    li.title {
      a {
        color: #37447e;
        font-weight: 900;
        font-size: 26px;
        line-height: 38px;
      }
    }

    li.button {
      button {
        width: 160px;
        background-color: #111b47;
        color: #fff;
        padding: 4px auto;
        border-radius: 2px;
        height: 26px;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        cursor: pointer;
      }
    }
  }
}
</style>