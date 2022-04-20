<template>
  <div class="home">
    <DetailBlogComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import DetailBlogComponent from '../components/DetailBlog.component.vue';

export default {
  name: 'DetailBlog',
  components: {
    DetailBlogComponent,
  },
  data() {
    return {
      
    };
  },
}
</script>
<style>

</style>