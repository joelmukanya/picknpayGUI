<template>
    <div class="container">
        <h2 class="display-2">Our Products</h2>
        <div class="row d-flex flex-wrap">
            <div class="card" v-for="(products, index) in products"
             :key="index">
            <img :src="products.prodUrl" class="card-img-top img-fluid" :alt="products.prodName">
            <div class="card-body">
                <h5 class="card-title">{{products.prodName}}</h5>
                <ul class="navbar-nav">
                    <li>
                        Price: R<span>{{products.price}}</span>
                    </li>
                </ul>
            </div>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    }
}
</script>
