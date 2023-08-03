<template>
  <Header />
  <h1>Hello user, Welcome on the Update page</h1>
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
    <button class="border-0" type="button" v-on:click="updateRestaurant">
      Update Restaurant
    </button>
  </form>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
export default {
  name: "UpdateView",
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
    async updateRestaurant() {
      console.warn(this.restaurant);
      const restaurantId = this.$route.params.id;
      const result = await axios.put(`http://localhost:3000/restaurants/${restaurantId}`, {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      if (result.status == 200) {
        this.$router.push({ name: "home" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "signUp" });
    }
    const result = await axios.get(
      "http://localhost:3000/restaurants/" + this.$route.params.id
    );
    console.warn(result.data);
    this.restaurant = result.data;
  },
};
</script>

<style scoped></style>
