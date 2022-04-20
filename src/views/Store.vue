<template>
  <div class="home">
    <StoreComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import StoreComponent from '../components/Store.component.vue';

export default {
  name: 'Store',
  components: {
    StoreComponent,
  },
  data() {
    return {
      
    };
  },
}
</script>
<style>

</style>