<template>
  <div class="nav">
    <div class="mobile" @click="toggleContainer">
      <router-link to="/" class="nav-title hover-light">
        Git Runeterra
      </router-link>
    </div>

    <label
      class="hamburger hover-light"
      for="toggle"
      @click="toggleContainerHamburger"
      >&#9776;</label
    >
    <input class="nav-toggle" type="checkbox" id="toggle" />
    <div v-if="showContainer" class="toggle-container">
      <div class="nav-input-container mag">
        <input
          v-model="name"
          focusable="false"
          class="nav-input-searchbox"
          type="text"
          placeholder="Search"
          aria-label="search"
          @keyup="keyupHandler"
        />
      </div>
      <ul class="nav-menu">
        <li class="sign-up hover-light" @click="toggleContainer">
          <div v-if="!auth.token">
            <router-link to="/signup" class="sign-up"> Sign Up </router-link>
            <router-link to="/login" class="sign-up"> Login </router-link>
          </div>
          <div v-else>
              {{auth.username}}
          </div>
        </li>
        <li class="nav-dropdown hover-light">
          <dropdown @click="resetInput" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";

export default {
  components: {
    Dropdown,
    // MenuIcon,
    // SearchIcon,
  },

  // data = store.state mas pra a cada componente
  data: () => ({
    showNav: false,
    showContainer: true,
    name: "",
  }),

  computed: {
    auth() {
      return this.$store.getters.auth;
    },
  },

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
        this.name = "";
      }
      this.$store.commit("nameSearch", e.target.value.toLowerCase());
    },

    toggleContainerHamburger() {
      this.showContainer = !this.showContainer;
    },

    toggleContainer() {
      console.log(this.$route);
      if (this.$route.name !== "Home" && window.innerWidth < 600) {
        this.showContainer = !this.showContainer;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

label {
  margin: 0 40px 0 0;
  display: block;
  cursor: pointer;
}

#toggle {
  display: none;
}

ul {
  padding: 0;
  margin: 0;
}

.nav {
  background-color: rgba(5, 17, 29, 0.973);
  padding: 5px;
  color: #dfaa43;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 850px) {
  position: sticky;
  }

  &-title {
    font-size: 2rem;
    color: #dfaa43;
    white-space: nowrap;
  }

  &-input {
    &-container {
      cursor: default;
      display: flex;
      padding: 0.3rem;

      flex-basis: 100%;
      flex-grow: 1;
      margin-left: 1rem;
      align-items: center;
    }

    &-searchbox {
      border-radius: 100px;
      width: 40vw;
      // border: 2px solid red;
      padding-left: 0.5rem;

      margin-left: 0;

      &:focus {
        outline: none;
      }
    }
  }

  &-menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;

    flex-flow: row wrap;
    margin-left: 0.3rem;
    text-transform: uppercase;
  }
}

.mobile {
  display: flex;
  align-items: center;

  justify-content: flex-start;
  flex-basis: 80%;
  flex-grow: 1;
  order: -1;
  margin-left: 1rem;
}

.hamburger {
  font-size: 1.75rem;
  margin-right: 1rem;
  padding: 0 0.5rem;
  padding: 0.2rem;
  color: #dfaa43;

  order: -1;
}

.sign-up {
  flex-basis: 100%;
  flex-grow: 1;
  margin: 0.2rem 0.5rem;
  white-space: nowrap;
  text-decoration: none;
  color: #dfaa43;

  &:hover {
    text-decoration: none;
    color: darken(#dfaa43, 10%);
  }
}

.nav-dropdown {
  margin: 0.2rem 1rem;
  white-space: nowrap;
}

// TOGGLE NAV MOBILE
/* .toggle-container {
  display: none;
} */

/* .nav-toggle:checked ~ div {
  display: block;
} */

.hover-light:hover {
  color: darken(#dfaa43, 10%);
}

// DESKTOP VERSION

@media screen and (min-width: 850px) {
  .hamburger {
    display: none;
  }

  .toggle-container {
    display: flex;
    flex-basis: 50%;
    flex-grow: 1;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .mobile {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-basis: auto;
    flex-grow: 0;
    order: 0;
    margin-left: 1rem;
  }

  .nav-menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;

    flex-flow: row nowrap;
    margin-left: 0.3rem;
    text-transform: none;
  }

  .nav {
    flex-flow: row nowrap;
    overflow: hidden;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */

    &-input {
      &-container {
        margin-left: 0;
        display: flex;
        justify-content: center;
      }

      &-searchbox {
        border-radius: 100px;
        width: 40vw;
        // border: 2px solid red;
        padding-left: 0.5rem;

        margin-left: 3rem;
      }
    }

    &-menu {
      flex-flow: row nowrap;
      margin-left: 0;
      text-transform: uppercase;
    }
  }
}

.close {
  height: 1rem;
  width: 1rem;
  background: white;
  border-radius: 5px;
  position: relative;
  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "\274c";
    font-size: 1rem;
    color: red;
    // line-height: 100px;
    text-align: center;
  }
}

.mag::after {
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f002";
  position: absolute;
  margin-left: 40vw;

  @media screen and (max-width: 850px) {

    margin-left: 37vw;
  }
}
</style>
