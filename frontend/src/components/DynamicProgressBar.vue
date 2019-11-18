<template>
    <div>
        <a-progress :percent="isFinished ? '100' : loadingPercent " :showInfo="false"/>
    </div>
</template>

<script>
    export default {
        props: ['loadingPercentProp', 'isFinished'],
        data() {
            return {
                loadingPercent: this.loadingPercentProp
            }
        },
        created() {
            let self = this;
            setInterval(() => {
                let percent = this.loadingPercent + 1.5;
                if (percent > 100) {
                    percent = 100;
                }
                else if (percent > 90) {
                    percent = 98;
                }
                this.loadingPercent = percent;
            }, 1000)
        },
        methods: {

        },
    };
</script>
<style>

</style>