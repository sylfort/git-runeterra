<template>
  <div class="sign-up">
    <form @submit.prevent="onLogin" class="sign-up-container">
      <div class="sign-up-title">Login</div>
      <div class="sign-up-sub">
        <div class="sign-up-input">
          <label for="">Username</label>
          <input
            v-model="form.username"
            type="text"
            placeholder="Username"
            class="sign-up-input-name"
          />

          <div v-if="error.field === 'username'" class="error">
            <span style="color: red">
              {{ error.value }}
            </span>
          </div>

          <div v-if="errorLogin.field === 'username'" class="error">
            <span style="color: red">
              {{ errorLogin.value }}
            </span>
          </div>
        </div>

        <div class="sign-up-input">
          <label for="">Password</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="Password"
            class="sign-up-input-pw"
          />

          <div v-if="error.field === 'password'" class="error">
            <span style="color: red">
              {{ error.value }}
            </span>
          </div>

          <div v-if="errorLogin.field === 'password'" class="error">
            <span style="color: red">
              {{ errorLogin.value }}
            </span>
          </div>
        </div>

        <div class="sign-up-input">
          <input
            type="submit"
            value="Login"
            class="sign-up-btn"
            @submit.prevent="onLogin"
          />
          <slot></slot>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},

  data: () => ({
    showNav: false,
    keyword: "",
    form: {
      username: null,
      password: null,
    },

    // Primeiro declara a variavel que vai receber o erro, aqui indicamos qual 'e o campo e qual a mensagem de erro
    error: { field: "", value: "" },
    errorLogin: { field: "", value: "" },
  }),

  created() {
    this.showNav = window.innerWidth > 600;
    this.$emit("ready");
  },

  methods: {
    register() {
      console.log(this.form);
    },

    // wrongUser() {
    //   this.errorLogin.field = "";
    //   this.errorLogin.value = "";

    //   if (this.form.username !== this.$store.userData.username) {
    //     this.errorLogin.field = "username";
    //     this.errorLogin.value = "Wrong Username";
    //     console.log(this.errorLogin);
    //   }
    // },

    // wrongPassword() {
    //   this.errorLogin.field = "";
    //   this.errorLogin.value = "";

    //   if (this.form.password !== this.$store.userData.password) {
    //     this.errorLogin.field = "password";
    //     this.errorLogin.value = "Wrong Password";
    //     console.log(this.errorLogin);
    //   }
    // },

    async onLogin() {
      // 3. Limpa o erro
      this.error.field = "";
      this.error.value = "";
      this.errorLogin.field = "";
      this.errorLogin.value = "";

      // 4. verificamos se nao existe username e preenchemos o erro
      if (!this.form.username) {
        this.error.field = "username";
        this.error.value = "Username required.";
        console.log(this.form.username);
        return;
      }

      if (!this.form.password) {
        // this.form.errors.push("Password required.");
        this.error.field = "password";
        this.error.value = "Password required.";
        return;
      }

      // if (!this.$store.serverLogin.result.token) {
      //   this.errorLogin.field = "password";
      //   this.errorLogin.value = "Wrong Password";
      //   console.log(this.errorLogin);
      //   return;
      // }

      // console.log("login", this.form);

      const res = await this.$store.dispatch("login", {
        username: this.form.username,
        password: this.form.password,
      });

      console.log("ssssssssss", res);

      if (res === "WRONG_USER_PASS") {
        this.errorLogin.field = "username";
        this.errorLogin.value = "Invalid Username";
        this.errorLogin.field = "password";
        this.errorLogin.value = "Invalid Password";
      } else if (res === "OK") {
        console.log("Login succesful");
        this.$router.push("/");

        this.$store.dispatch("getMyDecks");
      }
    },
  },
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
  min-width: 65vw;
  flex-grow: 2;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(5, 17, 29, 0.973);
  outline: 3px solid #dfaa43;

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
    height: 80vh;
    // outline: 1px solid green;

    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  }

  &-sub {
    margin-left: 1.5rem;

    @media only screen and (max-width: 800px) {
      margin-left: 0rem;
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
    justify-content: center;
    position: relative;

    label {
      width: 5rem;
      margin-right: 1.5rem;

      @media only screen and (max-width: 800px) {
        width: 4rem;
        margin-right: 1rem;
      }
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
    padding: 0.5rem 2rem;
    margin-bottom: 1.3rem;
    margin-top: 1rem;
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

.error {
  margin-top: 1rem;
  margin-left: 7rem;
  position: absolute;
  top: 2.5rem;
}

.check {
  margin-top: 3rem;
}
</style>
