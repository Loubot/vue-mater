<template>
    <div id="app">
        <md-card>
            <md-card-header>
              <div class="md-title">Material Design with Vue.js 2 Demo</div>
              <div class="md-subhead">by CodingTheSmartWay.com</div>
            </md-card-header>

            <md-card-content>
              
              <md-button class="md-raised md-primary" v-on:click="getIt()">Fill table</md-button>
              <md-button class="md-raised md-primary" v-on:click="clearTable()">Clear table</md-button>
              <br />

                <md-table>
                    <md-table-row >
                        <md-table-head class="center">First name</md-table-head>
                        <md-table-head class="center">Last name</md-table-head>
                        <md-table-head class="center">Email</md-table-head>
                    </md-table-row>

                    <md-table-row v-for="contact in contacts" :key="contact.firstname">
                        <md-table-cell>{{contact.firstname}}</md-table-cell>
                        <md-table-cell>{{contact.lastname}}</md-table-cell>
                        <md-table-cell>{{contact.email}}</md-table-cell>
                    </md-table-row>
                </md-table> 

               
            </md-card-content>
        </md-card>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'HelloWorld',
        data: function () {
          return {
            contacts: []
          }
        },
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

          fillTable: function() {
            this.contacts.push({firstname: 'Sebastian', lastname: 'Eschweiler', email: 's.eschweiler@mail.com'});
            this.contacts.push({firstname: 'Bill', lastname: 'Smith', email: 'b.smith@mail.com'});
            this.contacts.push({firstname: 'Ann', lastname: 'Parker', email: 'a.parker@mail.com'});
          },
          clearTable: function() {
            this.contacts.splice(0, this.contacts.length);  
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.center{
    text-align: center !important;
}
</style>
