<template>
   <header>
       <div class="container">
           <div class="row">
               <div class="col-md-4">
                    <div class="logo">
                        <img alt="Vue logo" src="../../assets/logo.png" />
                        <h5>Weather</h5>
                    </div>
               </div>
               <div class="col-md-8">
                   <ul class="menu">
                       <li><router-link to="/">Home</router-link></li>
                       <li><router-link to="/search">Search</router-link></li>
                       <li><router-link to="/users">User</router-link></li>
                   </ul>
                </div>
           </div>
       </div>
   </header>
</template>

<script>
export default {
  name: 'navHeader',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
header {
    background: #333;
    padding: 15px 0;
    color: #fff;
    h5,ul{
        margin-bottom: 0;
    }
    .row {
        align-items: center;
    }
    .logo {
        display: flex;
        align-items: center;
        img {
            width: 50px;
            margin-right: 15px;
        }
    }
    .menu {
        list-style: none;
        display: flex;
        justify-content: end;
        li {
            margin: 0 15px;
        }
        a {
            color: #fff;
            text-decoration: none;
        }
    }
}
</style>
