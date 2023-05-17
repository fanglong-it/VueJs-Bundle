
<template>
        <div class="content">
            <router-link to="/src/router/">To</router-link>
            <router-link to="/src/router/guide">Guide</router-link>
            <router-view v-slot="{Component, route}">
              <transition name="fade"
                :enter-active-class="route.meta.enterClass"
                :leave-active-class="route.meta.leaveClass"
                mode="out-in"
              >
                  <component :is="Component"/>
              </transition>
               
            </router-view>
        </div>
</template>
<script setup>
</script>
<style>

    #app{
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        color: #2c3e50;
        margin-top: 60px;
    }
    header{
        position: relative;
        display: block ;
        align-items: center;
        margin-top: 5px;
   }

   .content{
    width: 40%;
    min-width: 500px;
    margin: 0 auto;
    position: relative;
   }

   a{
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin-right: 1em;
   }

   a:hover, a.router-link-active{
    border-bottom: 2px solid #3498db;
   }

   .fade-enter-from,
   .fade-leave-to{
    opacity: 0;
   }
   .fade-enter-active,
   .fade-leave-active{
    transition: opacity 0.5s ease-out;
   }

</style>



