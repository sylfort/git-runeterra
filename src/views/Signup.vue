<template>
  <div class="sign-up">
    <form @submit.prevent="onSubmit" class="sign-up-container">
      <div class="sign-up-title">Sign Up</div>
      <div class="sign-up-sub">
        <div class="sign-up-input">
          <label for="">Username</label>
          <input
            v-model="form.username"
            type="text"
            placeholder="Username"
            class="sign-up-input-name"
          />

          <!-- 2. Verificamos se o field === username, se sim mostra o erro -->
          <div v-if="error.field === 'username'" class="error">
            <span style="color: red">
              {{ error.value }}
            </span>
          </div>
        </div>
        <div class="sign-up-input">
          <label for="">Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            class="sign-up-input-email"
          />

          <div v-if="error.field === 'email'" class="error">
            <span style="color: red">
              {{ error.value }}
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
        </div>
        <div class="sign-up-input">
          <label for="">Confirm Password </label>
          <input
            v-model="form.confirmPassword"
            type="password"
            placeholder="Password"
            class="sign-up-input-pw"
          />
          <div v-if="error.field === 'confirmPassword'" class="error">
            <span style="color: red">
              {{ error.value }}
            </span>
          </div>
          <div v-if="error.field === 'samePassword'" class="error">
            <span style="color: red">
              {{ error.value }}
            </span>
          </div>
          <div v-if="error.field === 'checkmark'" class="error">
            <span style="color: red">
              {{ error.value }}
            </span>
          </div>
        </div>
      </div>
      <div class="sign-up-terms">
        <label class="check" for="">
          <input v-model="form.acceptTerms" type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <p>Agreed to terms and conditions</p>

      </div>
      <div class="sign-up-input">
        <input
          type="submit"
          value="Create Account"
          class="sign-up-btn"
          @submit.prevent="onSubmit"
        />
        <slot></slot>
      </div>
      <div><router-link to="/login" class="already">
            Already have an account?
          </router-link></div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {
    // Signup,
    // MenuIcon,
    // SearchIcon,
  },

  data: () => ({
    showNav: false,
    keyword: "",
    form: {
      username: null,
      email: null,
      password: null,
      confirmPassword: null,
      acceptTerms: false,
    },

    // Primeiro declara a variavel que vai receber o erro, aqui indicamos qual 'e o campo e qual a mensagem de erro
    error: { field: "", value: "" },
  }),

  created() {
    this.showNav = window.innerWidth > 600;
    this.$emit("ready");
  },

  methods: {
    register() {
      console.log(this.form);
    },

    onSubmit() {
      // 3. Limpa o erro
      this.error.field = "";
      this.error.value = "";

      console.log("xxxx", this.form.username);

      // 4. verificamos se nao existe username e preenchemos o erro
      if (!this.form.username) {
        this.error.field = "username";
        this.error.value = "Username required.";
        console.log(this.form.username);
        return;
      }
      if (!this.form.email) {
        // this.form.errors.push("Password required.");
        this.error.field = "email";
        this.error.value = "Email required.";
        return;
      }

      if (!this.form.password) {
        // this.form.errors.push("Password required.");
        this.error.field = "password";
        this.error.value = "Password required.";
        return;
      }
      if (!this.form.confirmPassword) {
        // this.form.errors.push("Please confirm your password.");
        this.error.field = "confirmPassword";
        this.error.value = "Please confirm your password";
        return;
      }
      if (this.form.confirmPassword !== this.form.password) {
        // this.form.errors.push("Please confirm your password.");
        this.error.field = "samePassword";
        this.error.value = "Please make sure both inputs match";
        return;
      }
      if (!this.form.acceptTerms) {
        this.error.field = "checkmark";
        this.error.value = "Please confirm that you accept our Terms of Service.";
      }

      axios.post("http://localhost:5000/signup", {
        data: {
          username: this.form.username,
          email: this.form.email,
          password: this.form.password,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      const newUser = {
        username: this.form.username,
        email: this.form.email,
        password: this.form.password,
        // registeredAt: Math.floor(Date.now() / 1000),

      };

      this.$store.dispatch("signup", newUser);
      // console.log("ok", newUser);
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
  min-width: 55vw;
  flex-grow: 2;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(5, 17, 29, 0.973);
  outline: 3px solid #dfaa43;

  /* Quando for tela pequena de celular, vai crescer pra 100% da tela */
  @media only screen and (max-width: 850px) {
    // width: 50vw;
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

.error {
  margin-top: 1rem;
  margin-left: 7rem;
  position: absolute;
  top: 2.5rem;
}

.check{
  margin-top: 3rem;
}
</style>
