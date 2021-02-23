import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    Paises: [],
    user: {
      token: null,
      userId: null
    }
  },
  mutations: {
    deletePais(state, payload) {
      state.pais = state.pais.filter(
        (pais) => pais.id !== payload.paisId
      );
    },
    editPais(state, payload) {
      state.pais = state.pais.map(
        (pais) => {
          if (pais.id == payload.pais.id) {
            return payload.pais
          } else {
            return pais
          }
        }
      );
    },

    },
    newPais(state, payload) {
      state.name = payload.newPais;
    },
    setContacts(state, payload) {
      const paises = [];
      const paisesKeys = Object.keys(payload.paises);
      paisesKeys.forEach(key => {
        paises.push(payload.paises[key])
      })
      state.paises = paises
    },

  },
  getters , {
    allPaises(state) {
      return state.paises;
    },

  },
  actions, {
    addPais({ getters }, payload) {
      const token = getters.getToken;
      console.log(token);
      fetch(`https://602819e8dd4afd001754af77.mockapi.io/Paises${token}`, {
        method: 'POST',
        body: JSON.stringify(payload.newContact)
      });
    },
    getPaises({commit}) {
      fetch('https://602819e8dd4afd001754af77.mockapi.io/Paises')
      .then(res => res.json())
      .then(data => commit('setPaises', {paises: data}))
    },
    
  },
});

