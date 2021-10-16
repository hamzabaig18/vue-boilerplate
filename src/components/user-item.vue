<template>
    <div v-if="isData" class="row">
        <div v-for="user in userlist" :key="user.id" class="col-4" >
            <div class="card mt-5">
                <img :src="user.avatar" alt="">
                <div class="card-body text-center">
                    <h5 class="card-title">{{user.first_name + user.last_name}}</h5>
                    <p class="card-text">{{user.email}}</p>
                    <button @click="deleteUser(user.id)" class="btn btn-primary">Delete</button>
                    <button @click="updateUser(user.id)" class="btn btn-primary ml-2 mr-2">Edit</button>
                    <router-link class="btn btn-primary" :to="{ name: 'userDetail', params: { id: user.id }}" >Read more</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/services/api.vue';

export default {
    name: 'UserItem',
    props: ['userlist'],
    data () {
        return {
            isData: false
        }
    },
    mounted() {
        if(this.userlist) {
            this.isData = true
        }
    },
    methods: {
        async deleteUser(id) {
            let respData =  await api.deleteRequestMethod('users/' + id);
            if(respData){
                console.log(respData)
            }
        },
        async updateUser(id) {
            let respData =  await api.putRequestMethod('users/'+ id, {"name": "Hamza","job": "Developer"});
            if(respData) {
                console.log(respData)
            }
        }
    } 
}
</script>

<style>

</style>