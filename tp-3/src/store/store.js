import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    paises: [],

  },
  mutations: {
    deletePais(state, payload) {
      state.paises = state.paises.filter(
        (pais) => pais.id !== payload.paisId
      );
    },
    editPais(state, payload) {
      state.paises = state.paises.map(
        (pais) => {
          if (pais.id == payload.pais.id) {
            return payload.pais
          } else {
            return pais
          }
        }
      );
    },
    setPais(state, payload) {
      const paises = [];
      const paisKeys = Object.keys(payload.paises);
      paisKeys.forEach(key => {
        paises.push(payload.paises[key])
      })
      state.paises = paises
    },
    addPais(state, payload) {
      state.paises.push(payload.pais);
    },
  },
  getters: {
    allPaises(state) {
      return state.paises;
    },

  },
  actions:{
    addPais({ getters }, payload) {
      const token = getters.getToken;
      console.log(token);
      fetch(`https://602819e8dd4afd001754af77.mockapi.io/paises${token}`, {
        method: 'POST',
        body: JSON.stringify(payload.newContact)
      });
    },
    getPaises({commit}) {
      fetch('https://602819e8dd4afd001754af77.mockapi.io/paises')
      .then(res => res.json())
      .then(data => commit('setPais', {paises: data}))
    },
    
  },
})

