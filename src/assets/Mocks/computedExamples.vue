<template>
    <div>
        <h1>Basic Computed</h1>
        <p>Original Message: {{ message }}</p>
        <p>Reversed Message: {{ reversedMessage }}</p>
        <h1>Computed Property with Dependencies:</h1>

        <p>Base Price: ${{ basePrice }}</p>
        <p>Tax: ${{ tax }}</p>
        <p>Total Price: ${{ totalPrice }}</p>
        <h1>Computed Property with Setter:</h1>
        <div>
            <p>Full Name: {{ fullName }}</p>
            <input v-model="firstName" placeholder="First Name" />
            <input v-model="lastName" placeholder="Last Name" />
        </div>
        <h1>Computed Property with Asynchronous Logic:</h1>

        <p>Loading Status: {{ loadingStatus }}</p>
        <button @click="simulateAsyncTask">Simulate Async Task</button>
    </div>
</template>

<script>
export default {
    name: "ComputedExample",
    data() {
        return {
            message: "Hello, Vue!",
            basePrice: 50,
            taxRate: 0.1,
            firstName: 'John',
            lastName: 'Doe',
            isLoading: false,
        };
    },
    computed: {
        reversedMessage() {
            return this.message.split("").reverse().join("");
        },
        // Computed Property with Dependencies:
        tax() {
            return this.basePrice * this.taxRate;
        },
        totalPrice() {
            return this.basePrice + this.tax;
        },
        fullName: {
            get() {
                return `${this.firstName} ${this.lastName}`;
            },
            set(value) {
                const names = value.split(' ');
                this.firstName = names[0];
                this.lastName = names[1];
            },
        },
        loadingStatus() {
            return this.isLoading ? 'Loading...' : 'Not Loading';
        },
    },
    methods: {
        simulateAsyncTask() {
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
            }, 2000);
        },
    },
};
</script>
