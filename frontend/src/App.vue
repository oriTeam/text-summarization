<template>
    <div id="app">
        <div class="container">
            <div class="row justify-content-center">
                <img alt="Vue logo" src="./assets/summarization.png" width="400px">
            </div>
            <div class="row justify-content-center mb-3 mt-4 navibar">
                <span class="mr-2">
                    <router-link to="/summary">Summarization</router-link>
                </span>
                <span class="ml-2">
                    <router-link to="/history">History</router-link>
                </span>
            </div>
            <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        </div>
        <router-view>
            <!--<TextSummary/>-->
        </router-view>

    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import TextSummary from './screens/TextSummary'

    export default {
        name: 'app',
        components: {
            TextSummary, HelloWorld
        }
    }
</script>

<style lang="scss">
    @import "scss/index";

    #app {
        font-family: ShopifySans, 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 20px;
    }

    .navibar {
        a:hover {
            color: #0265fd;
        }

        a {
            color: #0265fd73;
            font-size: 18px;
        }

        a.active {
            color: #0265fd;
        }
    }
</style>
