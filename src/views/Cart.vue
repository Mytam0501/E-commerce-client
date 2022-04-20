<template>
  <div class="home">
    <CartComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import CartComponent from '../components/Cart.component.vue';

export default {
  name: 'Cart',
  components: {
    CartComponent,
  },
  data() {
    return {
      
    };
  },
}
</script>
<style>

</style>