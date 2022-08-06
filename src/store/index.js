import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';
// Picknpay url
const picknpayUrl = "https://picknpayapi.herokuapp.com/";
export default createStore({
  state: {
    users: null,
    products: null,
    showSpinner: true
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
    },
    setShowSpinner(state, value) {
      state.showSpinner = value
    }
  },
  actions: {
    fetchUsers: async (context) => {
      let res = await axios.get(picknpayUrl+"users");
      let {results } = await res.data;
      if(results) {
        context.commit('setUsers', results);
      }
    },
    fetchProducts: async (context)=> {
      let res = await axios.get(picknpayUrl+"products");
      let { results }  = await res.data;
      if(results) {
        context.commit('setProducts', results);
        context.commit('setShowSpinner', false);
      }else {
        context.commit('setShowSpinner', true);
      }
    },
    //Login
    login: async (context, payload) => {
      const {email, userpassword} = payload;
      const data = {
        email,
        userpassword
      };
      let res = await axios.post(picknpayUrl+"login", data);
      let results = await res.data;
      if(results) {
        context.commit('setUsers', results);
        context.commit('setShowSpinner', false);
      }
    },
    //Signup
    signUp: async (context, payload)=> {
      let {firstname, lastname, gender, address, userRole, email, userpassword} = payload;
      const data = {
        firstname, 
        lastname, 
        gender,
        address, 
        userRole,
        email,
        userpassword
      };
      let res = await axios.post(picknpayUrl+"register", data);
      let results  = await res.data;
      if(results) {
        context.commit('setUsers', results);
        router.push({name: "login"});
        context.commit('setShowSpinner', false);
      }
    }
  },
  modules: {
  }
})
