<template>
  <div class="container">
    <div v-if="isData" class="media mt-5  mb-5">
        <img class="mr-3" :src="selectedUser.avatar" alt="">
        <div class="media-body">
            <h5 class="mt-0">{{selectedUser.first_name + selectedUser.last_name}}</h5>
            <p class="card-text">{{selectedUser.email}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api.vue';

export default {
    name: 'userDetail',
    data () {
        return {
            isData: false,
            selectedUser: null,
            selectedUserId: '',
        }
    },
    mounted() {
        this.selectedUserId = this.$route.params.id;
        this.getUserData();
    },
    methods: {
        async getUserData() {
            let respData =  await api.getRequestMethod('users/' + this.selectedUserId);
            if(respData) {
                this.selectedUser = respData.data;
                this.isData = true
            }
        }
    }
}
</script>

<style>

</style>