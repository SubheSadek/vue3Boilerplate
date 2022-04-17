import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      products: [],
    }
  },

  getters: {
    getProduct(state) {
      return state.products;
    }
  },

  mutations: {
    setProducts(state, data) {
       state.products = data;
    }
  }

})

export default store;