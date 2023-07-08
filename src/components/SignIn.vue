<template>
  <div class="logo">
    <img src="../assets/restaurant.png" alt="logo" />
    <h1>Sign Up</h1>
  </div>
  <div class="form">
    <input type="email" placeholder="Enter Your Email" v-model="email" />
    <input
      type="password"
      placeholder="Enter your Password"
      v-model="password"
    />
    <button class="btn" @click="SingIn">Sign In</button>
    <div class="Sign_in">
      <router-link class="Sign_in" to="/SignUp"> Sign Up </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async SingIn() {
      let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({
          name: "Home",
        });
      }
    },
  },
  mounted() {
    const user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({
        name: "Home",
      });
    }
  },
};
</script>

<style></style>
