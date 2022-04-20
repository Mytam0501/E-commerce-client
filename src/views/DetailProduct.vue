<template>
  <div class="home">
    <DetailProductComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import DetailProductComponent from '../components/DetailProduct.component.vue';

export default {
  name: 'DetailProduct',
  components: {
    DetailProductComponent,
  },
  data() {
    return {
      
    };
  },
}
</script>
<style>

</style>