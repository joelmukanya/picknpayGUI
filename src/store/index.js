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
      let res = await axios.get(picknpayUrl+"products");
      let { results }  = await res.data;
      console.log(results);
      if(results) {
        content.commit('setProducts', results);
      }else {
        console.log("There is no data");
      }
    }
  },
  modules: {
  }
})
