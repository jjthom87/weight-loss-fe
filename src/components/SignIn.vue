<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul class="navbar-nav">
      <li class="nav-item" style="margin-right: 15px;">
         <router-link to="/">Home</router-link>
      </li>
      <li class="nav-item">
         <router-link to="/register">Register</router-link>
      </li>
    </ul>
    <form @submit.prevent="processSignIn">
      <div style="font-size: 35px;">Login Form</div>
      <div>
        <input id="username-input" type="text" v-model="username" placeholder="What is your username?"/>
        <br>
        <input id="password-input" type="password" v-model="password" placeholder="What is your password?"/>
        <br>
        <input type="submit"/>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignIn',
  props: {
    whatever: String
  },
  data(){
    return {
      msg: "Welcome, please Sign In",
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    processSignIn (e) {
      e.preventDefault();
      axios.post(`http://localhost:8000/v1/api/login`, {
        username: this.username,
        password: this.password
      }, {
        withCredentials: true
      })
      .then(response => {
        if(response.data.success){
          console.log("user logged in successfully")
          e.target.reset();
        }
      })
      .catch(e => {
        console.log(e);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
