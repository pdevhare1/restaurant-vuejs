<template>
  <div class="logo">
    <img src="../assets/restaurant.png" alt="logo" />
    <h1>Sign Up</h1>
  </div>
  <div class="form">
    <input type="text" placeholder="Enter Your Name" v-model="name" />
    <input type="email" placeholder="Enter Your Email" v-model="email" />
    <input
      type="password"
      placeholder="Enter your Password"
      v-model="password"
    />
    <button class="btn" @click="signUp()">Sign up</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      console.log("singUp", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      if (result.status === 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
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

<style scoped>
.logo {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
}

.logo h1 {
  font-size: 30px;
  font-weight: 700;
  color: #229091;
  margin-top: 2px;
  margin-bottom: 10px;
}

.logo img {
  width: 50px;
}

.form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 30px;
  align-items: center;
}

.form input {
  border-radius: 10px;
  outline: 2px solid #229091;
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #e2e2e2;
  outline-offset: 3px;
  padding: 10px 1rem;
  transition: 0.25s;
  margin-bottom: 25px;
}

.form input:focus {
  outline-offset: 5px;
  background-color: #fff;
}

.form input:hover {
  border-color: black;
}

.btn {
  --c: #229091;
  /* the color*/

  box-shadow: 0 0 0 0.1em inset var(--c);
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: var(--_g) calc(var(--_p, 0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p, 0%)) 0%,
    var(--_g) calc(var(--_p, 0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p, 0%)) 100%;
  background-size: 50.5% calc(var(--_p, 0%) / 2 + 0.5%);
  outline-offset: 0.1em;
  transition: background-size 0.4s, background-position 0s 0.4s;
}

.btn:hover {
  --_p: 100%;
  transition: background-position 0.4s, background-size 0s;
}

.btn:active {
  box-shadow: 0 0 9e9Q inset #0009;
  background-color: var(--c);
  color: #fff;
}

.btn {
  font-family: system-ui, sans-serif;
  font-size: 20px;
  cursor: pointer;
  padding: 0.1em 0.6em;
  font-weight: bold;
  border: none;
}
</style>
