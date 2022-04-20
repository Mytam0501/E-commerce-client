<template>
  <div class="home">
    <ShopComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import ShopComponent from '../components/Shop.component.vue';

export default {
  name: 'Shop',
  components: {
    ShopComponent,
  },
  data() {
    return {
      
    };
  },
}
</script>
<style>

</style>