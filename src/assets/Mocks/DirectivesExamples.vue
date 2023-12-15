<!-- Directives give all Directives iv vue all examples with short explans  -->
// Compare this snippet from src/assets/Mocks/DirectivesExamples.vue:
<template>
  <div>
    -----------------------------------------------------------------------------
    <h1>Directives Examples</h1>
    <!-- v-bind Directive:
The v-bind directive is used to dynamically bind an attribute or a prop to an expression.-->
    <h2>v-bind Directive</h2>
    <div>
      <a v-bind:href="link.url">Visit {{ link.website }}</a>
      <img v-bind:src="link.imageSrc" alt="Vue Logo" />
    </div>
    <!-- v-model Directive:
The v-model directive is used to create two-way data bindings 
between a form input and a property on the view model.
   -->
    <h2>v-model Directive</h2>
    <div>
      <input v-model="message" placeholder="Type something" />
      <p>You typed: {{ message }}</p>
    </div>

    <h2>v-if, v-else-if, v-else Directive</h2>
    <div>
      <p v-if="isMorning">Good Morning!</p>
      <p v-else-if="isAfternoon">Good Afternoon!</p>
      <p v-else>Good Evening!</p>
    </div>

    <h2>v-for Directive</h2>
    <div>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </div>

    <h2>v-show Directive</h2>
    <div>
      <p v-show="isVisible">This is visible!</p>
      <button @click="toggleVisibility">Toggle Visibility</button>
    </div>

    <h2>v-html Directive</h2>
    <div>
      <p>{{ formattedHTML }}</p>
      <p v-html="formattedHTML"></p>
    </div>

    <h2>v-cloak Directive</h2>
    <div v-cloak>
      <p>{{ message }}</p>
    </div>

    <h2>v-bind:style / :style</h2>
    <div :style="{ color: textColor, fontSize: fontSize + 'px' }">
      Styled Text
    </div>
<h2>Dynamic Classes</h2>
    <div :class="{ active: isActive, 'text-bold': isBold }">
      Dynamic Classes
    </div>
    <h2>Combined Styles and Classes</h2>
    <div
      :style="{ color: textColor, fontSize: fontSize + 'px' }"
      :class="{ active: isActive, 'text-bold': isBold }"
    >
      Combined Styles and Classes
    </div>
     <div :style="[styleObject1, styleObject2]">
    Multiple Style Bindings
  </div>
  </div>
</template>

<script>
export default {
  name: "DirectivesExamples",
  data() {
    return {
      message: "Hello, Vue!",
      showContent: true,
      isVisible: true,
      isMorning: true,
      isAfternoon: false,
      formattedHTML: "<strong>html Hello, Vue!</strong>",
      items: ["Item 1", "Item 2", "Item 3"],
      link: {
        url: "https://vuejs.org",
        title: "Visit Vue.js Official Website",
        text: "Vue.js",
      },
      textColor: "red",
      fontSize: 16,
      isActive: true,
        isBold: false,
       styleObject1: { color: 'red', fontSize: '20px' },
      styleObject2: { backgroundColor: 'yellow', padding: '10px' },
    };
  },
};
</script>
