<template>
    <!-- Navigation -->
    <div class="container">
        <router-link to="/home" class="nav-list-item">Home</router-link>
        <router-link to="/blog"  class="nav-list-item">Blog</router-link>
        <router-link to="/videos"  class="nav-list-item">Videos</router-link>
        <a class='nav-list-item' id='projects'  href="#" @click='showProjects = !showProjects'>
            Projects<small>&#9752;</small>
            <ul v-if='showProjects' class='ul'>
                <li>&#9758;<a href="http://shenyu16.com:8081/#/" target="blank">Share Your Problems</a></li>
                <li>&#9758;<a href="https://lishenyu16.github.io/morefun/#/main/dog" target="blank">More Fun</a></li>
                <li>&#9758;<a href="https://lishenyu16.github.io/burger-react/#/" target="blank">Burger Builder(React)</a></li>
                <li>&#9758;<a href="stocktrader.shenyu16.com" target="blank">Stock Trader(React)</a></li>
                <li>&#9758;<a href="https://lishenyu16.github.io/calculator" target="blank">Calculator</a></li>
                <li>&#9758;<a href="https://lishenyu16.github.io/portfolio" target="blank">Portfolio</a></li>
            </ul>
        </a>
        <!-- !!!!!!!!!!!!! here you can not use router-link for @mouseover !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
        <!-- <router-link to="/" id='projects' class="nav-list-item">
          Projects
        </router-link> -->
    </div>

      
</template>

<script>
export default {
  data() {
    return {
      showProjects: false
    }
  },
  methods: {
    goTo(param) {
      if(param=='share'){

        this.showProjects = false
      }
      if(param=='morefun'){

        this.showProjects = false
      }
      if(param=='calculator'){

        this.showProjects = false
      }
    }
  },
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Courgette');
  .container{
    position: fixed;
    top:4rem;
    left:0;
    z-index: 1;
    width:60%;
    margin-left:20%;
    height:3rem;
    background:rgba(204, 248, 214, 0.842);
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 0.8rem;
  }
  @media  screen and (min-width: 600px) {
    .container{
      height:4rem;
    }
  } 
  .nav-list-item {
    font-size:1rem;
    text-decoration: none;
    font-family: 'Courgette', cursive;
  }
  .nav-list-item:not(:last-child):hover, .nav-list-item:not(:last-child):focus, .nav-list-item:not(:last-child):active {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    text-decoration: none;
  }
  @media (min-width: 40rem) {
    .nav-list-item {
      font-size:2rem;
    }
  } 
  #projects{
    position: relative;
  }
  .ul{
    position: absolute;
    top:3.5rem;
    /* right:-2rem; */
    list-style: none;
    font-size: 1rem;
    padding:0;
  }
  .ul li{
    /* position: absolute; */
    width:11rem;
    background-color:bisque;
    text-align: left;
  }
  @media (max-width: 40rem) {
    .ul {
      top:2rem;
    }
    .ul li{
      width:8.5rem;
      font-size:0.8rem;
    }
  } 
  .ul li:hover{
    background-color:lightgray;
    color:purple;
  }
  .ul li a{
    text-decoration: none;
  }
</style>

