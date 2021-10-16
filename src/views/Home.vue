<template>
  <div class="weather-list">
    <div class="container">
      <div v-if="isData">
        <weatherItem v-bind:multiCityData="multiCityData"/>
	    </div>
      <h1 v-else>No city found</h1>
    </div>
  </div>
</template>

<script>
import api from '@/services/api.vue';
import cities from '@/assets/cities.json';
import weatherItem from '@/components/weather-item.vue';

export default {
  name: 'Home',
  components: {
      weatherItem
  },
  data () {
    return {
      apiUrl: process.env.VUE_APP_WEATHER_URL,
      apiKey: process.env.VUE_APP_WEATHER_API_KEY,
      isData: false,
      info: null,
      currentCity: cities,
      multiCityData:[],
      getAmPm: false
    }
  },
  create() {

  },
  mounted () {
    this.getWeatherData();
  },
  methods: {
     async getWeatherData() {
      for (var i=0; i < this.currentCity.length; i++) {
        const response = await api.getRequestMethod(this.apiUrl + '?q='+ this.currentCity[i].name + '&&units=metric&appid='+ this.apiKey)
        this.multiCityData.push(await response);
      }
      if(this.multiCityData) {
        this.isData = true;
      }
    },
  },
}
</script>
<style scoped lang="scss">
  .weather-list {
    padding: 30px 0;
  }
  .weather-list input {
    border:none;
    background: #eee;
    height: 40px;
    border-radius: 4px;
    padding: 0 20px;
  }
</style>