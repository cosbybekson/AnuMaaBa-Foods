<template>
  <div>
    <Header />
    <h1>Hello user, Welcome on the Add Restaurant Homepage</h1>
    <form class="add">
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        v-model="restaurant.name"
      />
      <input
        type="text"
        name="address"
        placeholder="Enter Address"
        v-model="restaurant.address"
      />
      <input
        type="text"
        name="contact"
        placeholder="Enter Contact"
        v-model="restaurant.contact"
      />
      <button class="border-0" type="button" v-on:click="addRestaurant">
        Add new Restaurant
      </button>
    </form>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";

export default {
  name: "AddView",
  components: {
    Header,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addRestaurant() {
      console.warn(this.restaurant);
      const result = await axios.post("http://localhost:3000/restaurants", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      if (result.status==201) {
      this.$router.push({ name: "home" });
    }
      console.warn("result", result)
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "signUp" });
    }
  },
};
</script>

<style scoped></style>
