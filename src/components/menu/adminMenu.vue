<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">{{$t('menu.admin')}}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/admin" class="nav-link">{{$t('menu.Home')}}</router-link>
          </li>          
          
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{currentUser.name}}</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
             <a href="#!" @click.prevent="logout" class="dropdown-item">{{$t('menu.logout')}}</a>
            
            </div>
          </li>
         
        </ul>
      </div>
    </nav>
    
  </div> 
</template>

<script>
export default {
    name: 'app-header',
    data(){
      return{
        //langs:['ja','en']
      }
    },
    methods:{
        logout(){
            this.$store.commit('logout');
            this.$router.push('/');
        }
    },
    
    computed:{
        currentUser(){
            return this.$store.getters.currentUser
        }
    }
}
</script>