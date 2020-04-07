<template>
  <div id="app">
    <!-- start navbar -->
    <nav class="navbar">
      <div class="main-container">
        <router-link to="/">
          <img src="/src/assets/images/logo.png" alt="logo" width="70px">
        </router-link>
        <ul class="links">
          <li>
            Home
          </li>
          <li>
            Catalog
          </li>
        </ul>
        <div class="right_links">
          <input type="search" placeholder="serach item ..." class="serach_input">
          <span>
            <img class="search_icon" src="https://img.icons8.com/ios/50/555555/search-filled.png" width="30px" @click="inputShow()">
          </span>
          <span>
            <img src="https://img.icons8.com/carbon-copy/50/333333/shopping-cart.png" width="40px">
          </span>
        </div>
      </div>
    </nav>
    <!-- end navbar -->
    <router-view></router-view>
    <!-- start footer -->
    <footer class="footer">
      <p>
        all copyrights reserved @2018
      </p>
    </footer>
    <!-- end footer -->
  </div>
</template>

<script>
import home from './components/home/home.vue';
export default {
  components:{
    'home-app':home,
  },
  methods:{
    inputShow(){
      var input = document.querySelectorAll(".serach_input")[0];
      var x = 1;
        input.classList.toggle("show");
    }
  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  margin: 0px;
}
.main-container{
  width: 80%;
  margin: 0px auto;
}
// start navbar
.navbar{
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 3px #ddd;
  margin-bottom: 50px;
  .main-container{
    padding: 10px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .links{
      display: flex;
      align-items: center;
      list-style: none;
      margin: 0px;
      padding: 0px;
      li{
        color: #444;
        margin: 0 15px;
      }
    }
    .right_links{
      display: flex;
      align-items: center;
      @media(max-width:700px){
        display: none;
      }
      img{
        margin-left: 10px;
        &.search_icon{
          cursor: pointer;
        }
      }
      input{
        padding: 10px;
        border: 1px solid #eaeaea;
        transition: all .2s ease;
        transform: scaleX(0);
        transform-origin: right;
        &.show{
          transform: scaleX(1);
        }
        &::placeholder{
          color: #aaa;
          font-size: 13px;
          text-transform: capitalize;
        }
        border-radius: 4px;
        outline: 0px;
        color: #aaa;
      }
    }
  }
}
// end navbar
// start footer
.footer{
  padding: 20px;
  background: #eee;
  text-align: center;
  p{
    color: #888;
    text-transform: capitalize;
  }
}
// end footer
</style>
