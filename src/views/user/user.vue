<template>
    <div class="container mb-5">
        <UserItem v-if="isData" v-bind:userlist="userlist"/> 
    </div>
</template>

<script>
import api from '@/services/api.vue';
import UserItem from '@/components/user-item.vue'

export default {
    name: 'User',
    components: {
        UserItem
    },
    data () {
        return {
            isData: false
        }
    },
    mounted() {
        this.getUserList();
    },
    methods: {
        async getUserList() {
            let respData =  await api.getRequestMethod('users');
            this.userlist = respData.data;
            if(this.userlist) {
                this.isData = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
    }
</style>