<!-- In Vue.js, you can use the @ symbol as shorthand for the v-on directive to h
    andle various events -->

<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ asyncData }}</p>
    <p>{{ formatMessage("Hello, Vue!") }}</p>
    {{ vue }}
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script>
export default {
  name: "VueMethod",
  data() {
    return {
      message: "Hello, Vue!",
    };
  },
  props: {
    vue: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateMessage() {
      this.message = "New Message";
    },
    formatMessage(input) {
      return input.toUpperCase();
    },
    logMessage() {
      console.log(this.message);
    },
    updateAndLogMessage() {
      this.updateMessage();
      this.logMessage();
    },
    formattedMessage() {
      console.log("mounted AGS");
      return this.message.toUpperCase();

    },
    async fetchData() {
      // Simulate an API request
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      console.log("data..", data.title);
      this.asyncData = data.title;
    },
    
  },
  mounted() {
    console.log("mounted AGS");
    this.fetchData();
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
  },
};
</script>
