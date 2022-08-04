<template>
  <div class="container">
    <div class="row my-2">
      <div class="col-md">
        <button class="btn btn-primary">Add New User</button>
      </div>
      <div class="col-md">
        <button class="btn btn-primary">Add New Product</button>
      </div>
    </div>
    <h2 class="display-2">User</h2>
    <div class="row table-responsive-md setTableOff">
      <table class="table table-hover">
        <thead class="bg-gradient">
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
            <td data-title="ID">{{user.id}}</td>
            <td data-title="Firstname">{{user.firstname}}</td>
            <td data-title="Lastname">{{user.lastname}}</td>
            <td data-title="Gender">{{user.gender}}</td>
            <td data-title="Address">{{user.address}}</td>
            <td data-title="User Role">{{user.userRole}}</td>
            <td data-title="Email">{{user.email}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2 class="display-2">Product</h2>
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
