<template>
  <div class="container-fluid bg-dark text-white">
    <div class="row">
      <div class="col">
        <p>Copyright &copy; <span>{{getCurrentYear()}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    }
  }

}
</script>
