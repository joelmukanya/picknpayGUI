import { createStore } from 'vuex';
import axios from 'axios';
// import router from '@/router';
// Picknpay url
const picknpayUrl = "https://picknpayapi.herokuapp.com/";
export default createStore({
  state: {
    products: null
  },
  getters: {
    getProducts: state => state.products
  },
  mutations: {
    setProducts(state, values) {
      state.products = values
    }
  },
  actions: {
    fetchProducts: async (content)=> {
      let result = await axios.get(picknpayUrl);
      let { data } = await result.results;
      if(data) {
        content.commit('setProducts', data);
      }else {
        console.log("There is no data");
      }
    }
  },
  modules: {
  }
})
