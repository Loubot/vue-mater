<template>
    
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'HelloWorld',
        data: function () {
          return {
            contacts: [],
            
          }
        },
        methods: {
            

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

.page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }
</style>
