<template>
    <div class="container">
        <div class="body-template">
            <nav-bar></nav-bar>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            <bot-bar></bot-bar>
        </div>
    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue'
    import BotBar from './components/BotBar.vue'

    export default {
        components: {
            NavBar,
            BotBar
        }
    }
</script>
