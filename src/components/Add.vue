<template>
  <div class="home">
    <NavBar />
    <h1>Hey Welcome Add Page</h1>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  name: "AddPage",
  components: {
    NavBar,
  },
  mounted() {
    const user = localStorage.getItem("user-info");
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
