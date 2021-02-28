import { createStore } from "vuex";
import axios from "axios";

// Mock data
const userData = {
  id: 1,
  username: "aaa",
  password: "aaa",
  token: "superUltraMasterSafeToken",
};

const serverSignup = async (payload: any) => {
  userData.id = 1;
  userData.username = payload.username;
  userData.password = payload.password;
  userData.token = "superUltraMasterSafeToken";

  return {
    status: "OK",
    result: {
      id: 1,
      token: userData.token,
    },
  };
};
const serverLogin = async (payload: any) => {
  if (payload.username !== userData.username) {
    return { status: "WRONG_USER", result: { id: 0, token: "", username: "" } };
  }

  if (payload.password !== userData.password) {
    return { status: "WRONG_PASSWORD", result: { id: 0, token: "", username: "" } };
  }

  return {
    status: "OK",
    result: {
      id: userData.id,
      token: userData.token,
      username: userData.username,
    },
  };
};

export default createStore({
  state: {
    auth: {
      id: null,
      username: null,
      token: null,
    },
    name: "",

    cards: [],
  },
  // onde vai alterar o state
  mutations: {
    nameSearch(state, payload) {
      console.log("no dispatch", payload);
      state.name = payload;
    },
    signup(state, payload) {
      state.auth.id = payload.id;
      state.auth.token = payload.token;
      state.auth.username = payload.username;
    },
    login(state, payload) {
      state.auth.id = payload.id;
      state.auth.token = payload.token;
      state.auth.username = payload.username;
    },
    setCards(state, payload) {
      state.cards = payload;
    },
  },

  // parecido com controlador e onde faz chamadas API
  actions: {
    async signup({ commit }, payload) {
      console.log("signup", payload);

      // chamada api com axios
      const response = await serverSignup(payload);

      console.log(response);
      if (response.status === "OK") {
        commit("signup", {
          id: response.result.id,
          username: payload.username,
          token: response.result.token,
        });
      }
    },

    async login({ commit }, payload) {
      console.log("login", payload);

      // chamada api com axios
      const response = await axios
        .post("http://localhost:5000/login", {
          username: payload.username,
          password: payload.password,
        });

      console.log(response);
      if (response.data.status === "OK") {
        commit("login", {
          id: response.data.result.id,
          username: payload.username,
          token: response.data.result.token,
        });
      }

      return response.data.status;
    },

    async getCards({ commit }) {
      const response = await axios
        .get("http://localhost:5000/cards");

      console.log(response);
      if (response.data.status === "OK") {
        commit("setCards", response.data.results);
      }
    },
  },

  modules: {
  },

  getters: {
    auth: (state) => state.auth,
  },
});
