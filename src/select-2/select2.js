import { createApp } from 'vue/dist/vue.esm-bundler.js';

createApp({
    data() {
      return {
        selectedValues: []
      }
    },
    mounted() {
      $(".js-example-placeholder-multiple").select2({
        placeholder: "Select a user",
        ajax: {
          url: "https://jsonplaceholder.typicode.com/users",
          dataType: 'json', 
          delay: 250,
          processResults: function (data) {
            return {
              results: data.map(function (user) {
                return {
                  id: user.id,
                  text: user.name
                };
              })
            };
          },
          cache: true
        }
      }).on('change', () => {
        this.selectedValues = $('.js-example-placeholder-multiple').val();
      });
    }
  }).mount("#app");
  
  
  
  
  
  