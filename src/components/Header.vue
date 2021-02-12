<template>
  <!-- Nav -->
  <nav class="header navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <div class="nav-left">
        <router-link to="/">Git Runeterra</router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="mobile collapse navbar-collapse" id="navbarsExampleDefault">
        <div class="search-container">

            <input
              v-model="name"
              focusable="false"
              type="text"
              @keyup="keyupHandler"
              class="me-2 search-input"
              placeholder="Search"
              aria-label="Search"
            />

        </div>
        <div class="nav-right">
          <button class="btn-login btn btn-secondary">Login</button>
          <dropdown />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";
// import MenuIcon from "@/assets/MenuIcon.vue";
// import SearchIcon from "@/assets/SearchIcon.vue";

export default {
  components: {
    Dropdown,
    // MenuIcon,
    // SearchIcon,
  },

  data: () => ({
    showNav: false,
    keyword: "",
  }),

  created() {
    this.showNav = window.innerWidth > 600;
  },

  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },

    resetInput() {
      this.name = "";
    },

    keyupHandler(e) {
      if (e.key === "Enter") {
        this.$store.commit("nameSearch", e.target.value.toLowerCase());
      }
    },

    computed: {},
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

.header{
  background-color: rgba(5, 17, 29, 0.973)!important;
}

.nav {
  &-bar {
    // border: 1px solid red;
    // padding: 5px;
    // color: #dfaa43;
    // background-color: rgb(72, 187, 43)!important;
  }

  &-container {
    // border: 1px solid red;
    /* flex: 1; */
    padding: 5px;
    margin-top: 0;
    color: #dfaa43;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background: rgba(5, 17, 29, 0.973);

    // align-content: flex-start;
  }

  &-left {
    color: #dfaa43;
    text-decoration: none;
    font-size: 4vh;
    // display: flex;
    // flex-flow: row nowrap;
    // min-width: 240px;
    @media only screen and (max-width: 600px) {
      // order: 2;
    }
  }

  &-left a {
    color: #dfaa43;
    text-decoration: none;
    font-size: 4vh;
    display: flex;
    flex-flow: row nowrap;
  }

  &-middle {
    display: flex;
    align-items: center;
    justify-content: center;
    // width: 70vh;
    // border: 1px solid #dfe1e5;
    // border-radius: 24px;
    // padding: 3px;
    // margin-left: 0vh;
    // background-color: #ffffff;
    // cursor: default;
    // margin-left: 120px;

    @media only screen and (max-width: 600px) {
      margin-left: 0px;
      width: 100%;
    }
  }

  &-middle:hover {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    border-color: rgba(223, 225, 229, 0);
  }

  &-right {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    justify-items: center;
  }
}

.search-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.search-input {
  border: none;
  width: 40vw;
  // height: 2vh;
  // margin-left: 50px;
  // margin-right: 50px;
  @media only screen and (max-width: 600px) {
    //   width: 100%;
    //   height: 100%;
    //   margin-left: 50px;
    //   margin-right: 50px;
  }
}

.search-input:focus {
  outline: none;
}

.img-mag {
  height: 25px;
  width: 25px;
  cursor: default;
  margin-left: 5px;
}

.btn-login {
  // margin-left: 30px;
  // margin-right: 10px;
  // cursor: pointer;
  // position: relative;
  // right: 10px;
  // width: 80px;
  margin: 5px;
  font-family: "Open Sans", sans-serif;
}

.navigation-icon {
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    font-size: 1.5rem;
    margin-left: 10px;
    cursor: pointer;
    order: 1;
  }
}

.search-icon {
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    font-size: 1.5rem;
    margin-left: 10px;
    cursor: pointer;
    order: 3;
  }
}

// .flex {
//   padding: 10px;
//   display: flex;
//   flex-flow: column wrap;
//   justify-content: flex-start;
//   align-items: center;
// }
</style>
