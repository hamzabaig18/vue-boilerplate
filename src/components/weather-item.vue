<template>
    <div class="row" v-if="isData">
        <div class="col-4" v-for="item in multiCityData" :key="item.id">
            <div class="card weather mt-3" :class="getAmPm ? 'light-theme' : 'dark-theme'">
            <h1>{{ item.name }}, {{ item.sys.country }}</h1>
            <h2>Temp: {{item.main.temp.toFixed()}} deg</h2>
            <h2><span>Wind speed:</span> {{ item.wind.speed }}mph</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'weatherItem',
    props: ['multiCityData','isAmPm'],
    data () {
        return {
            isData: false,
            getAmPm: false
        }
    },
    mounted() {
        this.getTimeDuration();
        if(this.multiCityData) {
            this.isData = true
        }
    },
    methods: {
        getTimeDuration() {
            let date = new Date();
            let hours = date.getHours();
            let ampm = hours >= 12 ? false : true;
            this.getAmPm = ampm;
        }
    }
}
</script>

<style lang="scss" scoped>
  .weather {
    padding: 30px 15px;
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 70px;
    &.dark-theme{
        background-image: url("../assets/images/night.png");
    }
    &.light-theme{
        background-image: url("../assets/images/morning.png");
    }
  }
</style>