<template>
  <div class="home">
    <div @click="goToDetail" v-if="isDataAdded" class="d-flex justify-content-center flex-column" :class="getAmPm ? 'light-theme' : 'dark-theme'">
        <label class="font-weight-bold">Search country</label>
        <input type="text" v-model="currentCity" @keyup.enter="getWeatherData">
        <div class="card weather mt-3">
          <h1>{{ info.name }}, {{ info.sys.country }}</h1>
          <h2>Temp: {{info.main.temp.toFixed()}} deg</h2>
          <h2><span>Wind speed:</span> {{ info.wind.speed }}mph</h2>
        </div>
	  </div>
    <h1 v-else>No city found</h1>
  </div>
</template>

<script>
import api from '@/services/api.vue';

export default {
  name: 'Home',

  data () {
    return {
      apiUrl: process.env.VUE_APP_WEATHER_URL,
      apiKey: process.env.VUE_APP_WEATHER_API_KEY,
      isDataAdded: false,
      info: null,
      currentCity: ['Lahore'],
      getAmPm: false
    }
  },
  create() {

  },
  mounted () {
    this.getWeatherData();
    this.getTimeDuration();
  },
  methods: {
    async getWeatherData() {
      this.info =  await api.getRequestMethod(this.apiUrl + '?q='+ this.currentCity + '&&units=metric&appid='+ this.apiKey);
      if(this.info) {
        this.isDataAdded = true;
      }
    },
    
    getTimeDuration() {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? false : true;
      this.getAmPm = ampm;
    },
    goToDetail() {
      
    }
  },
}
</script>
<style scoped lang="scss">
  .home {
    max-width: 350px;
    margin: 0 auto;
    padding-top: 30px
  }
  .home input {
    border:none;
    background: #eee;
    height: 40px;
    border-radius: 4px;
    padding: 0 20px;
  }
  .dark-theme .weather{
    background-image: url("../assets/images/night.png");
  }
  .light-theme .weather{
    background-image: url("../assets/images/morning.png");
  }
  .weather {
    padding: 30px 15px;
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 70px;
  }
</style>