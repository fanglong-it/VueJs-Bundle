import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
const $toast = useToast();
const app = createApp({
    methods: {
        open(){
            console.log("Open function!");
            $toast.open({
                message: "Test message from Vue",
                type: "success",
                duration: 3000,
                dismissible: true
            });
        }
    }

});
app.mount("#app");
