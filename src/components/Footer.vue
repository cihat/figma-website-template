<script>
export default {
  name: "footer",
};
</script>

<template>
  <div class="container">
    <div id="footer">
      <ul class="infos">
        <li>
          <p>©2020 Yourcompany</p>
        </li>
        <li>
          <h1>Landie</h1>
        </li>
        <li>
          <button>Purchase now</button>
        </li>
      </ul>
      <hr />
      <div class="contact">
        <ul class="link">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div></div>
        <ul class="icons">
          <li>
            <a href="#"><img src="../assets/img/facebook-icon.png" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="../assets/img/linkedin-icon.png" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="../assets/img/twitter-icon.png" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="../assets/img/youtube-icon.png" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="../assets/img/Instagram.png" alt="" /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  background-color: #e7ecff;
  min-height: 100%;
  margin: 0 auto -50px;

  #footer {
    display: flex;
    flex-direction: column;
    max-width: 1110px;
    margin: auto;

    ul.infos {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 61px;
      margin-bottom: 47px;
      li {
        p {
          color: #939ea4;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
        }
        h1 {
          color: #37447e;
          font-weight: 900;
          font-size: 26px;
          line-height: 38px;
        }

        button {
          font-size: 12px;
          color: #fff;
          background-color: #111b47;
          font-weight: 500;
          border-radius: 2px;
          cursor: pointer;
          width: 109px;
          height: 26px;
        }
        button:hover {
          color: #111b47;
          background-color: #fff;
          transition: 1s color;
        }
      }
    }

    hr {
      margin: auto;
      border: 1px solid #cdd1d4;
      margin-bottom: 20px;
      width: 857px;
    }

    div.contact {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 32px;

      ul.link {
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
        li {
          color: #929ecc;
          font-size: 14px;
          line-height: 24px;
          font-weight: 400;

          margin-right: 60px;
          &:nth-last-child(1) {
            margin-right: 0px;
          }
        }
      }
      ul.icons {
        display: flex;
        li {
          margin-right: 34px;
          &:nth-last-child(1) {
            margin-right: 0px;
          }
        }
      }
    }
  }
}
</style>