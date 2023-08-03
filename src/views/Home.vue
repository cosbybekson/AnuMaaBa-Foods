<template>
  <Header />
  <h1>Hello {{ name }}, Welcome on the Homepage</h1>
  <table class="table table-striped-column border-1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Address</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in restaurant" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
          <router-link class="btn btn-warning me-2" :to="'/update/' + item.id"
            ><i class="bi bi-pencil text-white"></i
          ></router-link>
          <button class="btn btn-danger" v-on:click="deleteRestaurant(item.id)">
            <i class="bi bi-trash3-fill"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete(
        "http://localhost:3000/restaurants/" + id
      );
      console.warn(result);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "signUp" });
      }
      let result = await axios.get("http://localhost:3000/restaurants");
      console.warn(result);
      this.restaurant = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
.table {
  width: 600px;
  height: 40px;
  border: 1px;
  margin: 10px;
}

th,
td {
  border: 1px solid skyblue;
  padding: 8px;
  text-align: center;
}
</style>
