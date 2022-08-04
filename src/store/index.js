import { createStore } from 'vuex';
import axios from 'axios';
// import router from '@/router';
// Picknpay url
const picknpayUrl = "https://picknpayapi.herokuapp.com/";
export default createStore({
  state: {
    users: null,
    products: null
  },
  getters: {
    getUsers: state => state.users,
    getProducts: state => state.products
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setProducts(state, values) {
      state.products = values
    }
  },
  actions: {
    fetchUsers: async (content) => {
      let res = await axios.get(picknpayUrl+"users");
      let {results } = await res.data;
      if(results) {
        content.commit('setUsers', results);
      }else{
        console.log("There is no data");
      }
    },
    fetchProducts: async (content)=> {
      let res = await axios.get(picknpayUrl+"products");
      let { results }  = await res.data;
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
