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
          <td>{{ item.title }}</td>
          <td>
            <button @click="editItem(item)">Edit</button>
            <button @click="deleteItem(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="createModalVisible" class="modal">
      <div class="modal-content">
        <h3>Create Item</h3>
        <input type="text" v-model="newItem.title" placeholder="Enter Name" />
        <button @click="handleCreate">Create</button>
        <button @click="closeCreateModal">Cancel</button>
      </div>
    </div>
    <div v-if="editModalVisible" class="modal">
      <div class="modal-content">
        <h3>Edit Item</h3>
        <input type="text" v-model="editedItem.title" />
        <button @click="handleEdit">Save Changes</button>
        <button @click="closeEditModal">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      items: [],
      createModalVisible: false,
      editModalVisible: false,
      newItem: {
        title: ''
      },
      editedItem: {
        id: null,
        title: ''
      }
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    async fetchItems() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        this.items = response.data;
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
    showCreateModal() {
      this.createModalVisible = true;
    },
    closeCreateModal() {
      this.createModalVisible = false;
      this.newItem.title = '';
    },
    async handleCreate() {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', this.newItem);
        this.items.push(response.data);
        this.closeCreateModal();
      } catch (error) {
        console.error('Error creating item:', error);
      }
    },
    editItem(item) {
      this.editedItem.id = item.id;
      this.editedItem.title = item.title;
      this.editModalVisible = true;
    },
    closeEditModal() {
      this.editModalVisible = false;
      this.editedItem.title = '';
    },
    async handleEdit() {
      try {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${this.editedItem.id}`, this.editedItem);
        const index = this.items.findIndex(item => item.id === this.editedItem.id);
        if (index !== -1) {
          this.items[index].title = this.editedItem.title;
        }
        this.closeEditModal();
      } catch (error) {
        console.error('Error updating item:', error);
      }
    },
    async deleteItem(itemId) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${itemId}`);
        this.items = this.items.filter(item => item.id !== itemId);
      } catch (error) {
        console.error('Error deleting item:', error);
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
