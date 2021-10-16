<template>
  <div class="weather-block container">
    <div @click="goToDetail" class="d-flex justify-content-center flex-column">
        <label class="font-weight-bold">Search country</label>
        <input type="text" v-model="currentCity" @keyup.enter="getWeatherData">
        <small>Please enter to search</small>
        <weatherItem  v-if="isData" v-bind:multiCityData="multiCityData" />
        <h1 v-else>No city found</h1>
    </div>
  </div>
</template>

<script>
import api from '@/services/api.vue';
import weatherItem from '@/components/weather-item.vue';

export default {
    name: 'SearchWeather',
    components: {
        weatherItem
    },
    data () {
        return {
        apiUrl: process.env.VUE_APP_WEATHER_URL,
        apiKey: process.env.VUE_APP_WEATHER_API_KEY,
        isData: false,
        multiCityData: [],
        currentCity: ['Lahore'],
        getAmPm: false
        }
    },
    mounted () {
        this.getWeatherData();
    },
    methods: {
        async getWeatherData() {
            this.multiCityData = [],
            this.multiCityData.push(await api.getRequestMethod(this.apiUrl + '?q='+ this.currentCity + '&&units=metric&appid='+ this.apiKey));
            if(this.multiCityData) {
                console.log(this.multiCityData);
                this.isData = true;
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    .weather-block {
        padding-top: 30px;
        input {
            border:none;
            background: #eee;
            height: 40px;
            border-radius: 4px;
            padding: 0 20px;
        }
    }
</style>