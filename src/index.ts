import './style/editor.css';
import type { Plugin } from 'vue';
import Editor from './components/Editor.vue'
const VueTiptapEditor: Plugin = {
  install(app) {
    app.component('editor', Editor);
    app.component('a-editor', Editor);
  },
};

export * from './icons/index'
export * from './extensions';

export { VueTiptapEditor, Editor };

export default VueTiptapEditor;