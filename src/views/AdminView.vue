<template>
  <div class="container">
    <div class="row">
      <div class="col-md">
        <button class="btn btn-primary">Add New User</button>
      </div>
      <div class="col-md">
        <button class="btn btn-primary">Add New Product</button>
      </div>
    </div>
    <h2 class="display-2">CRUD Functionality For User</h2>
    <div class="row">
      <table class="table table-responsive-md table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">User role</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{user.id}}</td>
            <td>{{user.firstname}}</td>
            <td>{{user.lastname}}</td>
            <td>{{user.gender}}</td>
            <td>{{user.address}}</td>
            <td>{{user.userRole}}</td>
            <td>{{user.email}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2 class="display-2">CRUD Functionality For Product</h2>
    <div class="row">
      
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users
    }
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
  }
}
</script>
