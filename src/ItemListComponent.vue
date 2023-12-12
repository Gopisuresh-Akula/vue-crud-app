<template>
    <div>
      <h2>Item List</h2>
      <a-button type="primary" @click="showCreateModal">Add Item</a-button>
      <a-table :columns="columns" :data-source="items">
        <template v-slot:action="text, record" >
          <a @click="editItem(record)">Edit</a>
          <a-divider type="vertical" />
          <a @click="deleteItem(record)">Delete</a>
        </template>
      </a-table>
      <CreateItemComponent :visible="createModalVisible" @close="closeCreateModal" />
      <EditItemComponent :visible="editModalVisible" :item="selectedItem" @close="closeEditModal" />
    </div>
  </template>
  
  <script>
  import CreateItemComponent from './CreateItemComponent.vue';
  import EditItemComponent from './EditItemComponent.vue';
  
  export default {
    components: {
      CreateItemComponent,
      EditItemComponent
    },
    data() {
      return {
        items: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          // Other sample items
        ],
        createModalVisible: false,
        editModalVisible: false,
        selectedItem: null,
        columns: [
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
          },
          {
            title: 'Action',
            key: 'action',
            width: '150px',
            scopedSlots: { customRender: 'action' }
          }
        ]
      };
    },
    methods: {
      showCreateModal() {
        this.createModalVisible = true;
      },
      closeCreateModal() {
        this.createModalVisible = false;
      },
      editItem(item) {
        this.selectedItem = item;
        this.editModalVisible = true;
      },
      closeEditModal() {
        this.editModalVisible = false;
        this.selectedItem = null;
      },
      deleteItem(item) {
        // Logic to delete an item
        const index = this.items.findIndex(i => i.id === item.id);
        if (index !== -1) {
          this.items.splice(index, 1);
        }
      }
    }
  };
  </script>
  