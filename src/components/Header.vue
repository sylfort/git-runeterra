<template>
    <!-- Nav -->
  <div class="nav-bar bg-color">
    <div class="nav-container">
      <div class="nav-right">
        <router-link to="/">Git Runeterra</router-link>
      </div>
      <div class="nav-middle">
        <img focusable="false" class="img-mag" src="@/assets/magnifying-glass.jpg" alt="aaa">
        <input v-model="name" focusable="false" class="search-input" type="text" @keyup="keyupHandler">
      </div>
      <div class="nav-left">
        <button class="btn-login">Login</button>

        <dropdown />

      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";

export default {
  data: () => ({
    keyword: "",
  }),

  methods: {
    keyupHandler(e) {
      // console.log(this);
      this.$store.commit("nameSearch", e.target.value);
    },
    // checkName() {
    //   console.log("Checking name: ${this.keyword}");
    // },
    // // created() {
    // //   console.log(this.$store.state);
    // // },

    computed: {
      //   cards() {
      //     console.log("xxxxxxx", this.$route.query);
      //     return this.$store.state.cards.filter((card) => {
      //       if (this.$route.query.type) {
      //         return card.name === this.$route.query.name;
      //       }

      //       return true;
      //     });
    },
  },

  components: {
    Dropdown,
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.nav {
    // position: fixed;
    // width: 100%;
    // top: 0;
    // left: 0;
  &-bar {
    // border: 1px solid red;
    padding: 10px;
    color: #dfaa43;
    height: 80px;
  }

  &-container {
    border: 1px solid red;
    flex: 1;
    padding: 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: flex-start;

         @media only screen and (max-width: 600px) {
        align-items: center;
        justify-content: flex-start;
  }
  }

  &-right {
    color: #dfaa43;
    text-decoration: none;
    font-size: 4vh;
    display: flex;
    flex-flow: row nowrap;
    min-width: 240px;

  }

  &-right a{
    color: #dfaa43;
    text-decoration: none;
    font-size: 4vh;
    display: flex;
    flex-flow: row nowrap;

         @media only screen and (max-width: 600px) {
    flex-flow: row wrap;
    font-size: 3vh;
  }
  }

  &-middle {
    display: flex;
    align-items: center;
    width: 70vh;
    border: 1px solid #dfe1e5;
    border-radius: 24px;
    padding: 3px;
    margin-left: 0vh;
    background-color: #ffffff;
    cursor: default;
    margin-left: 120px;

       @media only screen and (max-width: 600px) {

    margin-left: 0px;
  }
  }

  &-middle:hover{
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    border-color: rgba(223, 225, 229, 0);
  }

  &-left {
    display: flex;
    justify-content: space-between;
  }
}

.search-input {
  border: none;
  width: 100%;
  height: 100%;
}

.search-input:focus{
  outline: none;
}

.img-mag {
  height: 25px;
  width: 25px;
  cursor: default;
  margin-left: 5px;
}

.btn-login {
  margin-left: 30px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  right: 10px;
  width: 80px;
           @media only screen and (max-width: 600px) {
  }
  // font-family: 'Open Sans', sans-serif;
}

button{
  font-family: 'Open Sans', sans-serif;

}

</style>
