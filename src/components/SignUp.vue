<template>
  <div class="logo"><img src="../assets/restaurant.png" alt="logo" /></div>
  <h1>Sign Up</h1>
  <div class="form">
    <input type="text" placeholder="Enter Your Name" />
    <input type="email" placeholder="Enter Your Email" />
    <input type="password" placeholder="Enter your Password" />
    <button class="btn">Sign up</button>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
};
</script>

<style>
.logo {
  margin-top: 20px;
  margin-bottom: 20px;
}

.logo img {
  width: 100px;
}

.form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  align-items: center;
}

.form input {
  width: 300px;
  height: 40px;
  padding: 5px;
  margin: 10px;
  border-color: skyblue;
}

.form input:hover {
  border-color: black;
}
.btn {
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  background: #3498db;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}

.btn:hover {
  background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;
}
</style>
