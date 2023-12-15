<template>
  <div>
    -----------------------------------------------------------------------------
    <h1>Interpolations Examples</h1>
    <p>{{ message }}</p>
    <p>UpperCase :-{{ message.toUpperCase() }}</p>
    <a :href="link.url" :title="link.title">{{ link.text }}</a>
    <p>{{ showContent ? "Visible Content" : "Hidden Content" }}</p>
    <button @click="toggleContent">
      {{ showContent ? "Hide" : "Show" }} Content
    </button>
  </div>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InterpolationsExamples",
  data() {
    return {
        message: "Hello, Vue!",
      showContent: true,
      formattedHTML: "<strong>Hello, Vue!</strong>",
      link: {
        url: "https://vuejs.org",
        title: "Visit Vue.js Official Website",
        text: "Vue.js",
      },
      items: [
        "Introduction",
        "Components",
        "Directives",
        "Computed Properties",
      ],
    };
  },
  methods: {
    toggleContent() {
      this.showContent = !this.showContent;
    },
  },
};
</script>
