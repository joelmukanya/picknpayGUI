<template>
  <div class="container">
    <div class="row my-2">
      <div class="col-md">
        <router-link to="/registerUser">
          <button class="btn btn-primary">Add New User</button>
        </router-link>
      </div>
      <div class="col-md">
        <router-link to="/addProducts">
          <button class="btn btn-primary">Add New Product</button>
        </router-link>
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
    <div class="row table-responsive-md setTableOff">
      <table class="table table-hover">
        <thead class="bg-gradient">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>
            <th scope="col">User ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(prod, index) in products" :key="index">
            <td data-title="ID">{{prod.id}}</td>
            <td data-title="Name">{{prod.prodName}}</td>
            <td data-title="Image">
              <img class="img-thumbnail sameSize" :src="prod.prodUrl" :alt="prod.prodName"/>
            </td>
            <td data-title="Quantity">{{prod.quantity}}</td>
            <td data-title="Price">R {{prod.price}}</td>
            <td data-title="Date" >{{prod.dateCreated}}</td>
            <td data-title="User ID">{{prod.userid}}</td>
          </tr>
        </tbody>
      </table>      
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users
    },
    products(){
      return this.$store.state.products
    }
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    registerAUser() {
    }
  }
}
</script>
