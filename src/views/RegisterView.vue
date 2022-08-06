<template>
  <div class="container">
    <div class="row">
        <fieldset>
            <legend class="display-2 bg-gradient text-dark">Register</legend>
            <form class="form container" method="POST" @submit.prevent="signUp">
                <div class="row">
                    <input class="form-control text-center" v-model="firstname" type="text" 
                    placeholder="Enter your firstname" required/>
                </div>
                <div class="row my-3">
                    <input class="form-control text-center" v-model="lastname" type="text" 
                    placeholder="Enter your surname" required/>
                </div>
                <div class="row">
                    <label class="form-label bg-gradient">Gender: </label>
                    <div>
                        <span>Male</span>
                        <input type="radio" name="gender" v-model="gender" value="Male" />
                        <span>Female </span>
                        <input type="radio" name="gender" v-model="gender" value="Female"/>
                    </div>
                </div>
                <div class="row">
                    <textarea class="form-control text-center" 
                    v-model="address"
                    placeholder="Enter your address"></textarea>
                </div>
                <div class="row my-3">
                    <input class="form-control text-center" v-model="userRole" type="text" 
                    placeholder="Enter your role" />
                </div>
                <div class="row my-3">
                    <input class="form-control text-center" v-model="email" type="email" 
                    placeholder="Enter your email"/>
                </div>
                <div class="row">
                    <input class="form-control text-center" v-model="userpassword" type="password" 
                    placeholder="Enter your password" required/>
                </div>
                <div class="row my-3">
                    <button class="btn btn-primary">Register</button>
                </div>
            </form>
        </fieldset>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            firstname: '', 
            lastname: '', 
            gender: '',
            address: '', 
            userRole: '',
            email: '',
            userpassword: '',
        }
    },
    methods: {
        signUp() {
            this.$store.dispatch('signUp', {
                firstname: this.firstname,
                lastname: this.lastname, 
                gender: this.gender,
                address: this.address, 
                userRole: this.userRole,
                email: this.email,
                userpassword: this.userpassword,
            })
        }
    }
}
</script>

<style>

</style>