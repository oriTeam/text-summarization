<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <TextSummary/>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import TextSummary from './screens/TextSummary'

    export default {
        name: 'app',
        components: {
            TextSummary
        }
    }
</script>

<style lang="scss">
    @import "scss/index";
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
