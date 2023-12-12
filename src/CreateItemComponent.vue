<!-- eslint-disable vue/no-mutating-props -->
<template>
    <a-modal v-model="visible" title="Create Item" @cancel="close">
      <!-- Form for creating an item -->
      <a-form :form="createForm" @finish="handleFinish">
        <a-form-item label="Name" name="name" rules="required">
          <a-input v-model:value="form.name" />
        </a-form-item>
        <a-button type="primary" html-type="submit">Create</a-button>
      </a-form>
    </a-modal>
  </template>
  
  <script>
  export default {
    props: {
      visible: Boolean
    },
    data() {
      return {
        form: {
          name: ''
          // Other fields
        },
        createForm: this.$form.createForm(this)
      };
    },
    methods: {
      handleFinish() {
        // Logic to create an item
        this.$emit('close');
        // Reset form after creating an item
        this.createForm.resetFields();
      },
      close() {
        this.$emit('close');
        this.createForm.resetFields();
      }
    }
  };
  </script>
  