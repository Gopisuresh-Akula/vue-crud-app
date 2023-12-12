<!-- eslint-disable vue/no-mutating-props -->
<template>
    <a-modal v-model="visible" title="Edit Item" @cancel="close">
      <!-- Form for editing an item -->
      <a-form :form="editForm" @finish="handleFinish">
        <a-form-item label="Name" name="name" rules="required">
          <a-input v-model:value="form.name" />
        </a-form-item>
        <a-button type="primary" html-type="submit">Save Changes</a-button>
      </a-form>
    </a-modal>
  </template>
  
  <script>
  export default {
    props: {
      visible: Boolean,
      item: Object // Item to edit
    },
    data() {
      return {
        form: {
          name: this.item ? this.item.name : ''
          // Other fields
        },
        editForm: this.$form.createForm(this)
      };
    },
    watch: {
      item(newVal) {
        this.form = {
          name: newVal.name
          // Other fields
        };
      }
    },
    methods: {
      handleFinish() {
        // Logic to update an item
        this.$emit('close');
        // Reset form after updating an item
        this.editForm.resetFields();
      },
      close() {
        this.$emit('close');
        this.editForm.resetFields();
      }
    }
  };
  </script>
  