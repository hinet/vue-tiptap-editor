import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import VueTiptapEditor from 'vue-tiptap-editor';
const app = createApp(App);
app.use(VueTiptapEditor);
app.mount('#app')
