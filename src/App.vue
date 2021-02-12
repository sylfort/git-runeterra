<template>
  <div class="background-img"></div>

  <div class="flex">
    <Header />

    <div class="main">
      <router-view/>
    </div>

    <Footer />
  </div>

</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);
// const App = {
//   init() {},
//   store: {
//     state: {},
//   },
//   events: {},
//   controllers: {},
//   elements: {
//     app: null,
//     createElements: function(){},
//     createElements() {}
//   }
// }

export default {

  components: {
    Header,
    Footer,
  },

  data() {
    return {
      title: "eu sou o titulo",
    };
  },

  beforeCreate() {
    console.log("Vai ser executada antes do document.createElements()");
    console.log(this.$refs);
  },

  beforeMount() {
    console.log("componentes criados porem nao montados via appendChild()");
    console.log(this.$refs);
  },

  created() {
    console.log("pronto, a pagina esta pronta e visivel");
    console.log(this.$refs);
  },

  methods: {
    changeTitle(newTitle) {
      console.log(this);
      this.title = newTitle;
    },

  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
html, body {
    height:100%; /*both html and body*/
    min-height: 100%;
    font-family: 'Open Sans', sans-serif;
}
body {
    margin: 0; /*reset default margin*/
    min-height: 75rem;
    padding-top: 4.5rem;
}

img {
  width: 75%;
  height: auto;
  vertical-align: middle;
}

.flex {
  display: flex;
  flex-direction: column;
}

.background-img{
  position: fixed;
  left:0;
  top: 0;
        /* Add the blur effect */
  // filter: blur(5px);
  // -webkit-filter: blur(6px);

  /* Center and scale the image nicely */
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('~@/assets/taric.jpg');

  z-index: -1;
}

.main {
  // border: 1px solid rgb(0, 0, 255);
  padding: 10px;
  color: rgba(163, 163, 163, 0.719);
  margin:30px auto;

  /* display: flex; */
  /* flex-direction: column; */
  flex-grow: 1;
}

.bg-color {
  background: rgba(5, 17, 29, 0.973);
}
</style>
