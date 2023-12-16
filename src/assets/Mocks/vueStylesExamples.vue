<template>
    <h1> Inline Style Example</h1>
  <div :style="{ color: textColor, fontSize: textSize + 'px' }">
    Inline Style Example
  </div>
   <h1> Class Binding Example</h1>
  <div :class="{ 'highlight': isHighlighted, 'italic': isItalic }">
    Class Binding Example
  </div>
 <h1>Dynamic Styles Example</h1>
  <div :style="dynamicStyles">
    Dynamic Styles Example
  </div>
<h1>Scoped Styles Example</h1>
  <div class="scoped-example">Scoped Styles Example</div>
  <div class="module-example" style="color:red;">Module Example</div>

  <h1>Vue Component with CSS Modules</h1>
    <!-- <div :class="$style.moduleExample">Module Example</div>
    <div :class="[$style.highlight, $style.italic]">
        Conditional Styles Example
    </div> -->
</template>

<script>
//  import styles from './ModuleExample.module.css';
export default {
    name:'vueStylesExamplesVue',
  data() {
    return {
      textColor: 'blue',
        textSize: 18,
         isHighlighted: true,
      isItalic: false,
      
    };
    },
    computed: {
    //  style() {
    //   return styles
    // },
    dynamicStyles() {
      return {
        // color: this.isDarkMode ? 'white' : 'black',
        // backgroundColor: this.isDarkMode ? 'black' : 'white',
      };
    },
  },
};
</script>
<!-- <style scoped>
.highlight {
  background-color: yellow;
}
.italic {
  font-style: italic;
}
.scoped-example {
  color: red;
  font-size: 20px;
}
.global-example {
  font-weight: bold;
}
</style> -->

<!-- <style src="./ModuleExample.module.css"></style> -->
