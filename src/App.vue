<template>
    <div id="app">
          <div class="page-container md-layout-column">
          <md-toolbar class="md-primary">
            <md-button class="md-icon-button" @click="showNavigation = true">
              <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">My Title</span>

            
          </md-toolbar>

          <md-drawer :md-active.sync="showNavigation">
            <md-toolbar class="md-transparent" md-elevation="0">
              <span class="md-title">My App name</span>
            </md-toolbar>

            <md-list>
              <md-list-item>
                <md-icon>move_to_inbox</md-icon>
                <span class="md-list-item-text" ><router-link to='/form'>Inbox</router-link></span>
              </md-list-item>

              <md-list-item>
                <md-icon>send</md-icon>
                <span class="md-list-item-text">Sent Mail</span>
              </md-list-item>

              <md-list-item>
                <md-icon>delete</md-icon>
                <span class="md-list-item-text">Trash</span>
              </md-list-item>

              <md-list-item>
                <md-icon>error</md-icon>
                <span class="md-list-item-text" @click="getIt">Spam</span>
              </md-list-item>

              <md-list-item>
                <md-icon>error</md-icon>
                <span class="md-list-item-text pointer" @click="showNavigation = false">Hide menu</span>                
              </md-list-item>
            </md-list>

          </md-drawer>
        </div>
        <router-view/>

    </div>
</template>

<script>
export default {
    name: 'App',
    data: () => ({
        showNavigation: false,
        showSidepanel: false
    }),
    methods: {
        getIt : function() {
            axios.get( 'http://localhost:5000/api/user', 
                { crossdomain: true },
            ).then( res  =>
            {
                console.log( res )
            }).catch( e => {
                console.log( e )
            })
        },
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
