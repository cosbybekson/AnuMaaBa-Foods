<template>
  <img class="img-fluid" src="../assets/logo.jpeg" alt="" />
  <h1 class="text-primary">Sign up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button class="border-0" v-on:click="signUp" type="submit">Sign Up</button>
    <p class="mt-3">
      <router-link to="/login">LogIn</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUpView",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let results = await axios.post("http://localhost:3000/users", {
        email: this.email,
        password: this.password,
        name: this.name,
      });

      if (results.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(results.data));
        this.$router.push({ name: "home" });
      }
    },
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
