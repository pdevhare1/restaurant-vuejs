<template>
<div class="home">
    <h1>Hey Welcome Home</h1>
</div>
</template>

<script>
export default {
    name: "HomePage",
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
