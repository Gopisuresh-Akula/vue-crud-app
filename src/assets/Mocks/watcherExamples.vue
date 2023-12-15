<template>
  <div>
    <input v-model="username" placeholder="Username" />
    <p v-if="usernameError" style="color: red">{{ usernameError }}</p>

    <textarea v-model="content" placeholder="Type something..."></textarea>
  </div>
</template>

<script>
export default {
  name: "watcherExamples",
  data() {
    return {
      username: "",
      usernameError: "",
    };
  },
  watch: {
    username(newValue) {
      if (!newValue) {
        this.usernameError = "Username is required";
      } else if (newValue.length < 3) {
        this.usernameError = "Username must be at least 3 characters";
      } else {
        this.usernameError = "";
      }
    },
    content: {
      handler(newValue) {
        // Simulate auto-saving changes to the server
        console.log("Auto-saving changes:", newValue);
      },
      immediate: true,
    },
  },
};
</script>
