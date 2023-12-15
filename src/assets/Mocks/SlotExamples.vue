<template>
  <div>
    <h2>Child Component</h2>
    <slot/>
    <slot name="header"/>
    <slot name="footer"/>
<slot :message="message"></slot>
  </div>
</template>

<script>
export default {
    name: "SlotExamples",
    data() {
    return {
      message: 'Hello from Child!',
    };
  },
};
</script>
