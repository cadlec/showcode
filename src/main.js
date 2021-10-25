// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Editor from '~/components/Editor.vue';
import Preview from '~/components/Preview.vue';
import Select from '~/components/Select.vue';
import Label from '~/components/Label.vue';
import VueTailwind from 'vue-tailwind';
import VDragged from 'v-dragged';
import { TToggle, TDropdown } from 'vue-tailwind/dist/components';

export default function (Vue, { router, head, isClient }) {
  head.script.push({
    src: 'https://unpkg.com/shiki',
    crossOrigin: "anonymous",
  });

  head.style.push({
    rel: "stylesheet",
    crossOrigin: "anonymous",
	  dataName:"vs/editor/editor.main",
    href: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.29.1/min/vs/editor/editor.main.css"
  });

  head.script.push({
    innerHTML: `var require = { paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.29.1/min/vs' } };`
  });

  head.script.push({
    src: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.29.1/min/vs/loader.js',
    crossOrigin: "anonymous",
  });

  head.script.push({
    src: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.29.1/min/vs/editor/editor.main.nls.js',
    crossOrigin: "anonymous",
  });

  head.script.push({
    src: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.29.1/min/vs/editor/editor.main.js',
    crossOrigin: "anonymous",
  });

  head.script.push({
    src: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.29.1/min/vs/basic-languages/php/php.min.js',
    crossOrigin: "anonymous",
  });

  Vue.component('Editor', Editor);
  Vue.component('Preview', Preview);
  Vue.component('Layout', DefaultLayout);

  Vue.component('AppSelect', Select);
  Vue.component('AppLabel', Label);

  Vue.use(VDragged);

  Vue.use(VueTailwind, { TToggle, TDropdown });
}
