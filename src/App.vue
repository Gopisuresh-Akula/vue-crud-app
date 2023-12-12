<template>
  <div class="container">
    <h2>Item List</h2>
    <button @click="showCreateModal">Add Item</button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>
            <button @click="editItem(item)">Edit</button>
            <button @click="deleteItem(item)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="createModalVisible" class="modal">
      <div class="modal-content">
        <h3>Create Item</h3>
        <input type="text" v-model="newItem.name" placeholder="Enter Name" />
        <button @click="handleCreate">Create</button>
        <button @click="closeCreateModal">Cancel</button>
      </div>
    </div>
    <div v-if="editModalVisible" class="modal">
      <div class="modal-content">
        <h3>Edit Item</h3>
        <input type="text" v-model="editedItem.name" />
        <button @click="handleEdit">Save Changes</button>
        <button @click="closeEditModal">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        // Other sample items
      ],
      createModalVisible: false,
      editModalVisible: false,
      newItem: {
        name: ''
        // Other fields
      },
      editedItem: {
        id: null,
        name: ''
        // Other fields
      }
    };
  },
  methods: {
    showCreateModal() {
      this.createModalVisible = true;
    },
    closeCreateModal() {
      this.createModalVisible = false;
      this.newItem.name = '';
    },
    handleCreate() {
      this.items.push({
        id: this.items.length + 1,
        name: this.newItem.name
        // Other fields
      });
      this.closeCreateModal();
    },
    editItem(item) {
      this.editedItem.id = item.id;
      this.editedItem.name = item.name;
      this.editModalVisible = true;
    },
    closeEditModal() {
      this.editModalVisible = false;
      this.editedItem.name = '';
    },
    handleEdit() {
      const index = this.items.findIndex(item => item.id === this.editedItem.id);
      if (index !== -1) {
        this.items[index].name = this.editedItem.name;
        // Update other fields if needed
      }
      this.closeEditModal();
    },
    deleteItem(item) {
      const index = this.items.findIndex(i => i.id === item.id);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  }
};
</script>

<style>
.container {
  font-family: Arial, sans-serif;
  margin: 20px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

button {
  padding: 8px 16px;
  margin: 5px;
  cursor: pointer;
}

.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}
</style>
