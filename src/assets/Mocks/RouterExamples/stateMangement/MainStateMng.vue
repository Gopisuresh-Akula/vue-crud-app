<template>
    <div>
        <h1>Vuex Counter App</h1>
    <CounterDisplay />
    <CounterButtons />
    </div>
</template>

<script>
import CounterDisplay from './Vuex/CounterDisplay.vue';
import CounterButtons from './Vuex/CounterButtons.vue';
export default {
    name: 'MainStateMng',
    components: {
    CounterDisplay,
    CounterButtons,
  },
}


</script>