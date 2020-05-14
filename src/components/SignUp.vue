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
    <form @submit.prevent="processSignUp">
      <div style="font-size: 35px;">Sign Up Form</div>
      <div>
        <input id="name-input" type="text" v-model="name" placeholder="What is your name?"/>
        <br>
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
  name: 'SignUp',
  props: {
    whatever: String
  },
  data(){
    return {
      msg: "Welcome, please Sign Up",
      form: {
        name: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    processSignUp (e) {
      e.preventDefault();
      axios.post(`http://localhost:8000/v1/api/register`, {
        name: this.name,
        username: this.username,
        password:this.password
      })
      .then(response => {
        if(response.data.statusCode == 200){
          console.log("user added successfully")
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
