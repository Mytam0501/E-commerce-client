<template>
  <div class="home">
    <WishlistComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import WishlistComponent from '../components/Wishlist.component.vue';

export default {
  name: 'Wishlist',
  components: {
    WishlistComponent,
  },
  data() {
    return {
      
    };
  },
}
</script>
<style>

</style>