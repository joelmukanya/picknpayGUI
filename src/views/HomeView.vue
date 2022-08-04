<template>
    <div class="container-fluid">
        <HeaderComponent/>
          <div class="container">
              <router-view/>
          </div>
        <FooterComponent />
    </div>
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

</style>