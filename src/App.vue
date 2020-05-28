<template>
    <main>
        <Login  v-show="page === 'login'" @submit-login="login" />
        <Search v-show="page === 'search'" :ingredients="ingredients" @add="addIngredient" @delete="deleteIngredient" @empty="deleteAllIngredients" @search="search" />
        <Result v-show="page === 'results'" :recipes="recipes" />
    </main>
</template>

<script>
    import Login from './components/Login'
    import Search from './components/Search'
    import Result from './components/Result'

    export default {
      name: 'App',
      components: { Login, Search, Result },
      data: function() {
          return {
              page: 'login',
              ingredients: [],
              recipes: [],
          }
      },
      methods: {
          login: function(email, password) {
              if(
                  email === 'yohan.jhaveri@epaylater.in' &&
                  password === 'LearnVue2020'
              ) {
                  this.page = 'search'
              } else {
                  alert('Incorrect Credentials')
              }
          },

          addIngredient: function(ingredient) {
              console.log(ingredient)
              this.ingredients.push(ingredient)
              console.log(this.results)
          },

          deleteIngredient: function(ingredient) {
              console.log(ingredient)
              this.ingredients = this.ingredients.filter(i => i !== ingredient)
          },

          deleteAllIngredients: function() {
              this.ingredients = []
          },

          search: async function() {
              if(this.ingredients.length){
                  const key = 'c534ced8e5c24ef686c7c518de98b6ce'
                  fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + this.ingredients.join(',+') + '&number=12&apiKey=' + key)
                  .then(response => response.json())
                  .then(json => {
                      this.recipes = json
                      this.page = 'results'
                  })

                  this.results = true
              } else {
                  this.ingredientError = 'Add at least 1 ingredient to search'
              }
          },
      }
    }
</script>

<style>
    * { box-sizing: border-box }
    *:focus { outline: none }

    html, body, main {
        font-family: 'Avenir';
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .w-100 { width: 100% }
    .bold { font-weight: bold }

    .card {
        display: flex;
        flex-direction: column;
        background: #eee;
        padding: 30px;
        border-radius: 10px;
        border: 1px lightgrey solid;
    }

    input {
        padding: 15px;
        height: 50px;
        border-radius: 5px;
        border: 1px lightgrey solid;
        font-size: 1rem;
    }

    button {
        cursor: pointer;
        height: 50px;
        background: salmon;
        color: white;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        font-size: 1rem;
    }

</style>
