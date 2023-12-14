
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- metadata -->  
</head>

<body>
  
  <div id="app"></div>

  <!-- builds & scripts -->

</body>

</html>

const app = createApp(App)
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'

// Import the plugin
import router from './router'

const app = createApp(App)

// Register the plugin
app.use(router)

app.mount('#app')
