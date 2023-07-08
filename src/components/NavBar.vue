<template>
  <div class="NavBar">
    <div class="logo">
      <img src="../assets/restaurant.png" alt="logo" />
    </div>
    <div class="maun">
      <router-link to="/">Home</router-link>
      <router-link to="AddPage">Add Restaurant</router-link>
      <router-link to="UpdatePage">Update Restaurant</router-link>
      <a @click="logOut" href="#">Log Out</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    logOut() {
      localStorage.removeItem("user-info");
      this.$router.push({
        name: "SignIn",
      });
    },
  },
};
</script>

<style>
.NavBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px;
  background-color: #229091;
}
.maun a {
  text-decoration: none;
  margin: 1rem;
  color: white;
  font-weight: 700;
}
.maun a:hover {
  color: #e2e2e2;
  text-decoration-line: underline overline;
  text-decoration-style: wavy;
  text-decoration-color: palevioletred;
}
.logo {
  align-self: flex-start;
}
.logo img {
  width: 50px;
  margin: 0.5rem;
}
</style>
