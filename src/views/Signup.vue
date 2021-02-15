<template>
  <div class="sign-up">
    <div class="sign-up-container">
      <div class="sign-up-title">Sign Up</div>
      <div class="sign-up-input">
        <label for="">Name</label>
        <input type="text" placeholder="Name" class="sign-up-input-name" />
      </div>
      <div class="sign-up-input">
        <label for="">Email</label>
        <input type="email" placeholder="Email" class="sign-up-input-email" />
      </div>
      <div class="sign-up-input">
        <label for="">Password</label>
        <input
          type="password"
          placeholder="Password"
          class="sign-up-input-pw"
        />
      </div>
      <div class="sign-up-input">
        <label for="">Confirm Password </label>
        <input
          type="password"
          placeholder="Password"
          class="sign-up-input-pw"
        />
      </div>
      <div class="sign-up-terms">
        <label class="check" for="">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <p>Agreed to terms and conditions</p>
      </div>
      <div class="sign-up-input">
        <input type="submit" value="Create Account" class="sign-up-btn" />
      </div>
      <div><a class="already" href="#">Already have an account?</a></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // Signup,
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

  //   methods: {
  //     toggleNav() {
  //       this.showNav = !this.showNav;
  //     },

  //     resetInput() {
  //       this.name = "";
  //     },

  //     keyupHandler(e) {
  //       if (e.key === "Enter") {
  //         this.$store.commit("nameSearch", e.target.value.toLowerCase());
  //       }
  //     },

  //     computed: {},
  //   },
};
</script>

<style lang="scss" scoped>
.sign-up {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  min-height: 100%;
  height: 100%;
  width: 65vw;
  min-width: 85vw;
  flex-grow: 2;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(5, 17, 29, 0.973);
  outline: 1px solid red;

  /* Quando for tela pequena de celular, vai crescer pra 100% da tela */
  @media only screen and (max-width: 800px) {
    // width: 100%;
  }

  &-container {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: center;
    width: 40vw;
    height: 60vh;
    outline: 1px solid green;

    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  }

  &-title {
    color: #dfaa43;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  &-input {
    display: flex;
    align-items: center;

    label {
      width: 4rem;
      margin-right: 1rem;
    }
  }

  &-input-name,
  &-input-email,
  &-input-pw {
    margin: 1.3rem 0;
    border: 1px solid #dfaa43;
    border-radius: 0.3rem;
    transition: all 0.3s ease;

    &:focus {
      border: 1px solid #dfaa43;
      border-radius: 0.3rem;
      outline: none;
    }
  }

  &-btn {
    padding: 0.5rem 1rem;
    margin-bottom: 1.3rem;
    border: 1px solid rgb(5, 17, 29);
    border-radius: 3rem;
    background-color: #dfaa43;
    font: inherit;
    font-size: 1.25rem;
    font-weight: 500;
    color: rgb(5, 17, 29);
    outline: none;

    &:hover {
      text-decoration: none;
      background-color: darken(#dfaa43, 10%);
    }
  }
}

.already {
  color: #dfaa43;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: darken(#dfaa43, 10%);
  }
}

.hero {
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  // min-height: 75vh;
  // height: 100%;
  flex-grow: 1;
  flex-basis: 100vh;

  //     @media only screen and (min-width: 800px) {
  //     min-height: 83vh;
  //   }
}
</style>
