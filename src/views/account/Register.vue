<template>
  <div class="home">
    <RegisterComponent/>
  </div>
</template>

<script>
import RegisterComponent from '../../components/account/Register.component.vue'


export default {
  name: 'Register',
  components: {
    RegisterComponent,
  },
  data() {
    return {
      
    };
  },
}
</script>