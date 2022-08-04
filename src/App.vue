<template>
  <HeaderComponent/>
    <div class="container min-vh-100">
      <router-view/>
    </div>
  <FooterComponent />
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  components: {
      HeaderComponent,
      FooterComponent
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
  border: 2px solid green;
  border-radius: 5px;
  padding: 2px 5px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
