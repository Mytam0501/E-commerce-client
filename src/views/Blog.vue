<template>
  <div class="Blog">
    <BlogComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogComponent from '../components/Blog.component.vue';

export default {
  name: 'Blog',
  components: {
    BlogComponent,
  },
  data() {
    return {
      
    };
  },
}
</script>
<style>

</style>