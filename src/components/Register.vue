<template>
    <div class="md-layout md-alignment-top-space-around" >
        <form novalidate class="md-layout-item" @submit.prevent="validateUser">
            <md-card class="md-layout-item">
                <md-card-header>
                    <div class="md-title">Registration</div>
                </md-card-header>

                <md-card-content>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('email')">
                                <label for="email">Email</label>
                                <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                                <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
                            </md-field>
                        </div>

                    </div>

                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('lastName')">
                            <label for="password">Password</label>
                            <md-input type="password" name="password" id="password" autocomplete="password" v-model="form.password" :disabled="sending" />
                            <span class="md-error" v-if="!$v.form.password.required">Password is required</span>
                            <span class="md-error" v-else-if="!$v.form.password.minlength">Invalid password</span>
                        </md-field>
                    </div>
                </md-card-content>

                <md-card-actions>
                        <md-button type="submit" class="md-primary" :disabled="sending">Create user</md-button>
                </md-card-actions>
            </md-card>
        </form>

        <div class="md-layout-item md-size-25">d</div>
        <div class="md-layout-item md-size-25">d</div>
    </div>
</template>

<script>
    import axios from 'axios';
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    password,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
        password,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        password: {
            required
        },
        
        email: {
          required,
          email
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.age = null
        this.form.gender = null
        this.form.email = null
      },
      saveUser () {
        console.log( 'hup' )
        this.sending = true
        axios.post( 'http://localhost:5000/register', {
            email: this.form.email,
            password: this.form.password
        }).then( function( res ) {
            console.log( res )
        }).catch( function( err ) {
            console.log( err )
        })
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
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
