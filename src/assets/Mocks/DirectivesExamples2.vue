<template>
  <div :style="computeStyles()">
    Dynamic Styles with Methods
  </div>

  <div :style="[baseStyles, isMobile ? mobileStyles : desktopStyles]">
    Responsive Styling
  </div>
  <div :style="{ ...baseStyles, ...computeDynamicStyles() }">
    Merging Static and Dynamic Styles
  </div>
</template>

<script>
export default {
    name: 'DirectivesExamples2',
  methods: {
    computeStyles() {
      return {
        color: this.isActive ? 'blue' : 'red',
        fontSize: `${this.fontSize}px`,
      };
        },
     computeDynamicStyles() {
      return {
        backgroundColor: this.isActive ? 'yellow' : 'transparent',
        fontWeight: this.isBold ? 'bold' : 'normal',
      };
        },
      handleResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
  data() {
    return {
  
        fontSize: 18,
      isActive: true,
        isBold: false,
         baseStyles: { color: 'black', fontSize: '16px' },
      isMobile: window.innerWidth < 600,
      mobileStyles: { fontSize: '14px' ,backgroundColor:'red' },
      desktopStyles: { fontSize: '18px',backgroundColor:'blue' },
    };
    },
   mounted() {
    window.addEventListener('resize', this.handleResize);
  },

beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>
