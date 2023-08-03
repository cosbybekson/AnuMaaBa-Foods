<template>
  <div>
    <img class="img-fluid" src="../assets/logo.jpeg" alt="" />
    <h1 class="text-primary">Login</h1>
    <div class="login">
      <input type="email" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button class="border-0" v-on:click="login" type="submit">Login</button>
      <p class="mt-3">
        <router-link to="/sign-up">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "LogInView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods:{
    async login(){
        let result = await axios.get(
            `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        )


      if (result.status == 200 && result.data.length>0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "home" });
      }
        console.warn(result)
    }
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style scoped>
img {
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
