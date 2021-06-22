import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'
import "font-awesome/css/font-awesome.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');

app.config.productionTip = false;
app.config.devtools = true;