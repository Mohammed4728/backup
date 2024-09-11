<template>
    <div class="login-form">
      <form @submit.prevent="login()">
        <input
          type="text"
          placeholder="enter your name"
          v-model="person.username"
        />
        <input
          type="text"
          placeholder="enter your password"
          v-model="person.password"
        />
        <button type="submit">login</button>
      </form>
    </div>
    {{ user }}
  </template>
  <script setup>
  import { ref } from "vue";
  import axios from "axios";
  const person = ref({
    username: "",
    passsword: "",
  });
  const user = ref({});
  const login = () => {
    axios
      .post("https://fakestoreapi.com/auth/login", {
        ...person.value,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllUsers = () => {
    axios
      .get("https://fakestoreapi.com/users?limit=10&page=2")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // deleteOneUser();
  // updateOneUser();
  // getOneUser();
  getAllUsers();
  </script>