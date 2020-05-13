<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul class="navbar-nav">
      <li class="nav-item" style="margin-right: 15px;">
         <router-link to="/">Home</router-link>
      </li>
      <li class="nav-item">
         <router-link to="/login">Login</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  props: {
    whatever: String
  },
  data(){
    return {
      msg: "Welcome, please Sign Up"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
