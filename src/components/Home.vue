<template>
  <div class="home">
    <NavBar />
    <h1>Hey {{ name }} Welcome Home</h1>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  name: "HomePage",
  data() {
    return {
      name: "",
    };
  },
  components: {
    NavBar,
  },
  mounted() {
    const user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({
        name: "SignUp",
      });
    }
  },
};
</script>

<style scoped>
.home h1 {
  text-align: center;
}
</style>
