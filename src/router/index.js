import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
    	path:'/form',
    	name: 'Form',
    	component: Form
    }
  ]
})
