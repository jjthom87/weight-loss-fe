<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="navbar-nav">
      <li id="login-nav" class="nav-item" style="margin-right: 15px;">
         <router-link to="/login">Login</router-link>
      </li>
      <li id="register-nav" class="nav-item">
         <router-link to="/register">Register</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  props: {
    whatever: String
  },
  data(){
    return {
      msg: "Welcome, please Sign In or Sign Up"
    }
  },
  mounted: function () {
    axios.get(`http://localhost:8000/v1/api/signedin`, {
      withCredentials: true  
    })
    .then(response => {
      console.log(response)
    })
    .catch(e => {
      console.log(e);
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
