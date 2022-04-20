<template>
  <div class="home">
    <LoginComponent/>
  </div>
</template>

<script>
import LoginComponent from '../../components/account/Login.component.vue'


export default {
  name: 'Login',
  components: {
    LoginComponent,
  },
  data() {
    return {
      
    };
  },
}
</script>